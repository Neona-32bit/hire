import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button.js'
import '../../App.css';
import NavBar from './Navbar.js';
export default function SetAccount(props) {
    return (
    <div>
        <NavBar />
        <div className='join-cont set'>
            <div className='cont'>
                <h3>
                     Complete setting up your account
                </h3>
            
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Enter your name" variant="outlined"
                                    onChange={(e) => props.setName(e.target.value)} /><br/>
                        <TextField id="outlined-basic" label="Enter your photo's URL" variant="outlined" 
                        onChange={(e) => props.setUrl(e.target.value)}/><br/>
                        <TextField id="outlined-basic" label="Enter your country" variant="outlined" 
                        onChange={(e) => props.setCountry(e.target.value)}/><br/>
                        <TextField placeholder='Enter your company name' label="Enter your company name" 
                        onChange={(e) => props.setBiography(e.target.value)}/><br/>
                </Box>
                <Button title={props.title} handleAction={props.handleAction}/>
             </div>
           
        </div>
     </div>   
    );
}
