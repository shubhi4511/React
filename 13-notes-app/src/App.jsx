import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')
  const [details,setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNode = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex '>

      <form onSubmit={(e)=> {
        submitHandler(e)
      }} className= 'flex gap-5 lg: item-start flex-col w-1/2 p-10'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

{/* //Pehla input for heading  */}
          <input 
          type="text" 
          className='px-5 py-2 outline-none font-medium border-2 w-full rounded'
          placeholder='Enter Notes Heading' 
          value={title}
          onChange={(e)=> {
            setTitle(e.target.value);
          }}
        />

{/* Detailed vala input */}
        <textarea
          type='text'
          className='px-5 py-2 h-32 w-full font-medium flex items-start flex-row border-2 rounded outline-none'
          placeholder= 'Enter Details' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button 
        className='bg-green-300 text-black text-bold outline-none active:bg-gray-400 px-5 py-2 w-full rounded'>Add Notes
        </button>
      </form>

      <div className='p-10 border-l-2 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap item-start   justify-start gap-5 mt-6 overflow-auto h-full'>

          {task.map(function(elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-amber-950 px-4 pt-9 pb-5 bg-[url('https://imgs.search.brave.com/t7t6y8AZKnJt8foJt40LFZCUf70uaOFjWnu2SekcKkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/Mjg2Lzk2My9zbWFs/bC93aGl0ZS1ub3Rl/LWJvb2stcGFwZXIt/cG5nLnBuZw')]">
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-semibold text-xsm text-blue-700'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNode(idx)
            }}
            className='w-full cursor-pointer active:scale95 bg-red-400 py-1 test-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
