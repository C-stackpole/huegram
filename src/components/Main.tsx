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
      <div className='flex flex-col relative'>

        <div className='flex absolute p-3 text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent items-center'><span className='text-5xl pr-1'>#</span>HueGram</div>
        <div className='flex justify-center'>
          <PostHue addHue={props.addHue}/>

        </div>
        <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto pt-4'>
            {props.posts.map(  (post) => ( 
                
              <Post post={post}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Main