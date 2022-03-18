import styled from "styled-components";

export const Container = styled.div`

    .weather {
        text-align: center;
	    font-size: 1.25em;
	    font-weight: normal; 
        min-height: 100vh;
        margin: -8px;
        background: linear-gradient(90deg, rgba(14,153,242,0.6) 0%, rgba(255,222,27,0.6) 61%, 
        rgba(149,149,149,0.6) 100%);    
      }

      .weather .title {
        font-size: 4rem;      
        font-family: 'Patrick Hand', cursive;
      }

      img{        
        height: 40px;
        width: 45px;
        animation: rotate 5s infinite linear;
      }

`;