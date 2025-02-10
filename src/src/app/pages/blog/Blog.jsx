import { useState, useEffect } from "react";
import {useSearchParams, Link} from 'react-router-dom';
import getData from "../../../utils/getData.js";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Loader from "../../components/Loader";

const renderPosts = (posts) => {
    return (
        posts.map(({ title, body, id }) => {
            return (
                <Col className="d-flex" data-post-id={id} key={id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{body}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">Last updated long time ago</small>
                            <Link to={`/blog/${id}`}>
                                <Button variant="outline-primary">More Info</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        })
    )
}

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : 10;

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [limitInput, setLimitInput] = useState('');

    useEffect(() => {
        setLoading(true)
        getData({
            path: `posts?_limit=${limit}`,
            setValue: setPosts,
            setLoading: setLoading,
        })
    }, [limit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (limitInput) {
            setSearchParams({ limit: limitInput });
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Post Limit</InputGroup.Text>
                    <Form.Control
                        aria-label="Enter posts limit"
                        aria-describedby="basic-addon1"
                        value={limitInput}
                        onChange={e => setLimitInput(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </InputGroup>
            </Form>
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <Row xs={1} md={2} className="g-4">
                        {renderPosts(posts)}
                    </Row>
                )}
            </div>
        </>
    )
}