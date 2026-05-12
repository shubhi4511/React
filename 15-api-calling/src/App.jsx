import axios from 'axios'
import { useState } from 'react'

const App = () => {

//  async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response);
//   }

const [data, setData] = useState([])

const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

  setData(response.data  );
}
  return (
    <div> 
      <button onClick={getData}>Get Data </button>
      <div>
        {data.map(function() {
          
          return<h3>Hello</h3>
        })}
      </div>
    </div> 
  )
} 

export default App
