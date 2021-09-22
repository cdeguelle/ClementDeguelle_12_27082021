import React from "react"
import { useParams } from "react-router-dom"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import './style.css'
import { useActivityAPI } from "../../utils/API"

const ActivityGraph = styled.div`
    position: relative;
`

const TitleActivityGraph = styled.h3`
    position: absolute;
    top: 15px;
    left: 40px;
`


function Activity() {
    const { userId } = useParams()
    const { data, isLoading, error } = useActivityAPI(userId)
    const activityData = data?.data
    /**
     * Waiting for data.
     */
    if (!data?.data) return <Loader />

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    const tooltipStyle = {
        backgroundColor: colors.secondary,
        color: 'white'
    }

    /**
     * Create a custom color legend text.
     * @param {string} value 
     * @returns JSX element.
     */
    const renderColorfulLegendText = (value) => {
        return <span style={{ color: '#74798C' }}>{value}</span>
    }

    for (let index = 0; index < activityData.sessions.length; index++) {
        activityData.sessions[index].day = index + 1       
    }

    /**
     * Create a custom tolltip.
     * @param {boolean} active 
     * @param {object} payload 
     * @returns JSX element.
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: colors.secondary, color: 'white', textAlign: 'center', padding: '10px' }}>
                    <p className="label" style={{ marginBottom: '30px' }}>{payload[0].value}kg</p>
                    <p className="label">{payload[1].value}kCal</p>
                </div>
            )
        }
        return null
    }

    return (
        <ActivityGraph>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='bar-chart' style={{ width: '92%', height: 420 }}>
                    <ResponsiveContainer>
                        <BarChart
                            data={activityData.sessions}
                            barSize={7}
                            barCategoryGap={0}
                            margin={{
                                top: 30,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}
                            style={{ backgroundColor: colors.backgroundLight, borderRadius: '5px', padding: '40px' }}
                        >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Legend align='right' verticalAlign='top' height='50px' wrapperStyle={{ right: 40 }} formatter={renderColorfulLegendText} />
                            <XAxis dataKey='day' axisLine={false} tickLine={false} padding={{ left: -50, right: -50 }} />
                            <YAxis dataKey='kilogram' yAxisId='right' orientation='right' axisLine={false} tickLine={false} tickCount={3} domain={['dataMin-1', 'dataMax']} tickSize={30} />
                            <YAxis dataKey='calories' yAxisId='left' orientation='left' tickCount={3} hide={true} />
                            <Tooltip labelStyle={{ display: 'none' }} itemStyle={tooltipStyle} content={<CustomTooltip />} cursor={{ width: 120, opacity: 0.4 }} />
                            <Bar name='Poids (kg)' yAxisId='right' dataKey="kilogram" fill={colors.primary} legendType='circle' radius={20} unit='kg' />
                            <Bar name='Calories brûlées (kCal)' yAxisId='left' dataKey="calories" fill={colors.secondary} legendType='circle' radius={20} unit='kCal' />
                        </BarChart>
                    </ResponsiveContainer>
                    <TitleActivityGraph>Activité quotidienne</TitleActivityGraph>
                </div>
            )}
        </ActivityGraph>
    )
}

export default Activity