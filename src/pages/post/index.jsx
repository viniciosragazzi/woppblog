import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";

const Postagem = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [dataPost, setDataPost] = useState([]);
  const [dataComments, setDataComments] = useState([]);
  async function getPost(id) {
    // Dois request async ao mesmo tempo
    const [responsePost, responseComments] = await Promise.all([
      fetch(`${url}/${id}`),
      fetch(`${url}/${id}/comments`),
    ]);

    const dataPost = await responsePost.json();
    setDataPost(dataPost);

    const dataComments = await responseComments.json();
    setDataComments(dataComments);
  }
  const urlSerachParams = new URLSearchParams(window.location.search);
  const postID = urlSerachParams.get("id");
  useEffect(() => {
    getPost(postID);
  }, []);



  return (
    <div className="bg-dark-bg w-full min-h-screen  sm:p-4 flex flex-col gap-10">
      <Header />
      <div className="post-area flex w-full justify-center flex-col items-center gap-4 p-4 sm:p-6">
        <h1 className=" text-primary-color  first-letter:capitalize sm:text-center font-medium text-xl sm:text-4xl max-w-5xl sm:mb-6">
          {dataPost.title}
        </h1>
        <p className="text-white text-sm sm:text-lg first-letter:capitalize opacity-90 sm:mb-5">
          {dataPost.body}
        </p>

        <div className="img-area max-h-80 overflow-hidden rounded-md mb-5">
          <img src={`https://source.unsplash.com/800x600/?${postID}`} alt="" />
        </div>
        <p className="text-white text-sm sm:text-lg first-letter:capitalize opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          animi adipisci, ullam accusamus obcaecati consectetur debitis,
          praesentium sit sequi illum natus eius perspiciatis magni id? Deserunt
          tempora inventore dicta excepturi? <br />
          <br />
          Sed dolorem cum odit aspernatur ea pariatur optio, temporibus neque
          maxime ab similique ratione quibusdam ut nesciunt quidem libero
          corporis deleniti molestiae.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p className="text-white text-sm sm:text-lg first-letter:capitalize opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          animi adipisci, ullam accusamus obcaecati consectetur debitis,
          praesentium sit sequi illum natus eius perspiciatis magni id? Deserunt
          tempora inventore dicta excepturi? <br />
          <br />
          </p>
        <div className="img-area max-h-80 overflow-hidden rounded-md mb-5">
          <img src={`https://source.unsplash.com/800x600/?${postID*2}`} alt="" />
        </div>
        <p className="text-white text-sm sm:text-lg first-letter:capitalize opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          animi adipisci, ullam accusamus obcaecati consectetur debitis,
          praesentium sit sequi illum natus eius perspiciatis magni id? Deserunt
          tempora inventore dicta excepturi? <br />
          <br />
          Sed dolorem cum odit aspernatur ea pariatur optio, temporibus neque
          maxime ab similique ratione quibusdam ut nesciunt quidem libero
          corporis deleniti molestiae.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div className="comentarios-area p-4">
        <h1 className="text-primary-color mb-10  first-letter:capitalize  font-medium text-xl sm:text-2xl max-w-5xl sm:mb-6">
          Comentários:
        </h1>

        <div className="comentarios flex flex-col gap-14">
          {dataComments.map((comentario, key) => (
            <div className="comentario w-full  flex flex-col gap-4" key={key}>
              <div className="header-comment flex gap-4 items-center">
                <div className="avatar w-12 h-12 overflow-hidden rounded-full">
                  <img
                    className="w-full h-full"
                    src={`https://source.unsplash.com/800x600/?${
                      key * key + 4
                    }`}
                    alt={key}
                  />
                </div>
                <span className="email  text-white font-semibold text-sm lowercase">
                  {comentario.email}
                </span>
              </div>
              <div className="content-comment  flex flex-col gap-3">
                <h4 className="title  text-primary-color text-lg">
                  {comentario.name}
                </h4>
                <span className="content text-white text-sm">
                  {comentario.body}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Postagem;
