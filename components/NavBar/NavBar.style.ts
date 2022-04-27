import styled from 'styled-components'
import {IImageProps,INavbarItem} from './NavBar.interface'

export const ContainerNav=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
   
    padding: 1vh 5vw 1vh 5vw;
    border-color: #CBD2D9;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

export const ContainerBrand=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const LogoImage=styled.img<IImageProps>`
    display: flex;
    flex-direction: column;
    align-self: center;
    width:2rem;
    height: 2rem;
    src:${(props)=>props.src};
`
export const ContainerItem=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-items: flex-end;
    padding:3vh 0 0 0 ;
    width: 30%;

`
export const ItemMenu=styled.a`

    
    :hover{
        color:black
    }
    :hover{
        font-size: 1rem;
        color:gray
    }
    :active{
        border-color: aquamarine;
        padding: 1rem;
    }



`