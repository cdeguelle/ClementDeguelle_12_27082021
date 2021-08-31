import React from "react"
import { useParams } from "react-router-dom"
import { LineChart, Line, Tooltip, XAxis } from "recharts"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"

const AverageGraph = styled.div`
    
`


function AverageTime() {
    const { userId } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const averageData = data?.data

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    const tooltipStyle = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <AverageGraph>
            {isLoading ? (
                <Loader />
            ) : (
                <LineChart
                    width={258}
                    height={263}
                    data={averageData.sessions}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 5
                    }}
                    style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
                >
                    <Tooltip labelStyle={{ display: 'none' }} contentStyle={tooltipStyle} itemStyle={tooltipStyle} cursor={{ stroke: 'white' }} allowEscapeViewBox={{ x: true }} />
                    <XAxis dataKey='day' axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }} tick={{ fill: 'white', opacity: 0.7 }} />
                    <Line type='monotone' dataKey='sessionLength' stroke='white' unit='min' strokeWidth={2}  />
                </LineChart>
            )}
        </AverageGraph>
        
    )
}

export default AverageTime