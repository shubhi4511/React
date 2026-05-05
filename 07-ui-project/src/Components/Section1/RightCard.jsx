import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden w-80 relative rounded-4xl'>
      <img className='h-full,w-full,object-cover'src={props.img}/>
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
