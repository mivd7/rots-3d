import React, {useState, useEffect} from 'react'
import {Dom} from 'react-three-fiber'

export default function Content({content, position}){
  const [message, setMessage] = useState([])
  useEffect(
    () => {
      setMessage(content.text)
    }, [content.text]
  )
  return (
    <Dom position={position}>
      {content.type === 'text' &&  <div style={{width: '50%'}}><p style={{color: 'white'}}>{message}</p><br/></div>}
      {content.type === 'image' && <img src={content.src} alt="img-rots" style={{maxHeight: '100px'}}/>}
    </Dom>
  )
}