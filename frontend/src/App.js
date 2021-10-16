import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  /*function GET data*/
  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        setBooks(response.data.data);
        console.log("setBooks" + response.data.data);
      });
  }

  /*function POST data*/
  function storeData(inputBook) {
    axios({
      method: "POST",
      url: "http://localhost:3001/add",
    })
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Success");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  /*function PUT data*/
  function updateData(inputBook) {
    axios
      .put("http://localhost/3001/put/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("updated");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  /*function DELETE data*/
  function deleteData(book) {
    axios
      .delete("http://localhost:3001/del/" + book._id)
      .then(() => {
        retrieveData();
        alert("Deleted");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  /*end function*/

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Beranda 
                bookList={books} />
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
