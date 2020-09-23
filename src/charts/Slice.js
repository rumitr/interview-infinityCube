import * as d3 from 'd3';

function Slice(props) {
    let { pie } = props;
    let arc = d3.arc().innerRadius(0).outerRadius(100);

    const interpolate = d3.interpolateRgb('#eaaf79', "#bc3358");


    return pie.map((slice, index) => {
        let sliceColor = d3.interpolateRgb('#eaaf79', "#bc3358")(index / (pie.length - 1));
        return <path d={arc(slice)} fill={sliceColor} />
    })
}




export default Slice