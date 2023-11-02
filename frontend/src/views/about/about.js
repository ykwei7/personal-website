import Preamble from "../../components/ui/Preamble";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <Preamble>Thanks for visiting!</Preamble>
      <div className="footer">
        <a
          href="https://github.com/ykwei7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.svgporn.com/logos/github-icon.svg"
            alt="github-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yangkenw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
            alt="linkedin-icon"
          />
        </a>
        <div
          className="email"
          onClick={() => (window.location = "mailto:ykwei10@gmail.com")}
        >
          <img
            src="https://cdn.svgporn.com/logos/google-gmail.svg"
            alt="gmail-icon"
          />
        </div>
      </div>
    </div>
  );
}
