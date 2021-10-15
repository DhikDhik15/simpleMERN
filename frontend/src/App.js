import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    // {_id: 1, pengarang:"test", judul:"test", harga:1, stok: 12}
  ]);

  function getBook(){
    axios({
      method: "get",
      url: "http://localhost:3001/get",
    }).then((response) => setBooks(response.data.data));
  }

  useEffect(() => {
    getBook();
  },[]);
  

  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Success");
    axios({
      method: "POST",
      url: "http://localhost:3001/add"
    })
    .then((res) => {
      setBooks((prevBooks) => [...prevBooks, inputBook]);
      alert("Success");
    }).catch((error) => {
      console.log(error.response.data)
    });
  }

  useEffect(() => {
    storeData()
  },[]);

  function updateData(inputBook) {
    console.log(inputBook);
    alert("Berhasil Update");
  }
  function deleteData(book) {
    console.log(book);
    alert("Deleted");
  }

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Beranda bookList={books} />
            </Route>

            <Route path="/manajemen-buku">
              <ManajemenBuku
                bookList={books}
                store={storeData}
                update={updateData}
                remove={deleteData}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
