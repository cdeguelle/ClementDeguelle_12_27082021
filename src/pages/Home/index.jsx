import colors from "../../utils/style/colors"
import styled from "styled-components"
import verticalNavBarIcon1 from "../../assets/verticalnavbaricon1.png"
import verticalNavBarIcon2 from "../../assets/verticalnavbaricon2.png"
import verticalNavBarIcon3 from "../../assets/verticalnavbaricon3.png"
import verticalNavBarIcon4 from "../../assets/verticalnavbaricon4.png"

const HomeContainer = styled.div`

`

const VerticalNavBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 120px;
	min-height: 85vh;
	background-color: ${colors.primary};
`

const VerticalNavIcon = styled.button`
	border-radius: 6px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	width: 64px;
	height: 64px;
	cursor: pointer;
`

function Home() {
	
    return (
		<HomeContainer>
			<VerticalNavBar>
				<VerticalNavIcon>
					<img src={verticalNavBarIcon1} alt='meditation' />
				</VerticalNavIcon>
				<VerticalNavIcon>
					<img src={verticalNavBarIcon2} alt='swimming' />
				</VerticalNavIcon>
				<VerticalNavIcon>
					<img src={verticalNavBarIcon3} alt='bicycle' />
				</VerticalNavIcon>
				<VerticalNavIcon>
					<img src={verticalNavBarIcon4} alt='alters' />
				</VerticalNavIcon>
			</VerticalNavBar>
		</HomeContainer>
	)
}

export default Home
