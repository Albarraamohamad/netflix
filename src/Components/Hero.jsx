import React from 'react'
import video from '../assets/Squid Game_ Season 2 _ You’re Invited _ Netflix.mp4'
import img from '../assets/AAAABU6KhZMUVfVB7w7e_DjZMJLTyLnWkEjOmX9ych92Pf9hOIfpHEGml87Unqk2_kcPe4AINeVKuUXkOdT7ESa3yLqpmGkLY4_-ESnV40hCx6XzCtpCTU3SHbgSfQzrOyMYOs-thdJoQLCFm5v2PYZuaik-wRI1siP9IYpeUrmPI-WFeuiMgk_KAA.webp'
import play from '../assets/play_icon.png'
import info from '../assets/info_icon.png'
import PlayButton from './PlayButton'
const Hero = () => {
  return (
    <div className='h-[80vh]'>
 <video
        className=" relative top-0  bottom-1 left-0 w-full h-[90vh] object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
       
      </video>
      <div className='absolute bottom-1 top-60 left-20 right-36 text-white  '>
        <div>
          <img src={img} alt=""  className='w-96'/>
          <div className="flex gap-3 items-center mt-9 flex-wrap sm:flex-nowrap">
 <PlayButton/>
  <button className="bg-gray-500 flex items-center px-5 sm:px-7 py-1 rounded-md">
    <img src={info} alt="" className="w-8 sm:w-10" />
    More Info
  </button>
</div>
        
        </div>
      </div>
    </div>
  )
}

export default Hero
