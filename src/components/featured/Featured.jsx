import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.css'

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%"src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <img width="100%"src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <img width="100%"src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      
      <div className="info">
        <img src='/assets/images/matrix.png' alt="logo"/>
      
        <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repellendus eum quasi illo, velit numquam, maxime tempora sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae temporibus eum earum?</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>  
    </div>
  )
}

export default Featured