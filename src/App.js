import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
// import styled from "styled-components";

function App() {
//   const Body = styled.div`
//   background-color:${({ theme }) => theme.bg};
//   width:100%;
//   overflow:hidden;
//   margin-top:30px;
//   position:relative;
// `;

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Body> */}
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        {/* </Body> */}
      </Router>
    </div>
  );
}

export default App;
