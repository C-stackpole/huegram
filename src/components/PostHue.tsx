import {useState} from 'react'

interface Props{
    addHue : (color:string) => void
}

const PostHue = (props:Props) => {

    const[color,setColor] = useState('')

  return (
    <div className='flex p-4'>

        <div className='flex flex-col gap-2 p-4 w-64 rounded-3xl justify-center' style={{backgroundColor: color}}>
            <input type="text" name="hue" id="hue" onChange={(event) => setColor(event.target.value)}/>
            <a href="" onClick={() => props.addHue(color)} className='btn bg-white rounded-lg text-center'>Post</a>
        </div>
    </div>
  )
}

export default PostHue