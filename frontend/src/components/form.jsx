import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function form() {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>ADD DATA</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control type="text" placeholder="nama" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inv">
              <Form.Label>Nomer Inventaris</Form.Label>
              <Form.Control type="text" placeholder="inv" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="jumlah">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control type="number" placeholder="jumlah" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default form;
