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
          This project was developed to enable individuals to code together on 
          a shared platform for practicing mock coding interviews. I worked as 
          part of a team of four to build the backend microservice architecture 
          and the frontend platform using ReactJS. For the backend service, we 
          utilized Socket.IO to determine how users are matched together.
          </p>
          <p>
            What I enjoyed the most about this project was having
            the ownership to really design and build the frontend as I wanted.
            One of my favorite features from this application was the
            video call feature we implemented. While it was challenging to
            intially configure the WebRTC setup, it was really satisfying
            once we got it to work. We also managed to get the popout feature to become
            draggable similar to the Zoom interface which I was really proud of!
          </p>`,
    link: "https://github.com/CS3219-AY2223S1/cs3219-project-ay2223s1-g24",
    technologies: ["ReactJS", "ExpressJS", "MongoDB", "SocketIO", "Redux"],
  },
  StreakBot: {
    name: "StreakBot",
    image: StreakBotImage,
    description: `
    <p>
      This was a project that I did over Y2 Summer, mainly to dive deeper
      into how to query data from databases and to  build an application to cultivate good habits. 
      The application would allow the user to set notifications and send reminders
      to complete their habits, using the streak as a motivation factor.
    </p>
    <p>
      For this project, I also delved into proper logging practices, 
      experimented with virtual environments, such as Poetry, for 
      managing Python packages, and explored the use of ORMs to 
      enhance database integration. Overall, setting up the project 
      was enjoyable, but unfortunately, it had to be shut down due 
      to the removal of the Heroku free tier. :')
    </p>`,
    link: "https://github.com/ykwei7/StreakBot",
    technologies: ["Python", "TelegramBotAPI", "PostgreSQL"],
  },
  "Track-O": {
    name: "Track-O",
    image: TrackOImage,
    description: `
    <p>
      This was a desktop application built on Java for CS2103T back in
      Y2S1. Development-wise, this was probably my first experience 
      working in a team in an agile setting but was glad it worked out fine.
    </p>
    <p>
      While the module was pretty heavy, I was lucky to have good
      groupmates who were really proactive, and would offer help whether
      it be on designing the application or working on the features. As a
      whole, I learnt alot on how software development worked and I think
      this module was one of the core modules that motivated me to go
      towards software development.
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
      module alongside a friend and our idea was to build a web application
      to predict stock prices through the sentiment analysis of stocks.
    </p>
    <p>
      As this was our very first SWE project, we were relatively new to
      exploring different tech stacks but eventually decided on building it with
      plain HTML, CSS and JS. For the ML portion, we developed a script to 
      manually parse the comments into different categories - positive, 
      negative or neutral. We then applied a supervised model to train on the
      labelled data and tune the hyperparameters accordingly.
    </p>
    <p>
      I think as whole, the project was pretty fun and it was largely from
      this project which I found my interest in web development. :)
    </p>`,
    link: "https://github.com/ykwei7/WenMoon-Journey",
    technologies: ["HTML", "CSS", "JavaScript", "TensorFlow", "RedditAPI"],
  },
  HelpMeMahjong: {
    name: "HelpMeMahjong",
    image: HelpMeMahjongImage,
    description: `
    <p>
      This project was part of HackNRoll 22 and it was my first hackathon.
      The inspiration for this idea was to really teach a friend how to play mahjong. 
      This was a telegram bot that would reccommend the best tile to throw and I worked 
      on the backend algorithm for this because I was one of the few who 
      knew how to play mahjong :')
    </p>
    <p>
      Honestly, it was really painful to implement the algo not because of the coding 
      but because it was alot of reading into research papers that talked
      about how to determine the best tile to throw. Eventually, we settled on
      a depth-first-search approach with pruning to slowly get the best tile 
      combinations, and ended up coding till 6am and barely made it for the presentation.
      Overall, though we didn't really win, it was a pretty memorable experience especially for
      my first hackathon.
    </p>`,
    link: "https://github.com/ykwei7/HelpMeMahjong",
    technologies: ["Python", "TelegramBotAPI"],
  },
};
