import colors from "../../utils/style/colors"
import styled from "styled-components"
import PropTypes from "prop-types"
import DefaultPicture from "../../assets/SportSeeLogo.png"
import './style.css'

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
        <NutritiveCount className='nutritive-count'>
            <LogoNutritiveCount src={picture} alt='burn' />
            <Count>
                <p style={{ margin: '0', fontSize: '1.5em' }}>{count}</p>
                <UnitNutritiveCount>{unit}</UnitNutritiveCount>
            </Count>
        </NutritiveCount>
    )
}

Counter.propTypes = {
    picture: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
}

Counter.defaultProps = {
    picture: DefaultPicture,
    count: 0,
    unit: "No data",
}

export default Counter