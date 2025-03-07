import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constant'


function RowPost(props) {
  const [movies, setMovies] = useState();

  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
   }).catch(error=>{
    alert('Network error')
   })
      
  }, []);
  return (
    <div 
    className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies?movies.map((obj)=>
          
            <img className={props.isSmall?'smallPoster':'poster'}alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
          ):""}

        </div>
      
    </div>
  )
}

export default RowPost
