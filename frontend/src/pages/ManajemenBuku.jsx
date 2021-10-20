import axios from "axios";
import React, { Component } from "react";
import ModalBuku from "../components/modal/ModalBuku";

import { API_URL_GET, API_URL_DELETE } from "../apis/ListApi";
import { BsFillBagXFill, BsFillPencilFill, BsGrid3X3Gap } from "react-icons/bs";
import Modal from "../assets/modals/Modal";

export default class ManajemenBuku extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    /*save data in array state*/
    this.state = {
      _id: "",
      judul: "",
      pengarang: "",
      harga: "",
      stok: "",
      bookList: [],

      isDelete: false,
      deletedID: "",
    };
  }

  /*get book*/
  componentDidMount() {
    axios
      .get(API_URL_GET)
      .then((res) => {
        console.log(res.data.book);
        this.setState({ bookList: res.data.book });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /*delete book*/
  closeModal = (isClose) => {
    this.setState({
      isDelete: isClose,
    });
  };

  isDelete = (data) => {
    this.setState({
      isDelete: true,
      judul: data.judul,
      deletedID: data.id,
    });
  };

  /*function delete*/
  handleDelete(_id) {
    axios({
      method: "DELETE",
      url: API_URL_DELETE + `${_id}`,
      data: {
        id: _id,
      },
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      this.setState({
        isDelete: false,
      });
      this.refreshTable();
    });
  }
  /*end*/
  
  /*refresh table*/ 
  refreshTable = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <div className="container mt-3">
        {/* modal confirm */}
        {this.state.isDelete ? (
          <Modal
            title={this.state.judul}
            isModalOpen={this.closeModal}
            id={this.state.deletedID}
            handleDelete={this.handleDelete}
          />
        ) : null}

        {/* list buku */}
        <div id="daftarBuku">
          <hr />
          <h4>
            <BsGrid3X3Gap /> Manajemen Buku
          </h4>
          <hr />
          <ModalBuku />
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>##</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookList.map((book, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {book.judul} </td>
                  <td> {book.pengarang} </td>
                  <td> {book.harga} </td>
                  <td> {book.stok} </td>
                  <td>
                    <button className="btn btn-warning m-2">
                      <BsFillPencilFill />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        this.isDelete({
                          id: book._id,
                          judul: book.judul,
                        })
                      }
                    >
                      <BsFillBagXFill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
