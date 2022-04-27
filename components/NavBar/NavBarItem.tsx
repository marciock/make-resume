import React from "react";

import { IItemsProps } from "./NavBar.interface";

import * as S from './NavBar.style'

export const NavBarItem=({items}:IItemsProps)=>{

    const opt=items

    
   return (
   
   <S.ContainerItem>

    {
        opt.map((data,index)=>{
            return <S.ItemMenu href={data.url} key={index}>{data.itemName}</S.ItemMenu>
        })
    }
     
    
    </S.ContainerItem>
    
    )

}