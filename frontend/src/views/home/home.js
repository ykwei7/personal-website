import "./home.scss";

export default function Home() {
  const languages = ["Python", "Java", "JavaScript", "TypeScript", "SQL"];
  const frontend = ["ReactJS", "AngularJS", "VueJS", "Sass"];
  const backend = ["ExpressJS", "FastAPI", "GraphQL", "MongoDB", "PostgreSQL"];
  const frameworks = [
    "Docker",
    "Kubernetes",
    "Travis CI",
    "Redis",
    "Redux",
    "AWS EB",
    "Google Cloud Platforms",
  ];
  const joinArray = (arr) => {
    return arr.join(` ${"\u2022"} `);
  };
  return (
    <div className="home">
      <div className="intro">
        Hi! I'm Yangken, a final year Computer Science student. Since I started
        programming, I really enjoyed the process of being able to build things
        and this is a big part of why I hope to go into development in the
        future. Beyond coding, I really enjoy sports and activities like
        bungee-jumping, and hope to skydive one day :)
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
