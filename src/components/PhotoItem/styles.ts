import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43; 
    padding: 10px; 
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease;
        background-color: #444; 
        box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.3);
    }
    
    a {
        display: flex;
        flex-direction: column ;
        width: 100%; 
        height: 100%; 
        justify-content: space-between;
        text-decoration: none;
        color: #fff;
        
        img {
            max-width: 100%; 
            border-radius: 10px;
            margin-bottom: 10px; 
            height: 85%; 
            
        }
    }
    
`; 