import { createContext, useEffect, useState } from "react";
import * as postAPI from "../apis/postApi";

export const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  // GET -- getAllPosts
  const getAllPosts = async () => {
    try {
      const res = await postAPI.getAllPosts();
      setPosts(res.data);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export default PostContextProvider;
