type SectionTitleProps = {
    title: string
    className?: string
}
export function SectionTitle(props: SectionTitleProps) {
    return (
        <div className={`flex mb-4 ${props.className ?? ''}`}>
            <h2 className='bg-sky-600 text-white font-semibold p-1 w-max mr-auto text-center'>
                {props.title}
            </h2>
            <div className='flex-1 border-b-2 border-sky-600 h-1 m-auto ml-4 opacity-20'></div>
        </div>
    )
}