import { Button } from "./ui/button"
import DropdownMenuBasic from "./DropdownMenuBasic"

const Header = () => {
  return (
    <div className="h-25 w-full p-7  flex items-center justify-between fixed backdrop-blur-sm z-50">

       <div className=" gap-2 items-center justify-center flex">
            <img src="/fotocv.jpg" alt="" className="w-12 h-12 border rounded-full border-1 border-[rgb(57,64,124)]"/>
            <div className="">
                <h1 className="text-center text-xs font-semibold tracking-tight mt-1">
                    PABLO ARÓN AGUILAR
                </h1>
                <h2 className=" text-xs tracking-tight text-[rgb(30,33,65)]">
                    Frontend Developer
                </h2>
            </div>
       </div>

       <div>
            <DropdownMenuBasic>

            </DropdownMenuBasic>
       </div>

       <div className=" gap-4 hidden cel:flex">
            <div className="flex gap-1">
                <a href="#inicio">
                    <Button variant="outline">Inicio</Button>
                </a>
                <a href="#proyectos">
                    <Button variant="outline">Preyectos</Button>
                </a>
                <a href="#lenguajes">
                    <Button variant="outline">Lenguajes y Herramientas</Button>
                </a>
                <a href="">
                    <Button variant="outline">Sobre mi</Button>
                </a>
            </div>

            <a href="Aron Aguilar - cv.pdf" download="AronAguilar-CV.pdf" 

            className="group/button inline-flex shrink-0 items-center justify-center 
                rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap 
                transition-all outline-none select-none focus-visible:border-ring 
                focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px 
                disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive 
                aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 
                dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border 
                bg-background text-[rgb(30,33,65)] hover:bg-muted hover:text-[rgb(48,53,105)] 
                aria-expanded:bg-muted aria-expanded:text-foreground dark:border-[rgb(30,33,65)]
                dark:hover:border-[rgb(48,53,105)] dark:bg-input/30 dark:hover:bg-input/50 cursor-pointer 
                h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 "
            >
                Descargar CV
            </a>
       </div>
       
        
    </div>
    

  )
}

export default Header