import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar'
import { HoverEffect } from './components/card-hover-effect';
import { skills } from './components/skills';
import ProjectCard from "./components/project-card"
import { Badge } from './components/badge';
import { projects } from './components/projects';


export default function Page() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatar/me.png" />
            <AvatarFallback>Z</AvatarFallback>
          </Avatar>
          <div className="ml-8">
            <p className="mt-2 text-2xl font-semibold">Hey, I'm Zeeshan 👋</p>
            <p className="flex items-center mt-1">
              <Image src="/location.svg" alt="location" width={16} height={16} style={{ filter: 'invert(45%)' }} />
              <span className="ml-1 text-base text-gray-500">Surat, IN</span>
            </p>
          </div>
          <div className="bg-blue"></div>
        </div>
        <div className="mt-8 space-y-6">
          <p className="text-base leading-relaxed">
            I'm a PHP developer who loves making websites work better and faster. At Web Turtles, I build tools that make websites run smoothly. I create practical solutions that solve real problems.
          </p>
          <p className="text-base leading-relaxed">
            I get excited about building things that actually help people get stuff done, What drives me is solving real problems and making sure everything I build is reliable and easy to use.
          </p>
        </div>
        <div>
          <p className="mt-8 text-xl font-semibold">Skills:</p>
          <HoverEffect items={skills} />
        </div>
        <div>
        <p className="mb-8 text-xl font-semibold">Projects:</p>
        <div className='grid grid-cols-1 gap-4'>
          <ProjectCard projects={projects} ></ProjectCard>
        </div>
        </div>
      </div>
    </section>
  )
}

