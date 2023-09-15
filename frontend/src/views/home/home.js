import "./home.scss";

export default function Home() {
  const languages = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "C++",
  ];
  const frontend = ["ReactJS", "AngularJS", "VueJS", "Sass"];
  const backend = ["ExpressJS", "FastAPI", "GraphQL", "MongoDB", "PostgreSQL"];
  const frameworks = ["Docker", "Kubernetes", "Travis CI", "Redis", "Redux"];
  const joinArray = (arr) => {
    return arr.join(` ${"\u2022"} `);
  };
  return (
    <div className="home">
      <div className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor
        velit, mattis quis elit non, tincidunt auctor nisl. Curabitur volutpat
        tempor luctus. Maecenas dolor arcu, tempor eget purus sed, eleifend
        semper urna. Morbi commodo laoreet erat ut feugiat. Phasellus eu mi
        rutrum, vulputate risus sed, dictum odio.
      </div>
      <div className="skills">
        <div className="lang">
          <div className="title">Languages</div>
          <div className="skills-content"> {joinArray(languages)} </div>
        </div>
        <div className="fe">
          <div className="title">Frontend</div>
          <div className="skills-content"> {joinArray(frontend)} </div>
        </div>
        <div className="be">
          <div className="title">Backend</div>
          <div className="skills-content">{joinArray(backend)}</div>
        </div>
        <div className="frameworks">
          <div className="title">Frameworks & Libraries</div>
          <div className="skills-content">{joinArray(frameworks)}</div>
        </div>
      </div>
    </div>
  );
}
