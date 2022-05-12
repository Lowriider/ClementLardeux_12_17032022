import React, {useState} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Perfomance = ({performances}) => {
    const replaceData = () => {
        Object.values(performances.kind).forEach((type, key) => {
            performances.data[key] = {
                ...performances.data[key],
                kind: type.charAt(0).toUpperCase() + type.slice(1)
            }

        })
        return performances.data
    }

    const data = replaceData();

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="kind" stroke='white'
                                tickLine={false}
                                tick={{ fontSize: 11 }}/>
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default Perfomance
