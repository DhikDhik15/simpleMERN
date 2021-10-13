//
import Beranda from "./components/home";
import Navbar from "./components/navbar";
import List, { ListInv } from "./components/listInv";
import Form from "./components/form";
import { Container } from "react-bootstrap";
// import Manajemen from './components/manajemenBuku';
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Switch = require("react-router-dom").Switch;

function App() {
  return (
    <div className="App">
      <div className="content">
        <Container>
          <Navbar />
          <Beranda />
          <ListInv />
          <Form />
        </Container>
      </div>
    </div>
  );
}

export default App;
