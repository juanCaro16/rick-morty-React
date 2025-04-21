import { useEffect, useState } from "react"
import { Card } from "./Card"
const URL = 'https://rickandmortyapi.com/api/character'

export const RickAndMorty = () => {

  const [characters, setCharacters] = useState([])

  const handleGetCharacters = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setCharacters(data.results)
  }

  useEffect(()=> {
    handleGetCharacters()
}),[]
  
  return (
    <>  
      

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {
          characters.map(character => (
            <Card key={character.id} {...character} />
          ))
        }
      </section>
    </>
  )
}