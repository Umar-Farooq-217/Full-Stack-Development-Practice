import React from 'react'
import Image from 'next/image'
import './ReflectImage.css'
export default function ReflectImage() {
  return (
    <div>
      <Image className='img' width={240} height={240} alt='image' src='/pikacho.png' />
    </div>
  )
}
