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
import Counter from "../../components/Counter"
import Activity from "../../components/Activity"
import AverageTime from "../../components/AverageTime"
import RadarGraph from "../../components/Radar"
import Score from "../../components/Score"
import './style.css'

const HomeContainer = styled.div`
	display: flex;
`

const VerticalNavBar = styled.div`
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

const DashboardTitle = styled.h1`
	font-size: 2.5em;
	margin-bottom: 0;
`

const DashboardCongrats = styled.p`
	margin-bottom: 70px;
`

const DashBoard = styled.div `
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin: 50px 30px;
`

const DashboardGraphs = styled.div`
	display: flex;
	justify-content: space-between;
`

const DashBoardSecondaryGraphs = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
	width: 100%;
`

const DashBoardCounts = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10vh;
	justify-content: space-between;
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
			</VerticalNavBar>
			{isLoading ? (
				<Loader />
			) : (
				<DashBoard className='dashboard'>
					<div style={{ display:'flex', flexDirection:'column', justifyContent: 'space-around' }}>
						<DashboardTitle>Bonjour <span style={redFont}>{dashboardData.userInfos.firstName}</span></DashboardTitle>
						<DashboardCongrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardCongrats>
						<DashboardGraphs className='dashboard-graphs'>
							<div>
								<Activity />
								<DashBoardSecondaryGraphs>
									<AverageTime />
									<RadarGraph />
									<Score />
								</DashBoardSecondaryGraphs>
							</div>
							
							<DashBoardCounts className='dashboard-counts'>
								<Counter
									picture={Calories}
									count={dashboardData.keyData.calorieCount + 'kCal'}
									unit={'Calories'}
								/>
								<Counter
									picture={Proteines}
									count={dashboardData.keyData.proteinCount + 'g'}
									unit={'Proteines'}
								/>
								<Counter
									picture={Glucides}
									count={dashboardData.keyData.carbohydrateCount + 'g'}
									unit={'Glucides'}
								/>
								<Counter
									picture={Lipides}
									count={dashboardData.keyData.lipidCount + 'g'}
									unit={'Lipides'}
								/>
							</DashBoardCounts>
						</DashboardGraphs>
					</div>
				</DashBoard>
			)}
		</HomeContainer>
	)
}

export default Home
