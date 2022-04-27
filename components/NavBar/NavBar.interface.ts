export interface INavbarItem{
    itemName:string,
    url:string,
    isActive:boolean
}

export interface IImageProps{
   src:string
}

export interface IItemsProps{
    items:INavbarItem[],
    
}