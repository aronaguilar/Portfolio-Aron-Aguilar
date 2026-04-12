import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DropdownMenuBasic = () => {
  return (
    <div className="cel:hidden">
        <DropdownMenu >
            <DropdownMenuTrigger asChild >
                <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>{window.location.href ='#inicio'}}>Inicio</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{window.location.href ='#proyectos'}}>Proyectos</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{window.location.href ='#lenguajes'}}>Stack</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{window.location.href ='#inicio'}}>Sobre mi</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>{window.location.href ='https://github.com/aronaguilar'}}>GitHub</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{window.location.href ='https://www.linkedin.com/in/pablo-ar%C3%B3n-aguilar-585652236/'}}>Linkedin</DropdownMenuItem>
                    <a 
                        href="Aron Aguilar - cv.pdf" 
                        download="AronAguilar-CV.pdf"
                        className="text-sm p-1.5 text-red-500"
                    >
                        Descargar CV
                    </a>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
    
  )
}

export default DropdownMenuBasic

