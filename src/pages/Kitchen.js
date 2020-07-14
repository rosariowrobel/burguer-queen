import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";

class Kitchen extends Component {
    state = {
        client: [],
        product: [],
    };

    componentDidMount() {
        db.collection("orders").onSnapshot((snapShots) => {
            this.setState({
                client: snapShots.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data(),
                        productOrder: doc.data().product,
                    };
                }),
            });
        });
    }

    render() {
        const { client } = this.state;
        return (
            <div className="kitchenContainer">
                <header className="header"> </header>
                {client.map((item, key) => (
                    <div className="cardContainer" key={key}>
                        <p className="name">Cliente : {item.data.client.name}</p>
                        <p className="table">Mesa : {item.data.client.table}</p>
                        <p className="date">Fecha : {item.data.date}</p>
                        <p className="product">Productos : {item.data.product}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Kitchen;