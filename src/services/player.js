import request from './request'
export function getSongDetail(ids){
     return request({
         url:'/song/detail',
         params:{
             ids
         }
     })
}
// 获取歌词
export function getLyric(id){
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}