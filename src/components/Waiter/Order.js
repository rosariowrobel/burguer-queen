import React, { Component } from "react";
<<<<<<< HEAD
import { Table, Button } from "reactstrap";
import db from "../../firebase.js";
class Order extends Component {
  state = {
    items: [],
    productName: "",
    price: "",
  };

  componentDidMount() {
    db.collection("ordenes").onSnapshot((snapShots) => {
      this.setState({
        items: snapShots.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        }),
      });
    });
  }

  delete = (id) => {
    db.collection("ordenes").doc(id).delete();
  };

  render() {
    const { items } = this.state;
=======
import { Table } from "reactstrap";
import icon from "../../img/icon-delete.png";

class Order extends Component {
  state = {
    products: [],
    total: 0,
  };

  sumTotal = () => {
    let preTotal = 0;
    this.state.products.forEach((product) => {
      preTotal += product.price * product.quantity;
    });
    this.setState({ total: preTotal });
  };

  // Se guarda una copia de los productos en el state de order
  loadProducts = (products) => {
    this.setState({ products: products });
    this.sumTotal();
  };

  render() {
    const { products } = this.state;

>>>>>>> c73fb4c7a4e7cb4cd86447480bb59bec8ef8f561
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {items && items !== undefined
              ? items.map((item, key) => (
                <tr key={key}>
                  <td>{item.data.cantidad}</td>
                  <td>{item.data.productName}</td>
                  <td>{item.data.price}</td>

                  
                  <td>
                    <Button
                      color="danger btnCircle"
                      onClick={() => this.delete(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              )) : null
            }
          </tbody>
=======
            {products.length > 0
              ? products.map((product, key) => (
                  <tr key={key}>
                    <td>
                      <div>
                        <button
                          onClick={() => {
                            this.props.increment(product);
                          }}
                        >
                          +
                        </button>
                        <input
                          className="quantity-input__screen"
                          type="text"
                          value={product.quantity}
                        />
                        <button
                          onClick={() => {
                            this.props.decrement(product);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{"$" + product.price * product.quantity}</td>
                    <td>
                      <img
                        src={icon}
                        onClick={() => {
                          this.props.delete(product);
                        }}
                        className="icon-delete"
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>{"$" + this.state.total}</th>
            </tr>
          </tfoot>
>>>>>>> c73fb4c7a4e7cb4cd86447480bb59bec8ef8f561
        </Table>
      </div>
    );
  }
}

export default Order;
