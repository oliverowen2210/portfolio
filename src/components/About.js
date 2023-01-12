export default function About(props) {
  return (
    <div className="about">
      <h2>Acerca de mi</h2>
      <p>
        Hola! Mi nombre is Oliver, soy un programador con experiencia creando
        proyectos usando JavaScript, Node y Express, React y Tailwind, Firebase,
        y mas.
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
