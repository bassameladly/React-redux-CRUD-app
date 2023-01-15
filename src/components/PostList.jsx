import React from "react";
import { memo } from "react";
import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";

const PostList = ({ data, delPost, isLoggedIn }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem data={data} delPost={delPost} isLoggedIn={isLoggedIn} />
      </tbody>
    </Table>
  );
};

export default memo(PostList);