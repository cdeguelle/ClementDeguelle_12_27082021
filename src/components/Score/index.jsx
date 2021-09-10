import React from "react"
import { useParams } from "react-router-dom"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import './style.css'

const ScoreGraph = styled.div`
    position: relative;
`

const TitleScoreGraph = styled.h3`
    position: absolute;
    top: 0;
    left: 35px;
`

const ContentScoreGraph = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;
    text-align: center;
    font-size: 1em;
    color: #74798C;
    width: 60px;
`

const ScorePercent = styled.strong`
    font-size: 1.5em;
    color: black !important;
`

function Score() {
    const { userId } = useParams()
    const { data, error } = useFetch(`http://localhost:3000/user/${userId}`)
    if (!data?.data) return <Loader />
    const scoreData = data?.data.todayScore

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    const PieData = [
        {
            name: 'Score',
            value: scoreData*100
        },
        { 
            name: 'Empty-score',
            value: 100-scoreData*100
        }
    ]

    const colorFill = [colors.secondary, colors.backgroundLight]

    return (
        <ScoreGraph>
            <div className='score-chart' style={{ width: 308, height: 263 }}>
                <ResponsiveContainer>
                    <PieChart 
                        style={{ backgroundColor: colors.backgroundLight, borderRadius: '5px' }}
                    >
                        <Pie 
                            data={PieData} 
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            innerRadius={70} 
                            outerRadius={80} 
                            startAngle={-270}
                            fill={colors.secondary} 
                        >
                            {PieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorFill[index % colorFill.length]} stroke={colors.backgroundLight} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <TitleScoreGraph>Score</TitleScoreGraph>
                <ContentScoreGraph>
                    <ScorePercent>{scoreData*100}%</ScorePercent><br />
                    de votre objectif
                </ContentScoreGraph>
            </div>
        </ScoreGraph>
    )
}

export default Score