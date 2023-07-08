import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    return (
        <Button variant="contained" onClick={props.handleAction}  style={{
            backgroundColor: 'rgb(21, 22, 26)',
            fontSize: "18px",
            margin: "0px",
            alignItems: "center",
            width:'200px',
            margin:'2rem 0 0 0'
        }}>{props.title}</Button>
    );
}