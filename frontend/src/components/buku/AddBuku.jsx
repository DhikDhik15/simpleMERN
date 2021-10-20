import React, { Component } from "react";
import Axios from "axios";
import { API_URL_ADD } from "../../apis/ListApi";
import { FloatingLabel, Form, Button } from "react-bootstrap";

export default class AddBuku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "",
      pengarang: "",
      harga: "",
      stok: "",
    };

    this.refreshTable = this.refreshTable.bind(this);
    this.resetBook = this.resetBook.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.saveBook = this.saveBook.bind(this);

    console.log(this.state);
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  saveBook = async () => {
    if (
      this.state.judul === "" ||
      this.state.pengarang === "" ||
      this.state.harga === "" ||
      this.state.stok === ""
    ) {
      this.setState({
        errMsg: "data belum lengkap",
        showErrMsg: true,
      });
    } else {
      const res = await Axios({
        url: API_URL_ADD, 
        method: "post",
        data: {
          judul: this.state.judul,
          pengarang: this.state.pengarang,
          harga: this.state.harga,
          stok: this.state.stok,
        },
        headers: { "Content-Type": "application/json" },
      });
      // .then((res) => {
      console.log(res.data);
      // }).catch((error) => console.log(error.response));
      if (res) {
        this.refreshTable();
      }
      this.resetBook();
    }
  };

  // alert("Data added");
  // event.preventDefault();

  // const addBook = {
  //   judul: this.state.judul,
  //   pengarang: this.state.pengarang,
  //   harga: this.state.harga,
  //   stok: this.state.stok,
  // };

  // Axios.post(API_URL + "add", { addBook })
  //   .then((res) => {
  //     this.setState((inputBook) => [...inputBook, addBook]);
  //     console.log(res.data);
  //   })
  //   .catch((err) => console.log(err.response));

  resetBook = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.closeDialog();
  };

  closeDialog = () => {
    this.props.handleShow();
  };

  refreshTable = () => {
    this.props.handleSave(true);
  };

  render() {
    return (
      <div>
        <Form>
          <FloatingLabel controlId="judul" label="Judul" className="mb-3">
            <Form.Control type="text" name="judul" placeholder="Judul" onChange={this.onChange} />
          </FloatingLabel>

          <FloatingLabel
            controlId="pengarang"
            label="Pengarang"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Pengarang"
              name="pengarang"
              onChange={this.onChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="harga" label="Harga" className="mb-3">
            <Form.Control type="number" placeholder="Harga" name="harga" onChange={this.onChange} />
          </FloatingLabel>

          <FloatingLabel controlId="stok" label="Stok" className="mb-3">
            <Form.Control type="number" placeholder="Stok" name="stok" onChange={this.onChange} />
          </FloatingLabel>

          <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={this.saveBook}
          >
            Simpan
          </Button>
        </Form>
      </div>
    );
  }
}
