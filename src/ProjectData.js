import waldoImage from "./images/waldo.png";
import battleshipImage from "./images/battleship.png";
import twitterCloneImage from "./images/twitter.png";

let ProjectData = [
  {
    name: "Twitter Clone",
    image: twitterCloneImage,
    links: {
      github: "https://github.com/oliverowen2210/twitter-clone",
      live: "https://twitter-clone-production-c7a4.up.railway.app/",
    },

    description:
      "Un clon de Twitter creado con ReactJS, Tailwind y el BaaS no relacional Firebase.",
  },
  {
    name: "Battleship",
    image: battleshipImage,
    links: {
      github: "https://github.com/oliverowen2210/battleship",
      live: "https://oliverowen2210.github.io/battleship",
    },

    description:
      "Una recreacion del juego de mesa Battleship utilizando puro JavaScript y CSS.",
  },
  {
    name: "Where's Waldo",
    image: waldoImage,
    links: {
      github: "https://github.com/oliverowen2210/where-s-waldo",
      live: "https://oliverowen2210.github.io/where-s-waldo",
    },
    description:
      "Un juego basado en 'Donde Esta Wally' donde intentas encontrar varios personajes dentro de una imagen.",
  },
];

export default ProjectData;
