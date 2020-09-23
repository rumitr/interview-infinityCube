import { quantile } from "d3";

export const fetcher = (...args) => fetch(...args).then((res) => res.json()).then(res => res.list)

export const generateHexCode = () => {
    //may sometimes generte same color
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)

}

export const generateHexCodes = quantity => {
    let codes = [];
    while (codes.length < quantity) {
        codes.push(generateHexCode())
    }
    return codes
}