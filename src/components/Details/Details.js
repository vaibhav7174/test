import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchPosts } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // Fetch all posts to populate the Redux store

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        dispatch({ type: "FETCH_POST_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [dispatch, id]);

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
     return (
      <div className="loader-container">
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1>Detail Page For Post With ID {post.userId} </h1>
      <div className="container">
        <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
        <p>User ID: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
    </div>
  );
};

export default Detail;