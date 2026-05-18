import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=30'
    )

    setUserData(response.data)
  }
  let printUserData = 'No User Available';

  if(userData.length>0) {
    return <div>
      <img src={Element.download_url} alt=""/>
    </div>
  }

  return (
    <div className='bg-black overflow-auto min-h-screen text-white p-5'>

      <button
        onClick={getData}
        className='bg-green-600 px-5 py-2 rounded mb-5 active:scale-95'
      >
        Get Data
      </button>

      <div className='grid grid-cols-3 gap-5'>

        {userData.length > 0
          ? userData.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-zinc-900 p-3 rounded'
                >
                  <img
                    src={item.download_url}
                    alt=""
                    className='w-full h-52 object-cover rounded'
                  />

                  <h1 className='text-xl mt-3 font-bold'>
                    {item.author}
                  </h1>
                </div>
              )
            })
          : <h1>No Data Found</h1>
        }

      </div>

    </div>
  )
}

export default App