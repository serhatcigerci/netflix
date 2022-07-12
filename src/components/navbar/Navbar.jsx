import { Notifications, Search } from "@material-ui/icons"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
        <img src='/assets/images/logo.png' alt="logo"/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search/>
          <span>KID</span>
          <Notifications/>
        </div>
      </div>
    </div>
  )
}

export default Navbar