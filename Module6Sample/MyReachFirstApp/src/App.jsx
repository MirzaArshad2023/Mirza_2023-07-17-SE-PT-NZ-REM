import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExampleComponent from './ExampleComponent'
import { FullName } from './FullNameComp'
import './App.css'
import { Callout } from './Callout'
import MovieList from './MovieList'
function App() {
  //const [count, setCount] = useState(0)
  const trainerName = 'Mirza'
  function InstituteName()
  {
    return "IOD";
  }  
  return (
    <>
      {/*<h1>My first react project</h1>
      <h2>My second heading added by {trainerName} from institute {InstituteName()}</h2>
  <p id='parag1' className=''>My paragraph</p>*/}
      <h1>Third paragraph</h1>
      <br/>
      <ExampleComponent fistName='Mirza' Institute='IOD'>
          <h3>Child of an example Component</h3>
      </ExampleComponent>
      <FullName firstName='Mirza' lastName='Arshad'></FullName>


      <Callout title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
        <FullName firstName="Elon" lastName="Musk" />
      </Callout>
      <MovieList></MovieList>
    </>
  )
}

export default App
