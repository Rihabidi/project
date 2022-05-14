import { Route, Routes } from 'react-router-dom';
import Fashion from './Component/Fashion';
import Footer from './Component/Footer';
import Navigation from './Component/Navigation';
import ProductList from './Pages/HomePage/ProductList';
import Contact from './Pages/Contact';
import Electronic from './Component/Electronic';
import {products} from './Data'
import Details from './Component/Details';
import Panier from './Component/Panier';
import Header from './Component/Header';





function App() {
  
 
  return (
    <div >
      <Header/>
      
      <Navigation/>
     
       <Routes>
        <Route path="/" element={<ProductList/> } />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/electronic" element={<Electronic products={products}   />} />
        <Route path="/details/:id" element={<Details products={products} />} />
        <Route path="/cart" element={<Panier  />} />

       </Routes>
       
      <Footer/> 
        
    </div>
  );
}

export default App;
