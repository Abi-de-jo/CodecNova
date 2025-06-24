import { lazy, Suspense } from "react";

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
// import OurLeaders from "./Components/OurLeaders ";
const WhoWeAreSingle = lazy(() => import("./Components/WhoWeAreSingle"));
const Insights = lazy(() => import("./Components/Insights"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Careers = lazy(() => import("./Components/Careers "));
const FunctionalTesting = lazy(() => import("./Services/FunctionalTesting"));
const PerformanceTesting = lazy(() => import("./Services/PerformanceTesting"));
const MobileTesting = lazy(() => import("./Services/MobileTesting"));
const ScrollToTop = lazy(() => import("./Components/ScrollToTop"));
const DataAnalyticsTesting = lazy(() => import("./Services/DataAnalyticsTesting"));
const AgileTesting = lazy(() => import("./Services/AgileTesting"));
const TestAutomation = lazy(() => import("./Services/TestAutomation"));
const IoTTesting = lazy(() => import("./Services/IoTTesting"));
const NonFunctionalTesting = lazy(() => import("./Services/NonFunctionalTesting"));
const SecurityTesting = lazy(() => import("./Services/SecurityTesting"));
const TestProcessConsulting = lazy(() => import("./Services/TestProcessConsulting"));
const RPA = lazy(() => import("./Services/RPA"));
const QualityAssurance = lazy(() => import("./Services/QualityAssurance"));
const TestDataManagement = lazy(() => import("./Services/TestDataManagement"));
const TestEnvironmentManagement = lazy(() => import("./Services/TestEnvironmentManagement"));
const ApiTesting = lazy(() => import("./Services/ApiTesting"));
const CiCdPipeline = lazy(() => import("./Services/CiCdPipeline"));
const SingleArticle = lazy(() => import("./Components/SingleArticle"));
const NOTFound = lazy(() => import("./Components/NOTFound"));

function App() {
  return (
    <div className="bg-[var(--background-cream)]">
      <Router>
        <ScrollToTop />

        <TopBar />
        <Header />

        <Suspense fallback={<div className="text-center p-8">Loading...</div>}> 
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
          {/* <Route
            path="/our-leaders"
            element={
              <>
                <OurLeaders />
              </>
            }
          /> */}
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

          <Route path="/insights/:id" element={<SingleArticle />} />
          <Route path="/*" element={<NOTFound />} />
        </Routes>

        </Suspense>
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
