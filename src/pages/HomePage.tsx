import { Link } from "react-router-dom";
import '../App.css';
import AIImageScreen from "../assets/AI_Image_Download.svg";
import AIDrivenImg from "../assets/AIDriven.svg";
import AIPoweredImg from "../assets/AIPowered.svg";
import IntegratedHealth from "../assets/IntegratedHealth.svg";
import TwitterImg from "../assets/twitter.svg";
import Navigation from "../components/Navigation";
import { NAVIGATION } from "../lib/definitions";

const HomePage = () => {
  return (
    <div className='h-screen overflow-y-auto bg-herowhite pt-3'>
      <div className=''>
        <div className="px-5">
          <Navigation />
          <HeroSection />
          <div className='bg-blue-950 h-[1px] w-full mt-[3vh] rounded-2xl'></div>
          <AboutUsSection />
        </div>
        <ServicesSection />
        <Footer />
      </div>
    </div>
  )
}


const HeroSection: React.FC = () => {
  return (
    <div className='mt-5 sm:flex sm:flex-row-reverse sm:gap-x-5'>
      <div id='hero' className='h-[50vw] sm:h-[200px] sm:w-[60%] max-h-[400px] px-12 w-full max-w-[1000px] max-h-1000px rounded-xl'></div>
      <div>
        <p className='font-medium text-2xl sm:text-3xl font-sans text-pry leading-relaxed mt-5'>Revolutionizing
          HealthCare with AI
          <br />
          and Smart Scheduling</p>
        <a href="https://project-curova.netlify.app/login" className="bg-[#033856] text-white font-bold p-5 py-3 mt-3 block w-max rounded">Get Started</a>
      </div>
    </div>
  )
}

const AboutUsSection: React.FC = () => {
  return (
    <div className='mt-5 text-pry'>
      {/* <h3 className='font-bold text-2xl'>About Us</h3> */}

      {/* <div className='mt-4 sm:flex sm:gap-x-5 sm:items-start'>
        <p className='font-medium sm:basis-[50%]'>Curova leverages the latest technology to enhance healthcare delivery and improve outcomes for patients and provide</p>

        <div className="flex flex-col gap-y-3 mt-5 sm:mt-0">
          <div className="flex items-center gap-x-4">
            <img className="w-[30px]" src={checkbox} alt="checkbox" />
            <p>Blockchain-Powered EHR</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img className="w-[30px]" src={videobox} alt="checkbox" />
            <p>Seamless Telemedicine</p>
          </div>
          <div className="flex items-center gap-x-4">
            <img className="w-[30px]" src={aibox} alt="checkbox" />
            <p>AI-Driven Resource Management</p>
          </div>
        </div>
      </div> */}

      {/* <div className="mt-5">
        <h4 className="font-bold text-pry">Mission</h4>
        <p className="text-pry">At Curova, we’re on a mission to transform the way healthcare is accessed and delivered. By combining advanced AI scheduling, secure blockchain health records, and intuitive telemedicine tools, we empower providers and patients to connect more efficiently and effectively, anytime, anywhere.</p>
      </div>

      <div className="mt-5">
        <h4 className="font-bold text-pry">Vision</h4>
        <p className="text-pry">We envision a world where smart technology powers every step of the healthcare journey. Curova is building that future, one where care is personalized, proactive, and seamlessly integrated, improving lives across communities and continents.</p>
      </div> */}
    </div>
  )
}

const ServicesSection: React.FC = () => {
  return (
    <div className='bgg-[#1E4D68] text-white rounded-t-sm px-5 py-3 mt-5'>
      <h4 className='font-bold text-2xl text-center text-[#033856]'>Our Services</h4>

      <div className='mt-3 flex flex-col md:flex-row gap-x-10 gap-y-10 items-center py-7'>
        <div className="flex flex-col items-center gap-y-2 text-[#033856]">
          <img src={AIPoweredImg} className="w-[50%] max-w-[200px]" alt="AI Powered" />
          <p className="font-medium">AI Powered Scheduling</p>
          <p className="max-w-sm text-sm">Curova’s intelligent scheduling engine leverages machine learning to automatically recommend optimal appointment times based on user preferences, staff availability, and workload balance.</p>
        </div>
        <div className="flex flex-col items-center gap-y-2 text-[#033856]">
          <img src={AIDrivenImg} alt="AI Driven Management" className="w-[50%] max-w-[200px]" />
          <p className="font-medium">AI Driven Management</p>
          <p className="max-w-sm text-sm">Curova uses predictive analytics to monitor and manage inventory levels in real time. By analyzing usage trends and demand patterns, the system forecasts supply needs, prevents stockouts, and automates reordering.</p>
        </div>
        <div className="flex flex-col items-center gap-y-2 text-[#033856]">
          <img src={IntegratedHealth} alt="AI Powered" className="w-[50%] max-w-[200px]" />
          <p className="font-medium">Integrated Health Records</p>
          <p className="max-w-sm text-sm">Curova provides a unified, blockchain-secured platform for managing electronic health records (EHRs). The system ensures interoperability across departments and organizations while maintaining strict compliance with HIPAA and GDPR standards.</p>
        </div>
      </div>

      <div>
        <div className='bg-blue-950 h-[1px] w-full my-[3vh] rounded-2xl'></div>
        <div className="text-[#033856] sm:flex flex-row-reverse items-start justify-center gap-x-[5vw] mb-[5vh]">
          <img src={AIImageScreen} alt="AI_Image" className="w-[60%] max-w-[300px] rounded self-" />
          <div className="mt-5 sm:m-0 sm:w-[50%]">
            <p>At Curova, we are redefining healthcare through intelligent innovation and technological excellence. Our mission is to empower healthcare providers and patients with a unified digital ecosystem that enhances care delivery, optimizes operations, and ensures data security.
            </p>
            <br />

            <p>
              Our commitment to excellence, innovation, and patient-centric design drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <div className="bg-[#053856] text-white px-5 py-10 flex flex-col gap-y-10">
      {/* Right Footer */}
      <div>
        <h4 className="text-3xl font-bold">Get In Touch</h4>

        <p className="text-sm">Sign Up to our monthly newsletter to keep up to date with the latest digital news and views</p>

        <img src={TwitterImg} alt="Twitter" className="w-[80px]" />
      </div>

      {/* Left Footer */}
      <div className="flex flex-col gap-y-1 text-sm">
        <Link to={NAVIGATION.PRIVACY} className="font-bold underline">Privacy Policy</Link>
        <Link to={NAVIGATION.TERMS} className="font-bold underline">Terms and Condition</Link>
        <a href={"#"} className="font-bold underline">Cookies</a>
        <a href={"#"} className="font-bold underline">Partner with us</a>
      </div>
    </div>
  )
}

export default HomePage
