import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43; 
    padding: 10px; 
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;  
    justify-content: center;
    gap: 1rem; 
    color: #fff;

    &:hover {
        transition: all 0.2s ease;
        background-color: #444; 
        box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.3);
    }
`; 

export const Content = styled.div`
    
    img {
        width: 100%; 
        height: 250px; 
        border-radius: 10px;
        margin-bottom: 10px;         
    }

    span {
        display: block;
        font-size: 0.9rem; 
        text-align: center;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; 

    button, a {
        display: block; 
        border: none; 
        outline: none; 
        cursor: pointer; 
        background-color: #756df7; 
        color: #fff; 
        padding: 10px; 
        font-size: 1rem; 
        border-radius: 10px; 
        
        &:hover, &:active {
            opacity: 0.9; 
        }
    }

    a {
        text-decoration: none; 
    }
`; 