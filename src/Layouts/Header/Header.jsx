import { ItemNavLink } from "../../Components/ItemNavLink/ItemNavLink"
import { NavBar } from "../NavBar/NavBar"


export const Header = () => {
  return (
    <div className="bg-slate-800 w-[100vw] text-white h-30 flex-col flex justify-center items-center">
        <h1 className="text-5xl font-black text-amber-300">Consumo de Api's</h1>
        
    <NavBar stylesNavBar={"flex flex-row font-bold gap-5 mt-3"}>
            <ItemNavLink route={"/Rick-Morty"} content={"Rick And Morty"}/>
            <ItemNavLink route={"/Cats"} content={"Cats"}/>
            <ItemNavLink route={"/Gifs"} content={"Gifs"}/>
    </NavBar>      
    </div>
  )
}
