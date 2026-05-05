import React from 'react'

const App = () => {

//setItem
  localStorage.setItem('user','shubhi')

//getItem
  const age = localStorage.getItem('age')

//removeItem
  localStorage.removeItem('user')

  console.log(age);

LocalStorage.clear('user')

  const user = {
    name:'Shubhi',
    age:22,
    city:'Noida'
  }

  localStorage.setItem('user', JSON.stringify('user'))

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(typeof(user));

  // const user = JSON.parse(localStorage.getItem('user'))

  // console.log(user);


  return (
    <div>
      App
    </div>
  )
}

export default App
