import React, { Component } from "react";
import "./Product.css";
import "./Modal.js";
import { Button, } from "reactstrap";

class Products extends Component {



  handleClick = (e) => {
    const product = {
      name: this.props.name,
      price: this.props.price,
      quantity: 1,
    };

    this.props.save(product);
    e.target.classList.add("containerCardActive");

  };




  render() {
    return (
      <button
        className="containerCard"
        key={this.props.id}
        onClick={this.handleClick}
      >
        <div className="productCard">
          <div className="card-price">{"$" + this.props.price}</div>
          <img src={this.props.img} alt="menu icon" className="item-img" />
          <div className="card-name">{this.props.name}</div>
          <div className="hamburguesa">
            <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>
          </div>
        </div>


      </button>



    );
  }
}



export default Products;
