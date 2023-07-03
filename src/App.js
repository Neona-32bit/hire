import React, { useEffect, useState, useMemo } from 'react'
import Form from './Components/Common/Form'
import { getDatabase, ref, set } from "firebase/database";
import { app,auth } from './firebase-config';
import { onAuthStateChanged} from 'firebase/auth'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { BrowserRouter as Router,
         Routes,
         Route,
         useNavigate, 
       } from 'react-router-dom'
import Home from './Components/Common/Home';
import Landing from './Components/Common/Landing';
import Search from './Components/Common/Search.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./UserContext";
import SetAccount from './Components/Common/SetAccount';
import SignUp from './Components/Common/SignUp.js';

const firebaseConfig = {
  databaseURL: "https://react-register-62121-default-rtdb.firebaseio.com",
};

function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [biography, setBiography] = useState("")
  const [url, setUrl]= useState("")
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
     })
  }, [])

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/')
    }
  }, [])
  const database = getDatabase();
/* This function handles logging in and signing up*/
  const handleAction = (id) => {
        if (id == 1) {

          signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
              navigate('/')
              sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            .catch((error) => {
              if(error.code === 'auth/wrong-password'){
                toast.error('Please check the Password');
              }
              if(error.code === 'auth/user-not-found'){
                toast.error('Please check the Email');
              }
            })
            
        }
      if(id == 2){
        createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          navigate('/setup')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
    })
  }
}
var auth = getAuth();
var cur_user = auth.currentUser;

/* function that writes data to Firebase database*/
function writeUserData( userId,name, biography,country) {
  
  set(ref(database, 'users/' + userId), {
    username: name,
    biography: biography,
    country:country,
    url:url
    
  });
  navigate('/')

}


 
  return (
    
    
    
       <div className="App">
          <UserContext.Provider value={value}>
            <Routes>
                  <Route path='/' element={
                  <Landing />
                  } />
                  <Route path='/login' element={<Form title='Login' 
                                                      setEmail={setEmail}
                                                      setPassword={setPassword}
                                                      
                                                      handleAction={() => handleAction(1)}/>} />
                  <Route path='/register' element={<Form title='Register'
                                                        setEmail={setEmail}
                                                        setPassword={setPassword}
                                                        handleAction={() => handleAction(2)} />} />
                  <Route
                  path='/home'
                  element={
                    <Landing />}
                />
                <Route
                  path='/join'
                  element={
                    <SignUp />
                          }
                />
                   <Route
                  path='/search'
                  element={
                    <Search />
                          }
                />
                <Route
                  path='/setup'
                  element={
                    <SetAccount 
                    title="Sign Up"
                    setName={setName}
                    setCountry={setCountry}
                    setBiography={setBiography}
                    setUrl={setUrl}
                    handleAction={() => writeUserData(cur_user.uid,name, biography, country)}
                    />}
             />
                 </Routes> 
          </UserContext.Provider>
     
       <ToastContainer />
    </div>
    
   
  );
}

export default App;
