import React from "react"
import { useParams } from "react-router-dom"
import { PieChart, Pie, Cell } from "recharts"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import styled from "styled-components"
import colors from "../../utils/style/colors"

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
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}`)
    if (!data?.data) return <div></div>
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
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <PieChart 
                        width={308} 
                        height={263}
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
                            paddingAngle={5}
                            startAngle={90}
                            fill={colors.secondary} 
                        >
                            {PieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorFill[index % colorFill.length]} stroke={colors.backgroundLight} />
                            ))}
                        </Pie>
                    </PieChart>
                    <TitleScoreGraph>Score</TitleScoreGraph>
                    <ContentScoreGraph>
                        <ScorePercent>{scoreData*100}%</ScorePercent><br />
                        de votre objectif
                    </ContentScoreGraph>
                </div>
            )}
        </ScoreGraph>
    )
}

export default Score