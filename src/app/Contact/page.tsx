'use client'
import React from 'react'
import Contatc from '../Component/Contatc';
import Home from "../Component/Home";

export default function page() {
  return (
    <div>
      <div>
      <Home
        title={"Contact"}
        src={
          "https://ciospeak.com/wp-content/uploads/2022/09/metaverse-the-new-reality-1.png"
        }
      />
      <Contatc/>
    </div>
    </div>
  )
}
