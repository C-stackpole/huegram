import Hue from './Hue'
import PostHue from './PostHue'
import HueObject from '../HueObject'
import { ChangeEvent, useState } from 'react'

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike: (id?:number) => void
}


const Main = (props : Props) => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(props.hues)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = props.hues.filter((hue) =>
    hue.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
    <div className='flex flex-col w-5/6'>
      <div className='flex justify-between items-center px-8 pt-4'>
        <div className='flex w-fit text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent gap-1 items-center'><span className='text-6xl'>#</span>HueGram</div>
        <input  className="p-2 px-4 rounded-full" type="text" value={searchItem} onChange={handleInputChange} placeholder='Type to search #Hue'/>
      </div>
      <div>
        <PostHue addHue={props.addHue}/>
      </div>
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto container-snap px-8 p-4'>

        {searchItem == ""
        ? props.hues.map((hue) => ( <Hue hue={hue} toggleLike={props.toggleLike}/>))
        : filteredUsers.map((hue) => ( <Hue hue={hue} toggleLike={props.toggleLike}/>))
        }

      </div>
    </div>
    </>
  )
}

export default Main