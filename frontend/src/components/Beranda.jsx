import axios from "axios";
import React, { Component } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { API_URL } from "../apis/ListApi";

export default class Beranda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "get")
      .then((res) => {
        console.log(res.data.book);
        // const books = res.data;
        this.setState( { books :res.data.book})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // const { books } = this.state;
    return (
      <div className="container mt-3 w-75">
        <div id="katalog" className="mt-5">
          <h3>
            <BsGrid3X3GapFill /> List Buku
          </h3>
          <hr />
          <table className="table striped bordered hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
              </tr>
            </thead>
            <tbody>
            {/* { console.log(this.state.books) } */}
              {this.state.books.map((buku, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{buku.judul}</td>
                  <td>{buku.pengarang}</td>
                  <td>{buku.harga}</td>
                  <td>{buku.stok}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <table className="table striped bordered hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Harga</th>
                <th>Stok</th>
              </tr>
            </thead>
            <tbody>
              {books && books.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.judul}</td>
                  <td>{book.pengarang}</td>
                  <td>{book.harga}</td>
                  <td>{book.stok}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}
