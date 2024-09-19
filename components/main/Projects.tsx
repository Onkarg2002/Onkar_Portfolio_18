import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/techcart.jpg"
          title="Tech Cart Online Store Application"
          description="This is an example of a Django E-commerce Web application that shows you how to integrate payments, change your password by email, and do a lot
more. This application is user-friendly and simple to use.
"
        />
        <ProjectCard
          src="/t2i.jpg"
          title="Text to Image synthesis using GAN"
          description="Conducted MSc research at Mithibai College, generating photo-realistic images from textual descriptions using Generative Adversarial Networks,
achieving a 90% similarity rating"
        />
        <ProjectCard
          src="/ragyt.jpg"
          title="RAG Youtube Application using Pinecone and OpenAI"
          description="Developed a Retrieval-Augmented Generation (RAG) application that enables users to ask questions about YouTube videos, utilizing Pinecone for vector
storage and retrieval, OpenAI's API for generating responses, and YouTube's API for fetching video data.
"
        />
      </div>
    </div>
  );
};

export default Projects;
