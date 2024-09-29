import './App.css';
import styled from 'styled-components';
import Navbar from './containers/Navbar';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EcommerceCart from './containers/EcommerceCart';

function App() {
  const Body = styled.div`
  width:100%;
  height:100%
  overflow:hidden;
`;

  return (
    <div>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/ecommerceCart" element={<EcommerceCart />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Body>
      </Router>
    </div>
    // <div className="App">
    //   <Header />
    //   <Router>

    //     <Routes>
    //       <Route path="/" element={<ProductListing />} />
    //       <Route path="/product/:productId" element={<ProductDetails />} />
    //       <Route path="*" element={<div>404 Not Found</div>} />
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
