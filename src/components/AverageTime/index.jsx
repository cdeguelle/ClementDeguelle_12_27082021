import React from "react"
import { useParams } from "react-router-dom"
import { LineChart, Line, Tooltip, XAxis, YAxis, Rectangle } from "recharts"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"

const AverageGraph = styled.div`
    position: relative;
`

const TitleAverageGraph = styled.h3`
    position: absolute;
    top: 5px;
    left: 15px;
    color: white;
    opacity: 0.7;
    width: 200px;
    font-weight: normal;
    font-size: 1em;
`


function AverageTime() {
    const { userId } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const averageData = data?.data

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: 'white', color: 'black', textAlign: 'center' }}>
                    <p className="label" style={{ padding: '5px' }} >{payload[0].value} min</p>
                </div>
            )
        }
        return null
    }

    const CustomCursor = props => {
        const { x, y, width, height } = props
        return <Rectangle fill='black' stroke='black' x={x} y={y} width={width} height={height} />
    }

    return (
        <AverageGraph>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <LineChart
                    width={308}
                    height={263}
                    data={averageData.sessions}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 5
                    }}
                    style={{ backgroundColor: '#FF0000', borderRadius: '5px', opacity: 0.7, position: 'relative' }}
                    >
                        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor x={0} y={0} width={308} height={263} />} />
                        <YAxis hide={true} />
                        <XAxis dataKey='day' axisLine={false} tickLine={false} tick={{ fill: 'white', opacity: 0.7 }} padding={{ left: 10, right: 10 }} allowDataOverflow={true} />
                        <Line type='natural' dataKey='sessionLength' stroke='white' unit='min' strokeWidth={2} dot={{ r: 0 }} activeDot={{ r: 3 }} />
                    </LineChart>
                <TitleAverageGraph>Durée moyenne des sessions</TitleAverageGraph>
                </div>
                
            )}
        </AverageGraph>
        
    )
}

export default AverageTime