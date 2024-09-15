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
          <div className='d-flex flex-row' key={product.id} style={{color:"black"}}>
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
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{}}>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block" style={{ height: "250px", width: "100%", borderRadius: "20px" }} src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid" alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" style={{ height: "250px", width: "100%", borderRadius: "20px" }} src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80" alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" style={{ height: "250px", width: "100%", borderRadius: "20px" }} src="https://thumbs.wbm.im/pw/small/61ef84facc2454b5ed085cd2576f62f1.jpg" alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
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