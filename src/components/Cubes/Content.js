import React, {useState} from 'react'
import {Dom} from 'react-three-fiber'


export default function Content({content}){
  const text = content.text.split('. ')

  console.log(text)
  return (
    <Dom position={[0, 0, 0]}>
      {content.type === 'text' && text.map(text => <><p style={{color: 'white'}}>{text}</p><br/></>)}
      {content.type === 'image' && <img src={content.src} alt="img-rots"/>}}
    </Dom>
  )
}