import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);

  return (
    <div id='right' className='h-full flex rounded-4xl overflow-auto'>
      {props.users && props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx + 1} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent