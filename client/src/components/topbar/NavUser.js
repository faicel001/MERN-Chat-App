import "./navUser.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from "../../JS/actions/actionsUser";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function NavUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(state => state.userReducer.currentUser)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to={"/dashboard"}><h2>anoSpace</h2></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        </div>
        <Link to={"/messenger"}>
          <h2>chat</h2>
        </Link>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={currentUser.profilePic} alt="" className="topbarImg" />
        {localStorage.getItem("token") ? <Button color="inherit" onClick={() => { navigate("/signin"); dispatch(logoutUser()) }}><h2>Logout</h2></Button> : <Link to="/signin"><Button color="inherit">login</Button></Link>}
      </div>
    </div>
  );
}