import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import PostList from "../components/PostList";
import { fetchPosts, deletePost } from "../state/postSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const delPost = useCallback((id) => dispatch(deletePost(id)), [dispatch]);
  return (
    <Loading loading={loading} error={error}>
      <PostList data={posts} delPost={delPost} isLoggedIn={isLoggedIn} />
    </Loading>
  );
};

export default Index;
