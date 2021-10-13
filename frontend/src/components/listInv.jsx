import React from "react";
import { Container, Table } from "react-bootstrap";

export const ListInv = () => {
  return (
     <Table striped bordered hover size="sm" variant="primary">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>No. Inventaris</th>
            <th>Jumlah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <button className= "btn btn-warning" type="submit">edit</button>
            </td>
          </tr>
        </tbody>
      </Table>
  );
};
