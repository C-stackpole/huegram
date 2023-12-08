import { useEffect, useState } from "react";
import HueObject from "../HueObject";

interface Props{
  hues: HueObject[]
}

const Profile = (props : Props) => {
  const [filteredUsersHues, setFilteredUsersHues] = useState<HueObject[]>([])
  const [totalLikes, setTotalLikes] = useState<number>(0);

  useEffect(() => {
    console.log("Props.hues:", props.hues);
    if (props.hues) {
      const filteredItems = props.hues.filter((hue) => hue.username == "c_money");
      setFilteredUsersHues(filteredItems);

      const likesSum = filteredItems.reduce((total, hue) => total + hue.likes, 0);
      setTotalLikes(likesSum);
    }
  }, [props.hues]);

  const filteredLength = filteredUsersHues ? filteredUsersHues.length : 0;
  const numCol = Math.ceil(Math.sqrt(filteredLength));
  const numRow = Math.ceil(Math.sqrt(filteredLength));

  const calculateTotalCells = () => numCol * numRow;
  
  const renderGridItems = () => {
    if (filteredLength === 0) {
      // Render a default div with a white background to fill up the whole grid when there is no data
      return (
        <div className="flex justify-center items-center bg-white text-black rounded-3xl font-bold">
          Make a Post
        </div>
      );
    } else {
      // Render grid items based on filtered data
      const gridItems = filteredUsersHues.map((hue) => (
        <div className="rounded-lg" style={{ backgroundColor: hue.color }}></div>
      ));

      // Add a default placeholder div after mapping all the filtered hues
      const totalCells = calculateTotalCells();
      const placeholderDivs = Array.from({ length: totalCells - filteredLength }, () => (
        <div className="rounded-lg" style={{ backgroundColor: "#FFFFFF", opacity: .1}}></div>
      ));

      return [...gridItems, placeholderDivs];
    }
  };

  
  
  return (
    <div className='flex flex-col py-16 px-8 items-center text-white justify-between w-1/6'>

      <div className="w-full flex flex-col justify-center items-center">
        <div className={`palette grid grid-cols-${numCol} grid-rows-${numRow} aspect-square gap-1 w-full`}>
          {/* {filteredUsersHues.map((hue, index) => (
            <div key={index} style={{ backgroundColor: hue.color }}></div>
          ))} */
          renderGridItems()}
        </div>

        <h1 className='p-4'>c_money</h1>

      </div>

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