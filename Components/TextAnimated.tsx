import { useRef, useEffect } from 'react';

type TextAnimatedProps = {
    text: string
    timing?: number
}
export function TextAnimated(props: TextAnimatedProps) {

    const animateRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        animateText({
            animateRef,
            timing: props.timing
        })
    }, [])

    return (
        <p ref={animateRef} className="text-left">
            <span className="text-2xl md:text-3xl ease-in-out duration-250" data-type="paragraph">
                { props.text.split('').map((letter, index) => (
                    <span key={index} data-type="letter" className="opacity-0 hidden ease-in duration-500">{letter}</span>
                ))}
            </span>
            <span className="inline-block w-max h-max text-3xl bg-slate-400 text-slate-400 border-slate-200 animate-pulse duration-100" data-type="prompt" style={{transform: 'translateX(-1.5rem)'}}>
                <span className='opacity-0'>__</span>
            </span>
        </p>
    )
}

type AnimateTextProps = {
    animateRef: React.RefObject<HTMLParagraphElement> | null
    timing?: number
}
export function animateText(props: AnimateTextProps) {

    if(!props.animateRef) return;

    const paragraph = props.animateRef.current as HTMLElement;
    const delay = props.timing || 35;

    const letter = paragraph.querySelector('.hidden[data-type="letter"]') as HTMLElement;

    if(!letter) {
        const prompt = paragraph.querySelector('[data-type="prompt"]') as HTMLElement;
        prompt && prompt.remove();
        return;
    }   

    setTimeout(() => {
        letter.classList.remove('hidden');
        setTimeout(() => {
            letter.classList.add('opacity-100');
            animateText(props);
        }, delay)
    }, delay);

    return;
}