import React from "react";
import { useState } from "react";

function ManajemenBuku({ bookList, store, update, remove }) {
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();

  /*function handling*/
  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStok(event) {
    setInputBook({ ...inputBook, stok: event.target.value });
  }
  /*end function*/

  /*function button*/
  function showCreate() {
    setForm("create");
  }
  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }
  /*end function*/

  /*Function CRUD*/
  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
  }
  function submitChange(event) {
    event.preventDefault();
    update(inputBook);
    setForm("");
  }
  function deleteBook(book) {
    remove(book);
  }
  /*end function*/

  /*add data*/ 
  return (
    <div className="container mt-3">
      {form === "create" && (
        <div id="formTambah">
          <form className="form-row" onSubmit={submitAdd}>
            <div className="col-3">
              <input
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                onChange={handleJudul}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2"
                placeholder="Pengarang"
                onChange={handlePengarang}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="harga"
                className="form-control mx-2"
                placeholder="Harga"
                onChange={handleHarga}
              />
            </div>
            <div className="col-2">
              <input
                type="number"
                name="stok"
                className="form-control mx-2"
                placeholder="Stok"
                onChange={handleStok}
              />
            </div>
            <br />
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-primary ml-5"
                value="simpan "
              />
            </div>
          </form>
        </div>
      )}

  {/* edit data */}
      {form === "edit" && (
        <div id="fomUbah">
          <form className="form-row" onSubmit={submitChange}>
            <div className="col-3 w-10">
              <input
                type="text"
                name="judul"
                className="form-control mx-2"
                placeholder="Judul"
                onChange={handleJudul}
                value={inputBook.judul}
              />
            </div>
            <div className="col-3 w-10">
              <input
                type="text"
                name="pengarang"
                className="form-control mx-2"
                placeholder="Pengarang"
                onChange={handlePengarang}
                value={inputBook.pengarang}
              />
            </div>
            <div className="col-2 w-10">
              <input
                type="number"
                name="harga"
                className="form-control mx-2"
                placeholder="Harga"
                onChange={handleHarga}
                value={inputBook.harga}
              />
            </div>
            <div className="col-2 w-10">
              <input
                type="number"
                name="stok"
                className="form-control mx-2"
                placeholder="Stok"
                onChange={handleStok}
                value={inputBook.stok}
              />
            </div>
            <br />
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-success ml-5"
                value="Update "
              />
            </div>
          </form>
        </div>
      )}

  {/* list data */}
      <div id="daftarBuku">
        <hr />
        <h5>Manajemen Buku</h5>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Tambah
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
            {bookList.map((book, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {book.judul} </td>
                <td> {book.pengarang} </td>
                <td> {book.harga} </td>
                <td> {book.stok} </td>
                <td>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => showEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(book)}
                  >
                    Hapus
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

export default ManajemenBuku;
