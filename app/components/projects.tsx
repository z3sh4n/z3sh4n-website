import { Badge } from "./badge";

export const projects = [
    {
      imageUrl: "/project-imgs/1.png",
      title: "Simple Library",
      description:
        "A library system built with PHP, SQL, HTML, and CSS, featuring CRUD operations, a user review system, Google OAuth authentication, and a normalized MySQL database with optimized queries and secure session management.",
      badges: [
        <Badge key={1} variant="php">PHP</Badge>,
        <Badge key={2} variant="mysql">MYSQL</Badge>,
        <Badge key={3} variant="nextjs">HTML</Badge>,
        <Badge key={4} variant="nextjs">CSS</Badge>
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
        <Badge key={21} variant="php">PHP</Badge>,
        <Badge key={22} variant="wordpress">WordPress</Badge>,
        <Badge key={23} variant="nextjs">HTML</Badge>,
        <Badge key={24} variant="nextjs">CSS</Badge>
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
        <Badge key={31} variant="flutter">Flutter</Badge>,
        <Badge key={32} variant="flutter">Dart</Badge>,
        <Badge key={33} variant="firebase">Firebase</Badge>
      ],
      projectLink: "https://github.com/z3sh4n/deathnote",
      sourceCodeLink: "https://github.com/z3sh4n/deathnote"
    }
  ]
  