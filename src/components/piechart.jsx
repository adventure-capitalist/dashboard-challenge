import React, { Component } from 'react';

class PieChart extends Component {

    render() {
        let data = this.props.data;
        let thickness = this.props.thickness;
        let pxSize = this.props.size;
        let pxHalf = Math.round(this.props.size / 2);
        let pxRadius = (Math.round(this.props.size / 2) - (thickness / 2));
        let pxLength = Math.ceil(Math.PI * 2 * pxRadius);
        let totalValue = data.reduce((accum,item) => accum + item.value, 0);
        var rotateStart = 0;
        var sum = 0;
    return (
        <svg aria-hidden={true} className="pie-chart" style={{ width: pxSize, height: pxSize }}>
                {
                    data.map((segment, index) => {
          sum+=segment.value;
          let length = pxLength - Math.round((segment.value * pxLength) / totalValue);
        //   let percentage = Math.round((segment.value * 100) / totalValue);
          rotateStart = index===0 ? -90 : (((360 / +totalValue) * (+sum - +segment.value)) - 90);
                        return (
                            <circle 
                                key={index}
                                style={{ 
                                    strokeWidth: thickness, 
                                    strokeDashoffset: length,
                                    strokeDasharray: pxLength,
                                    stroke: segment.color,
                                    transform: `rotate(${rotateStart}deg)`,
                                    transformOrigin: `${pxHalf}px ${pxHalf}px `
                                }} 
                                cx={pxHalf} cy={pxHalf} r={ pxRadius }>
                            </circle>
                        );
                    })
                }
        </svg>
    )};
} export default PieChart;