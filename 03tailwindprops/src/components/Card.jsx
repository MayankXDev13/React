import React from "react";
import Image from "../assets/tower_image.jpeg";

function Card({ username = "Vijay", post = "Not assigned yet" }) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-1.5">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={Image}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            vero?
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500">{username}</div>
          <div>{post}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
