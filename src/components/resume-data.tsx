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

import climbingPic from "../assets/climb.svg";
import artPic from "../assets/craft.svg";
import chalkbotPic from "../assets/robot.svg";

export const HOBBY_ITEMS = [
  {
    path: "climbing",
    title: "rock climbing",
    image: climbingPic,
  },
  {
    path: "gallery",
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
        <a href="https://artofproblemsolving.com/?srsltid=AfmBOoq4NboKZqfMWPN5quFnWRmc8M63wPjS8QLobkaQbDkgpG3u6Ft3">
          The Art of Problem Solving
        </a>{" "}
        and <a href="https://www.uoregon.edu/">University of Oregon</a>. The
        details of our instruction are in our{" "}
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
        at the University of Oregon earning a 4.09 GPA. He is hoping to attend
        the University of Oregon full time next year. We are so proud of him.
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
      mediaContent: "https://www.desmos.com/calculator/tvuxwxvnew?embed",
      caption: "",
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

import dronePic from "../assets/dronePic.jpeg";
// import droneCad from "../assets/Assembly_1.glb?inline";
import DronePaper from "../assets/simulation.pdf";

export const DRONE_PAGE = {
  title1: "Thrust-Vector Control Drone Project",
  title2: "Rocket Prototype",
  content: (
    <div>
      <p className="story_p" data-media="0">
        I worked on this drone project with{" "}
        <a href="https://izzymones.github.io/personal-website/">my older son</a>{" "}
        who is studying Mechanical and Aerospace Engineering at UC Davis.
      </p>
      <p className="story_p" data-media="0">
        A{" "}
        <a href="https://en.wikipedia.org/wiki/Thrust_vectoring">
          thrust-vector-controlled (TVC)
        </a>{" "}
        drone is a safe and inexpensive way to study control algorithms for
        vertical takeoff and landing of thrust-vector-controlled rockets.
      </p>
      <p className="story_p" data-media="1">
        Our drone thrust is two stacked brushless motors on a servo-driven
        gimbal. The motors rotate in opposite directions to counteract induced
        torques about the vertical axis.
      </p>
      <p className="story_p" data-media="1">
        It uses a <a href="https://px4.io/">Pixhawk</a> flight controller, and
        it runs a{" "}
        <a href="https://en.wikipedia.org/wiki/Model_predictive_control">
          nonlinear model predictive control (NMPC)
        </a>{" "}
        algorithm on a Raspberry Pi 5. The overall result is a vehicle that
        recreates many of the challenges of controlling a real rocket.
      </p>
      <p className="story_p" data-media="2">
        To create a fast and responsive control algorithm, we needed our NMPC
        algorithm to run at 50Hz on the Raspberry Pi 5. The primary computation
        task of an NMPC solver is the solution of the embedded nonlinear
        programming problem (NLP). We experimented with three formulations for
        the NLP, a standard multiple shooting version, a Chebyshev
        pseudospectral collocation method and an orthogonal collocation method.
        These methods are all based on different numerical methods for solving
        and integrating systems of differential equations. These types of
        control algorithms use many of the well known linear and nonlinear
        optimization solvers from Operations Research that I studied during my
        Ph.D. program so it was fun to apply some of my old knowledge in a fresh
        new domain. We compared the relative efficiency and accuracy of our
        formulations. With proper tuning, all of these methods met the stated
        performance requirement and produced robust trajectories that converged
        to the goal state.
      </p>
      <p className="story_p" data-media="2">
        This project involves managing significant complexity: tracking multiple
        data streams within a precise timing grid while running iterative,
        recursive control algorithms that can produce unpredictable or emergent
        behaviors. We emphasized modular design and rigorous testing. We built
        testing suites, data logging pipelines, and visualization tools to
        evaluate performance, diagnose instability, and refine controller
        behavior. This structured approach helped us make sense of the drone's
        behavior, find bugs and improve performance.
      </p>
      <p className="story_p" data-media="3">
        Our initial testing produced robust flight behavior in an indoor
        environment, but you can see from the video on the right that we don’t
        yet have precise position control. We’ll do another round of testing
        when my son comes home for spring break.
      </p>
    </div>
  ),

  media: [
    {
      mediaContent:
        "https://www.youtube.com/embed/N2oum2yvaio?si=0yl7i9JgERu6SJx4",
      caption: "drone flight",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/qP2U-lA7jI4?si=F3cORvvv8r0TS7KZ",
      caption: "simulations",
      mediaType: "video",
      link: "",
    },

    {
      mediaContent:
        "https://www.youtube.com/embed/m86OpVHrvyQ?si=ErMlOUO9U45eMsKa",
      caption: "gimbal closeup",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: dronePic,
      caption: "TVC drone",
      mediaType: "image",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/hop",
  link: "",
  pubs: [
    {
      citation:
        "Mones and Dixon, Comparison of Direct Methods for NMPC Applied to a Thrust-Vector-Controlled Drone.  Thechnical Report. 2025.",
      link: DronePaper,
    },
  ],
};

import DroneWorldFrame from "../assets/DroneWorldFram.jpeg";
import NMPC from "../assets/NMPC.jpeg";
import NPLresults from "../assets/NLPformResults.png";

export const DRONE_STORY = {
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
        Engineering. The drone's thrust comes from two stacked brushless motors
        on a servo-driven gimbal. The motors rotate in opposite directions to
        counteract induced torques about the vertical axis. It uses a{" "}
        <a href="https://px4.io/" target="_blank" className="external-link">
          Pixhawk
        </a>{" "}
        flight controller, an{" "}
        <a
          href="https://arkelectron.com/product/ark-flow/"
          target="_blank"
          className="external-link"
        >
          optical flow sensor
        </a>{" "}
        and it runs a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Model_predictive_control"
          target="_blank"
          className="external-link"
        >
          nonlinear model predictive control (NMPC)
        </a>{" "}
        algorithm on a Raspberry Pi 5. The overall result is a vehicle that
        recreates many of the challenges of controlling a real rocket.
      </div>,
    ],
    [
      1,
      <div className="story-p">
        If you want to skip the details, you can see the drone fly{" "}
        <a
          href="https://www.youtube.com/watch?v=N2oum2yvaio"
          target="_blank"
          className="external-link"
        >
          here
        </a>
        .
      </div>,
    ],
    [
      2,
      <div className="story-p">
        Here's a close up of the gimbal movement. You can see the two orthogonal
        rotations.
      </div>,
    ],
    [
      3,
      <div className="story-p">
        The drone uses 13-state, six degrees of freedom (6-DOF) dynamics with a
        control input that includes the two gimbal angles, the average thrust
        and differential thrust between the two motors. The goal is to choose
        control parameters that allow the drone to balance vertically and move
        precisely to specified positions in 3D space.
      </div>,
    ],
    [
      4,
      <div className="story-p">
        We determined our thrust model experimentally as a function of the motor
        pulse width modulation (PWM). During live testing we quickly realized
        the thrust model wasn't accurate at high PWM or when the battery was
        low. We needed to consider the current battery voltage in our model. We
        repeated our thrust testing at a range of voltages to get a more
        accurate curve.
      </div>,
    ],
    [
      5,
      <div className="story-p">
        An NMPC algorithm optimizes a control trajectory across a time horizon.
        It minimizes a cost function relative to the dynamic and physical
        constraints. It makes subroutine calls to the same type of optimization
        solvers that I studied during my Ph.D. program. It was fun to apply some
        of my old knowledge in a fresh new domain.
      </div>,
    ],
    [
      6,
      <div className="story-p">
        We needed our NMPC algorithm to be fast. The goal was to run at 50Hz on
        the Raspberry Pi 5. The primary computation task of an NMPC solver is
        the solution of the nonlinear programming problem (NLP). We tried three
        formulations for the NLP, a standard multiple shooting version, a
        Chebyshev pseudospectral collocation method and the orthogonal
        collocation method used by{" "}
        <a
          href="https://www.do-mpc.com/en/latest/"
          target="_blank"
          className="external-link"
        >
          do-mpc
        </a>
        With proper tuning, all methods ran at 50Hz on the Pi and produced
        reliable trajectories.
      </div>,
    ],
    [
      7,
      <div className="story-p">
        The NMPC controlled drone is a complex system that can produce
        unpredictable emergent behavior. To manage complexity, we built
        simulation and visualization tools and data logging pipelines.
        Simulation tools allowed us to verify our algorithm behavior before
        actual test flights. If I had it to do over again, I'd use simulations
        to inform the physical design of the drone.
      </div>,
    ],
    [
      7,
      <div className="story-p">
        The ability to analyze flight data was essential. Graphing our state and
        control residuals helped us tune our cost function. By feeding our
        flight data into our simulation tools we could compare actual behavior
        with predicted behavior. This enabled us to find inaccuracies in our
        model measurements.
      </div>,
    ],
    [
      8,
      <div className="story-p">
        Our initial testing produced robust flight behavior in an indoor
        environment, but you can see from the video on the right that we don’t
        yet have precise position control. We have a ton of flight data to
        analyze and we’ll do another round of testing during spring break.
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
      mediaContent: "https://www.desmos.com/calculator/azlbmntr5o",
      caption: "Thrust Testing",
      mediaType: "desmos",
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
        "https://www.youtube.com/embed/qP2U-lA7jI4?si=j1i44StU02FDRYJg",
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
