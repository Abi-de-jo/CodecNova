import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import HeroSlider from "./Components/HeroSlider";
import WhoWeAre from "./Components/WhoWeAre";
import WhatWeDo from "./Components/WhatWeDo";
import Industries from "./Components/Industries";
import Innovation from "./Components/Innovation";
import MatrixStructure from "./Components/MatrixStructure";
import TrustedClients from "./Components/TrustedClients";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurLeaders from "./Components/OurLeaders ";
import WhoWeAreSingle from "./Components/WhoWeAreSingle";
import Insights from "./Components/Insights";
import ContactUs from "./Components/ContactUs";
import Careers from "./Components/Careers ";
import FunctionalTesting from "./Services/FunctionalTesting";
import PerformanceTesting from "./Services/PerformanceTesting";
import MobileTesting from "./Services/MobileTesting";
import ScrollToTop from "./Components/ScrollToTop";
import DataAnalyticsTesting from "./Services/DataAnalyticsTesting";
import AgileTesting from "./Services/AgileTesting";
import TestAutomation from "./Services/TestAutomation";
import IoTTesting from "./Services/IoTTesting";
import NonFunctionalTesting from "./Services/NonFunctionalTesting";
import SecurityTesting from "./Services/SecurityTesting";
import TestProcessConsulting from "./Services/TestProcessConsulting";
import RPA from "./Services/RPA";
import QualityAssurance from "./Services/QualityAssurance";
import TestDataManagement from "./Services/TestDataManagement";
import TestEnvironmentManagement from "./Services/TestEnvironmentManagement";
import ApiTesting from "./Services/ApiTesting";
import CiCdPipeline from "./Services/CiCdPipeline";

function App() {
  return (
    <div className="bg-[var(--background-cream)]">
      <Router>
      <ScrollToTop />

         <TopBar />
        <Header />

        <Routes>
           <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <WhoWeAre />
                <WhatWeDo />
                <Industries />
                <Innovation />
                <MatrixStructure />
                <TrustedClients />
              </>
            }
          />
          <Route
            path="/our-leaders"
            element={
              <>
                <OurLeaders />
              </>
            }
          />
          <Route
            path="/our-vision"
            element={
              <>
                <WhoWeAreSingle />
              </>
            }
          />


          <Route
            path="/insights"
            element={
              <>
                <Insights />
              </>
            }
          />
          <Route
            path="/services/functional-testing"
            element={
              <>
                <FunctionalTesting />
              </>
            }
          />
          <Route
            path="/services/performance-testing"
            element={
              <>
                <PerformanceTesting />
              </>
            }
          />
          <Route
            path="/services/mobile-testing"
            element={
              <>
                <MobileTesting />
              </>

            }
          />


          <Route
            path="/services/data-analytics"
            element={
              <>
                <DataAnalyticsTesting />
              </>
            }
          />  

          <Route
            path="/services/agile-testing"
            element={
              <>
                <AgileTesting />
              </>
            }
          />

          <Route
            path="/services/test-automation"
            element={
              <>
                <TestAutomation />
              </>
            }
          />  

          <Route
            path="/services/iot-testing"
            element={
              <>
                <IoTTesting />
              </>
            }
          />  

          <Route
            path="/services/non-functional"
            element={
              <>
                <NonFunctionalTesting />
              </>
            }
          />    

          <Route
            path="/services/security-testing"
            element={
              <>
                <SecurityTesting />
              </>
            }
          />    

          <Route
            path="/services/process-consulting"
            element={
              <>
                <TestProcessConsulting />
              </>
            }
          />
          <Route
            path="/services/rpa"
            element={
              <>
                <RPA />
              </>
            }
          />
          <Route
            path="/services/quality-assurance"
            element={
              <>
                <QualityAssurance />
              </>
            }
          />  


          <Route
            path="/services/test-data"
            element={
              <>
                <TestDataManagement />
              </>
            }
          />    
          


          <Route
            path="/services/environment-management"
            element={
              <>
                <TestEnvironmentManagement />
              </>
            }
          />    


          <Route
            path="/services/webservices"
            element={
              <>
                <ApiTesting />
              </>
            }
          />    




          <Route
            path="/services/ci-cd"
            element={
              <>
                <CiCdPipeline />
              </>
            }
          />    



          <Route
            path="/contact"
            element={
              <>
                <ContactUs />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Careers />
              </>
            }
          />
        </Routes>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </div>
  );
}

export default App;
