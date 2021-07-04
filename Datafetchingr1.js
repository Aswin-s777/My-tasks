import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingr1() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/7`)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingr1;