import {get} from './http'
export const movieOnInfoList = (params)=>{
    let url = "/api/ajax/movieOnInfoList?token=";
    return get(url,params)
}
export const moreComingList = (params)=>{
    let url = "/api/ajax/moreComingList?token=";
    return get(url,params)
}
export const mostExprected = (params)=>{
    let url = "/api/ajax/mostExpected?";
    return get(url,params)
}
export const comingList = (params)=>{
    let url = "/api/ajax/comingList?";
    return get(url,params)
}
export const getHotCities = (params)=>{
    let url = "/cities.json";
    return get(url,params)
}