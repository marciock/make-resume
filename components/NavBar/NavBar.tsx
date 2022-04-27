import React from "react";


import * as S from './NavBar.style'
import {NavBarItem} from './NavBarItem'

export const NavBar=()=>{
    const options=[
        {
        itemName:'Sing-up',
        url:'/sing-up',
        isActive:true
    },
    {
        itemName:'Get Started',
        url:'/get-started',
        isActive:true
    },
]
return (
    <S.ContainerNav>
        <S.ContainerBrand >
            <S.LogoImage src="logo.svg"/>
            <h2>brand</h2>
        </S.ContainerBrand>
       <> 
        {
            <NavBarItem items={options} />
        }
        </>
                
    </S.ContainerNav>
)


}