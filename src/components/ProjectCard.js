/**expects project objects to look something like this:
* {
   image: url;
   name: My project,
   links: {
      github: repo url,
      live: live url
   },
   description: description
} 
*/

export default function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${props.project.image})` }}
      />
      <div className="projectInfo">
        <div className="projectHeader">
          <h3 className="projectName">{props.project.name}</h3>
          <div className="projectLinks">
            <button
              className="projectRepo projectButton"
              onClick={() => {
                window.open(`${props.project.links.github}`);
              }}
            >
              G
            </button>
            <button
              className="projectLive projectButton"
              onClick={() => {
                window.open(`${props.project.links.live}`);
              }}
            >
              L
            </button>
          </div>
        </div>
        <p className="projectDescription">{props.project.description}</p>
      </div>
    </div>
  );
}
