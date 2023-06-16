import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Stack, Typography} from '@mui/material';


const Message = ({name,cname,cmessage}) => {
  return (
    <Stack 
          key={cname}
          sx={{ my: 1, mx: 'auto',p: 2,}} 
          display='flex'
          flexWrap='wrap' 
          flexDirection= 'row'
          maxWidth={{xs:'300px' , md: '700px'}}
          backgroundColor={name === cname ? '#BCEAD5' : '#8EC3B0'}
          borderRadius='10px'
          padding='20px'
          marginTop='20px'
          marginRight={name === cname ? { xs: '5px', lg: '10px', xl: '10px' } : '0px'}
          marginLeft={name !== cname ? { xs: '5px', lg: '10px', xl: '10px' } : '0px'}
        >

        <Stack  spacing={2} direction="row" alignItems="center" justifyContent="flex-start">
        <Avatar  >{name[0]}</Avatar>         
          <Typography 
            sx={{color:'white' , wordWrap:'break-word' }}   
            fontSize='1.3rem' 
            display='flex' 
            maxWidth={{xs:'250px' ,lg:'500px'}}>
           <span style={{ fontWeight: 'bold', fontFamily: 'Arial', color: '#DEF5E5' }}>
            {name === cname ? ' Me : ' : cname + ' : '}
            </span>{' '}{cmessage}
          </Typography>
        </Stack>  
      </Stack>
  )
}

export default Message
