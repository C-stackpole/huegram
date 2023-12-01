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
      <div className='flex flex-col'>

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