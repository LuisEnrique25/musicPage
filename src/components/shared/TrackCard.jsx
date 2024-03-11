import React from 'react'
import { Link } from 'react-router-dom'

const TrackCard = ({track}) => {
  
  return (
    <article className='flex items-center gap-2 hover:bg-white/20 p-1 rounded-md pr-4 transition-colors group'>
        <header>
            <img className='size-[50px] rounded-md group-hover:scale-110 transition-all' src={track.album.images[2]?.url} alt="image album" />
        </header>
        <div className='flex-1'>
            <Link to={`/tracks/${track.id}`} className='text-sm font-bold hover:text-secondary transition-colors'>{track.name}</Link> 
    	      <ul className='flex gap-2'>
              {track.artists.slice(0, 2).map((artist, index) => (
                  <li key={artist.id} >
                    <Link to={`/artists/${artist.id}`} className='text-sm text-slate-400 hover:text-secondary transition-colors'>
                      {artist.name} {track.artists.slice(0, 2).length-1 !== index && ","}
                    </Link>
                  </li>
                ))
              }
            </ul>

        </div>
        <div className='flex items-center'>
            <button><i className="fa-solid fa-circle-plus"></i></button>
        </div>
    </article>
  )
}

export default TrackCard