import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 1, title: 'My First Book', price: '34', description: 'This is a first product - amazing!' },
  {id: 2, title: 'My Second Book', price: '32', description: 'This is a Second product - amazing!' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          quantity={product.quantity}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
