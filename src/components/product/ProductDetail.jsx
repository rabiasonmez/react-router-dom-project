import React from 'react';
import { Card } from "react-bootstrap";
import products from "../../data/products.json";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
    const params = useParams();
    const { id, title, detail } = products.results.filter(item => item.id === parseInt(params.productID))[0];
    return (
        <Card className="my-5">
            <Card.Img variant="top" src={`https://picsum.photos/id/${id}/400/200`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {detail}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ProductDetail;