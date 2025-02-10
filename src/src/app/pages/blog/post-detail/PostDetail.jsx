import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Loader from "../../../components/Loader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import getData from "../../../../utils/getData.js";

const renderComments = (comments) => {
    return (
        comments.map(({ name: title, email, body, id }) => {
            return (
                <Col className="d-flex" key={id}>
                    <Card border="primary">
                        <Card.Header>{email}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>{title}</p>
                                <footer className="blockquote-footer">
                                    {body}
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    )
}

export default function PostDetail() {
    const { id } = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData({
            path: `posts/${id}`,
            setValue: setPost,
        })

        getData({
            path: `comments?postId=${id}`,
            setValue: setComments,
            setLoading: setLoading,
        })
    }, [id])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="d-flex flex-column gap-3">
                    <Card border="success">
                        <Card.Header>{`Post id #${post.id}`}</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">Last updated long time ago</small>
                        </Card.Footer>
                    </Card>
                    <Row xs={1} md={3} className="comments-wrapper g-2">
                        {renderComments(comments)}
                    </Row >
                </div>
            )}
        </div>
    )
}