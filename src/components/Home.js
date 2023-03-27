// import { TrialContext } from '../context/TrialContext'
// import { useContext } from 'react'
import { useTrialContext } from "../hooks/useTrialContext"

const Home = ({ town, lga, babe }) => {
    
    // const {color, name, playful} = useContext(TrialContext)
    
    const { favColor, name, colorSwap, newColor, colorToggle } = useTrialContext()

    
    
  return (
      <div className={colorSwap ? 'brown' : 'white'}>
        <h1>Our deepest fear is not that we are inadequate</h1>
          <h1>Name of my town is {town}</h1>
          <h1>Name of my lga is {lga}</h1>
          <h1>Name of my babe is {babe}</h1>
          <h1 >My favourite color is {favColor}</h1>
          <h1>My name is {name}</h1>
          <button onClick={() => newColor('green')}>green</button>
          <button onClick={() => newColor('orange')} style={{paddingInline:'1em'}}>orange</button>
          <button onClick={() => newColor('red')}>red</button>
          <button onClick={() => colorToggle()} style={{paddingLeft:'1em'}}>toggle color</button>
         
    </div>
  )
}

export default Home