import styled from "styled-components"
import SportSeeLogo from "../../assets/SportSeeLogo.png"
import { StyledLink } from '../../utils/style/Atoms'
import colors from "../../utils/style/colors"

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

const Logo = styled.img`
    width: 200px;
    margin-left: 30px;
`

function Header() {
    return (
        <HeaderStyle>
            <Logo src={SportSeeLogo} alt="SportSee logo" />
            <NavStyle>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/">Profil</StyledLink>
                <StyledLink to="/">Réglage</StyledLink>
                <StyledLink to="/">Communauté</StyledLink>
            </NavStyle>
        </HeaderStyle>
    )
}

export default Header