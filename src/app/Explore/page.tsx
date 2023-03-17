'use client'
import React from 'react'
import Course from '../Component/Course';
import Home from "../Component/Home";
import Instructor from '../Component/instructor';

export default function page() {
  return (
    <div>
      <div>
      <Home
        title={"Explore"}
        src={
          "https://imageio.forbes.com/specials-images/imageserve/6245447214a12fde771e176f/0x0.jpg?format=jpg&width=1200"
        }
      />
      <Course/>
      <Instructor/>

    </div>
    </div>
  )
}
