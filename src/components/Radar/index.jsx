import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import colors from "../../utils/style/colors"
import styled from "styled-components"

const RadarContainer = styled.div``

function RadarGraph() {
    const { userId } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/performance`)
    const RadarData = data?.data

    if (error) {
		return <span>Oups, il y a eu un problème</span>
	}

    return (
        <RadarContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <RadarChart 
                    data={RadarData.data} 
                    width={258} 
                    height={263}
                    style={{ backgroundColor: '#282D30', borderRadius: '5px', marginLeft: '25px' }}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey='kind' />
                    <PolarRadiusAxis angle={30} domain={[0, 250]} tick={false} />
                    <Radar dataKey="value" stroke={colors.secondary} fill={colors.secondary} fillOpacity={0.6} />
                </RadarChart>
            )}
        </RadarContainer>
    )
}

export default RadarGraph