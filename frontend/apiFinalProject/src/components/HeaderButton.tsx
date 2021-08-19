
import styled from "styled-components";
import {Link} from "react-router-dom"

const HeaderButton = styled(Link)`
    color: var(--blue);
    text-decoration: none;
    padding: 5px 40px;
   
    border-radius: 10px;
    font-size: 1.2rem;

    :hover{
    color: #E8810C;
    }
    
    

`

export{
    HeaderButton
}






