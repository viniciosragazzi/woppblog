import React, { createContext, useState } from "react";
import Post from "../components/postagem";
export const postsContext = createContext({});
const PostsProvider = ({ children }) => {
  //Get all posts


  const [loadingPosts, setLoadingPosts] = useState(true);
0




  return (
    <postsContext.Provider value={{  }}>{children}</postsContext.Provider>
  );
};

export default PostsProvider;
