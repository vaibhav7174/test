import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/actions";


const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
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
    <div className="home-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <p className="userid">User ID: {post.id}</p>
          <h3 className="title">
            Title :{" "}
            <Link to={`/item/${post.id}`} className="post-link">
              {post.title.slice(0, 40)}...
            </Link>
          </h3>
          <p className="body">
            Body :{" "}
            <span className="bodyData">{post.body.slice(0, 100)}...</span>
          </p>
          <Link to={`/item/${post.id}`} className="read-more-link">
            Read More...
          </Link>

        
        </div>
      ))}
    </div>
  );
};

export default Home;