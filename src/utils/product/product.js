import React from "react"
import "./product.scss"

function ProductImage(props){
  return(
    <div className="product-item">
      <img src={props.media} alt={props.media} draggable="false" className="product-media" />
      <span className="product-caption">{props.caption}</span>
    </div>
  )
}

function ProductCollection({ products = [] }){
  return(
    <div className="product-list">
      {products.map((item, i) => (
        <ProductImage media={item.media} caption={item.caption} key={i} />
      ))}
    </div>
  )
}

export {
  ProductCollection,
  ProductImage
}
