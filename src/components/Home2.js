// import { useContext } from "react";
// import { ContextTwo } from "../context2/ContextTwo";
import { useContextTwo } from "../hooks/useContextTwo"

const Home2 = () => {
    
    // const { name, home } = useContext(ContextTwo) 
    const {name, rship, home, color, switsh, nameChanger, colorChanger, jenniferName, ellaName, togle} = useContextTwo()
    
    const outside = () => {
        togle()
        {switsh ? ellaName() : jenniferName()}
    }
  return (
    <div style={{backgroundColor: color}} >
        <h1 >Hi My name is {name} </h1>
        <h1>And I am from {home} in Asari-toru LGA </h1>
        <button onClick={() => nameChanger('Joshua')}>change name</button>
        <button onClick={() => colorChanger('green') } style={{ display: 'block' }}>green background</button>
        <button onClick={() => colorChanger('red') } style={{ display: 'block' }}>red background</button>
        <button onClick={() => colorChanger('purple') } style={{display: 'block'}}>purple background</button>
        
          {/* <button onClick={ellaName} style={{ display: 'block' }}>Ella</button> */}
          {/* <button onClick={jenniferName} style={{ display: 'block' }}>Jennifer</button> */}
          <button onClick={outside}  style={{display: 'block'}}>Ella</button>
    </div>
  )
}

export default Home2