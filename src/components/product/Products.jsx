import React from 'react';
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../../data/products.json";

const Products = (props) => {
    return (
        <Row className="my-4">
            {products.results.map((item) => (
                <Col sm={3} className={"mb-3"} key={item.id}>
                    <ProductCard {...item} />
                </Col>
            ))}
        </Row>
    );
}
export default Products;