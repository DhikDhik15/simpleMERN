import React from "react";
import {useState} from "react";

function Home({menjInv}) {
    const [inv, setInv] = useState([]);
  return (
    <div className="container mt-3 w-75">
      <h1 className="text-center">Inventory-Apps</h1>

      <div id="katalog">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>No.Inventaris</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
              {menjInv.map((inv, index) => (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{inv.nama_barang}</td>
                <td>{inv.no_inv}</td>
                <td>{inv.jumlah}</td>
            </tr>  
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
