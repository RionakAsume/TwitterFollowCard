import { useState } from "react";


export function TwitterFollowCard({ formatUserName, userName, name }: TwitterFollowCardProps) {
  const [isFollowing,setIsFollowing] =useState(false)
 


  const text =isFollowing ? 'Siguiendo':'Seguir'
  const buttonClassName= isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'


  const handleClick= ()=>{
    setIsFollowing(!isFollowing)
  }

  console.log(isFollowing)
  const urlImagen = `https://unavatar.io/${name}`
  return (
    < article className='tw-followCard' >
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt='avatar de ' src={urlImagen} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article >
  )
}

interface TwitterFollowCardProps {
  formatUserName: (userName: string) => string;
  userName: string;
  name: string;
  isfollowing: boolean;
}
