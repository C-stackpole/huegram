import { useEffect, useState } from "react";
import HueObject from "../HueObject";

interface Props{
  hues: HueObject[]
}

const Profile = (props : Props) => {
  const [filteredUsers, setFilteredUsers] = useState<HueObject[]>([])
  const [totalLikes, setTotalLikes] = useState<number>(0);

  useEffect(() => {
    console.log("Props.hues:", props.hues);
    if (props.hues) {
      const filteredItems = props.hues.filter((hue) => hue.username == "c_money");
      setFilteredUsers(filteredItems);

      const likesSum = filteredItems.reduce((total, hue) => total + hue.likes, 0);
      setTotalLikes(likesSum);
    }
  }, [props.hues]);

  const filteredLength = filteredUsers ? filteredUsers.length : 0;


  
  
  return (
    <div className='flex flex-col py-16 px-8 items-center text-white justify-between bg-red-300 w-1/6'>


      <div>
        <div style={{backgroundColor: "#fff111"}}></div>
      </div>

      <h1 className='p-4'>c_money</h1>

      <div className='flex flex-col p-4 gap-2 text-center'>
        <h1 className='text-6xl'>{totalLikes}</h1>
        <h1>Likes</h1>
      </div>

      <div className='flex flex-col p-4 gap-2 text-center'>
        <h1 className='text-6xl'>{filteredLength}</h1>
        <h1>Hues Posted</h1>
      </div>
    </div>
  )
}

export default Profile