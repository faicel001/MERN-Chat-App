import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../JS/actions/actionsUser'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const FriendPropCard = ({ el }) => {
  const id=el._id
  const handleSubmitFollow = (e) =>{
    
    dispatch(followUser({userId:id}))
  }
  const handleSubmitUnFollow = (e) =>{
 
    dispatch(unFollowUser({userId:id}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(el.followins.find(el=>el==currentUser._id)){
      handleSubmitUnFollow()
    }else{handleSubmitFollow()}
    
    
}

const currentUser = useSelector(state => state.userReducer.currentUser)
const dispatch = useDispatch()
  return (
   
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={el.coverPic}
          alt="green iguana"
        /><h1>{el.fullName}</h1>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
          {el.descreption}
          </Typography>
          <Typography variant="body2" color="text.secondary">

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleSubmit} >
          {el.followins.find(el=>el==currentUser._id)?"followed":"follow"}
        </Button>
      </CardActions>
    </Card>
  )
}
export default FriendPropCard;