import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from "prop-types";


const Activity = ({activities}) => {

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

    /**
     * It takes the day property from the activities object, splits it into an array, and then returns the day as an
     * integer
     * @returns An array of integers representing the day of the month for each activity.
     */

    const formatDates = () => {
        let arrayOfDays = Object.values(activities).map(({day}) => day.split('-'))
        return arrayOfDays.map(date => {
            return parseInt(date[2])
        })
    }
    /**
     * It takes the array of dates, formats them, and then sorts them from earliest to latest
     * @returns An array of the dates in the format of "YYYY-MM-DD"
     */
    const sortMinMaxDays = () => {

        let arrayMinMaxDays = formatDates().slice()
            .sort(function (a, b) {
                return new Date(a) - new Date(b);
            })
        return arrayMinMaxDays
    }

    /**
     * It takes the values of the calories property from the activities object, and then pushes the minimum value of the
     * array minus 10, and the maximum value of the array plus 50, into a new array
     * @returns An array of two numbers. The first number is the minimum calories minus 10. The second number is the
     * maximum calories plus 50.
     */
    const getMinMaxCalories = () => {
        let arrayMinMaxCalories = [];
        let arrayOfCalories = Object.values(activities).map(({calories}) => calories)

        arrayMinMaxCalories.push(Math.min(...arrayOfCalories) - 10)
        arrayMinMaxCalories.push(Math.max(...arrayOfCalories) + 50)

        return arrayMinMaxCalories
    }

    /**
     * It renders a legend for the chart
     * @param props - The props object is passed to the renderLegend function. It contains the following properties:
     * @returns A function that returns a div with a title and two divs with a circle and a text.
     */
    const renderLegend = (props) => {
        const {payload} = props;

        return (
            <>
                <div className="top-activity-legend-container">
                    <h2>Activité quotidienne</h2>
                    <div className="legend-container">
                        <div className="legend"><span className="circle black"></span><span
                            className="legend-text">Poids(kg)</span></div>
                        <div className="legend"><span className="circle red"></span><span className="legend-text">Calories brûlées(kCal)</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    const CustomTooltip = ({ active, payload, label }) => {

        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}kCal</p>
                </div>
            )
        }
        return null
    }

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
    };

    return (
        <ResponsiveContainer width="100%" height="95%">
            <BarChart
                width={50}
                height={200}
                data={activities}
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
                <XAxis dataKey={formatDates} domain={sortMinMaxDays()} tickLine={false} tickMargin={15}/>
                <YAxis yAxisId="right" dataKey="kilogram" height={120} orientation="right" axisLine={false}
                       tickLine={false} tick={{strokeWidth: 20}} domain={getMinMaxWeight()} tickMargin={45}/>
                <YAxis yAxisId="left" dataKey="calories" height={120} hide={true} orientation="left"/>
                <Tooltip content={CustomTooltip} wrapperStyle={{ top: -5, left: 7 }}/>
                <Legend verticalAlign="top" iconType="circle" align="right"
                        content={renderLegend}
                        wrapperStyle={{lineHeight: '40px', paddingBottom: "64px", paddingTop: "24px"}}/>
                <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" radius={[20, 20, 0, 0]}/>
                <Bar dataKey="calories" yAxisId="left" fill="#E60000" radius={[20, 20, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Activity
