import { useNavigate,Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { app,auth } from '../../firebase-config';
import { useState } from 'react';
import { useRef } from "react";

export default function NavBar(){
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    let navigate = useNavigate();
    var auth = getAuth();
    var cur_user = auth.currentUser;
    
    const [url, setUrl]= useState("")
var auth = getAuth(app);

var cur_user = auth.currentUser;




/* Function that handles logout*/
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        localStorage.clear()
        signOut(auth)
        navigate('/login')
    }
  
    return (
        <div>
    
    <div className='navbar'>
        <h1 className='brand'>HIRE</h1>
        <nav className='nav-el' ref={navRef}>
            <ul>
                    <li>
                        <a href='#'><Link to="/">Home</Link></a>
                    </li>
                    <li>
                    <a href='#'><Link to="/search">Find Talent</Link></a>
                    </li>
                    <li>
                    <a href='#'>About US</a>

                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                    
                        {cur_user?
                        <div className='user-cont'>
                            <button onClick={handleLogout} className='logout'   style={{
                        backgroundColor: 'rgb(21, 22, 26)',
                        fontSize: "18px",
                        margin: "0px",
                        alignItems: "center",
                        padding: '0.5rem 1.5rem 0.5rem 1.5rem;',
                        
                        
                        }}> Log Out
                    </button>
                           <div className='user-img'>
                            <img src={url} />
                           </div>
                        </div>
                        :
                        <button id='join'> <Link to="/join">Join Us</Link></button>
                        }
                   
                    
                   <button
					className="nav-btn nav-close-btn"
                    id='close'
					onClick={showNavbar}>
					<i class="fa-solid fa-xmark"></i>
				</button>
                </ul>
        </nav>
        <button
				className="nav-btn"
                id='bars'
				onClick={showNavbar}>
				<i class="fa-solid fa-bars-staggered"></i>
			</button>
    </div>
             
            
        
        
       
           
    
                    
        
    </div>

   
    
    )
}
