import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #f5f7fc;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    outline: 0;
  }

`

export default GlobalStyles
