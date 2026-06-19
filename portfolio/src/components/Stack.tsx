import TituloChico from "./ui/TituloChico"

const Stack = () => {

    interface Herramienta {
    nom: string,
    img: string
  }

  const herramientas:Herramienta[] = [
    {nom:"HTML", img:"/html.png"},
    {nom:"CSS", img:"/css.png"},
    {nom:"JavaScrip", img:"/js.png"},
    {nom:"TypeScript", img:"/ts.png"},
    {nom:"React.js", img:"/react.png"},
    {nom:"Redux Toolkit", img:"/redux.png"},
    {nom:"Tailwind CSS", img:"/tailwind.png"},
    {nom:"Node.js", img:"/node.png"},
    {nom:"Express", img:"/express.png"},
    {nom:"SQLite", img:"/sql.png"},
    {nom:"Git", img:"/git.png"},
    {nom:"GitHub", img:"/github.png"},
    {nom:"Postman", img:"/postman.png"},
    {nom:"Cypress", img:"/cypress.svg"},
    {nom:"Photoshop", img:"/ph.png"},
    {nom:"Illustrator", img:"/ill.png"},
    {nom:"Figma", img:"/figma.png"}
   
  ]
  
  return (
    <section id="lenguajes" 
        className=" h-auto flex flex-col gap-10 items-center justify-center mb-50
         backdrop-blur-3xl shadow-[0_0_7px_1px_rgb(30,33,65)] scroll-mt-27.5
        w-[90%] cel:w-120 lg:w-205 rounded-xl mt-30 p-10 "
    >
        <h2 className="scroll-m-20  pb-2 text-2xl cel:text-3xl font-semibold tracking-tight ">
            Lenguajes y Frameworks
        </h2>

        <div className="flex gap-10 w-full flex-wrap items-center justify-center">
            {herramientas.map((herra) => (
                /* Agregamos la prop key aquí */
                <div key={herra.nom} className="flex flex-col items-center justify-center gap-2">
                <img src={herra.img} alt={herra.nom} className="w-10 h-10"/>
                <TituloChico>{herra.nom}</TituloChico>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Stack