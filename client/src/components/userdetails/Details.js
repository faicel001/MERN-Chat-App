import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailUser, getOneUser } from '../../JS/actions/actionsUser';


const theme = createTheme();

const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getOneUser(id))
  }, []);

  const olduser = useSelector(state => state.userReducer.userEdit)

  const [edituser, setEdituser] = useState(olduser);
  const handleChange = (e) => {
    e.preventDefault()
    setEdituser({ ...edituser, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    setEdituser(olduser)
  }, [olduser]);
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(detailUser(id, edituser, navigate))

  }
  return <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            modify information
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}><br />
            fullName:
            <Grid item xs={12}>

              <TextField
                required
                fullWidth
                id="fullName"
                label=""
                name="fullName"
                autoComplete="fullName"
                value={edituser.fullName}
                onChange={handleChange}
              />
            </Grid><br />
            descreption:
            <Grid item xs={30}>

              <TextField
                required
                fullWidth
                id="descreption"
                label=""
                name="descreption"
                autoComplete="descreption"
                value={edituser.descreption}
                onChange={handleChange}
              />
            </Grid><br />
            city:
            <Grid item xs={30}>

              <TextField
                required
                fullWidth
                id="city"
                label=""
                name="city"
                autoComplete="city"
                value={edituser.city}
                onChange={handleChange}
              />
            </Grid><br />
            Email Address:
            <Grid item xs={12}>

              <TextField
                required
                fullWidth
                id="email"
                label=""
                name="email"
                autoComplete="email"
                value={edituser.email}
                onChange={handleChange}
              />
              
            </Grid><br /><br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button><br /><br />
            <Link to={"/dashboard"}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                go back
              </Button></Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider></div>;


};



export default Details;