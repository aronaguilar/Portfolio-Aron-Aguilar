

const Presentacion = () => {
  return (
    <div className="flex items-center justify-center w-full gap-10 mt-20">
        <section className="h-150 flex flex-col items-center justify-center gap-3">
                <h2 className="scroll-m-20  pb-2 text-3xl font-extrabold tracking-tight 
                                first:mt-0 mt-10 text-[rgb(30,33,65)]"
                >
                    FRONTEND DEVELOPER
                </h2>
                <h1 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight text-balance">
                    PABLO ARÓN AGUILAR
                </h1>

                <div className="flex gap-4 mt-4">
                    <a 
                        href="https://www.linkedin.com/in/pablo-ar%C3%B3n-aguilar-585652236/"
                        className="w-15 h-15"
                    >
                        <img src="/linkedin.png" alt="" className="w-full h-full rounded-full"/>
                    </a>
                    <a 
                        href="https://github.com/aronaguilar"
                        className="w-15 h-15"
                    >
                        <img src="/github.png" alt="" className="w-full h-full rounded-full"/>
                    </a>
                </div>

        </section>
        <div className="hidden mio:block">
            <img src="/fotocv.jpg" alt="" className="h-60 w-60 rounded-full"/>
        </div>
    </div>
  )
}

export default Presentacion