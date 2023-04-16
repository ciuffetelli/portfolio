import { default as NextLink } from "next/link"
import ReactGA from 'react-ga';

import { IconType } from "react-icons";

type ButtonProps = {
    text?: string;
    icon?: IconType;
    onClick?: () => void;
    href?: string;
    target?: string | '_blank'
    ga?: {
        category?: string
        action?: string
        label?: string
    }
    className?: string
}
export function Button(props: ButtonProps) {

    const triggerGA = () => {
        ReactGA.event({
            category: props.ga?.category || 'Button',
            action: props.ga?.action || 'Clicked',
            label: props.ga?.label || `${props.text ? `TEXT[${props.text}] ` : ''}${props.icon ? `ICON[${props.icon.name}]` : ''}}`
        })
    }

    const Link = (props: {href?: string, target?: string, children: any}) => {
        if(props.href) return (
            <NextLink href={props.href} target={props.target} onClick={triggerGA}>
                { props.children }
            </NextLink>
        )

        return props.children
    }

    const handleClick = () => {
        
        triggerGA()

        if(!props.onClick) return;

        props.onClick()
    }

    return (
        <Link href={props.href} target={props.target}>
            <div className={`flex bg-sky-600 hover:bg-sky-950 text-white w-max justify-center items-center p-2 ease-in-out duration-200 cursor-pointer ${props.className}`} onClick={handleClick}>
                { props.icon && <span className={`text-2xl ${props.text ? 'mr-2' : ''}`}>{ props.icon({}) }</span>}
                {props.text}
            </div>        
        </Link>
    )
}