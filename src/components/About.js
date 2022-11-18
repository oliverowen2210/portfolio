import githubIcon from "../images/github.png";

export default function About(props) {
  return (
    <div className="about">
      <h2>About me</h2>
      <p>
        Hi! My name's Oliver. I'm a programmer living in Queretaro, with
        experience making projects utilizing technologies like JavaScript,
        React, and Firebase.
      </p>

      <div className="aboutLinks">
        <button
          className="githubLink"
          onClick={() => {
            window.open(`https://github.com/oliverowen2210?tab=repositories`);
          }}
        ></button>
      </div>
    </div>
  );
}
