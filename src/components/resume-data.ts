import localsearchPic from "../assets/localsearch2.png";
import wildthinksPic from "../assets/favicon.png";
import searchPic from "../assets/search.jpeg";
import phPic from "../assets/ph.jpg";
import roboticsPic from "../assets/legoRobotics.jpg";
import grPic from "../assets/GR.png";
import uoPic from "../assets/oregonO.jpg";
import chewonkiPic from "../assets/chewonki.jpg";
import climbingPic from "../assets/travel.png";
import artPic from "../assets/craft.png";
import chalkbotPic from "../assets/delivery.png";
import ucPic from "../assets/uc.png";

// import bogglePic from "../assets/boggle.png";
import localsearchPic2 from "../assets/localsearch.png";

export const PROJECT_ITEMS = [
  {
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
    path: "proof",
    title1: "Proof Complexity",
    title2: "",
    summary:
      "I studied propositional proof systems and created a new proof system that uses permutation groups. It has powerful inference rules and can produce short proofs of many hard combinatorial problems.",
    start_date: "",
    end_date: "",
    image: phPic,
  },
];

export const TEACHING_ITEMS = [
  {
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
    path: "chewonki",
    title1: "High School Mathematics Teacher",
    title2: "",
    summary:
      "I taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program. Mostly Algebra 2, but also a calculus class and a statistics class.",
    start_date: "",
    end_date: "",
    image: chewonkiPic,
  },
  {
    path: "homeschool",
    title1: "Homeschool Teacher",
    title2: "",
    summary: "",
    start_date: "",
    end_date: "",
    image: ucPic,
  },
];

export const HOBBY_ITEMS = [
  {
    path: "climbing",
    title: "rock climbing",
    image: climbingPic,
  },
  {
    path: "art",
    title: "arts and crafts",
    image: artPic,
  },
  {
    path: "chalkbot",
    title: "chalkbot",
    image: chalkbotPic,
  },
];

export const EDUCATION_ITEMS = [
  {
    advisor: "Advisor: Matthew Ginsberg",
    thesis:
      "Thesis: Automating Pseudo-Boolean Inference within a DPLL Framework",
    department: "Computer Science",
    school: "University of Oregon",
    degree: "Ph.D.",
    year: "2004",
  },
  {
    advisor: "",
    thesis: "",
    department: "Geology",
    school: "Oberlin College",
    degree: "B.A.",
    year: "1993",
  },
];

export const LS_PAGE = {
  title1: "Local Search",
  title2: "beep bob",
  content: [
    "For my PhD I studied solution methods for solving NP-complete problems. When the search space of an optimization problem is too large to solve completely, the only option is to use local search methods. Two domains my lab specialized in were large scale scheduling and routing problems. We used a variety of algorithms such as variants of hill climbing and Squeaky Wheel optimization.",
    " Effective search algorithms require the inner search loop to be highly optimized. You need the most efficient data structures and code with the best time complexity for the problem. You need to understand compiler optimizations and how to keep critical data structures in the cache. I have a lot of experience optimizing code for both analytical time scaling and more practical concerns such as cache optimizations.",
  ],
  media: [
    { mediaContent: localsearchPic2, mediaType: "image" },
    { mediaContent: localsearchPic2, mediaType: "image" },
    { mediaContent: localsearchPic2, mediaType: "image" },
    { mediaContent: localsearchPic2, mediaType: "image" },
  ],
};
