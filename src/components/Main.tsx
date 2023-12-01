import Post from './Post'
import PostHue from './PostHue'

interface Post {
    color: string,
    username: string,
    likes: number
}
interface Props {
    posts: Post[]
    addHue: (color:string) => void
}

const Main = (props : Props) => {
  return (
    <>
      <div className='flex flex-col w-11/12'>

        <div className='flex w-fit p-3 text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent items-center'><span className='text-5xl pr-1'>#</span>HueGram</div>
        <div className='flex justify-center'>
          <PostHue addHue={props.addHue}/>

        </div>
        <div className='flex flex-wrap w-full justify-center overflow-y-auto p-4 gap-16 container-snap'>
            {props.posts.map(  (post) => ( 
                
              <Post post={post}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Main