import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import { Separator } from "./components/ui/separator";
import Presentacion from "./components/Presentacion";
import Stack from "./components/Stack";
import { useEffect } from "react";
import { useTheme } from 'next-themes';
import './App.css'

function App() {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
  setTheme('dark');
  }, []);

  console.log(theme)
  
  return (
    
    <div id="inicio" className="contenedor-principal-app bg-[linear-gradient(to_top,#09203f_0%,#537895_100%)] h-full ">
        <Header/>
        <Separator/>
        <Presentacion/>
        <Separator/>
        <Proyectos></Proyectos>
        <Separator></Separator>
        <Stack></Stack>
    </div>
  )
}

export default App
