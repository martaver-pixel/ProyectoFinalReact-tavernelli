const products = [
  {
    id: "1",
    name: "Chihuahua",
    price: 2,
    category: "Pequeño",
    img: "https://scontent.fvlc2-1.fna.fbcdn.net/v/t1.6435-9/118075250_3115253681925723_6222569147062678697_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=A8RbIv4o6T0AX-zdiOE&_nc_ht=scontent.fvlc2-1.fna&oh=00_AfBwcRZgpBjXGQhAwH9XLGNapgtERFdwPPZXlkwJzSQT_g&oe=64661EB2",
    stock: 5,
    description: "descripcion de chihuahua",
  },
  {
    id: "2",
    name: "Husky",
    price: 5,
    category: "Grande",
    img: "https://images.hola.com/imagenes/mascotas/20201005176621/perro-husky-raza-perro-lobo/0-874-229/husky-m.jpg?tx=w_680",
    stock: 2,
    description: "descripcion de husky",
  },
  {
    id: "3",
    name: "Galgo Mediano",
    price: 4,
    category: "Mediano",
    img: "https://img.freepik.com/fotos-premium/retrato-pequeno-perro-galgo-italiano-consumir-sombrero_58460-1231.jpg?w=360",
    stock: 7,
    description: "descripcion de galgo mediano",
  },
  {
    id: "4",
    name: "Salchicha",
    price: 3,
    category: "Pequeño",
    img: "https://alimentoparaperritos.com/download/multimedia.normal.85a8674be22173cc.53616c63686963686120417274c3ad63756c6f5f6e6f726d616c2e77656270.webp",
    stock: 4,
    description: "descripcion de salchicha",
  },
  {
    id: "5",
    name: "Mastin",
    price: 8,
    category: "Grande",
    img: "https://www.tiendanimal.es/articulos/wp-content/uploads/2022/02/mastin-napolitano-marron.jpg",
    stock: 1,
    description: "descripcion de mastin",
  },
  {
    id: "6",
    name: "Collie",
    price: 5,
    category: "Mediano",
    img: "https://www.elmueble.com/medio/2023/02/23/perro-de-raza-border-collie_fb1eb794_7210638_230223005102_1000x667.jpg",
    stock: 3,
    description: "descripcion de collie",
  },
  {
    id: "8",
    name: "Golden",
    price: 6,
    category: "Grande",
    img: "https://misanimales.com/wp-content/uploads/2020/12/golden-retriever-tumbado.jpg",
    stock: 3,
    description: "descripcion de golden",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
