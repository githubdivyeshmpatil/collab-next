import React, { useEffect } from 'react'
import ContactCenterLayout from '../components/ContactCenterLayout'
import Navbar from '../components/Navbar'
import FeaturesSection from '../components/FeaturesSection'
import IntegrationSection from '../components/IntegrationSection'
import CollaborationBenefitsSection from '../components/CollaborationBenefitsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      
     <ContactCenterLayout />
       <FeaturesSection />
     
       <IntegrationSection />
       <CollaborationBenefitsSection />
     
      <ContactSection />

    </div>
  )
}

export default Home