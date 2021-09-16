import colors from "../../utils/style/colors"
import styled from "styled-components"
import verticalNavBarIcon1 from "../../assets/verticalnavbaricon1.png"
import verticalNavBarIcon2 from "../../assets/verticalnavbaricon2.png"
import verticalNavBarIcon3 from "../../assets/verticalnavbaricon3.png"
import verticalNavBarIcon4 from "../../assets/verticalnavbaricon4.png"

const NavBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 140px;
	min-height: 85vh;
	background-color: ${colors.primary};
`

const VerticalNavIcon = styled.button`
	border-radius: 6px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 64px;
	height: 64px;
	margin: 20px 10px;
	cursor: pointer;
`

const Copyright = styled.p`
	color: white;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	font-size: 0.8em;
`

function VerticalNavBar() {
    return(
        <NavBar>
            <div>
                <VerticalNavIcon className='vertical-nav-icon'>
                    <img src={verticalNavBarIcon1} alt='meditation' />
                </VerticalNavIcon>
                <VerticalNavIcon className='vertical-nav-icon'>
                    <img src={verticalNavBarIcon2} alt='swimming' />
                </VerticalNavIcon>
                <VerticalNavIcon className='vertical-nav-icon'>
                    <img src={verticalNavBarIcon3} alt='bicycle' />
                </VerticalNavIcon>
                <VerticalNavIcon className='vertical-nav-icon'>
                    <img src={verticalNavBarIcon4} alt='alters' />
                </VerticalNavIcon>
            </div>
            <Copyright>Copiryght, SportSee 2020</Copyright>
        </NavBar>
    )
}

export default VerticalNavBar