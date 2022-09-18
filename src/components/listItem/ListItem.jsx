import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.css'

const ListItem = () => {
  return (
    <div className="listItem"><img src='/assets/images/entrapped.jpg' alt="entrapped"/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
        </div>
      </div>
   </div>
  )
}

export default ListItem