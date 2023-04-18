const products = [
  {
    id: "1",
    name: "Chihuahua",
    price: 2,
    category: "pequeño",
    img: "https://scontent.fvlc2-1.fna.fbcdn.net/v/t1.6435-9/118075250_3115253681925723_6222569147062678697_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=A8RbIv4o6T0AX-zdiOE&_nc_ht=scontent.fvlc2-1.fna&oh=00_AfBwcRZgpBjXGQhAwH9XLGNapgtERFdwPPZXlkwJzSQT_g&oe=64661EB2",
    stock: 5,
    description: "descripcion de chihuahua",
  },
  {
    id: "2",
    name: "Husky",
    price: 5,
    category: "grande",
    img: "https://static.vecteezy.com/system/resources/previews/005/683/882/large_2x/husky-dog-with-different-blue-and-brown-eyes-is-sitting-in-park-on-green-grass-in-morning-with-bright-sun-photo.jpg",
    stock: 2,
    description: "descripcion de husky",
  },
  {
    id: "3",
    name: "Galgo Mediano",
    price: 4,
    category: "mediano",
    img: "https://img.freepik.com/fotos-premium/retrato-pequeno-perro-galgo-italiano-consumir-sombrero_58460-1231.jpg?w=360",
    stock: 7,
    description: "descripcion de galgo mediano",
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
      resolve(products.find((prod) => prod.category === productCategory));
    }, 500);
  });
};
