import React, { memo } from 'react'

const Navbars = ({adjective}) => {

    console.log("Navbar is renderd");
    
  return (
  <>
    <h4>hello i am a {adjective}</h4>
  </>
  )
}

export default memo(Navbars)
