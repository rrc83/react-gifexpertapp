import React from 'react'

export const GifGridItem = ( {id,title,url} ) => {
    
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img key={ id }
             alt={ title }
             src={ url } />
        <p>{title}</p>
    </div>
  )
}
