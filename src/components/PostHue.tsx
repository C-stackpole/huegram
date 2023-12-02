import { useState, useRef } from 'react'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('#')
    const previewRef = useRef<HTMLDivElement>(null);
  
    const handlePostClick = () => {
      // Call your addHue function with the current color value
      props.addHue(color);
  
      // Reset the input value
      setColor('#');
      if (previewRef.current) {
        previewRef.current.style.backgroundColor = ''
      }
    };

  return (
    <div className='flex flex-row justify-center p-4 mb-4 gap-8 h-32'>

        <div className='flex flex-col w-64 px-8 py-8 gap-2 justify-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' style={{backgroundColor: color}}>
            <input type="text" name="hue" id="hue" value={color} onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={handlePostClick} className="btn bg-white text-cyan-950 text-center">Post</a>
        </div>

        <div
          className="flex flex-col w-64 rounded-3xl text-center justify-between items-center"
          ref={previewRef}
          style={{ backgroundColor: color }}
        >
          <p className="text-white text-2xl opacity-80">{color}</p>


        <div className="bg-black text-white flex w-full text-center justify-center p-1 rounded-b-2xl">
          <p className="text-xl">kodom</p>

        </div>
    </div>

    </div>
  )
}

export default PostHue