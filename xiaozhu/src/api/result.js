import {get} from './http'
export const ResultRoomList = (params)=>{
    let url ='/api/app/xzfk/html5/500/search/result?'
    return get(url,params)
}