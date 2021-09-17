import colors from "../../utils/style/colors"
import styled from "styled-components"
import VerticalNavBar from "../../components/VerticalNavBar"
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

const DashboardTitle = styled.h1`
	font-size: 2.5em;
	margin-bottom: 0;
`

const DashboardCongrats = styled.p`
	margin-bottom: 70px;
`

const DashBoard = styled.div `
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-around;
	margin: 50px 30px;
`

const DashboardGraphs = styled.div`
	display: flex;
	justify-content: space-around;
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
	margin-top: 177px;
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
			<VerticalNavBar />
			{isLoading ? (
				<Loader />
			) : (
				<DashBoard className='dashboard'>
					<DashboardGraphs className='dashboard-graphs'>
						<div>
							<DashboardTitle>Bonjour <span style={redFont}>{dashboardData.userInfos.firstName}</span></DashboardTitle>
							<DashboardCongrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardCongrats>
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
				</DashBoard>
			)}
		</HomeContainer>
	)
}

export default Home
