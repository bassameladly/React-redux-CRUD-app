import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPost } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import { postSchema } from "../util/validationSchema";
import "./index.css";

const EditPost = () => {
  const { loading, error, post } = usePostDetails();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: post ? post?.title : "",
      description: post ? post?.description : "",
    },
    enableReinitialize: true,
    validationSchema: postSchema,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: post.id,
          title: values.title,
          description: values.description,
        })
      ).then(() => navigate("/"));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          isInvalid={!!formik.errors.title}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          isInvalid={!!formik.errors.description}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button className="submit-button" type="submit" disabled={loading}>
          Submit Edit
        </Button>
      </Loading>
    </Form>
  );
};

export default withGuard(EditPost);
