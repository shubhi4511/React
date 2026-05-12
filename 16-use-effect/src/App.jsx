import { useEffect, useState } from 'react'
const App = () => {

  const [num, setNum ] = useState(0)
  const [num2, setNum2] = useState(100)


  useEffect (function(){
    console.log('use effect is running');
    }, [num]) 

  return (
    <div>
      <h1>value of {num} </h1>
      <h1>value of {num2} </h1>
      <h1>{num}</h1>
      <button onClick={ ()=> {
        setNum(num + 1) //mounting
        setNum2(num2 + 100)
      }}>click</button>
    </div>
  )
}

export default App
