import {getSongDetail,getLyric} from '@/services/player'
import {getRandom} from '@/utils/math-utils'
import {parseLyric} from '@/utils/parse-lyric'
import * as actionTypes from './constants'
const changeCurrentSongAction=(song)=>({
    type:actionTypes.CHANGE_CURRNET_SONG,
    song

})
const changePlayListAction = (playList)=>({
    type:actionTypes.CHANGE_PLAY_LIST,
    playList
})
const changeCurrentSongIndexAction=(index)=>({
    type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})
const changeLyricListAction =(lyricList)=>({
    type:actionTypes.CHANGE_LYRICS,
    lyricList
})
export const changeSequenceAction=(sequence)=>({
    type:actionTypes.CHANGE_SEQUENCE,
    sequence
})
export const changeCurrentLyricIndexAction = (index)=>({
    type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
})
export const changeCurrentSong=(tag)=>{
    return (dispatch,getState)=>{
        const playList = getState().getIn(["player","playList"])
        const sequence = getState().getIn(["player","sequence"])
        let currentSongIndex = getState().getIn(["player","currentSongIndex"])

        switch(sequence){
            case 1://随机播放
              let randomIndex =  getRandom(playList.length)
              while(randomIndex ===currentSongIndex){
                  randomIndex = getRandom(playList.length)
              }
              currentSongIndex = randomIndex
              break;
            default://顺序播放
            currentSongIndex+=tag
            if(currentSongIndex>=playList.length) currentSongIndex = 0
            if(currentSongIndex<0) currentSongIndex=playList.length-1

       }
       const currentSong = playList[currentSongIndex]
       dispatch(changeCurrentSongAction(currentSong))
       dispatch(changeCurrentSongIndexAction(currentSongIndex))
    //    请求歌词
    dispatch(getLyricAction(currentSong.id))
       
    }


}
export const getSongDetailAction=(ids)=>{
    return (dispatch,getState)=>{
        //根据id查找playList中是否已经有了该歌曲
        //如何在action获取另一个redux中的变量 传参getState
        const playList = getState().getIn(["player","playList"])
        //true 返回songIndex false 返回-1
        const songIndex = playList.findIndex(song=>song.id===ids)
        let song= null
        //   判断是否找到歌曲
        if(songIndex!==-1){
            //改变songIndex
            dispatch(changeCurrentSongIndexAction(songIndex))
            //改变当前歌曲song
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
            // 歌词
            dispatch(getLyricAction(song.id))
        }else{
            getSongDetail(ids).then(res=>{
                //请求歌曲数据
            song = res.songs && res.songs[0]
            if(!song) return ;
            //将最新请求的歌曲添加到播放列表中
            const newPlayList = [...playList]//不要直接修改redux的数据 做一个浅拷贝
            newPlayList.push(song)
            //更新redux
            dispatch(changePlayListAction(newPlayList))
            dispatch(changeCurrentSongIndexAction(newPlayList.length-1))
            dispatch(changeCurrentSongAction(song))
            // 歌词
            dispatch(getLyricAction(song.id))
            })
        }
      
       
       
      
    }
}
export const getLyricAction =(id)=>{
    return dispatch=>{
      getLyric(id).then(res=>{
         const lyric = res.lrc.lyric
         const lyricList = parseLyric(lyric)
          dispatch(changeLyricListAction(lyricList))
      })
    }
}