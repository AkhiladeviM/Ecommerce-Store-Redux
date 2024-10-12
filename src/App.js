import './App.css';
import styled from 'styled-components';
import Navbar from './containers/Navbar';
import { Toaster } from "react-hot-toast";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EcommerceCart from './containers/EcommerceCart';

function App() {
  const Body = styled.div`
  max-width:100vw;
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
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              border: "1px solid #4ac1bd",
              padding: "16px",
              color: "#4ac1bd",
            },
            iconTheme: { primary: "#4ac1bd", secondary: "#FFFAEE" },
          }}
        />
      </Router>
    </div>
  );
}

export default App;
