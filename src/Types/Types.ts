export interface ILayout {
    title : string
    children : JSX.Element
    desc : string
}
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export interface ICustomLink {
    text : string;
    href : string
    fontWeight?: string
    color?: string
    fontSize : string
    handleClick?: (arg : any) => void;
}

export interface INavbar {
    toggleDrawer : (state?: boolean) => void
}
export interface IHeroImage {
    img : string;
    full?: boolean;
}
export interface ITripsCarousel {
    arr : {

        img: string;
        href: string;
        title: string;
    }[]
}
export interface IInput {
    multi?: boolean;
    mt?: string;
    name : string;
    label : string
    type?: string;
}
export interface IContactBox {
    t1 : string;
    t2 : string;
    t3 : string
}

export interface ICustomDrawer extends INavbar {
    isOpen : boolean;
}
export interface IToolCard {
    title : string;
    svg : string;
    className?: string;
    filter?: boolean
}
export interface ISocialMedia extends IToolCard {
    color : string;
    href : string;
}
export interface IDrawerItem {
    text : string;
    Icon : OverridableComponent < SvgIconTypeMap < {},
    "svg" >> & {
        muiName: string;
    }
    isToggleTheme?: boolean;
    url : string;
    toggleDrawer : (state?: boolean) => void
}

export interface ISmallStoryCard {
    title : string;
    bgImage : string;
    shortDescription : string,
    date : string,
    readTime : number | number
}