import "./profile.css";
import { useSelector } from 'react-redux';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function Profile() {
    const currentUser=useSelector(state=>state.userReducer.currentUser)
  return (<div  className="profile">
        
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={currentUser.coverPic}
                alt=""
              />
              <img
                className="profileUserImg"
                src={currentUser.profilePic}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{currentUser.fullName}</h4>
                <span className="profileInfoDesc">{currentUser.city}</span>
                <div class="full">

            </div>
          </div>
          <div className="profileRightBottom">
          <Link to="/friendproposes">
          <Button variant="contained">new fake friends</Button>
          </Link> <br/>
          <Link to={`/modify/${currentUser._id}`}>
          <Button variant="contained">modify your details</Button>
          </Link>  
          
          </div>
        </div>
      </div>
    </div>
  );
}
