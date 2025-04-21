import { Header } from "./Layouts/Header/Header"
import { Routes,Route } from "react-router-dom"
import { Main } from "./Layouts/Main/Main"
import { RickAndMorty } from "./RickAndMorty"


export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/Rick-Morty" element={<Main/>}/>
      <Route />
      <Route />
    </Routes>
    <RickAndMorty />
    

    </>
  )
}
