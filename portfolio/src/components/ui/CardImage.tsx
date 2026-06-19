import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardImage({image, titulo, texto, skills, link1, link2}:{image: string, titulo: string, texto: string, skills:string[], link1: string, link2:string}) {
  return (
    <Card className="relative mx-auto min-w-20 max-w-70 pt-0  h-90 justify-between">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
            src={image}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover "
        />
        <CardHeader>
            <CardTitle>{titulo}</CardTitle>

            <CardDescription>
                {texto}
            </CardDescription>

            <CardDescription className="flex gap-1 flex-wrap  mt-3 min-h-17.25 ">
                {skills.map((skill, index) => (
                    <Badge variant={"destructive"} key={`${skill}-${index}`}>{skill}</Badge>
                ))}
            </CardDescription>

        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-2 p-0 p-2">
            <a href={link1} className="h-10 w-10">
                <img src="/internet.png" alt="" />
            </a>
            <a href={link2} className="h-10 w-10">
                <img src="/github.png" alt="" />
            </a>
        </CardFooter>
    </Card>
  )
}
