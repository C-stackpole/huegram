import Main from './components/Main'
import Profile from './components/Profile'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, color: '#ffa500', username: "kaylee", likes: 15},
    {id: 2,color: '#ff8c00', username: "therealkaylee", likes: 8},
    {id: 3,color: '#ff7f50', username: "odomester", likes: 20},
    {id: 4,color: '#ff6347', username: "kaylee", likes: 200},
    {id: 5,color: '#ff6389', username: "cStack", likes: 21},
    {id: 6,color: '#123456', username: "cStack", likes: 0},

  ]);

  const addNewPost = (color:string) =>
  {
    const newHue = {color: color, username: 'kaylee', id: posts[posts.length-1].id +1, likes: 0}
    setPosts( [...posts, newHue] )
  }

  return (
    <div className='flex bg-slate-800 h-screen'>

      <Main posts={posts} addHue={addNewPost}/>

      <Profile />
    </div>
  )
}

export default App
