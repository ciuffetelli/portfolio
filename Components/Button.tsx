import { default as NextLink } from "next/link"
import { ReactNode } from "react";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}
export function Button(props: ButtonProps) {

    const Link = (props: {href?: string, children: any}) => {
        if(props.href) return (
            <NextLink href={props.href}>
                { props.children }
            </NextLink>
        )

        return props.children
    }

    const handleClick = () => {
        if(!props.onClick) return;

        props.onClick()
    }

    return (
        <Link href={props.href}>
            <div className={`bg-sky-600 hover:bg-sky-950 text-white p-2 text-xl w-max ease-in-out duration-200 cursor-pointer ${props.className}`} onClick={handleClick}>
                {props.text}
            </div>        
        </Link>
    )
}