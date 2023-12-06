import Hue from './Hue'
import PostHue from './PostHue'
import HueObject from '../HueObject'

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = (props : Props) => {
  return (
    <>
    <div className='flex flex-col'>
      <div className='flex w-fit text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent gap-1 pt-4 px-8 items-center'><span className='text-6xl'>#</span>HueGram</div>
      <div>
        <PostHue addHue={props.addHue}/>
      </div>
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto container-snap px-8 pt-4'>

        {props.hues.map(  (hue) => ( 
            
            <Hue hue={hue}/>
        ))}

      </div>
    </div>
    </>
  )
}

export default Main