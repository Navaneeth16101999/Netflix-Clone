import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constant'
import YouTube from 'react-youtube'
import {API_KEY} from '../../constants/constant'
function RowPost(props) {
  const [movies, setMovies] = useState();
const[urlId,setUrlId]=useState();
  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
   }).catch(error=>{
    alert('Network error')
   })
      
  });
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
  if(response.data.results.length!==0){
   console.log(response.data)
    setUrlId(response.data.results[0])
  }
  else{
    console.log('Array empty')
  }
})
  }
  return (
    <div 
    className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        
        {movies?movies.map((obj)=>
    


        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'}alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>  
      


        ):""}

        </div>
       { urlId && <YouTube videoId={urlId.key} opts={opts}/> }  ;  
        </div>
  )
}

export default RowPost
