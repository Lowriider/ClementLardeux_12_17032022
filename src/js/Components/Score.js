import React from 'react';
import {PieChart, Pie, Label, Cell, ResponsiveContainer, Legend} from 'recharts';

const Score = ({score}) => {

    const data = [
        {
            name: "completed",
            value: score,
            fillColor: "#E60000",
        },
        {
            name: "uncompleted",
            value: 100 - score,
            fillColor: "#FBFBFB",
        }
    ]
    const EXAMPLE_DATA = [
        {
            name: 'example1',
            value: 100,
        },
    ];
    const renderLegend = (props) => {
        const {payload} = props;

        return (
            <>
                <div className="score-legend-container">
                        <div className="score-text">
                            <p>{score}%</p>
                            <span>de votre<br/></span>
                            <span>objectif</span>
                        </div>
                </div>
            </>
        );
    }

    return (
        <>
            <h2 className="score-title">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={500}>
                    <Pie data={EXAMPLE_DATA} dataKey="value" outerRadius={70} fill="#FFFFFF" isAnimationActive={false}/>
                    <Pie data={data} dataKey="value" innerRadius={70}
                         outerRadius={80}
                         startAngle={90}
                         endAngle={450}
                    >
                        isAnimationActive={false}
                        {
                            data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.fillColor}
                                    cornerRadius="50%"
                                />
                            ))}
                    </Pie>
                    <Legend verticalAlign="middle" iconType="circle" align="center"
                            content={renderLegend}
                            />
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}
export default Score
