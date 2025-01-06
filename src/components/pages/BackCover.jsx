import React from 'react'
import coverImg from "../../assets/cover.png"

const BackCover = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center transform scale-x-[-1]"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
    </div>
  )
}

export default BackCover
