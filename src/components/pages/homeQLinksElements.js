import styled from 'styled-components';

export const QuickLinksContainer = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #B0E0E6;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 400px){
        height: 1300px;
    }
`
export const QuickLinksWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 100px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const QuickLinksCard = styled.div`
    background:#ADFF2F;
    height:150px;
    width:400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0px 2px 4px rgb(0, 0, 0);
    transition: all 0.2s ease-in-out;

`

export const QuickLinksH2 = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`