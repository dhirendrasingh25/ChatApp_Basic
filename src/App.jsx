import React from 'react';
import Avatar from '@mui/material/Avatar';
import './App.css';
import { useState, useEffect } from 'react';
import { Box, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './components/Message.jsx'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getDatabase , push , ref,set,onChildAdded } from "firebase/database";



const App = () => {
  const [name, setname] = useState('');
  const [chats, setChats] = useState([]) 
  const [message, setmessage] = useState('')

  const db= getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      // const c=[...chats]
      // c.push(data.val())
      // setChats(c) // not working due to js closure
      setChats(chats=>[...chats,data.val()])
    });
  }, [])
  

  const sendChat=()=>{    
    const chatRef = push(chatListRef);
    set(chatRef, {
        // ...
        id: chats.length + 1, name: name, message: message 
    });

    // const c=[...chats];
    // c.push({ id: chats.length + 1, name: name, message: message });
    // setChats(c);
  }
  

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleLogin=()=>{
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
  }  
  
  return (
    <Box backgroundColor='#DEF5E5' >
      {!name? (
        <><Box 
          //backgroundColor='black'
          display='flex'
          alignItems= "center"
          justifyContent= "center"
          position='fixed'
          width='100vw'
          height='70vh'
          paddingTop={{lg:'25px'}}
          //padding='20px'
          // left='900px'
          >
          <img 
          src='../CompLogo.png'
          style={{width:'250px' ,marginTop:'54px'}}
          >
          </img>
          
          </Box><Box
          position='fixed'
          bottom='20px'
          width="100%"
          display="flex"
          flexDirection="row"
          margin='10px'
          backgroundColor='#DEF5E5'
        >
          <input
            style={{
              padding: '10px 10px',
              flexGrow: 1,
              color: 'white',
              marginRight: '10px',
              fontSize: '1.3rem',
              backgroundColor: '#8EC3B0',
              borderRadius: '20px',
              overflow: 'scroll',
            }}
            type="text"
            placeholder='Enter Name to Start'
            onClick={e => setname(e.target.value)} />
          <button
            onClick={e=>googleLogin()}
            style={{ padding: '10px', marginRight: '20px', borderRadius: '20px' }}
          >
            <SendIcon sx={{ color: '#8EC3B0' }} />
          </button>


        </Box></>


      ):(
      <><Box
            backgroundColor='#8EC3B0'
            position='sticky'
            top='0'
            zIndex={1}
          >
            <Typography
              fontWeight='bold' padding='20px' variant='h6'
              fontSize='3rem'
              color='#BCEAD5'
            >USER: <span style={{ color: '#DEF5E5' }}>{name}</span></Typography>
          </Box><Box sx={{ flexGrow: 1, overflow: 'scroll', px: 0 }} backgroundColor='#DEF5E5'>

              {chats.map((c) => (
                <Message key={c.id} name={name} cname={c.name} cmessage={c.message} />
              ))}

            </Box><Box padding='40px'>
            </Box><Box
              position="fixed"
              width="100%"
              bottom='2px'
              display="flex"
              flexDirection="row"
              margin='10px'
              justifyContent='flex-start'
              backgroundColor='#DEF5E5'
            >
              <input
                style={{
                  padding: '10px 10px',
                  flexGrow: 1,
                  color: 'white',
                  marginRight: '10px',
                  fontSize: '1.3rem',
                  backgroundColor: '#8EC3B0',
                  borderRadius: '20px',
                  overflow: 'scroll',
                }}
                type="text"
                placeholder="Enter Message"
                onInput={
                  e => setmessage(e.target.value)} />
              <button
                style={{ padding: '10px', marginRight: '20px', borderRadius: '20px' }}
                onClick={e => sendChat()}
              >
                <SendIcon sx={{ color: '#8EC3B0' }} />
              </button>

            </Box></> )}

     
    </Box>
    
  );
};

export default App;

