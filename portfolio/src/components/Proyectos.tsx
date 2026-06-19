import { CardImage } from "./ui/CardImage"

const Proyectos = () => {
  return (
    <div id="proyectos" className=" w-[90%] cel:w-auto p-10 mt-30 mb-30 rounded-xl flex flex-col items-center justify-center backdrop-blur-3xl shadow-[0_0_7px_1px_rgb(30,33,65)] scroll-mt-27.5 ">
            <h2 className="scroll-m-20  pb-2 pl-7 text-3xl font-semibold tracking-tight first:mt-0 mt-10 w-full flex justify-start">
                Mis Proyectos
            </h2>

            <div  className="flex flex-col gap-10 min-h-120 p-7 lg:flex-row ">
                <CardImage 
                image={"/jugando.PNG"} 
                titulo="Wordle Argentino" 
                texto="" 
                skills={["React.js","TypeScript", "JavaScript", "Taildwind CSS","Node.js","Express", "SQLite Cloud"]}
                link1="https://wordle-con-react-typescript-node-js-chi.vercel.app/"
                link2="https://github.com/aronaguilar/WORDLE-con-REACT-TYPESCRIPT---NODE.JS-EXPRESS-SQLITE"
                />
                <CardImage 
                image={"/enviosflash.PNG"} 
                titulo="Envios Flash" 
                texto="" 
                skills={["React.js","JavaScript","TypeScript","CSS", "Node.js", "Express", "HTML"]}
                link1="https://envios-flash-react.vercel.app/"
                link2="https://github.com/aronaguilar/Envios-Flash---React"
                />
                <CardImage 
                image={"/enviosflash.PNG"} 
                titulo="Envios Flash" 
                texto="" 
                skills={["React.js","JavaScript","TypeScript","CSS", "Node.js", "Express", "HTML"]}
                link1="https://envios-flash-react.vercel.app/"
                link2="https://github.com/aronaguilar/Envios-Flash---React"
                />
                <CardImage 
                image={"/portfolio.PNG"} 
                titulo="Mi Portfolio" 
                texto="" 
                skills={["React.js","TypeScript", "JavaScript", "Shadcn UI","Tailwind CSS", "HTML"]}
                link1="https://portfolio-aron-aguilar.vercel.app/"
                link2="https://github.com/aronaguilar/Portfolio-Aron-Aguilar"
                />
            </div>
        </div>
  )
}

export default Proyectos