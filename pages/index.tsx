import Template from 'Template';
import { Hero } from '../Components/Hero'
import { Projects } from '../Components/Projects'
import { GitHub } from 'Components/GitHub';

export default function Home() {
  return (
    <Template title="Front-end Engineer">
        
        <Hero />

        <Projects />

        <GitHub />

    </Template>
  )  
}