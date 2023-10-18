import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExampleComponent from './ExampleComponent'
import City from './City'
import './App.css'
import FullName from './FullName'
import ComplexComment from './ComplexComment'
import Comment from './Comment'
import Callout from './CallOut'
import MoviesList from './MovieList'
import ShowCounts from './ShowCounts'
import { BirthdayTranslator } from './BirthdayTranslator'
import Weather from './Weather'
import UserForm from './UserForm'
import LoginForm from './LoginForm'
import ExplodingBomb from './ExplodingBomb'

function App() {
  const trainerName = "Mirza"
  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </>);
  
  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  function getInstituteName()
  {
    return "IOD";
  }

  return (
          <>
          <ExplodingBomb></ExplodingBomb>
          <LoginForm></LoginForm>
           {/* {spideyJSX}
            <ExampleComponent firstName='Mirza' Institute='IOD'>
                <City><h1>City component child</h1></City>
  </ExampleComponent>*/}
            {/*<FullName firstName="Mirza" lastName="Arshad"></FullName>*/}
      {/*<ComplexComment author={comment.author} date={comment.date} text={comment.text} />*/}
      {/*<ShowCounts></ShowCounts>*/}
      {/*<Comment author={comment.author} date={comment.date} text={comment.text}></Comment>*/}
      
      {/*<Callout title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
        <FullName firstName="Elon" lastName="Musk" />
</Callout>*/}
      <MoviesList></MoviesList>
      <BirthdayTranslator></BirthdayTranslator>
      <Weather></Weather>
          </>
         );
}

export default App
