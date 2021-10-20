import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";
import AddBuku from "../buku/AddBuku";

function ModalBuku() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <BsFillCartPlusFill /> Add Buku
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buku Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBuku />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Keluar
          </Button>
          {/* <Button variant="primary" type="submit" >
            Tambahkan
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalBuku;
