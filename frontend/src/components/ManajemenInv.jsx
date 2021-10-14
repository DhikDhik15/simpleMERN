import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

function ManajemenInv({ menjInv, store, update, remove }) {
  /*State*/
  const [inputInv, setInputInv] = useState();
  const [form, setForm] = useState();

  /*Main function*/
  function showCreate() {
    setForm("create");
  }
  function showEdit(inv) {
    setInputInv(inv);
    setForm("edit");
  }
  function deleteBarang(inv) {
    remove(inv);
  }

  function namaBarang(event) {
    setInputInv({
      ...inputInv,
      nama: event.target.value,
    });
  }
  function nomerInv(event) {
    setInputInv({
      ...inputInv,
      nomer: event.target.value,
    });
  }
  function jumlahInv(event) {
    setInputInv({
      ...inputInv,
      jml: event.target.value,
    });
  }

  /*Submit function*/
  function submitAdd(event) {
    event.preventDefault();
    store(inputInv);
  }

  function submitChange(event) {
    event.preventDefault();
    update(inputInv);
    setForm("");
  }

  return (
    <div className="container mt-3">
      {/* <h1 className="text-ccenter">Manajemen Inventory</h1> */}
      {/* Tambah barang */}
      {form === "create" && (
        <div id="formTambah">
          <h5>Tambah Barang</h5>
          <hr />
          <Container>
            <form className="form-row" onSubmit={submitAdd}>
              <div className="col-md-3">
                <input
                  type="text"
                  name="nama"
                  className="form-control mx-2"
                  placeholder="Nama Barang"
                  onChange={namaBarang}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="nomer"
                  className="form-control mx-2"
                  placeholder="Nomer Inventaris"
                  onChange={nomerInv}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  name="jml"
                  className="form-control mx-2"
                  placeholder="Jumlah"
                  onChange={jumlahInv}
                />
              </div>
              <br />
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-primary ml-5"
                  value="Simpan"
                />
              </div>
            </form>
          </Container>
        </div>
      )}
      {/* END tambah barang */}

      {/* ubah barang */}
      {form === "edit" && (
        <div id="formUbah">
          <h5>Ubah Barang</h5>
          <hr />
          <Container>
            <form className="form-row" onSubmit={submitChange}>
              <div className="col-md-3">
                <input
                  type="text"
                  name="nama"
                  className="form-control mx-2"
                  placeholder="Nama Barang"
                  onChange={namaBarang}
                  value={inputInv.nama}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="nomer"
                  className="form-control mx-2"
                  placeholder="Nomer Inventaris"
                  onChange={nomerInv}
                  value={inputInv.nomer}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  name="jml"
                  className="form-control mx-2"
                  placeholder="Jumlah"
                  onChange={jumlahInv}
                  value={inputInv.jml}
                />
              </div>
              <br />
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-warning ml-5"
                  value="Simpan"
                />
              </div>
            </form>
          </Container>
        </div>
      )}
      {/* end */}
      <br />

      {/* show result add */}
      <div id="daftarInv">
        <button className="btn btn-primary m2" onClick={showCreate}>
          Tambah Barang
        </button>
        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>No.Inventaris</th>
              <th>Jumlah</th>
              <th>###</th>
            </tr>
          </thead>
          <tbody>
            {menjInv.map((inv, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{inv.nama_barang}</td>
                <td>{inv.no_inv}</td>
                <td>{inv.jumlah}</td>
                <td>
                  <button
                    className="btn btn-info mr-3"
                    onClick={() => showEdit(inv)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger mr-3"
                    onClick={() => deleteBarang(inv)}
                  >
                    Delete
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

export default ManajemenInv;
