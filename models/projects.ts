export type Project = {
    title: string
    description: string
    stacks: string[]
    type: 'Portfolio' | 'Comercial' | 'Open-Source'
    image: string
    href?: string
    repository?: string
    background: string
    home?: boolean
}

const data: Project[] = [
    {
        title: 'PagAzul',
        description: 'PagAzul is a payment gateway that allows you to accept payments from your customers in a simple and secure way. It is a company that is part of the Stone Group, a company that is part of the largest payment network in Latin America.',
        stacks: ['PHP', 'WordPress'],
        type: 'Comercial',
        image: 'https://ik.imagekit.io/p7nrzp9eb/pagazul_com_vc.png?updatedAt=1680456911061',
        background: 'bg-white',
        href: 'https://pagazul.com.vc',
        home: true
    },{
        title: 'Ciuffetelli Portfolio',
        description: 'My front-end portfolio showcases my ability to create visually engaging and intuitive user interfaces using modern front-end technologies.',
        stacks: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
        type: 'Portfolio',
        image: 'https://ik.imagekit.io/p7nrzp9eb/ciuffetelli.png?updatedAt=1680799059065',
        href: 'https://ciuffetelli.co.uk',
        repository: 'https://github.com/ciuffetelli/portfolio',
        background: 'bg-slate-900',
        home: true
    },{
        title: 'Next Commerce',
        description: 'Next Commerce is a fully functional e-commerce application built with Next.js, React, TypeScript.',
        stacks: ['React', 'Next.js', 'TypeScript'],
        type: 'Portfolio',
        image: 'https://ik.imagekit.io/p7nrzp9eb/next-ecommerce.png?updatedAt=1681223404290',
        href: 'https://next-ecommerce-ebon-five.vercel.app',
        repository: 'https://github.com/ciuffetelli/next-ecommerce',
        background: 'bg-white',
        home: true
    }
]

function get(title: string) {
    return data.find(project => project.title === title)
}

function getHomeProjects() {
    const homeProjects = data.filter(project => project.home)

    //Default Display
    homeProjects.unshift({
        title: 'Get to know some highlighted projects',
        description: 'I have consistently updated this list on my GitHub, and there may be additional projects that are not included here.',
        stacks: [],
        type: 'Portfolio',
        image: '',
        href: '',
        background: '',
        home: true,
    })

    return homeProjects.slice(0, 5)
}

function all() {
    return data
}

export default Object.freeze({
    get,
    getHomeProjects,
    all
})