import StreakBotImage from "../assets/Streakbot.png";
import HelpMeMahjongImage from "../assets/mahjongBot.jpg";
import TrackOImage from "../assets/TrackO.png";
import WenMoonImage from "../assets/WenMoonJourney.png";
import PeerPrepImage from "../assets/Peerprep.png";
// import SarcasmDetectionImage from "../assets/SarcasmDetection.png";

export const projects = {
  PeerPrep: {
    name: "PeerPrep",
    image: PeerPrepImage,
    description: `
          <p>
            This was a project built for individuals to code together on a
            shared platform. For this project, I worked in a team of 4 and
            mainly worked on the frontend development.
          </p>
          <p>
            For myself, what I enjoyed the most about this project was having
            the ownership to really design and build the frontend as I wanted.
            In fact, one of my favorite features from this application was the
            video call feature we set up. While it was slightly challenging to
            set up the WebRTC configurations initially, it was super satisfying
            once we got it to work. As a plus point, we also managed to build
            this draggable popout which resembled the Zoom interface which I was
            really proud of!
          </p>`,
    link: "https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g24",
    technologies: ["ReactJS", "ExpressJS", "MongoDB"],
  },
  StreakBot: {
    name: "StreakBot",
    image: StreakBotImage,
    description: `
    <p>
      This was a project that I did over Y2 Summer, mainly to dive deeper
      into how to query data from databases and also because I wanted to
      try to build an application to build good habits. The idea of this
      application was to be motivated through the streaks and keep up your
      good habit streak, but sadly Heroku got shutdown so the application
      stopped working which was pretty unfortunate.
    </p>
    <p>
      For this project, I also explored on how to do proper logging and
      the use of virtual environments like Poetry to manage python
      packages, and managed to look into the use of ORMs to better
      integrate the database. Overall, the project was fun to setup but I
      think it just ended up being a bot that spams notifications :')
    </p>`,
    link: "https://github.com/ykwei7/StreakBot",
    technologies: ["Python", "TelegramBotAPI", "PostgreSQL"],
  },
  "Track-O": {
    name: "Track-O",
    image: TrackOImage,
    description: `<p>
    This was a desktop application built on Java for CS2103T back in
    Y2S1. I think it was probably my first experience working in a team
    with proper SDLC practices (like weekly sprints etc) but glad it
    worked out fine.
  </p>
  <p>
    While the module was pretty heavy, I was pretty lucky to get good
    groupmates who were really proactive, and would offer help whether
    it be on designing the application or working on the features. As a
    whole, I learnt alot on how software development worked and I think
    this module was one of the core modules that encouraged me to go
    into software development.
  </p>`,
    link: "https://ay2122s1-cs2103t-f12-3.github.io/tp/",
    technologies: ["Java", "JavaFX", "JUnit Testing"],
  },
  "WenMoon Journey": {
    name: "WenMoon Journey",
    image: WenMoonImage,
    description: `
    <p>
      This project was part of Orbital back in Y1 Summer. I took this
      module alongside a friend and I think back then, we didn't really
      know what we were doing but just knew we wanted to build a website
      to predict whether we should buy a stock or not (think it was cause
      of the GME craze back then).
    </p>
    <p>
      Anyways, for this project, we wanted to build a sentiment analyzer
      that read comments from reddit to predict whether a stock would rise
      or fall. On the frontend, we built it with vanilla HTML, CSS and JS
      and even used a json file as our database. For the ML portion, we
      ended up doing manual labelling where we built a script to slowly view
      each comment one by one and label into the respective files,
      about 500 entries in total. :'))
    </p>
    <p>
      I think as whole, it was pretty fun but the good part about this
      project was discovering that I liked web development so I guess it
      wasnt too bad :)
    </p>`,
    link: "https://github.com/ykwei7/WenMoon-Journey",
    technologies: ["HTML", "CSS", "JavaScript", "TensorFlow", "RedditAPI"],
  },
  HelpMeMahjong: {
    name: "HelpMeMahjong",
    image: HelpMeMahjongImage,
    description: `
    <p>
      This project was part of HackNRoll 22 and the inspiration for this
      idea was to really teach a friend how to play mahjong.
    </p>
    <p>
      This was a telegram bot that would reccommend the best tile to throw
      and I worked on the backend algorithm for this because I was one of
      the few who knew how to play mahjong :'). Anyways, I remember it was
      really painful to implement the algo not because of the coding but
      because it was alot of reading into research papers that talked
      about how to determine the best tile to throw.
    </p>
    <p>
      We ended up coding till like 6am or something and was lowkey half
      dead when we presented our application but looking back, it was a
      pretty memorable experience.
    </p>`,
    link: "https://github.com/ykwei7/HelpMeMahjong",
    technologies: ["Python", "TelegramBotAPI"],
  },
};
