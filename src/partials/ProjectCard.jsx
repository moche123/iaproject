import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const ProjectCard = ({ light, project: { title, description, tags, link }, language }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <a href={link}>
        <h1 className={light?"text-xl text-center font-bold":"text-xl text-center text-white font-bold"}>
          {title}{" "}
          <FaExternalLinkAlt className="inline align-baseline" />
        
        </h1>
      </a>
      <hr className="my-4" />
      <p className={light?"":"text-white"}>{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => (
          <div key={tag} className={light?"px-4 py-1 border-2 rounded-full":"px-4 py-1 border-2 rounded-full text-gray-100"}>{tag}</div>
        ))}
      </div>
      <div className="w-full text-center">
        <GitHubButton href={link} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
        {"  "}
        <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
      </div>
    </div>
  );
};

export default ProjectCard;
