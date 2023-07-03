import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Breadcrumb = ({ links = [], ...props }) => {
  if (links.length > 0) {
    return (
      <div className={`flex ${props.className}`}>
        {links.map((item, index) => {
          return (
            <Link to={item.to} key={index}>
              <div className="flex items-center">
                <span className="hover:underline">{item.text}</span>{" "}
                {index !== links.length - 1 ? <FaAngleRight /> : null}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
};

export default Breadcrumb;
