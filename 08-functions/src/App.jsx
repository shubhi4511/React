import React from 'react'

const App = () => {
  function inputChanging() {
    console.log('user is typing');
  }

  return (
    <div>
      <input onChange={inputChanging} type='text' placeholder= 'Enter Name' />
    </div>
  )
}

export default App
