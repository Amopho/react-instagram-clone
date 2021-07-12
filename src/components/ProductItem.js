import React from "react";
import Card from "react-bootstrap/Card";

const ProductItem = ({ info }) => {
  const { id, productName, img } = info;

  return (
    <li key={id}>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt="rock t-shirt"
        />
        <Card.Body>
          <Card.Title className="text">
            <h3>{productName}</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    </li>
  );
};

export default ProductItem;
