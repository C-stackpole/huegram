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
      const newHue = {color, username: currentUser.username, id: length+1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }

  return (
    <div className='flex bg-slate-800 h-screen'>
      {/* <Menu /> */}

      <Main hues={hues} addHue={addNewHue} />

      <Profile />
    </div>
  )
}

export default App
