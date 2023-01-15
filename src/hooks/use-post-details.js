import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../state/postSlice";
import { useParams } from "react-router-dom";

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, post } = useSelector((state) => state.posts);
  console.log(post);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);
  return { loading, error, post };
};

export default usePostDetails;
