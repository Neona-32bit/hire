import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import SignUp from './SignUp';
import NavBar from './Navbar';
import Home from './Home';
import '../../App.css';




export default function Landing(){
    var auth = getAuth();
    var cur_user = auth.currentUser;
    return (
        <div>
           <NavBar />
           <Home />

        </div>

    )
}
