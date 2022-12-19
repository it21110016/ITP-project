import styled from 'styled-components';

export const ManageContainer = styled.div`
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
export const ManageWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ManageCard = styled.div`
    background: #00008b;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    &:hover{ 
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const ManageIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ManageH1 = styled.h1`
    font-size: 2.5rem;
    -webkit-text-stroke: 0.8px rgb(219, 216, 216);
    font-weight: bolder;
    color: black;
    margin-bottom: 32px;
    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export const ManageH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: white;

`