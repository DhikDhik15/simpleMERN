import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import ManajemenBuku from "./pages/ManajemenBuku";

function App() {

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Beranda />
            </Route>

            <Route path="/manajemen-buku">
              <ManajemenBuku />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
