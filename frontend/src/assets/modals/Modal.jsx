import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  closeModal = () => {
    this.props.isModalOpen(false);
    return false;
  };

  deleteItem = (id) => {
    this.props.handleDelete(id);
    this.closeModal();
  };

  render() {
    return (
        <div className="flex text-center justify-center items-center overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="bg-white w-4/12 h-auto rounded-lg shadow-lg z-50 absolute">
          <div className="text-4xl text-center rounded-full w-6/12 mx-auto mt-5">
            <i className="py-2 fas fa-trash-alt text-red-500 "></i>
          </div>
          <div className="mb-3 mt-5 font-bold text-l px-2">
            You are about to delete this {this.props.page} ! <br></br>
            <div className="mb-3 mt-5 font-bold text-2xl" dangerouslySetInnerHTML={{ __html: this.props.title }} />
          </div>
          <div className="mb-3 mt-5 font-bold text-l text-gray-500">
            this will delete your data from our database
          </div>
          <Button className="btn btn-success m-2"
            onClick={() => this.deleteItem(this.props.id)}
          >
            YES
          </Button>
          <Button className="btn btn-danger"
            onClick={this.closeModal}
          >
            NO
          </Button>
        </div>
        <div className=" fixed w-full h-screen z-40 inset-0 opacity-75 bg-black "></div>
      </div>
    );
  }
}

export default Modal;
