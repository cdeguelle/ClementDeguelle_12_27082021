import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Roboto', Helvetica, sans-serif;
    }
    html {
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;
    }
`

export default StyledGlobalStyle
