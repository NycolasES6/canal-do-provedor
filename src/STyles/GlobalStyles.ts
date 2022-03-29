import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body{
    height: 100%;
  }

  #root{
    background-color: var(--dark-blue);
    height:100%;
    overflow-y: auto;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: #1b1c25;
    --quaternary: #292b2f;
    --senary: #828386;
    
    --symbol:#29292e;

    --white:#fff;

    --gray-blue:#23293A;
    --dark-blue: #00030d;
    --blue: #6e86d6;
    --bluehover: #50629c;
    --blue-light:#7ACFFF;
  }
`