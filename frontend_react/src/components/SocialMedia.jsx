import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/hello_abhi21">
          <BsTwitter />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/kabhijeet21/">
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href="https://github.com/KAbhijeet2105">
          {" "}
          <FaGithub />{" "}
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
