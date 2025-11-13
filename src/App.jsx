import './App.css'
import Navbar from './components/Navbar'
import ContactCenterLayout from './components/ContactCenterLayout'
import FeaturesSection from './components/FeaturesSection'
import WorkspacePreviewSection from './components/WorkspacePreviewSection'
import IntegrationSection from './components/IntegrationSection'
import CollaborationBenefitsSection from './components/CollaborationBenefitsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <ContactCenterLayout />
      <FeaturesSection />
      {/* <WorkspacePreviewSection /> */}
      <IntegrationSection />
      <CollaborationBenefitsSection />
     
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
