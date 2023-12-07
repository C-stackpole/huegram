import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col py-16 px-8 items-center text-white justify-between'>

        <div className="flex flex-col items-center w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
          <h1 className='p-4'>@kodom</h1>
        </div>

        <div>
          <div style={{backgroundColor: "#fff111"}}></div>
        </div>


        <div className='flex flex-col p-4 gap-2 text-center'>
          <h1 className='text-6xl'>86</h1>
          <h1>Likes</h1>
        </div>

        <div className='flex flex-col p-4 gap-2 text-center'>
          <h1 className='text-6xl'>4</h1>
          <h1>Hues Posted</h1>
        </div>
    </div>
  )
}

export default Profile