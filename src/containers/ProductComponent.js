import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { capitalize } from '../helper';
import PropagateLoader from "react-spinners/PropagateLoader";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  // All Products render List
  const renderList = products.slice(4).map(product => {
    const { id, title, image, price, category } = product;
    return (
      <div className='product-item' key={id}>
        <Link to={"/product/" + id}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image cardImage'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{capitalize(category)}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  });

  // Four Products Render List
  const renderProductColumn = (products, startIndex, endIndex) => (
    <div className='col-3'>
      {products.slice(startIndex, endIndex).map(product => (
        <Link to={"/product/" + product.id}>
          <div className='d-flex flex-row' key={product.id} style={{ color: "black" }}>
            <img src={product.image} alt={product.title} style={{ width: "auto", height: "130px" }} />
            <div className='content ml-2 mt-3'>
              <div className='header text-ellipsis-title' title={product.title}>{product.title}</div>
              <div className='meta price'>$ {product.price}</div>
              <div className='meta'>{capitalize(product.category)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  return (
    <>
      {products.length === 0 ?
        <div className='row' style={{ height: "80vh" }}>
          <div className='col loader'>
            < PropagateLoader />
          </div>
        </div>
        :
        <>
          <div className='row'>
            <div className='col-6'>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{}}>
                <div className="carousel-inner">
                  <div className="carousel-item active" style={{ backgroundImage: "linear-gradient(to right, #aa4a08,#aa4a08,#aa4a08, #ca6a13)", borderRadius:"20px" }}>
                    <img className="d-block borderRadiusLeft" style={{ height: "250px", width: "auto" }} src="https://i.pinimg.com/564x/8f/35/a3/8f35a3d7c1350f0d06f7d33306d67deb.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block" style={{ height: "250px", width: "100%", borderRadius: "20px" }} src="https://i.pinimg.com/564x/a2/4a/08/a24a088c250960ba4f466cb3ecd881f6.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block" style={{ height: "250px", width: "70%", borderRadius: "20px" }} src="https://i.pinimg.com/originals/1e/15/66/1e15663688aea6010e845925611743f7.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            {renderProductColumn(products, 0, 2)}
            {renderProductColumn(products, 2, 4)}
          </div>

          <div className='row'>

            <div className='product-grid'>
              {renderList}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default ProductComponent