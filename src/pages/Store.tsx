import { Col, Row } from "react-bootstrap";
import storedItems from "../data/item.json";
import { StoreItem } from "../components/StoreItem";

export default function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storedItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
