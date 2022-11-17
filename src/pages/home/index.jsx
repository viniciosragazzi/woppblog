import React, { useState, useContext, useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineNavigateNext,MdNavigateBefore,MdHome } from "react-icons/md";

import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import Post from "../../components/postagem";
// import { postsContext } from "../../context";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // const { dados } = useContext(postsContext);
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getAllPosts() {
    const response = await fetch(url);
    const data = await response.json();
    let dt = data;
    setDados(dt);
    setLoading(false);
  }
  const [lastID, setLastID] = useState(21);
  const [fID, setFID] = useState(1);

  const urlSerachParams = new URLSearchParams(window.location.search);
  let firtID = urlSerachParams.get("firt");
  useEffect(() => {
    getAllPosts();

    setLastID(Number(firtID) + 21);
  }, []);
  console.log(lastID);
  return (
    <div className="bg-dark-bg w-full  p-4 flex flex-col gap-14 min-h-screen">
      <Header />
      <section className="title-home flex  justify-center text-center sm:w-full sm:items-center">
        <div className="sm:max-w-lg flex flex-col gap-3">
          <h1 className="text-white  text-2xl sm:text-4xl">
            Bem vindos ao <span className=" text-primary-color">woop</span>, seu
            blog de noticias tech preferido!
          </h1>
          <p className="text-sm sm:text-lg text-white">
            Abaixo você vai encontrar as principais noticias da semana no mundo
            da tecnologia.
          </p>
        </div>
      </section>
      <section className="postagens w-full flex flex-wrap justify-center items-center gap-8">
        {loading ? (
          <div className="img-area max-w-[64px]">
            <img src="https://www.pirpirim.com/img/loading.gif" alt="load" />
          </div>
        ) : (
          dados.map((post) =>
            post.id >= firtID && post.id <= lastID ? (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
              />
            ) : null
          )
        )}
      </section>
      <div className="pagination text-white flex gap-3 w-full justify-center ">
        <a href={`/home?firt=${firtID >= 21 ? Number(firtID) - 22 : firtID}`}>
          <MdNavigateBefore />
        </a>
        <a href={`/home?firt=${1}`}>
          <MdHome />
        </a>
        <a href={`/home?firt=${firtID <= 80 ? Number(firtID) + 22 : firtID}`}>
          <MdOutlineNavigateNext />
        </a>
      </div>
    </div>
  );
};

export default Home;
