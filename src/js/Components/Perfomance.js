import React, {useState} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Perfomance = ({performances}) => {

    const formatData = () => {
        Object.values(performances.kind).forEach((type, key) => {
            performances.data[key] = {
                ...performances.data[key],
                kind: type.charAt(0).toUpperCase() + type.slice(1)
            }

        })
        return performances.data.reverse()
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%"  outerRadius={window.innerWidth > 1340 ? "70%" : "60%"} data={formatData()}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" stroke='white'

                                tickLine={false}
                                tick={{ fontSize: 11 }}/>
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default Perfomance
