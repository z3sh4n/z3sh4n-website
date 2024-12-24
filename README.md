# Z3SH4N Website

A customizable, modern portfolio website to showcase your projects, skills, and achievements. This template is inspired by the elegant design and user experience of [Duy le's portfolio](https://www.duyle.dev/).

## Features

- Responsive design that looks great on all devices
- Customizable sections for projects, blog posts, and skills
- Smooth page transitions and animations
- SEO optimized
- Built with performance in mind

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/z3sh4n/z3sh4n-website.git
cd z3sh4n-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Customization

### Personal Information

Edit `app/page.tsx` to update your personal information:

- Name and title
- Avatar image (place new image in `public/avatar/`)
- About me description
- Resume link

### Skills & Technologies

Modify `app/components/skills_icon` to list your technical skills:

- Convert the SVG of the skill to a React component using a tool like [svgr](https://github.com/smooth-code/svgr)
- Place the generated component in the `app/components/skills_icon` folder
- then edit this list `app/components/skills.tsx` to show case that skill on main page

### Projects

Add your projects in `app/components/projects.tsx`:

- Project title
- Description
- Technologies used
- GitHub repository link
- Live demo link
- Screenshot/preview image

### Blog Posts

Update `app/blog/posts` to feature your latest articles as mdx:

- Title
- Publication date
- Description
- Link to full article
- Cover image

## Deployment

Deploy to your preferred hosting platform:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

i have used vercel for hosting, and its great in my opinion

## Acknowledgments

- Design inspired by [Duy le's portfolio](https://www.duyle.dev/)
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Next.js](https://nextjs.org/)

## Contact

For any questions or feedback, please reach out to [your-email@example.com]


## TODOS

- [x] add avatar and that little tag of me and my name
- [x] add description
- [x] add skill section
- [x] add nav bar
- [x] add project section
- [x] add Blog section
- [x] remove that blur animation and try to replace with something else
- [x] break main elements into parts
- [x] add contact button
- [x] update metadata
- [x] fix some UI on mobile
- [ ] add that avatar type animation
- [ ] add cv section from that github repo