import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface SkillBoxProps {
  imgSrc: string;
  alt: string;
}

export function SkillBox({ alt, imgSrc }: SkillBoxProps) {
  return (
    <div className="flex">
      <div className="bg-white rounded-md hover:opacity-80 hover:scale-110 transition-all w-[80px] p-4 flex flex-col justify-center items-center">
        <Tooltip>
          <TooltipTrigger>
            <Image src={imgSrc} width="70" height="60" alt={alt} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{alt}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
