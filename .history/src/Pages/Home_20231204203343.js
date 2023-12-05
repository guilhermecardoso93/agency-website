//This is home page, It will contains all the sections require in this page.

import { HeroSection } from '../Sections/Hero'
import { About } from '../Sections/About'
import { Services } from '../Sections/Services'
import { Testimonials } from '../Sections/Testimonials'
import { Contact } from '../Sections/Contact'

import { Container } from './styles'




export function Home() {
  return (
    <Container>
      <HeroSection />
    </Container>
  )
}

