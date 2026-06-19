const SobreMi = () => {
 
  return (
    <section
      id="sobre-mi"
      className="w-[90%] cel:w-120 lg:w-205 p-10 mt-30 mb-30 rounded-xl flex flex-col gap-6 items-stretch justify-center backdrop-blur-3xl shadow-[0_0_7px_1px_rgb(30,33,65)] scroll-mt-27.5"
    >
      <h2 className="scroll-m-20 pb-2 text-2xl cel:text-3xl font-semibold tracking-tight">
        Sobre mí
      </h2>
      <div className="flex flex-col gap-4 text-pretty text-sm cel:text-base leading-relaxed text-[rgb(30,33,65)] dark:text-foreground/90">
        <p>
          Soy desarrollador frontend y me gusta construir interfaces claras, rápidas y
          accesibles. Trabajo principalmente con React, TypeScript y Tailwind, y también
          tengo experiencia con Node.js y Express cuando el proyecto lo requiere.
        </p>
        <p>
          Disfruto pulir el detalle visual, probar flujos reales de usuario y dejar el
          código ordenado para que sea fácil de mantener. Si querés charlar sobre un
          proyecto o una oportunidad, podés escribirme por LinkedIn o ver más trabajo en
          GitHub.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
