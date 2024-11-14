import { Badge } from "./badge";

export const projects = [
    {
      imageUrl: "/project-imgs/1.png",
      title: "Simple Library",
      description:
        "A library system built with PHP, SQL, HTML, and CSS, featuring CRUD operations, a user review system, Google OAuth authentication, and a normalized MySQL database with optimized queries and secure session management.",
      badges: [
        <Badge variant="php">PHP</Badge>,
        <Badge variant="mysql">MYSQL</Badge>,
        <Badge variant="nextjs">HTML</Badge>,
        <Badge variant="nextjs">CSS</Badge>
      ],
      projectLink: "https://github.com/z3sh4n/SimpleLibrary",
      sourceCodeLink: "https://github.com/z3sh4n/SimpleLibrary"
    },
    {
      imageUrl: "/project-imgs/2.png",
      title: "Number Calculators",
      description:
        "A versatile calculator capable of performing operations like GCD, LCM, percentage, and factorization. Integrated into WordPress via shortcodes, with step-by-step explanations for each result.",
      badges: [
        <Badge variant="php">PHP</Badge>,
        <Badge variant="wordpress">WordPress</Badge>,
        <Badge variant="nextjs">HTML</Badge>,
        <Badge variant="nextjs">CSS</Badge>
      ],
      projectLink: "https://exceldatapro.com/calculators/",
      sourceCodeLink: "https://exceldatapro.com/calculators/"
    },
    {
      imageUrl: "/project-imgs/3.png",
      title: "DeathNote",
      description:
        "A note-taking app built using Flutter and Firebase, supporting offline creation and real-time synchronization. It features secure login with Google Sign-In and automatic sync upon internet connection.",
      badges: [
        <Badge variant="flutter">Flutter</Badge>,
        <Badge variant="flutter">Dart</Badge>,
        <Badge variant="firebase">Firebase</Badge>
      ],
      projectLink: "https://github.com/z3sh4n/deathnote",
      sourceCodeLink: "https://github.com/z3sh4n/deathnote"
    }
  ]
  