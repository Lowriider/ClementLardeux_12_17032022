import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend} from 'recharts';
import PropTypes from "prop-types";

const AverageSession = ({session}) => {
    /**
     * It takes the array of session lengths, finds the minimum and maximum values, and returns an array with the minimum
     * value minus 10 and the maximum value plus 20
     * @returns An array of two numbers.
     */
    const getMinMaxLength = () => {

        let arrayMinMaxLength = [];
        let arrayOfLength = Object.values(session.sessions).map(({sessionLength}) => sessionLength)

        arrayMinMaxLength.push(Math.min(...arrayOfLength) - 20)
        arrayMinMaxLength.push(Math.max(...arrayOfLength) + 30)

        return arrayMinMaxLength
    }

    /**
     * It takes the session object and adds a new day property to each session object
     * @returns the session object with the days of the week added to the sessions.
     */
    const formatDayNumbers = () => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        Object.values(session.sessions).forEach((day, key) => {
            session.sessions[key] = {
                ...session.sessions[key],
                day: days[key]
            }

        })
        return session.sessions
    }

    /**
     * It renders the legend of the chart
     * @param props - the props passed to the component
     * @returns A function that returns a div with a h2 element inside.
     */
    const renderLegend = (props) => {
        const {payload} = props;

        return (
            <>
                <div className="top-session-legend-container">
                    <h2>Durée moyenne des sessions</h2>
                </div>
            </>
        );
    }


    /**
     * If the tooltip is active, return the value of the first data point in the payload. If the tooltip is not active,
     * return null
     * @returns A custom tooltip for the average session length chart.
     */
    const CustomTooltip = ({active, payload}) => {
        if (active) {
            return (
                <div className="average-session-tooltip">{payload[0].value} min</div>
            )
        }
        return null;
    }

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={formatDayNumbers()}>
                <defs>
                    <linearGradient id="linear" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2}/>
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tick={{fill : '#FFFFFF', opacity: 0.5}} tickLine={false} minTickGap={3}
                       padding={{left: 10, right: 10}}/>
                <YAxis hide={true} domain={getMinMaxLength}/>
                <Tooltip content={<CustomTooltip/>} cursor={{stroke: 'rgba(0,0,0,0.1)', strokeWidth: 50}}
                         viewBox={{
                             x: 0,
                             y: 0,
                             width: 400,
                             height: 400
                         }}/>
                <Legend verticalAlign="top" iconType="circle" align="right"
                        content={renderLegend}
                />
                <Line
                    dataKey='sessionLength'
                    type='monotoneX'
                    stroke="url(#linear)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        stroke: 'rgba(255, 255, 255, 0.3)',
                        strokeWidth: 10,
                        r: 4,
                    }}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default AverageSession
