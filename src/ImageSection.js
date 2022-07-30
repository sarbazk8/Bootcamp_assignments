import React from 'react'
import Card from '@mui/material/Card';
import './style.css';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function ImageSection  ({filteredData,data})  {
  return (
    <div> 
        <Card sx={{ maxWidth: 445 }}>
  
      {!filteredData ?(
        <>
        {
            data.photos.map(value=>{
                return(
                    <>
                     <CardMedia
      component="img"
      height="194"
      image={value.image_url}
      alt="Image"
    />
    <CardContent>
        <Typography variant='h5'  color="text.secondary">{value.heading}</Typography>
      <Typography variant="body2" color="text.secondary">
      {value.description}
      </Typography>
    </CardContent>
                    </>
                )
            })
        }
   
        </>
      ):(
        <>
        {
            filteredData.map(filteredvalue=>{
                return(
                    <>
                    <div className='image'>
                     <CardMedia
      component="img"
      height="194"
      image={filteredvalue.image_url}
      alt="Image"
    /></div>
    <div className='text'>
    <CardContent>
        <Typography variant='h5'  color="text.secondary">{filteredvalue.heading}</Typography>
      <Typography variant="body2" color="text.secondary">
      {filteredvalue.description}
      </Typography>
    </CardContent>
    </div>
                    </>
                )
            })
        }
   
        </>
      )






      }
    
  </Card></div>
  )
}

export default ImageSection