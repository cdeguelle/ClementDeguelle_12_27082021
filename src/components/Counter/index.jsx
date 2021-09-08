import colors from "../../utils/style/colors"
import styled from "styled-components"

const NutritiveCount = styled.div`
display: flex;
background-color: ${colors.backgroundLight};
align-items: center;
padding: 15px;
font-weight: bold;
width: 250px;
height: 120px;
border-radius: 5px;
`

const LogoNutritiveCount = styled.img`
width: 60px;
height: 60px;
margin-right: 20px;
margin-left: 20px;
`

const Count = styled.div`
display: flex;
flex-direction: column;
`

const UnitNutritiveCount = styled.span`
font-weight: normal;
color: #74798C;
font-size: 0.9em;
`

function Counter({ picture, count, unit }) {
    return (
        <NutritiveCount>
            <LogoNutritiveCount src={picture} alt='burn' />
            <Count>
                <p style={{ margin: '0', fontSize: '1.5em' }}>{count}</p>
                <UnitNutritiveCount>{unit}</UnitNutritiveCount>
            </Count>
        </NutritiveCount>
    )
}

export default Counter