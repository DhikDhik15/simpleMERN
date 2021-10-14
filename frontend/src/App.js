//
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import ManajemenInv from "./components/ManajemenInv";

function App() {
  const [inv, setInv] = useState([]);
  function storeData(inputInv) {
    console.log(inputInv);
    alert("Success");
  }
  function updateData(inputInv) {
    console.log(inv);
    alert("Berhasil Update");
  }
  function deleteData(inv){
    console.log(inv);
    alert("Deleted");
  }

  return (
    <div className="App">
      <div className="content">
        <Container>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home  menjInv={inv}/>
              </Route>

              <Route path="/manajemen-inv">
                <ManajemenInv menjInv={inv} store={storeData} update={updateData} delete={deleteData}/>
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;
