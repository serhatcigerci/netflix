import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.css'
import ListItem from '../listItem/ListItem'

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined/>
        <div className="container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined/>
      </div>
    </div>
  )
}

export default List