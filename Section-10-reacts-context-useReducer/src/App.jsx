import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  

  return (
    <CartContextProvider>
      <Header />
      {/** 
       * Prop Drilling Solutions 
       * 
       * 1. Component Composition
       * 2. Context API
      **/}

      {/** 
       * Component Composition Solution
      **/}
      
      {/* <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
          </li>
        ))}
      </Shop> */}

      {/** 
       * Context API Solution
      **/}

      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      
    </CartContextProvider>
  );
}

export default App;
