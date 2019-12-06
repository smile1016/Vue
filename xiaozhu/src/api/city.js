import {get} from './http'
//https://wirelesspub.xiaozhu.com/app/xzfk/html5/500/global/HotRecommend?timestamp=1575552980718
//https://wirelesspub.xiaozhu.com/app/xzfk/html5/500/global/indexBackground?timestamp=1575553584006
export const HotRecommend=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/mock/HotRecommend.json'
    return get(url,params)
}