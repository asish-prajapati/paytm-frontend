import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const handlePay = () => {
    axios
      .get("http://localhost:4000/api/payment")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/150/150.jpg" />
        <Card.Body>
          <Card.Title>My Product</Card.Title>
          <Card.Text>Click on Buy to place order</Card.Text>
          <Button variant="primary" onClick={handlePay}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
