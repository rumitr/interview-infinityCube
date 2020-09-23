import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import Slice from "./Slice";
import { generateHexCodes } from "../utils"


function PieChart({ height, width, radius = "100", data = [1, 2, 34, 56] }) {
    const ref = useRef();
    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
    }, []);

    var color = d3.scaleOrdinal(generateHexCodes(data.length))
    const pie = d3.pie()

    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    var arcs = dg.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")

    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc);


    return (
        <div className="pie-chart">
            <svg ref={ref}>
            </svg>
        </div>

    )

}

export default PieChart;