import { Button } from "@/components/ui/button";
import { File, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectBoxInterface {
  title: string;
  href: string;
  description: string;
  technologies: {
    name: string;
  }[];
}

export function ProjectBox({
  title,
  description,
  technologies,
  href,
}: ProjectBoxInterface) {
  return (
    <div className="bg-white/10 flex justify-between flex-col p-4 max-w-[33%] hover:scale-105 transition-all space-y-5 group rounded-lg">
      <div className="flex items-center space-x-5 pb-2 border-b-2 border-b-white">
        <File />
        <h1 className="font-bold text-2xl group-hover:text-blue-500">
          {title}
        </h1>
      </div>
      <p>{description}</p>
      <div className="flex space-x-4">
        {technologies.map((tech) => (
          <b key={tech.name}>{tech.name}</b>
        ))}
      </div>
      <Button className="space-x-2">
        <LinkIcon />
        <Link href={href}>Check the repository</Link>
      </Button>
    </div>
  );
}
