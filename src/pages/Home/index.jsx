import colors from "../../utils/style/colors"
import styled from "styled-components"
import verticalNavBarIcon1 from "../../assets/verticalnavbaricon1.png"
import verticalNavBarIcon2 from "../../assets/verticalnavbaricon2.png"
import verticalNavBarIcon3 from "../../assets/verticalnavbaricon3.png"
import verticalNavBarIcon4 from "../../assets/verticalnavbaricon4.png"
import { Loader } from "../../utils/style/Atoms"
import { useFetch } from "../../utils/hooks"
import { useParams } from "react-router-dom"

const HomeContainer = styled.div`
	display: flex;
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

const DashBoard = styled.div `
	padding: 70px 110px;
`

const DashboardTitle = styled.h1`
	font-size: 2.5em;
`

const DashboardCongrats = styled.p`

`

function Home() {
	const { userId } = useParams()
	const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}`)
	const dashboardData = data?.data

	const redFont = {
		color: colors.secondary
	}

	if (error) {
		return <span>Oups, il y a eu un problème</span>
	}
	
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
			{isLoading ? (
				<Loader />
			) : (
				<DashBoard>
					<DashboardTitle>Bonjour <span style={redFont}>{dashboardData.userInfos.firstName}</span></DashboardTitle>
					<DashboardCongrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardCongrats>
				</DashBoard>
			)}
		</HomeContainer>
	)
}

export default Home
