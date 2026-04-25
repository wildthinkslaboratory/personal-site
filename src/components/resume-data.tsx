// import ucPic from "../assets/uc.png";

// empty page format
// export const MY_PAGE = {
//   title1: "",
//   title2: "",
//   content: <div></div>,
//   media: [],
//   code: "",
//   link: "",
//   pubs: [],
// };

import wildthinksPic from "../assets/wildthinksLogoFun.svg";
import localsearchPic from "../assets/localsearchGrid.png";
import searchPic from "../assets/searchtree2.png";
import timecompPic from "../assets/timecomplexity.png";
// import balancingRobotPic from "../assets/robot.svg";
import droneCartoon from "../assets/tvcdroneCartoon.png";

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
    path: "drone",
    title1: "Thrust-Vector-Control Drone Project",
    title2: "",
    summary:
      "I helped design and build a thrust vector controlled drone. We developed a nonlinear model predictive control (NMPC) algorithm to do vertical takeoff and landing (VTOL).",
    start_date: "",
    end_date: "",
    image: droneCartoon,
  },
  {
    path: "localsearch",
    title1: "Local Search Algorithms",
    title2: "",
    summary:
      "I have experience building local search methods for large scale scheduling and routing problems. Here I use local search to solve the boggle problem.",
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
    image: timecompPic,
  },
];

import roboticsPic from "../assets/boxbot.jpeg";
import grPic from "../assets/GR.png";
import chewonkiPic from "../assets/chewonki.svg";
import uoPic from "../assets/Oregon_Ducks_logo.png";
import heidiPic from "../assets/HeidiAvatar.png";

export const TEACHING_ITEMS = [
  {
    path: "homeschool",
    title1: "Homeschool Teacher",
    title2: "",
    summary:
      "I homeschooled my son from fourth grade through high school. We did project-based learning with additional instruction from outside institutions and lots and lots of math.",
    start_date: "",
    end_date: "",
    image: heidiPic,
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
      "I taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program. Mostly Algebra 2, but also calculus and a statistics class.",
    start_date: "",
    end_date: "",
    image: chewonkiPic,
  },
];
export function ArtIcon() {
  return (
    <svg
      className="hobby-icon"
      fill="currentColor"
      width="1200pt"
      height="1200pt"
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m394.78 649.08c-7.4531-6.7031-15.469-11.859-24.141-15.609v-67.688c0-19.781-13.688-36.375-32.062-41.062l-23.297-225.71c-1.6875-16.453-15.469-28.922-32.062-28.922-16.547 0-30.375 12.375-32.062 28.922l-23.297 225.71c-18.375 4.6875-32.062 21.234-32.062 41.062v67.688c-8.7656 3.8438-17.062 9.1406-24.703 16.219-18.375 16.781-28.219 38.766-28.219 63.609v398.06c0 26.531 21.469 48 48 48l184.74-0.046875c26.531 0 48-21.469 48-48v-397.92c0-25.312-9.75-46.922-28.828-64.312zm-120.71-347.76c0.46875-4.7812 4.4531-8.3906 9.2344-8.3906s8.7656 3.6094 9.2344 8.3906l22.922 222h-64.312zm-55.219 264.47c0-10.922 8.8594-19.688 19.688-19.688h89.625c10.922 0 19.688 8.8594 19.688 19.688v61.688c-3.6094-0.46875-7.2188-0.70312-10.922-0.70312h-107.16c-3.7031 0-7.3125 0.23438-10.922 0.70312zm-32.25 100.83c12.703-11.625 26.531-17.062 43.219-17.062h107.16c16.453 0 30.375 5.3906 42.609 16.453 14.297 13.078 21.234 28.547 21.234 47.297v84.469h-234.89v-84.469c0-18.516 6.9844-34.219 20.672-46.688zm214.18 154.08v144.84h-234.84v-144.84zm-25.172 315.84h-184.45c-13.922 0-25.219-11.297-25.219-25.219v-123h234.84v123.14c0 13.781-11.25 25.078-25.172 25.078zm576.84-939.98c8.5312-31.922 4.2188-65.297-12.375-93.938-16.547-28.688-43.219-49.219-75.234-57.703-32.062-8.6719-65.531-4.125-94.312 12.703-28.688 16.688-48.938 43.312-57.234 75l-50.625 188.76c-1.7812 6.8438-0.84375 13.922 2.625 20.062 0.46875 0.70312 0.9375 1.4531 1.4531 2.0625l-9.6094 35.625c-1.4531 5.3906-4.4531 9.9375-8.5312 13.547-3.9375-3.6094-7.0781-8.1562-8.5312-13.547l-9.6094-35.625c0.46875-0.70312 1.0781-1.3125 1.4531-2.0625 3.4688-6.1406 4.4531-13.219 2.625-20.062l-50.531-188.76c-8.2969-31.781-28.688-58.453-57.234-75.141-28.781-16.781-62.391-21.234-94.453-12.609-31.922 8.5312-58.688 29.062-75.234 57.703-16.547 28.688-20.859 62.062-12.375 93.938 17.625 66 85.688 105.23 151.69 87.609 13.453-3.6094 26.297-9.4688 37.781-17.297l20.391 75.938c2.1562 7.9219 7.6875 14.062 14.625 17.156l27.234 101.62-79.219 356.02v0.23438c-10.922 55.312-2.5312 88.781 15.938 127.78 3.4688 7.4531 10.688 12 18.703 12 0.60938 0 1.3125 0 1.9219-0.14062 8.7656-0.84375 15.938-6.8438 18.234-15.375l76.688-286.22 76.688 286.22c2.2969 8.5312 9.4688 14.531 18.234 15.375 0.60938 0 1.3125 0.14062 1.9219 0.14062 8.0625 0 15.234-4.5469 18.703-12 18.375-39.141 26.859-72.469 15.844-127.78v-0.23438l-79.312-355.92 27.281-101.62c6.9375-3.1406 12.609-9.2344 14.625-17.156l20.391-75.938c11.531 7.7812 24.234 13.688 37.781 17.297 31.922 8.5312 65.297 4.2188 93.938-12.375 28.594-16.594 49.125-43.359 57.656-75.281zm-280.69 204.14c3.2344-4.7812 6-9.9375 7.5469-15.609l7.9219-29.766 17.156 4.5469-14.766 55.219c-3.4688-7.2188-10.078-12.609-17.859-14.391zm-119.91-156.61c-1.0781-3.8438-3.9375-6.9375-7.9219-8.0625-1.0781-0.375-2.1562-0.46875-3.1406-0.46875-2.8594 0-5.625 1.0781-7.7812 3-12 11.062-26.625 19.219-42.469 23.391-26.062 6.9375-53.297 3.375-76.688-10.078s-40.078-35.297-47.062-61.312c-6.7969-25.922-3.1875-53.156 10.266-76.547s35.297-40.078 61.312-47.062c26.156-7.0781 53.625-3.3281 77.156 10.359 23.391 13.547 39.938 35.297 46.688 61.219l50.625 188.76c0.375 1.2188-0.14062 2.2969-0.375 2.7656s-0.9375 1.3125-2.1562 1.6875l-28.922 7.7812c-1.9219 0.46875-3.9375-0.70312-4.4531-2.5312zm-0.46875 686.76c-15.141-33.375-21.141-61.547-11.859-108.47l69.844-313.08 27.469 102.47zm194.68 0-153-570.98 17.156-4.5469 7.9219 29.766c5.7656 21.609 25.453 37.078 47.766 37.688 1.6875 0 3 1.0781 3.4688 2.8594l88.547 396.71c9.2344 47.062 3.1406 75.281-11.859 108.52zm137.26-678.84c-23.391 13.453-50.625 17.062-76.688 10.078-15.844-4.2188-30.469-12.375-42.469-23.391-2.8594-2.7656-7.0781-3.7031-10.922-2.625s-6.8438 4.2188-7.9219 8.0625l-24.844 92.766c-0.46875 1.9219-2.5312 3.1406-4.4531 2.5312l-28.922-7.7812c-1.2188-0.375-1.9219-1.2188-2.1562-1.6875s-0.70312-1.4531-0.375-2.7656l50.625-188.86c6.7031-25.781 23.297-47.531 46.688-61.078 15.703-9.1406 33.141-13.781 50.766-13.781 8.7656 0 17.531 1.2188 26.297 3.4688 26.062 6.9375 47.859 23.625 61.312 47.062 13.453 23.391 17.062 50.625 10.078 76.688-6.9375 26.016-23.625 47.859-47.016 61.312zm172.82 171.71-42.234-106.08c-4.9219-12.375-16.688-20.297-29.859-20.297-13.219 0-24.938 7.9219-29.859 20.297l-42.234 106.08c-0.46875 1.3125-0.84375 2.7656-0.84375 4.2188v658.78c0 40.078 32.766 72.609 72.938 72.609 40.219 0 72.938-32.531 72.938-72.609v-658.78c-0.14062-1.4531-0.375-2.8594-0.84375-4.2188zm-80.906-97.641c1.4531-3.7031 4.6875-5.8594 8.625-5.8594 4.0781 0 7.2188 2.1562 8.625 5.8594l36 90.469h-89.391zm58.828 113.39v547.69h-100.22v-547.69zm-50.062 697.08c-27.609 0-50.062-22.312-50.062-49.781v-76.922h100.22v76.922c-0.09375 27.469-22.547 49.781-50.156 49.781zm-319.31-684c0 8.8594-7.2188 15.938-15.938 15.938-8.8594 0-15.938-7.2188-15.938-15.938 0-8.7656 7.2188-15.938 15.938-15.938 8.8594-0.046875 15.938 7.1719 15.938 15.938zm168.24-351.84c-35.156 0-63.844 28.688-63.844 63.844s28.688 63.844 63.844 63.844 63.844-28.688 63.844-63.844c-0.14062-35.156-28.688-63.844-63.844-63.844zm0 104.77c-22.547 0-40.922-18.375-40.922-40.922 0-22.547 18.375-40.922 40.922-40.922s40.922 18.375 40.922 40.922c0 22.547-18.375 40.922-40.922 40.922zm-368.39-104.77c-35.156 0-63.844 28.688-63.844 63.844s28.688 63.844 63.844 63.844 63.844-28.688 63.844-63.844-28.688-63.844-63.844-63.844zm0 104.77c-22.547 0-40.922-18.375-40.922-40.922 0-22.547 18.375-40.922 40.922-40.922 22.547 0 40.922 18.375 40.922 40.922 0 22.547-18.234 40.922-40.922 40.922z" />
    </svg>
  );
}

export function BotIcon() {
  return (
    <svg
      className="hobby-icon"
      fill="currentColor"
      width="1200pt"
      height="1200pt"
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m649.13 262.64c28.219 0 51.188-22.969 51.188-51.188s-22.969-51.188-51.188-51.188-51.188 22.969-51.188 51.188 22.969 51.188 51.188 51.188zm0-73.312c12.188 0 22.125 9.9375 22.125 22.125s-9.9375 22.125-22.125 22.125-22.125-9.9375-22.125-22.125 9.9375-22.125 22.125-22.125zm-386.29 813.71c35.109 0 63.656-28.547 63.656-63.656 0-35.109-28.547-63.656-63.656-63.656-35.109 0-63.656 28.547-63.656 63.656 0 35.109 28.547 63.656 63.656 63.656zm0-98.25c19.078 0 34.594 15.516 34.594 34.594 0 19.078-15.516 34.594-34.594 34.594-19.078 0-34.594-15.516-34.594-34.594 0-19.078 15.516-34.594 34.594-34.594zm337.18 98.25c35.109 0 63.656-28.547 63.656-63.656 0-35.109-28.547-63.656-63.656-63.656s-63.656 28.547-63.656 63.656c0 35.109 28.547 63.656 63.656 63.656zm0-98.25c19.078 0 34.594 15.516 34.594 34.594 0 19.078-15.516 34.594-34.594 34.594s-34.594-15.516-34.594-34.594c0-19.078 15.516-34.594 34.594-34.594zm370.74-109.55v-133.03c0-45.281-36.844-82.078-82.078-82.078h-30.469v-182.81l68.953-68.953 28.734 40.922c2.7188 3.8906 7.1719 6.1875 11.906 6.1875h62.953c8.0156 0 14.531-6.5156 14.531-14.531s-6.5156-14.531-14.531-14.531h-55.406l-28.406-40.5 28.406-40.5h55.406c8.0156 0 14.531-6.5156 14.531-14.531s-6.5156-14.531-14.531-14.531h-62.953c-4.7344 0-9.1875 2.2969-11.906 6.1875l-37.828 53.859-84.656 84.656c-2.7188 2.7188-4.2656 6.4219-4.2656 10.266v188.81h-123.24v-269.72h31.547c31.312 0 56.766-25.453 56.766-56.766v-84.422c0-31.312-25.453-56.766-56.766-56.766h-176.58c-31.312 0-56.766 25.453-56.766 56.766v84.422c0 31.312 25.453 56.766 56.766 56.766h31.547v269.72h-94.5l-86.766-125.21c51.938-70.547 46.172-170.58-17.672-234.42-5.4375-5.4375-15.094-5.4375-20.531 0l-64.969 64.969c-28.312-18.234-66.703-14.953-91.359 9.7031-24.703 24.609-28.031 63.047-9.75 91.406l-68.625 68.625c-2.7188 2.7188-4.2656 6.4219-4.2656 10.266s1.5469 7.5469 4.2656 10.266c35.203 35.203 81.422 52.781 127.64 52.781 15.844 0 31.688-2.25 47.062-6.375v57.938h-1.5469c-45.281 0-82.078 36.844-82.078 82.078v133.03c-65.531 15.281-114.56 74.016-114.56 144.14 0 81.656 66.469 148.13 148.13 148.13 81.66 0 148.13-66.469 148.13-148.13 0-48.797-23.859-92.062-60.375-119.06h161.68c-36.516 27-60.375 70.219-60.375 119.06 0 81.656 66.422 148.13 148.13 148.13 81.656 0 148.13-66.469 148.13-148.13 0-48.797-23.859-92.062-60.375-119.06h161.68c-36.516 27-60.375 70.219-60.375 119.06 0 81.656 66.422 148.13 148.13 148.13 81.656 0 148.13-66.469 148.13-148.13 0-70.125-49.031-128.86-114.56-144.14zm-437.58-541.55v-84.422c0-15.281 12.422-27.703 27.703-27.703h176.58c15.281 0 27.703 12.422 27.703 27.703v84.422c0 15.281-12.422 27.703-27.703 27.703h-45.656c-0.14062 0-0.28125-0.046876-0.42188-0.046876s-0.28125 0.046876-0.42188 0.046876h-83.625c-0.14062 0-0.28125-0.046876-0.42188-0.046876s-0.28125 0.046876-0.42188 0.046876h-45.656c-15.281 0-27.703-12.422-27.703-27.703zm88.312 56.766h55.359v269.72h-55.359zm-384.37 5.3438c13.266-13.266 33.094-16.125 49.359-8.8125l-58.172 58.172c-7.3594-16.266-4.5-36.094 8.8125-49.359zm-67.594 149.26 66.703-66.703c0.046875-0.046875 0.14062-0.09375 0.1875-0.14062s0.09375-0.14062 0.1875-0.23438l82.641-82.641c0.09375-0.09375 0.1875-0.14062 0.28125-0.23438 0.046875-0.046875 0.09375-0.14062 0.1875-0.23438l63-63c45.984 55.688 46.031 136.74 0.1875 192.47-0.23438 0.23438-0.42188 0.51562-0.65625 0.75-2.9062 3.4688-5.9531 6.8906-9.2344 10.172-55.594 55.594-144 58.828-203.44 9.7969zm172.45 46.547c17.859-8.2969 34.594-19.547 49.453-33.938l71.062 102.56h-120.52zm39.891 427.78c0 65.625-53.391 119.06-119.06 119.06-65.625 0-119.06-53.391-119.06-119.06 0-65.625 53.391-119.06 119.06-119.06 65.625 0 119.06 53.391 119.06 119.06zm337.18 0c0 65.625-53.391 119.06-119.06 119.06-65.625 0-119.06-53.391-119.06-119.06 0-65.625 53.391-119.06 119.06-119.06 65.625 0 119.06 53.391 119.06 119.06zm-460.74-148.13v-129.05c0-29.25 23.766-53.016 53.016-53.016h577.26c29.25 0 53.016 23.812 53.016 53.016v129.05l-683.26 0.046876zm678.84 267.14c-65.625 0-119.06-53.391-119.06-119.06 0-65.625 53.391-119.06 119.06-119.06 65.625 0 119.06 53.391 119.06 119.06 0 65.625-53.391 119.06-119.06 119.06zm0-182.72c-35.109 0-63.656 28.547-63.656 63.656 0 35.109 28.547 63.656 63.656 63.656s63.656-28.547 63.656-63.656c0-35.109-28.547-63.656-63.656-63.656zm0 98.25c-19.078 0-34.594-15.516-34.594-34.594 0-19.078 15.516-34.594 34.594-34.594s34.594 15.516 34.594 34.594c0 19.078-15.516 34.594-34.594 34.594zm-423.28-317.81h-199.74c-8.0156 0-14.531 6.5156-14.531 14.531v59.109c0 8.0156 6.5156 14.531 14.531 14.531h199.74c8.0156 0 14.531-6.5156 14.531-14.531v-59.109c0-8.0156-6.5156-14.531-14.531-14.531zm-14.531 59.109h-170.68v-30.047h170.68zm115.03-44.578v59.109c0 8.0156-6.5156 14.531-14.531 14.531s-14.531-6.5156-14.531-14.531v-59.109c0-8.0156 6.5156-14.531 14.531-14.531s14.531 6.5156 14.531 14.531zm75.234 0v59.109c0 8.0156-6.5156 14.531-14.531 14.531s-14.531-6.5156-14.531-14.531v-59.109c0-8.0156 6.5156-14.531 14.531-14.531s14.531 6.5156 14.531 14.531zm75.234 0v59.109c0 8.0156-6.5156 14.531-14.531 14.531s-14.531-6.5156-14.531-14.531v-59.109c0-8.0156 6.5156-14.531 14.531-14.531s14.531 6.5156 14.531 14.531zm91.406-14.531c-24.328 0-44.062 19.781-44.062 44.109s19.781 44.062 44.062 44.062c24.328 0 44.062-19.781 44.062-44.062 0-24.328-19.781-44.109-44.062-44.109zm0 59.109c-8.2969 0-15.047-6.75-15.047-15.047s6.75-15.047 15.047-15.047 15.047 6.75 15.047 15.047-6.75 15.047-15.047 15.047z" />
    </svg>
  );
}

export function HobbyIcon() {
  return (
    <svg
      className="hobby-icon"
      fill="currentColor"
      width="1200pt"
      height="1200pt"
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m701.63 963.1c-15.844 0-31.359-5.3906-43.875-15.469l-88.594-71.344c-10.734-8.625-24.188-12.844-37.922-11.906l-189.94 13.172c-9.5625 0.65625-18.938-0.46875-27.938-3.375-23.578-7.5469-41.953-26.25-49.078-49.969l-68.25-229.18c-8.7188-29.344-3.6094-60.469 14.016-85.5 17.625-24.984 45.234-40.266 75.75-41.906l4.8281-0.23438c2.3906-0.14062 4.6875 0.23438 6.7969 0.98438 2.0156-0.98438 4.3125-1.5938 6.7031-1.7344l228.28-12.375c3.7031-0.1875 7.4062-0.046875 11.25 0.42188 28.125 3.6094 50.156 25.828 53.531 54.094 1.9219 16.922-3.2344 34.031-14.156 46.969-11.062 13.125-26.578 20.906-43.688 21.891l-121.36 6.0469 36.234 144.1 62.156-6.1406c39.328-3.6562 78.516 7.0781 110.34 30.375l116.11 84.844c20.578 15 31.312 39.984 28.125 65.25-1.3594 10.5-5.1094 20.672-10.828 29.438-10.734 16.453-28.078 27.703-47.578 30.797-3.6562 0.46875-7.3125 0.75-10.922 0.75zm-166.55-133.74c20.344 0 40.031 6.8906 56.016 19.781l88.594 71.344c7.7812 6.2812 17.484 8.8594 27.375 7.3125s18.328-7.0312 23.812-15.422c2.9062-4.4531 4.7344-9.375 5.3906-14.719 1.5938-12.656-3.7969-25.172-14.062-32.672l-116.16-84.844c-24.938-18.234-55.641-26.672-86.391-23.812l-77.062 7.6406c-8.625 0.84375-16.547-4.7344-18.656-13.125l-45.094-179.29c-1.2656-5.0625-0.23438-10.453 2.9062-14.625 3.0938-4.2188 7.9219-6.7969 13.172-7.0312l142.45-7.125c7.3125-0.42188 14.062-3.7969 18.891-9.5156 4.8281-5.7656 7.0312-13.031 6.1875-20.438-1.4531-12.234-11.062-21.938-23.297-23.484-1.6875-0.23438-3.3281-0.28125-4.9219-0.1875l-228.32 12.375c-2.3906 0.14062-4.6875-0.23438-6.7969-0.98438-2.0625 0.98438-4.3125 1.5938-6.7031 1.7344l-4.8281 0.23438c-19.781 1.0781-37.641 10.969-49.078 27.141-11.438 16.219-14.766 36.422-9.0938 55.453l68.25 229.18c3.7969 12.656 13.688 22.688 26.344 26.766 4.6875 1.5 9.8438 2.1562 14.812 1.7812l189.94-13.172c2.1562-0.1875 4.2656-0.28125 6.3281-0.28125z" />
      <path d="m386.48 1158.6c-1.4062 0-2.7656-0.046875-4.1719-0.14062-1.5-0.09375-2.9531-0.28125-4.0781-0.42188-17.344-2.2031-32.812-11.062-43.5-24.938-10.688-13.828-15.328-31.031-13.078-48.375l17.344-131.72c1.5-11.531-0.60938-23.016-6.1875-33.234l-29.391-53.766c-4.6406-8.4375-1.5-19.078 6.9375-23.672 8.4844-4.6406 19.078-1.5 23.672 6.9375l29.391 53.766c9.1406 16.734 12.656 35.625 10.172 54.516l-17.344 131.72c-1.0312 8.0625 1.125 16.078 6.0938 22.5 4.9688 6.4688 12.188 10.594 20.25 11.625 0.60938 0.09375 1.1719 0.14062 1.7344 0.1875 15.328 0.98438 29.016-9.5625 31.922-24.516l28.547-144.94c5.7656-29.344 0.9375-59.906-13.641-86.016l-3.7031-6.6094c-4.6875-8.4375-1.6875-19.031 6.75-23.766 8.4375-4.6875 19.031-1.6875 23.766 6.75l3.7031 6.6094c18.609 33.328 24.75 72.328 17.391 109.73l-28.5 144.89c-5.9531 30.797-33.094 52.875-64.078 52.875z" />
      <path d="m290.9 502.22c-1.0312 0-1.9219-0.046875-2.6719-0.09375-33.141-1.1719-63.891-15.188-86.484-39.422s-34.406-55.875-33.234-89.016 15.188-63.844 39.422-86.484c24.234-22.594 55.828-34.406 89.016-33.234 68.438 2.3906 122.16 60.047 119.72 128.44-2.1562 60.844-49.266 111.98-109.59 118.92-5.3438 0.60938-10.5 0.9375-15.422 0.84375-0.23438 0.046875-0.51562 0.046875-0.75 0.046875zm1.5938-213.37c-22.641 0-44.109 8.4375-60.75 23.953-17.438 16.266-27.516 38.344-28.312 62.156-0.84375 23.812 7.6406 46.547 23.906 63.984s38.344 27.516 62.156 28.312h0.32812c0.375 0 0.75 0.046876 1.125 0.046876h0.89062c3.4688 0.046874 7.2188-0.14063 11.156-0.60938h0.046875c43.359-4.9688 77.203-41.719 78.75-85.5 1.7344-49.172-36.891-90.609-86.062-92.297-1.0781-0.046876-2.1562-0.046876-3.2344-0.046876z" />
      <path d="m1024.9 877.55c-2.2969 0-4.5938-0.46875-6.7969-1.3594l-251.06-105.89c-7.125-3-11.438-10.359-10.547-18.047l15.891-141.89-60.141-64.266c-6-6.4219-6.2812-16.312-0.70312-23.062l44.203-53.25-125.34-67.172c-2.3438-1.2656-4.3594-3-5.9062-5.1562l-78.562-108.38c-3.4688-4.7812-4.2656-10.922-2.2031-16.453l29.625-78.141-122.26-122.02c-5.0156-4.9688-6.5156-12.469-3.7969-19.031 2.6719-6.5156 9.0469-10.781 16.078-10.781l561.47-1.2188h0.046875c4.6406 0 9.0469 1.8281 12.328 5.1094s5.1094 7.7344 5.1094 12.375v801.19c0 5.8594-2.9531 11.297-7.7812 14.531-2.9062 1.9219-6.2812 2.9062-9.6562 2.9062zm-232.31-134.34 214.82 90.609v-757.4l-501.94 1.125 100.5 100.27c4.875 4.875 6.4219 12.141 3.9844 18.562l-30.281 79.875 70.688 97.5 140.68 75.375c4.6406 2.4844 7.875 6.8906 8.9062 12.047 0.98438 5.1562-0.375 10.453-3.7031 14.484l-48.047 57.844 55.125 58.922c3.4688 3.7031 5.1562 8.8125 4.5938 13.875z" />
      <path d="m514.45 490.13c-1.3125 0-2.625-0.14062-3.9375-0.46875-9.375-2.1562-15.234-11.531-13.078-20.953 5.6719-24.469 15.375-47.812 29.719-71.25 16.641-27.281 38.062-52.125 63.656-73.875 7.3594-6.2344 18.375-5.3438 24.609 2.0156s5.3438 18.375-1.9688 24.609c-22.734 19.312-41.719 41.344-56.438 65.484-12.328 20.203-20.719 40.172-25.5 60.938-1.9219 8.0625-9.1406 13.5-17.062 13.5z" />
      <path d="m175.08 984.14h-0.23438c-9.6562-0.14062-17.344-8.0625-17.203-17.719 0.79688-55.688 14.766-104.34 41.531-144.61 16.172-24.281 35.719-43.688 59.859-59.297 8.1094-5.25 18.891-2.9531 24.141 5.1562s2.9531 18.891-5.1562 24.141c-20.016 12.984-36.328 29.109-49.781 49.359-23.016 34.594-35.016 76.875-35.719 125.76-0.09375 9.5625-7.9219 17.203-17.438 17.203z" />
      <path d="m431.34 725.76c-5.9531 0-11.812-3.0469-15.047-8.5781-4.9219-8.2969-2.1562-18.984 6.1406-23.906 20.062-11.859 34.969-26.156 46.922-45 19.219-30.281 21.047-58.312 21.281-86.766 0.09375-9.6094 7.875-17.297 17.438-17.297h0.14062c9.6562 0.09375 17.391 7.9688 17.297 17.625-0.28125 32.391-2.5781 67.172-26.719 105.14-14.812 23.344-33.984 41.812-58.688 56.344-2.7188 1.6875-5.7656 2.4375-8.7656 2.4375z" />
    </svg>
  );
}

export const HOBBY_ITEMS = [
  {
    path: "climbing",
    title: "rock climbing",
    Icon: HobbyIcon,
  },
  {
    path: "gallery",
    title: "arts and crafts",
    Icon: ArtIcon,
  },
  {
    path: "chalkbot",
    title: "chalkbot",
    Icon: BotIcon,
  },
];

export const EDUCATION_ITEMS = [
  {
    advisor: "Advisor: Matthew Ginsberg",
    thesis: "Automating Pseudo-Boolean Inference within a DPLL Framework",
    thesis_link:
      "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884",
    department: "Computer Science",
    school: "University of Oregon",
    school_link: "https://www.uoregon.edu/",
    degree: "Ph.D.",
    year: "2004",
  },
  {
    advisor: "",
    thesis: "",
    thesis_link: "",
    department: "Geology",
    school: "Oberlin College",
    school_link: "https://www.oberlin.edu/",
    degree: "B.A.",
    year: "1993",
  },
];

import bogglePic from "../assets/boggle.png";

export const LS_PAGE = {
  title1: "Local Search",
  title2: "Boggle",
  content: (
    <div>
      <p>
        During my time working for On Time Systems and Connected Signals, we
        worked on applying artificial-intelligence methods to solve large-scale
        scheduling, routing and planning problems. When the search space of an
        optimization problem is too large to solve completely, the only option
        is to use local search methods. Local search methods such as hill
        climbing and squeaky wheel optimization were integral tools in our
        toolbox.
      </p>
      <p>
        In this project I use local search to solve the boggle problem (find a
        maximally scoring boggle board relative to a given dictionary).
      </p>
      <p>
        Effective search algorithms require the inner search loop to be highly
        optimized. You need the most efficient data structures and algorithms
        with the best time complexity for the problem. You need to understand
        compiler optimizations, memory management and how to keep critical data
        structures in the cache. I have a lot of experience analyzing and
        optimizing code for high performance
      </p>
      <p>
        My code for finding an optimal boggle board will give you a sense of how
        I might approach a simple search problem. It uses a combination of
        parallel hill climbing and steepest ascent to find the highest scoring
        boggle board relative to a given dictionary. The optimizations required
        to efficiently score a board relative to a dictionary are interesting.
      </p>
    </div>
  ),
  media: [
    { mediaContent: localsearchPic, caption: "", mediaType: "image", link: "" },
    {
      mediaContent: bogglePic,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/boggle",
  link: "",
  pubs: [],
};

export const CLIMBING_PAGE = {
  title1: "Bouldering",
  title2: "",
  content: (
    <div>
      <p>I spend a lot of time climbing. It makes me feel alive.</p>
    </div>
  ),
  media: [
    {
      mediaContent: "https://youtube.com/embed/Qs-pHOdNhZw?si=mPtamq3y0kqvdk96",
      caption: "easy dyno",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://www.youtube.com/embed/-gQQRK8Lc4Y",
      caption: "muscle up",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/CkZDJfFMSY0?si=vVpC8MSIpDZXfszL",
      caption: "black with bat hang",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/S0NDByGanvQ?si=oPuHrnJvRk_APbBd",
      caption: "scary black move",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/tEbeUr101JI?si=7KAtGhUz70K49xoN",
      caption: "black on slab",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/iBATIhn8kl4?si=B0bunZaQA7fcUb5F",
      caption: "black on slab",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/BempSldjPCo?si=9H02cfSmoJ3wgt3s",
      caption: "pink and fun",
      mediaType: "horzShort",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/7wql4qW776o?si=8mAuWwT-75Qj_6q3",
      caption: "17 pullups",
      mediaType: "horzShort",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

import dpll1Pic from "../assets/dpll1.png";
import dpll2Pic from "../assets/dpll2.png";
import cutPic from "../assets/branchCut.png";

export const PBCHAFF_PAGE = {
  title1: "Pseudo-Boolean SAT Solver",
  title2: "systematic methods for NP-complete problems",
  content: (
    <div>
      <p>
        For my dissertation I worked on systematic solution methods for solving
        satisifiability (SAT) problems, the canonical NP-complete problem.
        Current solution methods for these problems have a worst case time
        scaling that is exponential relative to their input size.
      </p>
      <p>
        Systematic search methods can determine whether a problem instance has a
        solution or not. Determining that a problem doesn't have a solution
        requires the algorithm to produce a proof that no solution exists. So
        systematic methods for SAT problems are a form of automated deduction
        producing propositional proofs of unsatisfiability to eliminate parts of
        the search space with no solutions. Unfortunately, the proof systems
        used by traditional SAT solvers are very weak and often require
        exponentially long proofs on problems that should be easy. This leads to
        exponential time scaling for these problems.
      </p>
      <p>
        My research worked on adapting traditional SAT solvers to use
        pseudo-Boolean representation. Pseudo-Boolean constraints are linear
        inequalities over Boolean variables. They come from the Operations
        Research field and are used in Integer Programming methods. I adapted
        standard SAT algorithms to use this representation and to produce
        pseudo-Boolean proofs. My experiments showed that this leads to
        exponential improvements in run time for many problem domains and
        produces only a very modest constant time cost in general.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: dpll1Pic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: dpll2Pic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: cutPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/satlib/tree/main/pbchaff",
  link: "",
  pubs: [
    {
      citation:
        "Dixon, H. E. (2004). Automating pseudo-Boolean inference within a DPLL framework (PhD thesis, University of Oregon).",
      link: "https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884",
    },
    {
      citation:
        "Dixon & Ginsberg, “Inference methods for a pseudo-Boolean satisfiability solver,” AAAI-2002.",
      link: "https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf",
    },
    {
      citation:
        "Dixon & Ginsberg, “Combining satisfiability techniques from AI and OR,” KER 15(1), 2000.",
      link: "https://dl.acm.org/doi/abs/10.1017/S0269888900001041",
    },
  ],
};

import chewonkiPic2 from "../assets/chewonki2.jpg";

export const CHEWONKI_PAGE = {
  title1: "High School Teacher",
  title2: "Chewonki Maine Coast Semester Program",
  content: (
    <div>
      <p>
        I taught high school algebra, calculus and statistics at the Chewonki
        Foundation's{" "}
        <a href="https://mainecoastsemester.chewonki.org/">
          Maine Coast Semester
        </a>{" "}
        program, which is an environmentally based semester away program for
        high school juniors.
      </p>
      <p>
        The Chewonki Foundation is located on a beautiful peninsula on the coast
        of Maine. Students live and work on the farm and study environmentally
        based classes. My job was to help them keep up their mathematical
        studies while they were away from their regular schools. I had small
        classes filled with very bright and motivated students who were excited
        to learn.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: chewonkiPic2,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

import julia13Pic from "../assets/julia13.png";
import ftcPic from "../assets/ftc.png";
import calcRectPic from "../assets/calcRect.png";

export const WT_PAGE = {
  title1: "Wild Thinks Website",
  title2: "interactive math adventures",
  content: (
    <div>
      <p>
        This page highlights my website,{" "}
        <a href="https://wildthinks.org/">WildThinks</a>, that hosts many
        explorable math explanations.
      </p>
      <p>
        The math we teach kids in school doesn’t look anything like the
        beautiful ideas I cherished from my college and graduate school days. I
        wanted my kids to experience the joy of mathematics, so I started
        searching for tools and resources that would give them the same sense of
        wonder that I had experienced only at an appropriate K-12 level.
      </p>
      <p>
        How do you bring young children and teenagers into the mathematicians'
        world? That’s a complex question that I’m still trying to answer, but
        I’m confident that the process needs to change.{" "}
      </p>
      <p>
        I believe that rather than being told how to do mathematics, mathematics
        should be discovered by students like the world's most fabulous treasure
        hunt. Students should get to reinvent it from the ground up. Inventing
        mathematics is harder than being told how to do it. It can be
        frustrating for students, but it’s also more exciting, more fun and
        students gain an entirely different and more useful tool set. Rather
        than learning how to follow rules and accept what they are told, they
        learn to figure things out on their own. They become confident problem
        solvers. Most of what they invent will not be new to the world, but
        through the process of inventing they will come to think like
        mathematicians.
      </p>
      <p>
        WildThinks is one of my attempts to bring mathematics to life for young
        people. My hope is that it is a place to play, think, explore and figure
        things out on one’s own.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: julia13Pic,
      caption: "Julia set generator",
      mediaType: "image link",
      link: "https://wildthinks.org/pages/SuperJulia",
    },
    {
      mediaContent: ftcPic,
      caption: "Fundamental theorem of calculus exploration",
      mediaType: "image link",
      link: "https://wildthinks.org/pages/ftc1/",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/oXyek2Q40AI?si=E3mT4sUw4i__iz1Z",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: calcRectPic,
      caption: "Solving rate problems with rectangles",
      mediaType: "image link",
      link: "https://wildthinks.org/pages/rectangle1/",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/blog-kit",
  link: "https://wildthinks.org/",
  pubs: [],
};

import chalkBotPic1 from "../assets/chalkbot.jpeg";
import electronicsPic from "../assets/electronics.jpeg";
import chalkBot2Pic from "../assets/chalkbot2.jpeg";
import chalkBot3Pic from "../assets/chalkbot3.jpeg";

export const CB_PAGE = {
  title1: "ChalkBot",
  title2: "2D CNC style printer for the sidewalk",
  content: (
    <div>
      <p>
        I made ChalkBot when I took Mark Rober's online{" "}
        <a href="https://studio.com/mark-rober-engineering/landing">
          Creative Engineering class
        </a>
        . I made a two dimensional CNC (computer numerical control) style
        printer that could be used to make chalk drawings on the pavement. I
        don't have much hardware and engineering experience so I was definitely
        out of my element. When drawing, the error in the y direction can be
        minimized by providing a frame for the robot to move in. The main
        technical challenge is to reduce the error in the x direction which
        slowly accumulates over the process of a print. For a very big and
        complex drawing, you can reduce this error by periodically zeroing the
        machine. This means stopping the drawing and returning the pen to the
        zero position and backing the machine up against the frame. This resets
        the y position to the proper zero position. I used the open source{" "}
        <a href="https://github.com/grbl/grbl">grbl</a> CNC software to print my
        drawings.
      </p>
      <p>
        ChalkBot has been decommissioned and most of its parts have been
        scavenged by my kids for other projects. I still dream of building a
        better version of her and painting the world's sidewalks with math.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent:
        "https://www.youtube.com/embed/X55FPYN8blc?si=63p6wqMWMn7Oc6x8",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: chalkBotPic1,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/Tdn9ZR6qVBE?si=KhFjbuUBvQDiDec_",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: chalkBot2Pic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: electronicsPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: chalkBot3Pic,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

import robotartPic from "../assets/robotart.jpeg";
import champsPic from "../assets/champs.jpg";
import robotartPic2 from "../assets/robot-art.jpeg";

export const LR_PAGE = {
  title1: "Robotics Coach",
  title2: "",
  content: (
    <div>
      <p>
        I coached Lego Robotics for five years with teams at{" "}
        <a href="https://riverroad.4j.lane.edu/">
          El Camino del Rio Elementary School
        </a>{" "}
        and at{" "}
        <a href="https://spencerbutte.4j.lane.edu/">
          Spencer Butte Middle School.
        </a>{" "}
        I loved all the creative, fanciful and sometimes crazy ideas my students
        came up with. My job as a coach is to give them the tools to make their
        ideas practical and realizable.
      </p>
      <p>
        Our teams participated in{" "}
        <a href="https://www.firstlegoleague.org/">First Lego League (FLL)</a>{" "}
        competitions. My fourth and fifth grade teams focused on learning basic
        coding skills such as control structures and hardware control. They used
        these skills to build simple missions that they tested, refined, and
        prepared for competition.
      </p>
      <p>
        My middle school teams designed and built their own robots to take on
        multi-part missions. To do this in the allotted time, students need to
        use a design cycle that allows for multiple iterations through a design,
        prototype, test and refine cycle. Complex designs need to be simplified
        and streamlined. Students need to learn to manage complexity. To be
        successful, students need to build precise strategies that reduce error
        or build strategies that are flexible enough to tolerate error.
      </p>
      <p>
        I've taught so many talented, creative and curious kids. I've had three
        teams qualify to go to state competitions and one team won the IBM Award
        for Innovation at the state competition. My students are grown now and
        many are studying STEM fields in college. It's exciting to see them
        begin STEM careers.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent:
        "https://www.youtube.com/embed/yvGqmgsHjUw?si=3yWY_3lQfnvgRpff",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/rsEAEUUMDEw?si=pQcVerHpI2WB_ka-",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: champsPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: robotartPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: robotartPic2,
      caption: "Robot generated art",
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

export const GR_PAGE = {
  title1: "Goldfish and Robin YouTube Channel",
  title2: "Channel Mentor",
  content: (
    <div>
      <p>
        This all started with my kids who desperately wanted to have a YouTube
        Channel. They decided to make a series of educational videos about
        programming in Minecraft. I helped them organize their ideas and we
        learned editing together. That’s how{" "}
        <a href="https://www.youtube.com/@goldfishandrobin7020">
          GoldfisAndRobin
        </a>{" "}
        was born.
      </p>
      <p>
        Things progressed when{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/James_Tanton"
        >
          James Tanton
        </a>{" "}
        saw a video they made on his{" "}
        <a href="https://globalmathproject.org/exploding-dots/">
          Exploding Dots curriculum
        </a>
        . Exploding Dots teaches arithmetic in alternate base systems to young
        kids and curious adults. James asked the kids to make more videos so he
        could include them in his first{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://globalmathproject.org/gmw"
        >
          Global Math Week
        </a>
        , an online math program that is put on by the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://globalmathproject.org/"
        >
          Global Math Project
        </a>
        . We taught a class on Exploding Dots at{" "}
        <a href="https://riverroad.4j.lane.edu/">
          El Camino del Rio Elementary School
        </a>
        . This helped expand the cast of characters for their videos and also
        allowed them to make some of their videos in Spanish. Over all they made
        a total of 44 videos. Their most popular video has about 50 thousand
        views. Their videos are still sprinkled throughout James Tanton’s
        personal{" "}
        <a href="https://gdaymath.com/courses/exploding-dots/">
          Exploding Dots page
        </a>
        .
      </p>
      <p>
        My role in this project was primarily as a mentor to the group. The
        videos were mostly made by the kids. I helped them organize their ideas
        and in the end I did a lot of editing because the timeline for the first
        Exploding Dots week was tight and it turned out to be too much work for
        them. But they did the presentation, most of the filming and 100% of the
        creativity.{" "}
      </p>
      <p>
        My kids outgrew the channel when they hit middle school and moved on to
        other things. This was always a kid driven project so when they lost
        interest production stopped. The videos they made are fantastic and I’m
        super proud of all the group achieved.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent:
        "https://www.youtube.com/embed/jCBwHGtEV5M?si=LL-G73P2VW5BqUKr",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/0chOl7JnYSQ?si=QPL1Q7GoZwpvfqe2",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/eQYLL7XnM-4?si=c5DNfgkUW4w8qlrN",
      caption: "",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/9Xy-Bbzvlls?si=NGlBCxb2WsM9UkV5",
      caption: "",
      mediaType: "video",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

import dfaPic from "../assets/dfa.001.jpeg";
import phPic from "../assets/ph.jpg";

export const UO_PAGE = {
  title1: "Adjunct Instructor in Computer Science",
  title2: "",
  content: (
    <div>
      <p>
        I taught classes in the Computer Science department at the University of
        Oregon. I taught their undergraduate/graduate level Automata Theory
        class and the graduate level Algorithms and Complexity class.
      </p>
      <p>
        My automata theory class used Sipser's{" "}
        <u>Introduction to the Theory of Computation</u> book. Some topics
        included were regular languages, finite automata (DFA), regular
        expressions, regular grammars, pushdown automata (PDA), context free
        grammars, Turing machines, nondeterminism, the Cook-Levin theorem,
        complexity classes P, NP and NP-complete, undecidable languages and
        Gödel's incompleteness theorem.
      </p>
      <p>
        My Algorithms and Complexity class covered topics like proofs of
        correctness, algorithm analysis, amortized time complexity, divide and
        conquer, dynamic programming, graph algorithms, greedy algorithms,
        Dijkstra's algorithm, the Cook-Levin theorem, complexity classes P, NP
        and NP-complete, and local search methods.
      </p>
      <p>
        Students taking these classes are expected to know how to write clean
        well structured proofs. However, in practice, students come to these
        classes from a wide variety of backgrounds with vastly different levels
        of preparation. In addition to introducing students to topics in
        theoretical computer science, a major focus of these classes is helping
        students refine their proof writing skills.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: phPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: dfaPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

export const PC_PAGE = {
  title1: "Proof Complexity",
  title2: "building efficient propositional proof systems",
  content: (
    <div>
      <p>
        When you solve a search or optimization problem, the goal is to find a
        solution, preferably an optimal one, or to verify that no solution
        exists. Verifying that no solution exists requires producing a proof of
        some sort. Verification proofs that are excessively long will take a
        long time to produce and check.
      </p>
      <p>
        The field of proof complexity studies the lengths of proofs that can be
        produced by different proof systems. Results from proof complexity help
        those working in search and optimization build more efficient search
        methods. Studying the lengths of proofs also helps us understand the
        complexity class co-NP and whether it might be equal to the class NP.
      </p>
      <p>
        Many examples of problems that require exponential length proofs in
        simple logical proof systems like resolution are actually highly
        symmetric. I helped create a proof system that augments logical
        statements with permutation groups. This allows the system to capture
        and reason about the symmetry of a problem and leads to short proofs. We
        then built a solver that uses this proof system to solve search
        problems.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: phPic,
      caption: "",
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [
    {
      citation:
        "Dixon et al. (2004). Generalizing Boolean Satisfiability II: Theory. JAIR, 22:481-534.",
      link: "https://www.jair.org/index.php/jair/article/view/10397/24905",
    },
    {
      citation:
        "Dixon et al., “Generalizing Boolean Satisfiability III: Implementation,” JAIR, 23:441–531, 2005.",
      link: "https://www.jair.org/index.php/jair/article/view/10407/24941",
    },
  ],
};

import hsProfile from "../assets/homeschool_profile.pdf";
import hsClases from "../assets/class_descriptions.pdf";
import driftBoat from "../assets/driftboat.001.jpeg";
import booksPic from "../assets/books_pencil.jpg";
import izzyPic from "../assets/IzzyAvatarV6.png";

import driftboatStl from "../assets/driftboatmodel.stl?inline";

export const HS_PAGE = {
  title1: "Homeschool Teacher",
  title2: "",
  content: (
    <div>
      <p>
        My younger son has disabilities that made it impossible for him to
        attend a regular school. When he was in the fourth grade I quit my job
        to stay home with him full time. It’s the most challenging thing I’ve
        ever done and I’m a better person for having done it.
      </p>
      <h3>Working with children with disabilities</h3>
      <p>
        Here's what I learned from working with my son and other children with
        disabilites during my volunteer work.
      </p>
      <ul>
        <li>
          <strong>Different is not the same as bad or wrong</strong> Sometimes a
          person with a disability can’t do an important task easily achieved by
          a normie. More often, they can do the task, they just can’t do it the
          way everyone else does. Much of the struggle with a disability is
          being outside the norm and being in an environment that doesn’t allow
          alternative strategies.
        </li>
        <li>
          <strong>Observe</strong> Every neuro-divergent kid diverges in their
          own unique way. Watch, take notes and figure out what a kid’s unique
          struggles and strengths are. Finding strategies to cope and function
          should be a science experiment you do with the child, trying new
          things until something works.
        </li>
        <li>
          <strong>Reflect</strong> People who are different are misunderstood on
          a daily basis so they don’t expect to be seen. All people need to see
          themselves reflected back accurately through another person’s eyes. A
          good mirror reflects back both a person’s strengths and their
          struggles. It doesn’t need to be all sunshine and roses, it needs to
          be non-judgemental and it needs to be true.
        </li>
        <li>
          <strong>Build trust</strong> People with disabilities have good
          reasons to be distrustful. If you are patient and don’t go away you
          will earn trust.
        </li>
        <li>
          <strong>A deficit in one context is a super power in another</strong>{" "}
          Many people with disabilities have profound abilities that arise from
          their deficits, so figure out how to harness those powers. Building
          first on a child's strengths creates a foundation of esteem that
          allows them to later master their weaknesses.
        </li>
        <li>
          <strong>Be flexible and creative</strong> It’s good to make a plan,
          but be open to what arises each day and respond creatively. Many days
          my son couldn’t do any school at all. We’d just go for a walk in the
          woods which always made him happy. For kids with disabilities, we
          can’t predict the future or to what degree they will learn to
          function, so it’s most important to savor the moments we have with
          them and make them count.
        </li>
      </ul>
      <h3>Our school</h3>
      <p>
        Our homeschool philosophy combined project based learning at home
        together with instruction from outside institutions like{" "}
        <a
          href="https://artofproblemsolving.com/?srsltid=AfmBOoq4NboKZqfMWPN5quFnWRmc8M63wPjS8QLobkaQbDkgpG3u6Ft3"
          target="_blank"
          className="external-link"
        >
          The Art of Problem Solving
        </a>{" "}
        and{" "}
        <a
          href="https://www.uoregon.edu/"
          target="_blank"
          className="external-link"
        >
          University of Oregon
        </a>
        . The details of our instruction are in our{" "}
        <a href={hsProfile}>school profile</a> and{" "}
        <a href={hsClases}>class descriptions</a>.
      </p>
      <h3>Math Instruction</h3>
      <p>
        My son loves mathematics. During his highschool years he took many math
        classes at the University of Oregon. Because he was unable to attend
        classes in person we replaced class lectures and study sessions with our
        own instruction at home. He completed class homeworks in the usual way
        and took the class exams at the University’s testing center. I made sure
        to know the content of the classes so I could answer any questions he
        had and help him with his homework. He completed the following classes
        at the University of Oregon during middle school and highschool.
      </p>
      <ul>
        <li>MATH 251 Calculus I</li>
        <li>MATH 253 Calculus III</li>
        <li>MATH 231 Discrete Math I</li>
        <li>MATH 232 Discrete Math II</li>
        <li>MATH 341 Linear Algebra I</li>
        <li>MATH 342 Linear Algebra II</li>
        <li>MATH 316 Fundamentals of Analysis I</li>
        <li>MATH 317 Fundamentals of Analysis II</li>
        <li>MATH 347 Fundamentals of Number Theory I</li>
        <li>MATH 444 Introduction to Abstract Algebra I</li>
        <li>CS 122 Introduction to Programming and Problem Solving </li>
        <li>CS 420 Automata Theory</li>
      </ul>
      <p></p>
      <p>
        He now attends the University of Oregon and is majoring in mathematics.
        We are so proud of him.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: booksPic,
      caption: "Drawing from ART:Digital Design II",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/4PG_Tg4CxuI?si=NlqzMzdntvBI-Mci",
      caption: "Water sample from Microbiology",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: izzyPic,
      caption: "Avatar from ART:Digital Design II",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: driftBoat,
      caption: "Driftboat used in Driftboat Modeling project",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: driftboatStl,
      caption: "3D model produced in Driftboat Modeling project",
      mediaType: "stl",
      link: "",
    },
    {
      mediaContent: "https://www.desmos.com/calculator/vzwtd4turx",
      caption: "Complex Eigenvectors",
      mediaType: "desmos",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

export const CONTROL_PAGE = {
  title1: "Control Theory",
  title2: "Balancing Robot Project",
  content: (
    <div>
      <p>
        Building a control system requires knowledge of physics, engineering,
        mathematics and computer science. While I’m strong in the areas of
        mathematics and computer science, I’m new to the areas of physics and
        engineering. My son is an undergraduate student majoring in aerospace
        and mechanical engineering. This project was a great way for us to
        combine our skill sets to do something that would be very hard for
        either of us to do alone.
      </p>
      <p>
        We built a robot that balances on two wheels using a linear quadratic
        gaussian (LQG) algorithm. The system of differential equations for a
        balancing robot is nonlinear and therefore difficult to solve. However,
        the system can be linearized at the robot’s vertical balance point. This
        point is an unstable fixed point that is made stable by adding just the
        right torque from the motors. So long as the robot stays in the
        neighborhood of this fixed point, the linear model provides a good
        estimate of the nonlinear system.{" "}
      </p>
      <p>
        From the linearized system, we can construct an optimal control law that
        gives us the optimal torque for our wheels to maintain our balance,
        reduce the energy costs of our motors and move the robot to our goal
        state in the xy plane. We can also use the linear system to estimate our
        state variables, filtering out noise from sensor readings.
      </p>
      <p>
        Our project is a work in progress. We are still refining our
        implementation and working out the kinks.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: "https://youtube.com/embed/XT-ZjQa27o4?si=FyryLAMiXVuWf9pc",
      caption: "",
      mediaType: "short",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/balancing-robot-rasppi",
  link: "",
  pubs: [
    {
      citation: "Unfinished Project Technical Report",
      link: "https://github.com/wildthinkslaboratory/balancing-robot-rasppi/blob/main/documents/balancing-robot.pdf",
    },
  ],
};

// export const DRONE_PAGE = {
//   title1: "Thrust-Vector Control Drone Project",
//   title2: "Rocket Prototype",
//   content: (
//     <div>
//       <p className="story_p" data-media="0">
//         I worked on this drone project with{" "}
//         <a href="https://izzymones.github.io/personal-website/">my older son</a>{" "}
//         who is studying Mechanical and Aerospace Engineering at UC Davis.
//       </p>
//       <p className="story_p" data-media="0">
//         A{" "}
//         <a href="https://en.wikipedia.org/wiki/Thrust_vectoring">
//           thrust-vector-controlled (TVC)
//         </a>{" "}
//         drone is a safe and inexpensive way to study control algorithms for
//         vertical takeoff and landing of thrust-vector-controlled rockets.
//       </p>
//       <p className="story_p" data-media="1">
//         Our drone thrust is two stacked brushless motors on a servo-driven
//         gimbal. The motors rotate in opposite directions to counteract induced
//         torques about the vertical axis.
//       </p>
//       <p className="story_p" data-media="1">
//         It uses a <a href="https://px4.io/">Pixhawk</a> flight controller, and
//         it runs a{" "}
//         <a href="https://en.wikipedia.org/wiki/Model_predictive_control">
//           nonlinear model predictive control (NMPC)
//         </a>{" "}
//         algorithm on a Raspberry Pi 5. The overall result is a vehicle that
//         recreates many of the challenges of controlling a real rocket.
//       </p>
//       <p className="story_p" data-media="2">
//         To create a fast and responsive control algorithm, we needed our NMPC
//         algorithm to run at 50Hz on the Raspberry Pi 5. The primary computation
//         task of an NMPC solver is the solution of the embedded nonlinear
//         programming problem (NLP). We experimented with three formulations for
//         the NLP, a standard multiple shooting version, a Chebyshev
//         pseudospectral collocation method and an orthogonal collocation method.
//         These methods are all based on different numerical methods for solving
//         and integrating systems of differential equations. These types of
//         control algorithms use many of the well known linear and nonlinear
//         optimization solvers from Operations Research that I studied during my
//         Ph.D. program so it was fun to apply some of my old knowledge in a fresh
//         new domain. We compared the relative efficiency and accuracy of our
//         formulations. With proper tuning, all of these methods met the stated
//         performance requirement and produced robust trajectories that converged
//         to the goal state.
//       </p>
//       <p className="story_p" data-media="2">
//         This project involves managing significant complexity: tracking multiple
//         data streams within a precise timing grid while running iterative,
//         recursive control algorithms that can produce unpredictable or emergent
//         behaviors. We emphasized modular design and rigorous testing. We built
//         testing suites, data logging pipelines, and visualization tools to
//         evaluate performance, diagnose instability, and refine controller
//         behavior. This structured approach helped us make sense of the drone's
//         behavior, find bugs and improve performance.
//       </p>
//       <p className="story_p" data-media="3">
//         Our initial testing produced robust flight behavior in an indoor
//         environment, but you can see from the video on the right that we don’t
//         yet have precise position control. We’ll do another round of testing
//         when my son comes home for spring break.
//       </p>
//     </div>
//   ),

//   media: [
//     {
//       mediaContent:
//         "https://www.youtube.com/embed/N2oum2yvaio?si=0yl7i9JgERu6SJx4",
//       caption: "drone flight",
//       mediaType: "video",
//       link: "",
//     },
//     {
//       mediaContent:
//         "https://www.youtube.com/embed/qP2U-lA7jI4?si=F3cORvvv8r0TS7KZ",
//       caption: "simulations",
//       mediaType: "video",
//       link: "",
//     },

//     {
//       mediaContent:
//         "https://www.youtube.com/embed/m86OpVHrvyQ?si=ErMlOUO9U45eMsKa",
//       caption: "gimbal closeup",
//       mediaType: "video",
//       link: "",
//     },
//     {
//       mediaContent: dronePic,
//       caption: "TVC drone",
//       mediaType: "image",
//       link: "",
//     },
//   ],
//   code: "https://github.com/wildthinkslaboratory/hop",
//   link: "",
//   pubs: [
//     {
//       citation:
//         "Mones and Dixon, Comparison of Direct Methods for NMPC Applied to a Thrust-Vector-Controlled Drone.  Thechnical Report. 2025.",
//       link: DronePaper,
//     },
//   ],
// };

import dronePic from "../assets/dronePic.jpeg";
import DronePaper from "../assets/simulation.pdf";
import DroneWorldFrame from "../assets/DroneWorldFram.jpeg";
import NMPC from "../assets/NMPC.jpeg";
import NPLresults from "../assets/NLPformResults.jpeg";
import DroneCAD from "../assets/Assembly_1_comp.glb?url";
import { useGLTF } from "@react-three/drei";
useGLTF.preload(DroneCAD);
import { StoryContentProps } from "../components/StoryContent";

export const DRONE_STORY: StoryContentProps = {
  title: "Thrust-Vector Control Drone Project",
  content: [
    [
      0,
      <div className="story-p">
        A {""}
        <a
          href="https://en.wikipedia.org/wiki/Thrust_vectoring"
          target="_blank"
          className="external-link"
        >
          thrust-vector-controlled (TVC)
        </a>{" "}
        drone is a safe and inexpensive way to study control algorithms for
        vertical takeoff and landing of rockets.
      </div>,
    ],
    [
      1,
      <div className="story-p">
        This is a project I did with{" "}
        <a
          href="https://izzymones.github.io/personal-website/"
          target="_blank"
          className="external-link"
        >
          my older son
        </a>{" "}
        who is an undergrad at UC Davis studying Mechanical and Aerospace
        Engineering. It uses a{" "}
        <a href="https://px4.io/" target="_blank" className="external-link">
          Pixhawk
        </a>{" "}
        flight controller and an{" "}
        <a
          href="https://arkelectron.com/product/ark-flow/"
          target="_blank"
          className="external-link"
        >
          optical flow sensor
        </a>{" "}
        to sense the state of the drone and it runs a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Model_predictive_control"
          target="_blank"
          className="external-link"
        >
          nonlinear model predictive control (NMPC)
        </a>{" "}
        algorithm to compute the optimal direction and magnitude of the thrust
        that will allow it to balance vertically and move to precise locations
        in 3D space. This all runs on a Raspberry Pi 5. The result is a vehicle
        that recreates many of the challenges of controlling and landing a real
        rocket.
      </div>,
    ],
    [
      2,
      <div className="story-p">
        The drone's thrust comes from two stacked brushless motors on a
        servo-driven gimbal. The motors rotate in opposite directions to
        counteract induced torques about the vertical axis. Here's a close up of
        the gimbal movement. You can see the two orthogonal rotations.
      </div>,
    ],
    [
      3,
      <div className="story-p">
        Differential equations for the drone allow us to predict how it will
        respond to forces. Our equations are 13-state, six degrees of freedom
        (6-DOF) dynamics. The thrust used to control the drone can be described
        with four components: the two gimbal angles, and both the average and
        the differential thrust between the two stacked motors. We use the
        current state information to compute the best control output.
      </div>,
    ],
    [
      4,
      <div className="story-p">
        Predicting the response of the drone to forces requires careful
        modeling. All the components of the drone are weighed and modeled in
        CAD. This gives us the center of gravity and moments of inertia used in
        the differential equations. The picture seen here is the CAD file and
        can be rotated.
      </div>,
    ],
    [
      5,
      <div className="story-p">
        The servos for the gimbals and the brushless motors are controlled with
        pulse width modulation (PWM). We need a mapping from PWM to angles for
        the servos and from PWM to force in Newtons for the motors. We
        determined these mappings experimentally. During live testing we quickly
        realized the thrust model wasn't accurate at high PWM or when the
        battery was low. We needed to consider the current battery voltage in
        our model. We repeated our thrust testing at a range of voltages to get
        a more accurate curve.
      </div>,
    ],
    [
      6,
      <div className="story-p">
        Common control algorithms like{" "}
        <a
          href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller"
          target="blank"
          className="external-link"
        >
          PID
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Linear%E2%80%93quadratic_regulator"
          target="blank"
          className="external-link"
        >
          LQR
        </a>{" "}
        choose control values based only on the drone's current state. Our{" "}
        <a
          href="https://en.wikipedia.org/wiki/Model_predictive_control"
          target="_blank"
          className="external-link"
        >
          NMPC
        </a>{" "}
        algorithm uses the differential equations to simulate the drone's
        behavior two seconds into the future when choosing a control output. It
        finds the optimal series of control steps to move the drone towards it's
        goal state based. Anticipating future behavior leads to more efficient
        and robust control.
      </div>,
    ],
    [
      7,
      <div className="story-p">
        How does an NMPC algorithm find an optimal plan of control outputs? It
        minimizes a cost function relative to the dynamic and physical
        constraints. Dynamic constraints enforce the system's differential
        equations and physical constraints can enforce limitations of the
        hardware. We pick control values that quickly get us to our goal state.
        It makes subroutine calls to the same type of optimization solvers that
        I studied during my Ph.D. program. It was fun to apply some of my old
        knowledge in a fresh new domain.
      </div>,
    ],
    [
      8,
      <div className="story-p">
        We needed our NMPC algorithm to be fast. The goal was to run at 50Hz on
        the Raspberry Pi 5. The primary computation task of an NMPC solver is
        the solution of the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Nonlinear_programming"
          target="blank"
          className="external-link"
        >
          nonlinear programming problem (NLP)
        </a>
        . There are different ways to encode the differential equations as
        constraints using various numerical methods. We tried three
        formulations: multiple shooting, Chebyshev pseudospectral collocation,
        and orthogonal collocation. With proper tuning, all methods ran at 50Hz
        on the Pi, but we thought the orthogonal collocation method produced the
        most reliable trajectories free of spikes and unnecessary wiggles.
      </div>,
    ],
    [
      9,
      <div className="story-p">
        A complex control system can produce emergent behavior that is
        challenging to debug. We built simulation tools to verify our algorithm
        behavior before actual test flights. Graphing our state and control
        residuals helped us tune our cost function. Feeding our flight data into
        our simulation tools allowed us to compare actual behavior with
        predicted behavior. This helped us diagnose the voltage problem in our
        thrust model and find a delay in the application of our control thrust.
        We believe we've found the source of this delay, but we won't know until
        we do more testing.
      </div>,
    ],
    [
      10,
      <div className="story-p">
        Our initial testing produced robust flight behavior in an indoor
        environment, but you can see from the video on the left that we don’t
        yet have precise position control. We hope that fixing the delay in
        thrust application will get us the precise control we want. More testing
        is needed.
      </div>,
    ],
  ],
  media: [
    {
      mediaContent:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Gimbaled_thrust_animation.gif",
      caption: "",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: dronePic,
      caption: "TVC drone",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/m86OpVHrvyQ?si=-A0TYkiSs2daG8QH",
      caption: "gimbal closeup",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: DroneWorldFrame,
      caption: "Drone World Frame",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: DroneCAD,
      caption: "Drone CAD",
      mediaType: "glb",
      link: "",
    },
    {
      mediaContent: "https://www.desmos.com/calculator/azlbmntr5o",
      caption: "Thrust Testing",
      mediaType: "desmos",
      link: "",
    },
    {
      mediaContent:
        "https://control.com/uploads/articles/predictive_control_image8.jpg",
      caption: "MPC",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: NMPC,
      caption: "NMPC problem",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: NPLresults,
      caption: "Experimental Results for NLPs",
      mediaType: "image",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/_O6LF27Dvj0?si=HU5PQ9llYVVz1wnh",
      caption: "simulations",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/N2oum2yvaio?si=Bvfw6nqPFIKqhdrq",
      caption: "drone flight",
      mediaType: "video",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/hop",
  link: "",
  pubs: [
    {
      citation:
        "Mones and Dixon, Comparison of Direct Methods for NMPC Applied to a Thrust-Vector-Controlled Drone.  Technical Report. 2025.",
      link: DronePaper,
    },
  ],
};

import teapotPic from "../assets/teapot.jpeg";
import snowbunPic from "../assets/snowbunny.jpeg";
import adwallPic from "../assets/artdeco.jpg";
import chalktopus from "../assets/chalktopus.jpeg";
import circPic from "../assets/circ.png";
import fp1Pic from "../assets/facepaint1.jpeg";
import knitfistPic from "../assets/knitfish.jpg";
import owlPic from "../assets/owl.jpg";
import treequiltPic from "../assets/treequilt.jpg";
import lunchPic from "../assets/dino.jpeg";
import mural from "../assets/murals.jpg";
import mandalaquilt from "../assets/reneequilt.jpeg";

export const ART = [
  {
    image: snowbunPic,
    description: "snow bunny",
  },
  {
    image: adwallPic,
    description: "art deco wall mural",
  },
  {
    image: chalkBotPic1,
    description: "ChalkBot drawing",
  },
  {
    image: knitfistPic,
    description: "knitted fish tesselation",
  },
  {
    image: circPic,
    description: "mathematical drawing",
  },
  {
    image: owlPic,
    description: "mixed media owl",
  },
  {
    image: lunchPic,
    description: "chalk drawing",
  },
  {
    image: treequiltPic,
    description: "forest inspired quilt",
  },
  {
    image: teapotPic,
    description: "glazed teapot",
  },
  {
    image: fp1Pic,
    description: "butterfly facepaint",
  },
  {
    image: chalktopus,
    description: "chalk drawing",
  },
  {
    image: mural,
    description: "bedroom mural",
  },
  {
    image: mandalaquilt,
    description: "mandala quilt",
  },
];
