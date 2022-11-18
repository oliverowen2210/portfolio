import uniqid from "uniqid";

export default function About(props) {
  return (
    <div className="about">
      <h2>About me</h2>
      <p>
        Hi! My name's Oliver. I'm a programmer living in Queretaro, with
        experience making projects utilizing technologies like JavaScript,
        React, and Firebase.
      </p>
      {props.links ? (
        <div className="aboutLinks">
          {props.links.map((link) => {
            return (
              <button className={link.name} key={uniqid()}>
                e
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
