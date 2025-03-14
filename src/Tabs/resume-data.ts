import localsearchPic from "../assets/localsearch2.png";
import wildthinksPic from "../assets/penroseLogoVert.jpg";
import searchPic from "../assets/search.jpeg";
import phPic from "../assets/ph.jpg";
import roboticsPic from "../assets/legoRobotics.jpg";
import grPic from "../assets/GR.png";
import uoPic from "../assets/oregonO.jpg";
import chewonkiPic from "../assets/chewonki.jpg";

export const PROJECT_ITEMS = [
  {
    id: 1,
    path: "wildthinks",
    title1: "WildThinks Website",
    title2: "",
    summary:
      "I built a website with interactive mathematical learning experiences. It includes a visual introduction to calculus plus interactive apps on fractals, penrose tilings, and alternative base systems.",
    start_date: "",
    end_date: "",
    image: wildthinksPic,
  },
  {
    id: 2,
    path: "localsearch",
    title1: "Local Search Algorithms",
    title2: "",
    summary:
      "I have experience building local search methods for large scale scheduling and routing problems. Here I use local search to solve the boggle problem (find a maximally scoring boggle board relative to a given dictionary).",
    start_date: "",
    end_date: "",
    image: localsearchPic,
  },
  {
    id: 3,
    path: "pbchaff",
    title1: "Pseudo-Boolean SAT Solver",
    title2: "",
    summary:
      "I studied systematic search methods for NP-complete problems. I built a pseudo-Boolean satisfiability solver that outperformed traditional SAT solvers on problems from the planning domain.",
    start_date: "",
    end_date: "",
    image: searchPic,
  },
  {
    id: 4,
    path: "proof",
    title1: "Proof Complexity",
    title2: "",
    summary:
      "I studied propositional proof systems. I created a new proof system that uses permutation groups. It has powerful inference rules and can produce short proofs of many hard combinatorial problems.",
    start_date: "",
    end_date: "",
    image: phPic,
  },
];

export const TEACHING_ITEMS = [
  {
    id: 1,
    path: "robotics",
    title1: "Robotics Coach",
    title2: "",
    summary:
      "I taught basic programming and robotics skills to students in the 4th through 8th grade. My curriculum focused on iterative design, helping students manage complexity, and creating strategies that are precise and tolerant of error. ",
    start_date: "",
    end_date: "",
    image: roboticsPic,
  },
  {
    id: 2,
    path: "goldfishandrobin",
    title1: "Goldfish and Robin YouTube Channel",
    title2: "",
    summary:
      "I mentored the young team of creators from the GoldfishAndRobin YouTube channel. I helped them organize their ideas, plan, and produce educational videos.",
    start_date: "",
    end_date: "",
    image: grPic,
  },
  {
    id: 3,
    path: "teachingUO",
    title1: "Adjunct Instructor",
    title2: "",
    summary:
      "I taught the undergrad/graduate level Automata Theory class and the graduate level Algorithms and Complexity class at the University of Oregon.",
    start_date: "",
    end_date: "",
    image: uoPic,
  },
  {
    id: 4,
    path: "chewonki",
    title1: "High School Mathematics Teacher",
    title2: "",
    summary:
      "I taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program. Mostly Algebra 2, but also a calculus class and a statistics class.",
    start_date: "",
    end_date: "",
    image: chewonkiPic,
  },
];
