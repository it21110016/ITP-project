import styled from 'styled-components';

export const ManageChannelContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 400px){
        height: 1300px;
    }
`
export const ManageChannelWrapper = styled.div`
    max-width: 1125px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ManageChannelCard = styled.div`
    background: #FAF0E6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
   
    max-height: 340px;
    padding: 45px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    &:hover{ 
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ManageChannelIcon = styled.img`
    height: 200px;
    width: 250px;
    margin-bottom: 10px;
`

export const ManageChannelH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 32px;
   
    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export const ManageChannelH2 = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    color:#006400;
    font-weight:bold;
`