import React, { memo } from 'react'
 import HYPlayerInfo from './c-cpns/playerInfo'
import {PlayerWrapper,
        PlayerLeft,
        PlayerRight
} from './style'
export default memo(function HYPlayer() {
    return (
        <PlayerWrapper>
           <div className="content wrap-v2">
               <PlayerLeft>
                   <HYPlayerInfo></HYPlayerInfo>
                   
               </PlayerLeft>
               <PlayerRight>
                   
               </PlayerRight>
           </div> 
        </PlayerWrapper>
    )
})
