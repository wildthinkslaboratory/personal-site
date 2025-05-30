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
      "I homeschooled my son from fourth grade through high school. Our homeschool philosophy combined project-based learning with additional instruction from outside institutions.",
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
      "I taught high school mathematics at the Chewonki Foundation’s Maine Coast Semester Program. Mostly Algebra 2, but also a calculus class and a statistics class.",
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
      <p>
        I started climbing about seven years ago when my kids got interested in
        it. Now I can’t imagine my life without it. When you climb, the body is
        like a complex force meter. Neurons from fingertips to toes and
        everywhere in between flood the brain with messages and senses about
        directional forces. In a flow state, the brain just integrates them and
        perfectly calculates the next movement. I love this experience, building
        the neural circuitry needed through volume and repetition until our body
        just knows what to do. Climbing is also a way to practice managing fear.
        I am by nature a risk averse person. To climb well, you need to be able
        to move well when you’re scared. You need to move freely and with
        commitment while your brain is screaming at you to freeze. When you move
        through that barrier of fear and flow upward, grasp the next hold and
        your fingers stick, the burst of exhilaration is unbeatable. It’s so
        hard and at the same time addictive. It becomes a need and I have to
        climb.
      </p>
    </div>
  ),
  media: [
    {
      mediaContent: "https://youtube.com/embed/YnA8bkeFmDI?si=E2nuq3ccuAL9DCtZ",
      caption: "",
      mediaType: "short",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/Qs-pHOdNhZw?si=mPtamq3y0kqvdk96",
      caption: "",
      mediaType: "short",
      link: "",
    },
    {
      mediaContent: "https://www.youtube.com/embed/-gQQRK8Lc4Y",
      caption: "",
      mediaType: "short",
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
        "Heidi E. Dixon, PhD Thesis. Automating Pseudo-Boolean Inference withing a DPLL Framework. University of Oregon. 2004.",
      link: "https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=15ee55bbb6396f9b5c2c6a088b7526c954d2f884",
    },
    {
      citation:
        "Heidi E. Dixon and Matthew L. Ginsberg, 2002. Inference methods for a pseudo-Boolean satisfiability solver. The Eighteenth National Conference on Artificial Intelligence (AAAI-2002).",
      link: "https://cdn.aaai.org/AAAI/2002/AAAI02-095.pdf",
    },
    {
      citation:
        "Heidi E. Dixon and Matthew L. Ginsberg, 2000. Combining Satisfiability techniques from AI and OR. The Knowledge Engineering Review 15(1).",
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
        "Heidi E. Dixon, Matthew L. Ginsberg, Eugene M. Luks, and Andrew J. Parkes, 2004 Generalizing Boolean Satisfiability II: Theory. Journal of Artificial Intelligence Research, 22:481-534.",
      link: "https://www.jair.org/index.php/jair/article/view/10397/24905",
    },
    {
      citation:
        "Heidi E. Dixon, Matthew L. Ginsberg, David Hofer, Eugene M. Luks, and Andrew J. Parkes, 2005. Generalizing Boolean Satisfiability III: Implementation. Journal of Artificial Intelligence Research, 23:441-531.",
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
