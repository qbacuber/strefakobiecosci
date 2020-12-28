import styled from 'styled-components';
import {Link as Linkr} from 'react-router-dom';

import Logo from '../img/logo.png'


export const ContentPage = styled.div`
    width: 95%;
    height:100%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

    @media (min-width: 760px) { padding: 20px;}
    @media (min-width: 1200px) {width: 1200px; }
`

//Header

export const IMG = styled.div`
    background-image: url(${Logo});
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 120px;
    background-size: 300px;
    background-repeat: no-repeat;

    @media (min-width: 520px) {
        width: 400px;
        background-size: 400px;
        height: 160px;
    }

    @media (min-width: 760px) {
        width: 550px;
        background-size: 550px;
        height: 220px;
    }
`

export const Lista = styled.ul`
    font-family: Comfortaa;
    font-weight: normal;
    letter-spacing: 0.1em;
    color: #fff;
    list-style: none;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 20px;
    width: 200px;
    font-size: 15px;

    @media (min-width: 760px) {
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0 30px 0;
        font-size: 20px;
        margin-bottom: 40px;
        margin-top: 30px;
    }

`

export const Opcja = styled.li`
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid;
        border-bottom: 1px solid;

        width: 100%;
        padding: 15px 0 15px 0;
        margin-top: 20px;
        
        @media (min-width: 760px) {
            padding: 20px 30px 20px 30px;
            display: inline;
        }
    }

    @media (min-width: 760px) {  
        display: inline;
        margin-right: 30px;
        
        &:last-child{
            margin-right: 0;    
        }
    }

`

export const Link = styled(Linkr)`
    &:hover{
        color:  #6fee9a;
        border-color:  #6fee9a;
    }
`


//Home 
export const TextInHomePage = styled.div`
    font-family: Comfortaa;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-align: justify;
    color: #fff;
    
    font-size: 13px;
    line-height: 26px;

    @media (min-width: 520px) {font-size: 15px;}
    @media (min-width: 760px) {font-size: 20px;}
    @media (min-width: 1200px) {line-height: 32px;}
`

export const PageTitle = styled.div`
    font-family: "Dancing Script";
    font-weight: normal;
    font-size: 75px;
    letter-spacing: 0.25em;
    color: #fff;
    text-align: center;
`

//Price List
export const ItemList = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 250px;
    @media (min-width: 340px) {width: 300px;}
    @media (min-width: 800px) {
        width: 720px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
    }
    @media (min-width: 1200px) {width: 1200px;}

`
export const Item = styled.div`
    border-radius: 6px;
    border: 2px solid #fff;
    margin-top: 50px;
    position: relative;
    min-height: 55px;
    
    width: 250px;
    @media (min-width: 340px) {width: 300px;}
    @media (min-width: 800px) {
        margin: 20px;
    }

`
export const ItemName = styled.div`
    font-family: Barlow;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-align: center;
    color: #fff;
    width: 100%;
    padding: 10px;
    font-size: 16px;

    @media (min-width: 340px) {font-size: 20px}

`

export const ItemPrice = styled.div`
    font-family: Barlow;
    font-weight: normal;
    font-size: 16px;
    border: 3px solid #18403f;
    border-radius: 11px;
    color: #18403f;
    background: #fff;
    width: 75px;
    left: 200px;
    bottom: -25px;
    padding: 5px;
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 340px) {
        left: 240px;
        bottom: -25px;
        font-size: 18px;
    }
`