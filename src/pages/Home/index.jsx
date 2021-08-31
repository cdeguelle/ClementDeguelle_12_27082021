import colors from "../../utils/style/colors"
import styled from "styled-components"
import verticalNavBarIcon1 from "../../assets/verticalnavbaricon1.png"
import verticalNavBarIcon2 from "../../assets/verticalnavbaricon2.png"
import verticalNavBarIcon3 from "../../assets/verticalnavbaricon3.png"
import verticalNavBarIcon4 from "../../assets/verticalnavbaricon4.png"
import Calories from "../../assets/Calories.png"
import Proteines from "../../assets/Proteines.png"
import Glucides from "../../assets/Glucides.png"
import Lipides from "../../assets/Lipides.png"
import { Loader } from "../../utils/style/Atoms"
import { useFetch } from "../../utils/hooks"
import { useParams } from "react-router-dom"
import Activity from "../../components/Activity"
import AverageTime from "../../components/AverageTime"
import RadarGraph from "../../components/Radar"

const HomeContainer = styled.div`
	display: flex;
`

const VerticalNavBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 130px;
	min-height: 90vh;
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

const Copyright = styled.p`
	color: white;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	font-size: 0.8em;
`

const DashboardTitle = styled.h1`
	font-size: 2.5em;
`

const DashboardCongrats = styled.p`

`

const DashBoard = styled.div `
	padding: 30px 70px;
	display: flex;
	width: 100%;
	justify-content: space-between;
`

const DashboardGraphs = styled.div`
	display: flex;
	flex-direction: column;
`

const DashBoardSecondaryGraphs = styled.div`
	display: flex;
`

const DashBoardCounts = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 135px;
`

const NutritiveCount = styled.div`
	display: flex;
	background-color: #FBFBFB;
	justify-content: center;
	align-items: center;
	padding: 30px;
	margin-bottom: 30px;
	font-weight: bold;
	width: 250px;
	height: 120px;
	border-radius: 5px;
`

const LogoNutritiveCount = styled.img`
	width: 60px;
	height: 60px;
	margin-right: 10px;
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
				<div>
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
				</div>
				<Copyright>Copiryght, SportSee 2020</Copyright>
			</VerticalNavBar>
			{isLoading ? (
				<Loader />
			) : (
				<DashBoard>
					<div>
						<DashboardTitle>Bonjour <span style={redFont}>{dashboardData.userInfos.firstName}</span></DashboardTitle>
						<DashboardCongrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardCongrats>
						<DashboardGraphs>
							<Activity />
							<DashBoardSecondaryGraphs>
								<AverageTime />
								<RadarGraph />
							</DashBoardSecondaryGraphs>
						</DashboardGraphs>
					</div>
					
					<DashBoardCounts>
						<NutritiveCount>
							<LogoNutritiveCount src={Calories} alt='burn' />
							<Count>
								{dashboardData.keyData.calorieCount}kCal
								<UnitNutritiveCount>Calories</UnitNutritiveCount>
							</Count>
						</NutritiveCount>
						<NutritiveCount>
							<LogoNutritiveCount src={Proteines} alt='chicken wing' />
							<Count>
								{dashboardData.keyData.proteinCount}g
								<UnitNutritiveCount>Proteines</UnitNutritiveCount>
							</Count>
						</NutritiveCount>
						<NutritiveCount>
							<LogoNutritiveCount src={Glucides} alt='apple' />
							<Count>
								{dashboardData.keyData.carbohydrateCount}g
								<UnitNutritiveCount>Glucides</UnitNutritiveCount>
							</Count>
						</NutritiveCount>
						<NutritiveCount>
							<LogoNutritiveCount src={Lipides} alt='cheese burger' />
							<Count>
								{dashboardData.keyData.lipidCount}g
								<UnitNutritiveCount>Lipides</UnitNutritiveCount>
							</Count>
						</NutritiveCount>
					</DashBoardCounts>
				</DashBoard>
			)}
		</HomeContainer>
	)
}

export default Home
