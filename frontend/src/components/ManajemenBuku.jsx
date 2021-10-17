import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "../apis/ListApi";
import {
  BsFillBagXFill,
  BsFillPencilFill,
  BsFillCartPlusFill,
  BsGrid3X3Gap,
} from "react-icons/bs";

/*function button*/
// function showCreate() {
//     setForm("create");
//   }

export default class ManajemenBuku extends Component {
  constructor(props) {
    super(props);
    /*save data in array state*/
    this.state = {
      bookList: [],
    };
  }

  /*get data*/
  componentDidMount() {
    axios
      .get(API_URL + "get")
      .then((res) => {
        console.log(res.data.book);
        this.setState({ bookList: res.data.book });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container mt-3">
        {/* list buku */}
        <div id="daftarBuku">
          <hr />
          <h4>
            <BsGrid3X3Gap /> Manajemen Buku
          </h4>
          <hr />
          <button className="btn btn-primary m-2">
            <BsFillCartPlusFill />
          </button>
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
                    <button className="btn btn-danger">
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
