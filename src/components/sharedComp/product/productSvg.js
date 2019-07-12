import React from 'react'


const Svg=({viewBox,styles,children})=>(
    <>
    <svg fill='#63CCFF' width='70%'  height='70%' viewBox="0 0 121 121">
    <circle    cx="60.5" cy="60.5" r="60.5"/>
 </svg>
 <svg style={{...styles}}   xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
 {children}
</svg>
</>
)

export default Svg
