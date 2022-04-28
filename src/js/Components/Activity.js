import React from 'react';
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Activity = ({activities}) => {
    console.log(activities)
    const getMaxWeight = () => {
        return activities.reduce((acc, activity) => acc = acc > activity.kilogram ? acc : activity.kilogram, 0);
    }
    /**
     * It takes the values of the weight property of each object in the activities object and returns the minimum and
     * maximum values of the array
     * @returns An array with the minimum and maximum weight of the activities.
     */
    const getMinMaxWeight = () => {

        let arrayMinMaxWeight = [];
        let arrayOfWeight = Object.values(activities).map(({kilogram}) => kilogram)

        arrayMinMaxWeight.push(Math.min(...arrayOfWeight) - 2)
        arrayMinMaxWeight.push(Math.max(...arrayOfWeight) + 2)

        return arrayMinMaxWeight
    }
    const formatDates = () => {
        let arrayOfDays = Object.values(activities).map(({day}) => day.split('-'))
        return arrayOfDays = arrayOfDays.map(date => {
            return parseInt(date[2])
        })
    }
    const getMinMaxDays = () => {

        let arrayMinMaxDays = formatDates().slice() // copy the array for keeping original array with order
            .sort(function (a, b) {
                return new Date(a) - new Date(b);
            })

        return arrayMinMaxDays
    }
    console.log(getMinMaxDays())
    const getMinMaxCalories = () => {
        let arrayMinMaxCalories = [];
        let arrayOfCalories = Object.values(activities).map(({calories}) => calories)

        arrayMinMaxCalories.push(Math.min(...arrayOfCalories) - 10)
        arrayMinMaxCalories.push(Math.max(...arrayOfCalories) + 50)

        return arrayMinMaxCalories
    }

    const renderLegend = (props) => {
        const {payload} = props;

        return (
            <>
                <div className="top-chart-container">
                    <h2>Activité quotidienne</h2>
                    <div className="legend-container">
                        <div className="legend"><span className="circle black"></span><span className="legend-text">Poids(kg)</span></div>
                        <div className="legend"><span className="circle red"></span><span className="legend-text">Calories brûlées(kCal)</span></div>
                    </div>
                </div>
            </>

        )
            ;
    }

    const data = activities

    return (
        <ResponsiveContainer width="100%" height="85%">
            <BarChart
                width={50}
                height={200}
                data={data}
                margin={{
                    top: 8,
                    right: 30,
                    left: 43,
                    bottom: 5,
                }}
                barGap={8}
                barSize={7}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey={formatDates} domain={getMinMaxDays()} tickLine={false} tickMargin={15}/>
                <YAxis yAxisId="right" dataKey="kilogram" height={120} orientation="right" axisLine={false}
                       tickLine={false} tick={{strokeWidth: 20}} domain={getMinMaxWeight()} tickMargin={45}/>
                <YAxis yAxisId="left" dataKey="calories" height={120} hide={true} orientation="left"/>
                <Tooltip viewbox={{x: 0, y: 0, width: 400, height: 400}}/>
                <Legend verticalAlign="top" iconType="circle" align="right"
                        content={renderLegend} wrapperStyle={{lineHeight: '40px'}}/>
                <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" radius={[20, 20, 0, 0]}/>
                <Bar dataKey="calories" yAxisId="left" fill="#E60000" radius={[20, 20, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Activity
