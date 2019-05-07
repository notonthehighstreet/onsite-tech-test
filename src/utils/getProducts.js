export default function getProducts() {
  return new Promise(resolve => {
    const products = [
      {
        id: 1,
        title: 'Personalised cufflinks',
        image: 'cufflinks.jpg',
        altText: 'cufflinks',
        price: '45.00',
      },
      {
        id: 2,
        title: 'Kids T-shirt',
        image: 'tshirt.jpg',
        altText: 'kids t-shirt',
        price: '19.95',
      },
    ];

    setTimeout(() => resolve(products), 1000);
  });
}
