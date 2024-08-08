import React from 'react'

function Logo({width = '10px'}) {
  return (
    <>
      <img width={width} src="../../src/assets/blogging.svg" alt="logo" />
    </>
  )
}

export default Logo