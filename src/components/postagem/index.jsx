import React from "react";
import { NavLink } from "react-router-dom";
const Post = ({title, body, id}) => {
  return (
    <div className="post w-full max-w-sm p-2 bg-gray-light flex flex-col gap-3 rounded-sm">
 
      <div className="img-post rounded-sm overflow-hidden">
        <img
          src={`https://source.unsplash.com/800x600/?${id}`}
          alt="alt-img"
        />
      </div>
    
      <div className="content-post flex flex-col gap-2">
        <h3 className="title-post text-white text-lg">
        {title}
          
        </h3>
        <p className="content-post text-sm text-white opacity-70">
        {body}
        </p>
      </div>
    <div className="btn-area w-full flex justify-end">
      <NavLink to={`/post?id=${id}`} onClick={()=>scroll(0, 0)} className="   w-full text-primary-color max-w-[100px] py-1 rounded-md ">
        Ver Mais
      </NavLink>
    </div>
    </div>
  );
};

export default Post;
