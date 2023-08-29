import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieCards from "./MovieCards";
const Cards = () => {
  const [moviesDetails,setMoviesDetails] = useState([]);
  useEffect(() => {
    getMoviesById(1)
  }, []);

 let apikey='7a1c19ea3c361a4d3cc53eb70ef8298c';
 
 function getMoviesById(pageNumber){
  Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${pageNumber}`).then((data)=>setMoviesDetails(data.data.results)).catch();
}
  // async function getMoviesById(pageNumber) {
  //   let { data } = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${pageNumber}`)
  //   data = data.results
  //   setMoviesDetails(data)

  // }
 
  return (
    <>
    <section>
      <div className="container">
        <div className="row">
          {moviesDetails.map((moviesDetail,index)=><MovieCards title={moviesDetail.title} imgSrc={moviesDetail.poster_path} id={moviesDetail.id} key={index} />)}
        </div>
      </div>
    </section>
    </>
   );

  }
 

export default Cards;




// export function Cards2(){
//   return (
//     
//   )
// }





// return (
//   <div>
//     {names.map((name, index) => (
//       <div >
//         <h2>{name}</h2>
//         <p>{details[index]}</p>
//         <img src={images[index]} alt={name} />
//       </div>
//     ))}
//   </div>
