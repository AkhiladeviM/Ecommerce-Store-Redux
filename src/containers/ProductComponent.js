import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { capitalize } from '../helper';
import PropagateLoader from "react-spinners/PropagateLoader";
import CarouselComponent from './CarouselComponent';
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
          <div className='d-flex flex-row mb-1' key={product.id} style={{ color: "black", border: "1px solid #cfcfcf", borderRadius: "6px", backgroundColor: "#faf9f9" }}>
            <img src={product.image} alt={product.title} style={{ minWidth: "150px", height: "130px", borderRadius: "5px", borderRight:"1px solid #cfcfcf" }} />
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
            <CarouselComponent />
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