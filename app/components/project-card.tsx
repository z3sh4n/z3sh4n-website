import { Card, CardContent, CardFooter } from "./card"
import { Button } from "./button"
import Image from "next/image"
import * as React from "react"
import { Badge } from "./badge"
import Link from "next/link"

export default function ProjectCard({
  projects,
}: {
  projects: {
    imageUrl: string
    title: string
    description: string
    badges: React.ReactNode[]
    projectLink: string
    sourceCodeLink: string
  }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="max-w-xl hover:scale-105 hover:shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
                layout="fill"
              
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }
              }
            />
          </div>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.badges}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Link href={project.projectLink}>
              <Button>Visit</Button>
            </Link>
            <Link href={project.sourceCodeLink}>
              <Button variant="outline">Source Code</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


