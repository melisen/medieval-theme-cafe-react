import React from 'react'
import SubHeroSection from './SubHeroSection';
import SubHeroCalendar from './SubHeroCalendar';
import SectionProducts from './SectionProducts';

export default function Home() {
  return (
    <div>
        <SubHeroSection />
        <SubHeroCalendar />
        <SectionProducts />
    </div>
  )
}
