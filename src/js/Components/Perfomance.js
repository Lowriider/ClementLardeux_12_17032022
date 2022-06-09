import React, {useState} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Perfomance = ({performances}) => {

    /**
     * It takes the data from the performances object, and adds a new key called kind, which is the first letter of the
     * value of the key kind, capitalized, and then the rest of the value of the key kind
     * @returns The data is being returned in reverse order.
     */
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
