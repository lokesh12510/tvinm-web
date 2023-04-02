import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const BlogCard = () => {
  return (
    <div className="w-full rounded-[15px] border-2  overflow-hidden md:hover:shadow-lg hover:border-2 border-transparent hover:border-teal-500 transform-all ease duration-100">
      <div className="h-[250px] bg-slate-300 w-full ">
        <Image
          src={"/images/group-pic.jpg"}
          width={500}
          height={430}
          alt="blog"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          priority
        />
      </div>
      <div className="p-3 pb-5">
        <h6 className="text-3xl text-bold mb-3">Event Name</h6>
        <p className="text-lg mb-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad
          maiores laborum veritatis recusandae nam at nihil, sequi quos velit
          hic officiis natus ut cumque eligendi suscipit facilis! Tempore
          repudiandae labore molestiae adipisci repellendus voluptates? Eum
          velit obcaecati perspiciatis...
        </p>

        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default BlogCard;