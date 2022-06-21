import React from "react";
import PostItem from "../PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h1>No task</h1>;
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              key={post.id}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
