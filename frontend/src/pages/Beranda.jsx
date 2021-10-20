import axios from "axios";
import React, { Component } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { API_URL_GET} from "../apis/ListApi";

export default class Beranda extends Component {
  constructor(props) {
    super(props);
    /*save data in array state*/
    this.state = {
      books: [],
    };
  }

  /*get data*/
  componentDidMount() {
    axios
      .get(API_URL_GET)
      .then((res) => {
        // console.log(res.data.book);
        this.setState({ books: res.data.book });
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
        </div>
      </div>
    );
  }
}
