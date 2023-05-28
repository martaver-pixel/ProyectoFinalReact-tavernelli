import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const productAdapted = { id: docSnap.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("Document does not exist.");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail
          id={product?.id}
          name={product?.name}
          img={product?.img}
          category={product?.category}
          description={product?.description}
          price={product?.price}
          stock={product?.stock}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
