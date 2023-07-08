import '../../App.css';
import Button from '@mui/material/Button';
import { BrowserRouter as Router,
    
    Link 
  } from 'react-router-dom'
  import Box from '@mui/material/Box';
import NavBar from './Navbar';


export default function SignUp(){
    return(
        <div>
        <NavBar />
                    <div className='color'>
            <div className='join-cont'>
            <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          className='cont'
       >
        
        
            <h3> Already have an account?</h3>
                <Button variant='contained' id='btn-2' 
                 style={{
                    backgroundColor: 'rgb(21, 22, 26)',
                    fontSize: "18px",
                    margin: "0px",
                    alignItems: "center",
                    width:'200px',
                    margin:'2rem 0 0 0'
                }}> 
                    <Link to="/login">login</Link>
                </Button>
                <h3>Or</h3>
                      <Button variant='contained' id='btn-2' 
                      style={{
                        backgroundColor: 'rgb(21, 22, 26)',
                        fontSize: "18px",
                        margin: "0px",
                        alignItems: "center",
                        width:'200px',
                        margin:'2rem 0 0 0'
                    }}
                     > <Link to="/register">Sign Up</Link></Button>
                      </Box>
            </div>
       
       </div>
            </div>
                     
      
    )
}


