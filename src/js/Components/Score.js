import React from 'react';
import {PieChart, Pie, Label, Cell, ResponsiveContainer, Legend} from 'recharts';

const Score = ({score}) => {

    /* Creating an array of objects with the name, value and fillColor of the pie chart. */
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
    ];

    /* Used to render the white circle in the middle of the pie chart. */
    const fakeData = [
        {
            name: 'example1',
            value: 100,
        },
    ];

    /**
     * It renders a div with a score and a text
     * @param props - the props passed to the component
     * @returns A function that returns a div with a score text div inside.
     */
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
                    <Pie data={fakeData} dataKey="value" outerRadius={70} fill="#FFFFFF" isAnimationActive={false}/>
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
