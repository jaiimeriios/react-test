import React from 'react'

function Greeter({name, excitement = 1, age = 20}) {

  const greet = () => {
    console.log(`hola ${name}`)
  }

  return (
    <>
      <h2>asdfdsafad {name} {'!'.repeat(excitement)}</h2>
      <p> you are {age} old</p>
      <button onClick={greet}>Click</button>
    </>
  )
}

export default Greeter