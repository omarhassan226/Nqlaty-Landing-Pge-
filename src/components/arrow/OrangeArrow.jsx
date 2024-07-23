import React from 'react'
import { color } from '../../colors/colors'

const OrangeArrow = () => {
    return (
        <div style={{display:'flex', width:'100%', height:'50px', justifyContent:'center'}}>
            <span style={{display:'flex', justifyContent:'flex-start', width:'80%',fontSize:'90px', fontWeight:'bold', color:color.orange, left:'10px',top:'0px',alignSelf:'end',position:'relative'}}>🡥</span>
        </div>
    )
}

export default OrangeArrow
