import styled from "styled-components"; 

export const Container = styled.div`
    background-color: #27282f; 
    color: #fff; 
    width: 100%;
    min-height: 100vh; 
`; 

export const Area = styled.div`
    margin: auto; 
    padding: 1.5rem 0;
    max-width: 980px;  
    width: 90vw; 
`; 

export const Header = styled.h1`
    text-align: center;
    margin-bottom: 1.5rem; 
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 2rem; 
        margin-bottom: 1.2rem; 
    }

    .loading-message {
        font-size: 0.8rem; 
        font-weight: bold; 
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem; 
`; 

export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px; 
    border-radius: 10px; 
    margin-bottom: 2rem; 

    #submit {
        background-color: #756df7; 
        color: #fff; 
        border: 0; 
        outline: none;
        padding: 0.5rem 1rem; 
        font-size: 0.95rem; 
        cursor: pointer; 
        border-radius: 10px;
        display: inline-block; 
        margin-left: 10px; 
        transition: all 0.1s ease;

        &:hover, &:active {
            opacity: .9; 
        }

        &:disabled {
            cursor: not-allowed;
            transition: none;     
            opacity: 0.9;
            filter: grayscale(20%);
        }
        
    }

`; 