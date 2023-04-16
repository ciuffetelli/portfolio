import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";

import { AiFillGithub } from 'react-icons/ai'

export function GitHub() {
    return (
        <section className="container flex flex-col text-center m-auto p-8 justify-start">

            <h2 className="md:w-1/2 m-auto text-2xl">Discover some of my most relevant repositories in my GitHub profile</h2>

            <Button text="GitHub" href="https://github.com/ciuffetelli" target="_blank" icon={AiFillGithub} className="m-auto mt-4" />

        </section>
    )
}