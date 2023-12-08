//import Menu from './components/Menu'
import HueObject from './HueObject';
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

function App() {

  // interface Hue {
  //   color: string;
  //   username: string;
  //   id: number;
  //   likes: number;
  // }

  const [hues, setHues] = useState<HueObject[]>([]);


  const [currentUser] = useState({
    username: "c_money",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"c_money", likes: 15}]
  });


  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {id: hues.length+1, color, username: currentUser.username, likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }

  const toggleLikeForHue = (id?:number) =>{
    const newHues = [...hues]
    const hue = newHues.find(h => h.id == id)
    if (hue){
      hue.isLiked = !hue?.isLiked
      if(hue.isLiked === true){
        hue.likes += 1
      }
      else{
        hue.likes -= 1
      }
      setHues(newHues)
    }
    //console.log(newHues)
  }


  return (
    <div className='flex bg-slate-800 h-screen'>
      {/* <Menu /> */}

      <Main hues={hues} addHue={addNewHue} toggleLike={toggleLikeForHue} />

      <Profile hues={hues} />
    </div>
  )
}

export default App
