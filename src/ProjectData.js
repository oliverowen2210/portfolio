import waldoImage from "./images/waldo.png";
import battleshipImage from "./images/battleship.png";

let ProjectData = [
  {
    name: "Where's Waldo",
    image: waldoImage,
    links: {
      github: "https://github.com/oliverowen2210/where-s-waldo",
      live: "https://oliverowen2210.github.io/where-s-waldo",
    },
    description:
      "A photo tagging game/app based on Where's Waldo. Uses Firebase as a backend to store character data and player scores.",
  },
  {
    name: "Battleship",
    image: battleshipImage,
    links: {
      github: "https://github.com/oliverowen2210/battleship",
      live: "https://oliverowen2210.github.io/battleship",
    },

    description:
      "Recreation of Battleship with vanilla CSS and JavaScript. Supports one human and one CPU, two human or two CPU players.",
  },
];

export default ProjectData;
