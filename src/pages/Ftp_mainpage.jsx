import React, { useEffect } from 'react'
import Ftp from './Ftp'
import WhyFtp from '../components/WhyFtp'
import FtpHowCollabNext from '../components/FtpHowCollabNext'
import IntegrationSection from '../components/IntegrationSection'

function Ftp_mainpage() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Ftp/>
        
        <WhyFtp/>
        <FtpHowCollabNext/>
          <IntegrationSection />
    </div>
  )
}

export default Ftp_mainpage