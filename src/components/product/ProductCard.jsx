import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { id, title, detail, isActive } = props;
    return (
        isActive && (
            <Card>
                <Card.Img variant="top" src={`https://picsum.photos/id/${id}/400/200`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`products/${id}`} className="btn btn-primary">Detail</Link>
                </Card.Footer>
            </Card>
        ));
}
export default ProductCard;