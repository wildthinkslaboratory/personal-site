import { EDUCATION_ITEMS } from "../components/resume-data";
import DroneReport from "../assets/scitech_draft.pdf";

/* ------------------------ CONTACT INFO ----------------------------------------*/
const CONTACT_INFO = {
  name: "Heidi Dixon",
  cell: "541 505 0084",
  email: "heidi.e.dixon@gmail.com",
  github: "https://github.com/wildthinkslaboratory",
  website: "https://wildthinkslaboratory.github.io/personal-site/",
};

function ContactInfo() {
  return (
    <header className="cv-contact">
      <h1>{CONTACT_INFO.name}</h1>

      <ul className="contact-list">
        <li>{CONTACT_INFO.cell}</li>
        <li>{CONTACT_INFO.email}</li>
        <li>{CONTACT_INFO.website}</li>
        <li>{CONTACT_INFO.github}</li>
      </ul>
    </header>
  );
}

/* ------------------------ EDUCATION ----------------------------------------*/

function Education() {
  return (
    <section className="cv-education">
      <h2>Education</h2>

      <ul>
        {EDUCATION_ITEMS.map((item) => (
          <li key={`${item.school}-${item.degree}`}>
            <div className="education-header">
              <span>
                <strong>
                  {item.degree} in {item.department}
                </strong>
                {", "}
                <a href={item.school_link}>{item.school}</a>
              </span>
              <span className="education-year">{item.year}</span>
            </div>

            {item.thesis && (
              <div className="education-thesis">
                Thesis:{" "}
                {item.thesis_link ? (
                  <a href={item.thesis_link}>{item.thesis}</a>
                ) : (
                  item.thesis
                )}
              </div>
            )}

            {item.advisor && (
              <div className="education-advisor">{item.advisor}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------ SKILLS ----------------------------------------*/

const TECH_SKILLS = {
  languages: ["C++", "Python"],
  optimization: [
    "algorithm development",
    "combinatorial optimization",
    "linear and integer programming",
    "Boolean satisfiability (SAT)",
    "search algorithms",
    "planning",
    "scheduling",
    "routing",
    "computational group theory",
  ],
  control: [
    "Model Predictice Control (NMPC / MPC)",
    "numerical optimization",
    "dynamical systems modeling",
    "ROS2",
    "PX4",
    "Raspberry Pi",
  ],
  webdev: ["Typescript/Javascript", "React", "HTML/CSS"],
  other: ["Git", "Linux", "LaTeX", "NumPy", "Casadi", "do-mpc"],
};

const SKILL_LABELS: Record<keyof typeof TECH_SKILLS, string> = {
  languages: "Languages",
  optimization: "Optimization & Algorithms",
  control: "Control & Modeling",
  webdev: "Web Development",
  other: "Tools",
};

function TechnicalSkills() {
  return (
    <section className="cv-tech-skills">
      <h2>Technical Skills</h2>

      <dl className="skill-categories">
        {(Object.keys(TECH_SKILLS) as (keyof typeof TECH_SKILLS)[]).map(
          (category) => (
            <div className="skill-category" key={category}>
              <dt>{SKILL_LABELS[category]}:</dt>
              <dd>{TECH_SKILLS[category].join(", ")}</dd>
            </div>
          ),
        )}
      </dl>
    </section>
  );
}

/* ------------------------ PUBLICATIONS ----------------------------------------*/

const PUBLICATIONS = [
  {
    authors: "Mones I. and Dixon H.",
    link: DroneReport,
    title:
      "Comparison of Direct Methods for NMPC Applied to a Thrust-Vector-Controlled Drone",
    date: "2025",
    publisher: "Technical Report",
    publisher_link: "",
  },
  {
    authors: "Apple, J. et al.",
    link: "https://aaai.org/papers/7798-green-driver-ai-in-a-microcosm/",
    title: "Green Driver: AI in a Microcosm",
    date: "2011",
    publisher: "AAAI",
    publisher_link: "https://aaai.org/",
  },
  {
    authors:
      "Dixon, H. E., Ginsberg, M. L., Hofer, D. K., Luks, E. M., and Parkes, A.",
    link: "https://www.jair.org/index.php/jair/article/view/10407/24941",
    title: "Generalizing Boolean Satisfiability III: Implementation",
    date: "2005",
    publisher: "JAIR",
    publisher_link: "https://www.jair.org/index.php/jair",
  },
  {
    authors: "Heidi E. Dixon",
    link: "https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884",
    title: "Automating Pseudo-Boolean Inference withing a DPLL Framework",
    date: "2004",
    publisher: "PhD Thesis. University of Oregon",
    publisher_link: "https://www.uoregon.edu/",
  },
  {
    authors: "Dixon, H. E., Ginsberg, M. L., Luks, E. M., and Parkes, A. J.",
    link: "https://www.jair.org/index.php/jair/article/view/10397/24905",
    title: "Generalizing Boolean Satisfiability II: Theory",
    date: "2004",
    publisher: "JAIR",
    publisher_link: "https://www.jair.org/index.php/jair",
  },
  {
    authors:
      "Dixon, H. E., Ginsberg, M. L., Hofer, D. K., Luks, E. M., and Parkes, A. J.",
    link: "https://aaai.org/papers/00055-aaai04-009-implementing-a-generalized-version-of-resolution/",
    title: "Implementing a generalized version of resolution",
    date: "2004",
    publisher: "AAAI",
    publisher_link: "https://aaai.org/",
  },
  {
    authors: "Dixon, H. E., Ginsberg, M. L., and Parkes, A. J.",
    link: "https://www.jair.org/index.php/jair/article/view/10369/24816",
    title:
      "Generalizing Boolean Satisfiability I: Background and survey of existing work",
    date: "2004",
    publisher: "JAIR",
    publisher_link: "https://www.jair.org/index.php/jair",
  },
  {
    authors: "Dixon, H. E., Ginsberg, M. L., and Parkes, A. J.",
    link: "https://www.researchgate.net/publication/2539695_Likely_Near-term_Advances_in_SAT_Solvers",
    title: "Likely Near-term Advances in SAT Solvers",
    date: "2002",
    publisher: "MTV Workshop",
    publisher_link: "https://ieeexplore.ieee.org/document/9000128",
  },
  {
    authors: "Dixon H. E. and Ginsberg M. L.",
    link: "https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf",
    title: "Inference methods for a pseudo-Boolean satisfiability solver",
    date: "2002",
    publisher: "AAAI",
    publisher_link: "https://aaai.org/",
  },
  {
    authors: "Dixon, H. E. and Ginsberg, M. L.",
    link: "https://dl.acm.org/doi/abs/10.1017/S0269888900001041",
    title: "Combining Satisfiability techniques from AI and OR",
    date: "2000",
    publisher: "KER 15(1)",
    publisher_link:
      "https://www.cambridge.org/core/journals/knowledge-engineering-review",
  },
];

export function Publications() {
  return (
    <section className="cv-publications">
      <h2>Publications</h2>

      <ul>
        {PUBLICATIONS.map((item) => (
          <li key={item.link || item.title}>
            <span className="authors">{item.authors}</span>{" "}
            <a className="paper" href={item.link}>
              {item.title}.
            </a>{" "}
            {item.publisher_link ? (
              <a className="publisher-link" href={item.publisher_link}>
                {item.publisher}
              </a>
            ) : (
              <span className="publisher">{item.publisher}</span>
            )}
            {", "}
            <span className="publication-date">{item.date}</span>.
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------ VOLUNTEER WORK ----------------------------------------*/

const VOLUNTEER_WORK_DETAIL: ("short" | "long" | "exclude")[] = [
  "long",
  "long",
];

// const VOLUNTEER_WORK_DETAIL: ("short" | "long" | "exclude")[] = [
//   "short",
//   "short",
// ];

const VOLUNTEER_WORK = [
  {
    id: "lego_robotics",
    position: "FLL Lego Robotics Coach",
    employer: "River Road Elementary and Spencer Butte Middle School",
    location: "Eugene, Oregon",
    start_date: "2013",
    end_date: "2017",
    description_long: [
      "Coached elementary school and middle school Lego robotics teams through First Lego League (FLL) competitions.",
      "Taught beginner teams basic coding skills, control structures and hardware control. Introduced students to a simple software design cycle including prototyping, testing and design refinement phases.",
      "Advanced teams designed and built their own robots to take on multi-part missions using a design cycle that stressed multiple iterations through a design, prototype, test and refine cycle. Complex designs are simplified and streamlined, students learn to manage complexity and build precise strategies that reduce error or are flexible enough to tolerate error.",
      "Had three teams qualify for and attend state competitions and had one team win the IBM Award for Innovation at the state competition.",
    ],

    description_short:
      "Taught basic programming and robotics skills to students in the 4th through 8th grade. Created a curriculum focused on iterative design, helping students manage complexity, and creating strategies that are precise and tolerant of error.",
  },
  {
    id: "goldfishandrobin",
    position: "YouTube Channel Advisor",
    employer: "River Road Elementary",
    location: "Eugene, Oregon",
    start_date: "2016",
    end_date: "2018",
    description_long: [
      "Adult supervisor for the kid run YouTube channel GoldfishAndRobin that created educational math content for K-12 level.",
      "Helped kids organize and plan content and production.",
      "Created a safe process for young people to share online content.",
    ],
    description_short:
      "Adult supervisor for the kid run math education YouTube channel GoldfishAndRobin.",
  },
];

/* ------------------------  WORK ----------------------------------------*/

const WORK_DETAIL: ("short" | "long" | "exclude")[] = [
  "long",
  "long",
  "short",
  "short",
  "short",
];

// const WORK_DETAIL: ("short" | "long" | "exclude")[] = [
//   "short",
//   "short",
//   "short",
//   "short",
//   "short",
// ];

const WORK_EXPERIENCE = [
  {
    id: "ots_greendriver",
    position: "Senior Research Engineer",
    employer: "On Time Systems / Connected Signals",
    location: "Eugene, Oregon",
    start_date: "2008",
    end_date: "2012",
    description_long: [
      "Conducted research in search and optimization with a focus in satisfiability testing, planning and large scale scheduling and routing problems.",
      "Familiar with solution methods from the field of Operations Research including linear and integer programming methods.",
      "Helped develop a mobile app that provides real-time traffic routing and traffic light predictions for passenger cars using live traffic light data streams. Scientifically investigated in house methods for predicting traffic routes from smart phone GPS data streams generated by moving cars in traffic.",
      "Developed code in C++, Python, Objective C and Java on both the server side and client side.",
      "Worked on the human resources team as the lead code reviewer for incoming interview candidates and as lead interviewer for identifying mathematical and algorithmic problem solving skills. Conducted code reviews of incoming employee candidates.",
    ],
    description_short:
      "Researched search and optimization algorithms for satisfiability, planning, scheduling, and routing. Developed traffic-routing and prediction software in C++, Python, Objective-C, and Java.",
  },
  {
    id: "zap",
    position: "Senior Research Scientist",
    employer: "On Time Systems",
    location: "Eugene, Oregon",
    start_date: "2004",
    end_date: "2008",
    description_long: [
      "Conducted research in the area of search, optimization, and solution methods for NP-complete problems.",
      "Invented a propositional proof system that improves the efficiency of proofs using group-theoretic methods.",
      "Developed and implemented in C++ the generalized SAT solver ZAP, which provides general purpose systematic solutions to constraint satisfaction problems by using group-theoretic methods to exploit problem struture.",
      "Wrote, published and presented technical papers.",
      "Served as the primary researcher on the DARPA-sponsored project, conducting implementation work and authoring grant reports.",
    ],
    description_short:
      "Devised a group-theoretic approach that exploits mathematical structure lost in conventional Boolean encodings of constraint satisfaction problems. Developed and implemented the generalized SAT solver ZAP in C++. Served as the primary researcher on the DARPA-sponsored project, conducting implementation work and authoring grant reports.",
  },
  {
    id: "cirl",
    position: "Research Assistant",
    employer: "Computational Intelligence Research Lab",
    location: "Eugene, Oregon",
    start_date: "1998",
    end_date: "2004",
    description_long: [
      "Conducted research into systematic search methods for solving NP-complete problems, focusing on integrating techniques and representations from the field of Operations Research into standard satisfiability engines to improve the power of the underlying proof system and improve runtime efficiency. Implemented the solver PBCHAFF in C++. Participated in research into search and optimization in the domains of scheduling and routing.",
    ],
    description_short:
      "Conducted research into systematic search methods for solving NP-complete problems, focusing on integrating techniques and representations from the field of Operations Research into standard satisfiability engines to improve the power of the underlying proof system and improve runtime efficiency. Implemented the solver PBCHAFF in C++. Participated in research into search and optimization in the domains of scheduling and routing.",
  },
  {
    id: "terralink",
    position: "Software Engineer",
    employer: "Terralink",
    location: "Portland, Maine",
    start_date: "1997",
    end_date: "1998",
    description_long: [
      "Developed software in Delphi for hazardous waste tracking and management.",
    ],
    description_short:
      "Developed software in Delphi for hazardous waste tracking and management.",
  },
  {
    id: "gerber",
    position: "Geologist",
    employer: "R.G. Gerber Inc.",
    location: "Freeport, Maine",
    start_date: "1995",
    end_date: "1996",
    description_long: [
      "Ran and evaluated ground water models for environmental consulting firm. Wrote and maintained code in FORTRAN.",
    ],
    description_short:
      "Ran and evaluated ground water models for environmental consulting firm. Wrote and maintained code in FORTRAN.",
  },
  // {
  //   position: "",
  //   employer: "",
  //   location: "",
  //   start_date: "",
  //   end_date: "",
  //   description: "",
  // tags: [],
  // },
];

const TEACHING_DETAIL: ("short" | "long" | "exclude")[] = [
  "long",
  "short",
  "short",
];

// const TEACHING_DETAIL: ("short" | "long" | "exclude")[] = [
//   "short",
//   "short",
//   "short",
// ];

const TEACHING_EXPERIENCE = [
  {
    id: "homeschool",
    position: "Home School Teacher",
    employer: "",
    location: "Eugene, Oregon",
    start_date: "2013",
    end_date: "2025",
    description_long: [
      "Homeschooled my son from fourth grade through high school using a combination of project-based learning coupled with additional instruction from outside institutions.",
      "Developed techniques and strategies for working with students with disabilities.",
      "My son took math classes at the University of Oregon but was unable to attend class in person. To make these classes possible, I provided additional instruction at home in the following classes: Calculus I, Calculus III, Elements of Discrete Math I and II, Several-Variable Calculus I and II, Fundamentals of Analysis I and II, Elementary Linear Algebra I and II, Fundamentals of Number Theory I, Introduction to Abstract Algebra I, Introduction to Programming and Problem Solving, Automata Theory",
    ],
    description_short:
      "Homeschooled my son from fourth grade through high school. Our homeschool philosophy combined project-based learning with additional instruction from outside institutions. Developed techniques and strategies for working with students with disabilities.",
  },
  {
    id: "uo_teacher",
    position: "Adjunct Instructor",
    employer: "University of Oregon",
    location: "Eugene, Oregon",
    start_date: "2013",
    end_date: "2014",
    description_long: [
      "Taught Automata Theory, a combined graduate and undergraduate class and the graduate level Algorithms and Complexity class in the Computer and Information Science Department.",
    ],
    description_short:
      "Taught Automata Theory, a combined graduate and undergraduate class and the graduate level Algorithms and Complexity class in the Computer and Information Science Department.",
  },
  {
    id: "chewonki",
    position: "Mathematics Teacher",
    employer: "The Chewonki Foundation",
    location: "Wiscasset, Maine",
    start_date: "1996",
    end_date: "1997",
    description_long: [
      "Taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program, an environmentally based semester away program for high school juniors. Classes taught: Algebra 2, calculus and statistics.",
    ],
    description_short:
      "Taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program, an environmentally based semester away program for high school juniors. Classes taught: Algebra 2, calculus and statistics.",
  },
  // {
  //   position: "",
  //   employer: "",
  //   location: "",
  //   start_date: "",
  //   end_date: "",
  //   description: "",
  // },
  // {
  //   position: "",
  //   employer: "",
  //   location: "",
  //   start_date: "",
  //   end_date: "",
  //   description: "",
  // },
];

type ExperienceItem = {
  id: string;
  position: string;
  employer: string;
  location: string;
  start_date: string;
  end_date: string;
  description_long: string[];
  description_short: string;
};

function Experience({
  items,
  title,
  details,
}: {
  items: ExperienceItem[];
  title: string;
  details: ("short" | "long" | "exclude")[];
}) {
  return (
    <section className="cv-experience">
      <h2>{title}</h2>

      <ul className="experience-list">
        {items.map((item, index) => {
          if (details[index] === "exclude") return null;

          return (
            <li className="experience-entry" key={index}>
              <div className="experience-header">
                <h3>{item.position}</h3>

                {(item.start_date || item.end_date) && (
                  <span className="experience-dates">
                    {[item.start_date, item.end_date]
                      .filter(Boolean)
                      .join(" – ")}
                  </span>
                )}
              </div>

              {(item.employer || item.location) && (
                <div className="experience-employer">
                  {[item.employer, item.location].filter(Boolean).join(" · ")}
                </div>
              )}

              {details[index] === "long"
                ? item.description_long.length > 0 && (
                    <ul className="experience-bullets">
                      {item.description_long.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )
                : item.description_short && (
                    <p className="experience-description">
                      {item.description_short}
                    </p>
                  )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// const PROJECT_DETAIL: ("short" | "long" | "exclude")[] = [
//   "long",
//   "long",
//   "long",
//   "long",
// ];

const PROJECT_DETAIL: ("short" | "long" | "exclude")[] = [
  "short",
  "short",
  "short",
  "short",
];

const PROJECTS = [
  {
    id: "drone",
    title: "Thrust Vector Drone Project",
    code: "https://github.com/wildthinkslaboratory/hop",
    website: "https://wildthinkslaboratory.github.io/personal-site/#/drone",
    description_long: [
      "Designed and built a thrust vector controlled drone with two stacked brushless motors on a servo-driven gimbal that runs a nonlinear model predictive control (NMPC) algorithm to do vertical takeoff and landing (VTOL). Developed simulation and flight analysis tools.",
    ],
    description_short:
      "Designed and built a thrust vector controlled drone with two stacked brushless motors on a servo-driven gimbal that runs a nonlinear model predictive control (NMPC) algorithm to do vertical takeoff and landing (VTOL).",
  },
  {
    id: "wildthinks",
    title: "WildThinks Website",
    code: "https://github.com/wildthinkslaboratory/wildthinks",
    website: "http://wildthinks.org/",
    description_long: [
      "Developed a website with interactive mathematical learning experiences. It includes a visual introduction to calculus plus interactive apps on fractals, penrose tilings, and alternative base systems.",
    ],
    description_short:
      "Developed a website with interactive mathematical learning experiences. It includes a visual introduction to calculus plus interactive apps on fractals, penrose tilings, and alternative base systems.",
  },
  {
    id: "boggle",
    title: "Boggle Solver",
    code: "https://github.com/wildthinkslaboratory/boggle",
    website:
      "https://wildthinkslaboratory.github.io/personal-site/#/localsearch",
    description_long: [
      "Developed a local search algorithm in C++ to solve the boggle problem (find a maximally scoring boggle board relative to a given dictionary).",
    ],
    description_short:
      "Developed a local search algorithm in C++ to solve the boggle problem (find a maximally scoring boggle board relative to a given dictionary).",
  },
  {
    id: "pbchaff",
    title: "PBCHAFF",
    code: "",
    website: "https://wildthinkslaboratory.github.io/personal-site/#/pbchaff",
    description_long: [
      "Developed a systematic pseudo-Boolean satisfiability solver in C++ that outperformed traditional SAT solvers on problems from the planning domain. (code available upon request)",
    ],
    description_short:
      "Developed a systematic pseudo-Boolean satisfiability solver in C++ that outperformed traditional SAT solvers on problems from the planning domain. (code available upon request)",
  },
  // {
  //   title: "ZAP",
  //   code: "available on request",
  //   website: "Systematic ",
  //   description: "",
  // },
  // {
  //   title: "",
  //   code: "",
  //   website: "",
  //   description: "",
  // },
];

type ProjectItem = {
  title: string;
  code: string;
  website: string;
  description_short: string;
  description_long: string[];
};

function Projects({
  items,
  title,
  details,
}: {
  items: ProjectItem[];
  title: string;
  details: ("short" | "long" | "exclude")[];
}) {
  return (
    <section className="cv-projects">
      <h2>{title}</h2>

      <ul className="project-list">
        {items.map((item, index) => {
          if (details[index] === "exclude") return null;

          return (
            <li className="project-entry" key={item.title}>
              <h3 className="project-title">{item.title}</h3>

              {details[index] === "long"
                ? item.description_long.length > 0 && (
                    <ul className="project-bullets">
                      {item.description_long.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )
                : item.description_short && (
                    <p className="project-description">
                      {item.description_short}
                    </p>
                  )}

              {(item.code || item.website) && (
                <div className="project-links">
                  {item.code && <a href={item.code}>Code</a>}
                  {item.website && <a href={item.website}>Website</a>}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// function Projects({ items, title }: { items: ProjectItem[]; title: string }) {
//   return (
//     <section className="cv-projects">
//       <h2>{title}</h2>

//       <ul className="project-list">
//         {items.map((item) => (
//           <li className="project-entry" key={item.title}>
//             <h3 className="project-title">{item.title}</h3>

//             {item.description && (
//               <p className="project-description">{item.description}</p>
//             )}

//             {(item.code || item.website) && (
//               <div className="project-links">
//                 {item.code && <a href={item.code}>Code</a>}
//                 {item.website && <a href={item.website}>Website</a>}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

/* ------------------------ HOBBIES ----------------------------------------*/

const HOBBIES = ["climbing", "piano", "arts & crafts"];

function Hobbies() {
  return (
    <section className="cv-hobbies">
      <h2>Interests</h2>
      <p>{HOBBIES.join(", ")}</p>
    </section>
  );
}

function ActualResume() {
  return (
    <main className="cv">
      <ContactInfo />

      <TechnicalSkills />

      <Education />

      <Experience
        items={WORK_EXPERIENCE}
        title="Research Experience"
        details={WORK_DETAIL}
      />
      <Experience
        items={TEACHING_EXPERIENCE}
        title="Teaching Experience"
        details={TEACHING_DETAIL}
      />
      <Projects
        items={PROJECTS}
        title="Projects / Code"
        details={PROJECT_DETAIL}
      />
      <Publications />
      <Experience
        items={VOLUNTEER_WORK}
        title="Volunteer Work"
        details={VOLUNTEER_WORK_DETAIL}
      />

      <Hobbies />
    </main>
  );
}

export default ActualResume;
