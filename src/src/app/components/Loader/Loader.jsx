import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
    return (
        <div className="text-center">
            <Spinner animation="border"/>
        </div>
    );
}