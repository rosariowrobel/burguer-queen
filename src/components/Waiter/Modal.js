import React, { Component } from "react";
import "./Product.js";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";


class Modal1 extends Component {
    state = {
        abierto: false,
    }

    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto });
    }

    render() {
        return (
            <>
                <div className="principal">
                    <div className="secundario">

                    </div></div>



                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                        Elegir Hamburguesa
     </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label for="Vegan">Vegan</label>
                            <label for="Vegan">Vegan</label>
                            <label for="Vegan">Vegan</label>
                        </FormGroup>




                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </Modal>

            </>
        )
    }
}

export default Modal1;       