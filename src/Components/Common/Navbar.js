import { useNavigate,Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { app,auth } from '../../firebase-config';
import { useState } from 'react';
export default function NavBar(){
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
        <div className='nav-el'>
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
                        backgroundColor: 'rgb(254,70,70)',
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
                        <button> <Link to="/join">Join Us</Link></button>
                        }
                   
                    
                       
                </ul>
        </div>
    </div>
             
            
        
        
       
           
    
                    
        
    </div>

   
    
    )
}
