import React from "react";
import Card from "../../components/Card";

const PROJECTS = [
  {
    title: "Title 01",
    description: "Description 01",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Title 02",
    description: "Description 02",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Title 03",
    description: "Description 03",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Title 04",
    description: "Description 04",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Title 05",
    description: "Description 05",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Title 06",
    description: "Description 06",
    image: "https://tailwindcss.com/img/card-top.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
];

export default function Project() {
  return (
    <div className="flex flex-wrap">
      {PROJECTS.map((project, index) => (
        <div key={index} className="w-1/2 mb-8">
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}
