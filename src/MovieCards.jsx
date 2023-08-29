import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCards({title , imgSrc , id}) {
  return (
        <div className='col-md-3'>
            <Link className='text-decoration-none' to={`/movies/${id}`}>
                <div className="moveis-cards shadow">
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500'+imgSrc} className='w-100' alt="" />
                </div>
                <h5 className='text-black text-center py-2'>{title}</h5>
                </div>
            </Link>
        </div>
  )
}
