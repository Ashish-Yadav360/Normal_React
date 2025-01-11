import spotifyLogo from '../assets/asset 46.svg'
import home from '../assets/asset 47.svg'
import search from '../assets/asset 48.svg'
const Nav = () => {
  return (
    <div className="bg-spotify-white py-4 w-screen text-spotify-black font-family-sans-serif">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-14 w-14 rounded-lg bg-transparent" src={spotifyLogo} alt="Spotify Logo"/>
        </div>
        <form className='flex items-center align-middle justify-center gap-8' action="">
            <img src={home}  className='text-white h-10 w-10 shadow-2xl' alt="Search Icon"/>
            <div className='flex items-center shadow-2xl align-middle justify-center gap-8 border-black border-x-2 border-y-2 rounded-lg px-2'>
             <span><img className='h-8 w-auto' src={search} alt="" /></span>
            <input placeholder='Search'   className='px-12 placeholder-gray-950 backdrop-blur-lg bg-white text-white py-3 outline-none' type="text"/>
            </div>
        </form>
        <div>
          <a href="/" className="mr-4 font-extrabold rounder-primary">Home</a>
          <a className="font-extrabold"href="/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Nav