import axios from "axios";
import React, { useState, useEffect } from "react";
import Httppost from "/Httppost";

function Httpgethook() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={handleChange} />
      <button onClick={handleClick}>Fetch Post</button>
      {/* {
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      } */}
      <h1>
        {posts.id} {posts.title}
      </h1>
    </div>
  );
}

export default Httpgethook;