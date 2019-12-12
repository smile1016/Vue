import {get} from './http'
//https://wirelesspub.xiaozhu.com/app/xzfk/html5/500/global/HotRecommend?timestamp=1575552980718
//https://wirelesspub.xiaozhu.com/app/xzfk/html5/500/global/indexBackground?timestamp=1575553584006
export const HotRecommend=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/HotRecommend.json'
    return get(url,params)
}
export const insideHotCity=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/insideHotCity.json'
    return get(url,params)
}
export const insideAllCity=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/insideAllCity.json'
    return get(url,params)
}
export const outsideHotCity=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/outsideHotCity.json'
    return get(url,params)
}
export const outsideAllCity=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/outsideAllCity.json'
    return get(url,params)
}



