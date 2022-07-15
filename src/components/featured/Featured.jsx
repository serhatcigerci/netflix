import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
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