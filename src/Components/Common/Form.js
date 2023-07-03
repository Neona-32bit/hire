import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button.js'
import '../../App.css';
import NavBar from './Navbar.js';

export default function BasicTextFields(props) {
    return (
    <div>
        <NavBar />
        <div className='join-cont'>
            
                <div className='cont'>
                    <div className='heading-container'>
                        <h1 id='form-title'>
                            {props.title} Form
                        </h1>
                    </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                
                >
                    <TextField id="outlined-basic" label="Enter the E-mail" variant="outlined"
                            onChange={(e) => props.setEmail(e.target.value)} className='block ' /><br/>
                    <TextField id="password" label="Enter the Password" variant="outlined" 
                    onChange={(e) => props.setPassword(e.target.value)} className='block'/>
             </Box>
             <Button title={props.title} handleAction={props.handleAction} 
              style={{
                backgroundColor: 'rgb(254,70,70)',
                fontSize: "18px",
                margin: "0px",
                alignItems: "center",
                width:'200px',
                margin:'2rem 0 0 0'
            }}/>
           
            </div>
        </div>
    </div>
        
        
    );
}
