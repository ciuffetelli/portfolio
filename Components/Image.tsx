import { useState } from 'react';

import { default as NextImage, ImageProps as NextImageProps }from 'next/image'
import probe from "probe-image-size";

type ImageProps = NextImageProps & {
    className?: string
}
export function Image(props: ImageProps) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [size, setSize] = useState({ width: props.width ?? 100, height: props.height ?? 100 })

    !props.fill && size.width === 100 && (probe(props.src as string).then((size) => {
        setSize({
            width: size.width,
            height: size.height
        })
    }));

    const getSize = () => {
        return props.fill ? {} : size
    }

    return (
        <div className={`flex justify-center items-center w-full h-full ${props.className ?? ''}`}>
            <NextImage 
                {...props}
                {...getSize()}
                className={``}
                onLoadingComplete={() => setIsLoaded(true)}               
                style={{
                    ...props.style,
                    objectFit: props.fill ? 'contain' : 'cover',
                }}
            />
        </div>
    )
}