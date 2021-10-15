import React from "react";

function Beranda({ bookList }) {
//   console.log(books);
  return (
    <div className="container mt-3 w-75">
      <div id="katalog" className="mt-5">
        <h3>List Buku</h3>
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
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Beranda;
