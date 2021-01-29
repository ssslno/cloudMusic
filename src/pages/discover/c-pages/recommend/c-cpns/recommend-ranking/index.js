import React, { memo ,useEffect} from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {RankingWrapper} from './style'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYTopRanking from '@/components/top-ranking'
import {getTopListAction} from '../../store/actionCreator'
export default memo(function HYRecommendRanking() {
   const { upRanking, newRanking, originRanking} = useSelector(state=>({
        upRanking:state.getIn(['recommend','upRanking']),
        newRanking:state.getIn(['recommend','newRanking']),
        originRanking:state.getIn(['recommend','originRanking']),
   }),shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getTopListAction(0))
       dispatch(getTopListAction(2))
       dispatch(getTopListAction(3))
    }, [dispatch])
    return (
        <RankingWrapper>
            <HYThemeHeaderRCM title="榜单" />
            <div className="tops">
                <HYTopRanking info={upRanking}></HYTopRanking>
                <HYTopRanking info={newRanking}></HYTopRanking>
                <HYTopRanking info={originRanking}></HYTopRanking>
            </div>
        </RankingWrapper>
    )
})
