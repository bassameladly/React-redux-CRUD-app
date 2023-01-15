import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";
import "./index.css";

const Details = () => {
  const { loading, error, post } = usePostDetails();
  const navigate = useNavigate();

  return (
    <div>
      <Loading loading={loading} error={error}>
        <div className="details-wrapper">
          <p>Title : {post?.title}</p>
          <p>Description : {post?.description}</p>
        </div>
        <div className="go-back-wrapper">
          <Button className="go-back-btn" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </div>
      </Loading>
    </div>
  );
};

export default Details;
