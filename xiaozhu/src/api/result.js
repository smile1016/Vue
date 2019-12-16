import {get} from './http'
export const ResultRoomList = (params)=>{
    let url ='/api/app/xzfk/html5/500/search/result?'
    return get(url,params)
}
export const getPositionArea=(params)=>{
    let url = 'api/app/xzfk/html5/500/global/areaandlandmark?'
    return get(url,params)
}
export const getLocationIcon =(params)=>{
    let url= '/mock/LocationIcon.json'
    return get(url,params)
}
export const getRoomDetail=(params)=>{
    let url ='api/app/xzfk/html5/500/Fangdong/index'
    return get(url,params)
}
export const getActivities=(params)=>{
    let url = '/api/app/xzfk/html5/500/detail/allActivity'
    return get(url,params)
}