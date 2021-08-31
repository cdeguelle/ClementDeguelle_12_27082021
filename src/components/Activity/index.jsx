import React from "react"
import { useParams } from "react-router-dom"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const ActivityGraph = styled.div`
    
`


function Activity() {
    const { userId } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/activity`)
    const activityData = data?.data

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    const tooltipStyle = {
        backgroundColor: colors.secondary,
        color: 'white'
    }

    return (
        <ActivityGraph>
            {isLoading ? (
                <Loader />
            ) : (
                <BarChart
                    width={835}
                    height={320}
                    data={activityData.sessions}
                    barSize={7}
                    barCategoryGap={0}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 5
                    }}
                    style={{ backgroundColor: '#FBFBFB', borderRadius: '5px', padding: '10px' }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Legend align='right' verticalAlign='top' height='50px' />
                    <XAxis axisLine={false} tickLine={false} />
                    <YAxis orientation='right' axisLine={false} tickLine={false} tickCount={3} />
                    <Tooltip labelStyle={{ display: 'none' }} contentStyle={tooltipStyle} itemStyle={tooltipStyle} />
                    <Bar name='Poids (kg)' dataKey="kilogram" fill={colors.primary} legendType='circle' radius={20} unit='kg' />
                    <Bar name='Calories brûlées (kCal)' dataKey="calories" fill={colors.secondary} legendType='circle' radius={20} unit='kCal' />
                </BarChart>
            )}
        </ActivityGraph>
        
    )
}

export default Activity