import React, { memo} from 'react'
import HYTopBanner from './c-cpns/top-banner'
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/recommend-ranking'
import HYHotRadio from './c-cpns/hot-radio'
import HYSettleSinger from './c-cpns/settle-singer'
import HYUserLogin from './c-cpns/user-login'
function LJRecommend(props) {
   
    return (
        <RecommendWrapper>
           <HYTopBanner />
           <Content className="wrap-v2">
               <RecommendLeft>
                   <HYHotRecommend/>
                   <HYNewAlbum/>
                   <HYRecommendRanking/>
               </RecommendLeft>
               <RecommendRight>
                   <HYUserLogin/>
                   <HYSettleSinger/>
                   <HYHotRadio/>
               </RecommendRight>
           </Content>
        </RecommendWrapper>
    )
}

export default memo(LJRecommend)
