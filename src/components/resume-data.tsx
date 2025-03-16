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
import dpll1Pic from "../assets/dpll1.png";
import dpll2Pic from "../assets/dpll2.png";
import cutPic from "../assets/branchCut.png";
import bogglePic from "../assets/boggle.png";
import localsearchPic2 from "../assets/localsearch.png";
import chewonkiPic2 from "../assets/chewonki2.jpg";
import julia13Pic from "../assets/julia13.png";
import ftcPic from "../assets/ftc.png";
import calcRectPic from "../assets/calcRect.png";

import chalkBotPic1 from "../assets/chalkbot.jpeg";
import electronicsPic from "../assets/electronics.jpeg";
import chalkBot2Pic from "../assets/chalkbot2.jpeg";
import chalkBot3Pic from "../assets/chalkbot3.jpeg";

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
  title2: "Boggle",
  content: (
    <div>
      <p>
        When the search space of an optimization problem is too large to solve
        completely, the only option is to use local search methods. Two domains
        my lab specialized in were large scale scheduling and routing problems.
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
    { mediaContent: localsearchPic2, mediaType: "image", link: "" },
    {
      mediaContent: bogglePic,
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
      mediaContent:
        "https://www.youtube.com/embed/A_r-XQ5sLCA?si=B7HV-ogMNFmhvWHg",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: "https://youtube.com/embed/YnA8bkeFmDI?si=E2nuq3ccuAL9DCtZ",
      mediaType: "short",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/s7JqHHQ9L_E?si=D88N7B6qNyOPxm2J",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/X6yaPpIIUHk?si=ve9GLNRWEq8SIGky",
      mediaType: "video",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

// export const MY_PAGE = {
//   title1: "",
//   title2: "",
//   content: <div></div>,
//   media: [],
//   code: "",
//   link: "",
//   pubs: [],
// };

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
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: dpll2Pic,
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: cutPic,
      mediaType: "image",
      link: "",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/satlib/tree/main/pbchaff",
  link: "",
  pubs: [
    {
      citation:
        "Heidi E. Dixon, PhD Thesis. Automating Pseudo-Boolean Inference withing a DPLL Framework University of Oregon. 2004.",
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
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

export const WT_PAGE = {
  title1: "Wild Thinks Website",
  title2: "interactive math adventures",
  content: (
    <div>
      <p>
        This page highlights my website,{" "}
        <a href="https://wildthinks.org/">WildThinks</a>, that hosts many
        explorable math explanations. Some of my favorite applications are
        linked in the images to the right. If you want to know the story behind
        my site then continue reading.
      </p>
      <p>
        I started teaching high school mathematics at the Chewonki foundations
        Maine Coast Semester Program. I taught all the standard classes, lots of
        Algebra II classes, some statistics and a calculus class. I had no
        control over what book I used or what topics to cover. Later having
        young children in the public school system I got even more exposure to
        the K-12 math curriculum in America.
      </p>
      <p>
        The math we teach kids in school doesn’t look anything like the
        beautiful ideas I cherished from my college and graduate school days. I
        didn’t want my kids to have to wait until college to experience the joy
        of mathematics so I started searching for tools and resources that would
        give them the same sense of wonder that I had experienced only at an
        appropriate K-12 level.
      </p>
      <p>
        So how do you bring young children and teenagers into the
        mathematicians' world? That’s a complex question that I’m still trying
        to answer, but I’m confident that the process should change. In most
        classrooms, the teacher tells the students how to do math by giving them
        very specific algorithms that they are required to use for the purpose
        of computing things. Things proceed on a strict timeline with very
        little thinking, reasoning, exploration or discovery. I believe that
        rather than being told how to do mathematics, mathematics should be
        discovered by the students like the world's most fabulous treasure hunt.
        Students should get to reinvent it from the ground up. This process is
        harder, and at times more frustrating for students, but it’s also more
        exciting and more fun. The students gain an entirely different tool set.
        Rather than learning how to follow rules and accept what they are told,
        they learn to figure things out on their own. They become confident
        problem solvers. They learn how to create and invent mathematics. Most
        of what they invent will not be new to the world, but through the
        process of inventing they will come to think like mathematicians.
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
      mediaType: "image link",
      link: "https://wildthinks.org/pages/SuperJulia",
    },
    {
      mediaContent: ftcPic,
      mediaType: "image link",
      link: "https://wildthinks.org/pages/ftc1/",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/oXyek2Q40AI?si=E3mT4sUw4i__iz1Z",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: calcRectPic,
      mediaType: "image link",
      link: "https://wildthinks.org/pages/rectangle1/",
    },
  ],
  code: "https://github.com/wildthinkslaboratory/blog-kit",
  link: "https://wildthinks.org/",
  pubs: [],
};

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
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: chalkBotPic1,
      mediaType: "image",
      link: "",
    },
    {
      mediaContent:
        "https://www.youtube.com/embed/Tdn9ZR6qVBE?si=KhFjbuUBvQDiDec_",
      mediaType: "video",
      link: "",
    },
    {
      mediaContent: chalkBot2Pic,
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: electronicsPic,
      mediaType: "image",
      link: "",
    },
    {
      mediaContent: chalkBot3Pic,
      mediaType: "image",
      link: "",
    },
  ],
  code: "",
  link: "",
  pubs: [],
};

export const LR_PAGE = {
  title1: "",
  title2: "",
  content: <div></div>,
  media: [],
  code: "",
  link: "",
  pubs: [],
};

export const GR_PAGE = {
  title1: "",
  title2: "",
  content: <div></div>,
  media: [],
  code: "",
  link: "",
  pubs: [],
};

export const UO_PAGE = {
  title1: "",
  title2: "",
  content: <div></div>,
  media: [],
  code: "",
  link: "",
  pubs: [],
};
