import React from 'react'
import './home.css';
import './animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';




import tm8bruce from '../Images/Bruce2.png'
import tm8brucepersonal from '../Images/Bruce-personal.png'
import brucetm8 from '../Images/bruce.png'
import Robot from '../Images/Robot-Golden.jpg'
import RobotSilver from '../Images/silverhuman.jpg'
import RobotinLibrary from '../Images/SilverFace.jpg'
import standingrobotimg from '../Images/Silver- Human-Robot.png'
import bluebodyimg from '../Images/blue-body.png'





/*----ICONS----*/
import UpandDownArrow from '../Images/swap.png'
import diamondImg from '../Images/diamond.png'

/*-----LOGOS----*/
import CRMLogoTitle from '../Images/Logos/Premium-Less-Annoying-CRM.png';
import CRMlogos from '../Images/Logos/CRM-logos.png'
import MessengerIcon from '../Images/Logos/messenger.png'
import InstagramIcon from '../Images/Logos/instagram.png'
import WhatsappIcon from '../Images/Logos/whatsapp.png'

/*----JSX FILES-----*/
import Slider from '../Home/Slider/Slider.jsx';
import Timeline from './Timeline/Timeline.jsx';
import Footer from '../Footer/Footer.jsx';







const Home = () => {


  return (
  <>
    <div className="home-body">
      <div id='container1'>

        <div className='row'>
          <div className='col' id='c1-headline'>
            <h1>Transform Engagement and Productivity with Digital AI Voice Assistants.</h1>
            <p className='pgrh-txt' id='hero-snippet'>Team M8's AI agents can effortlessly understand and engage in human-like interactions, ensuring a highly personalised experience.</p>
            <button className='Register-btn'>GET CONNECTED FOR FREE</button>
          </div>


          <div className='col' id='c1-bruce-container'>
            <img id='TM8-bruce-img'src={tm8bruce} alt='TEAM M8 LOGO'/>
            <div className='intro-container'>


              <div className="">
                <img id="bruce-personal-img" src={tm8brucepersonal} alt='TEAM M8 LOGO'/>
              </div>
              <div className="">
                <p>Hello, it is Bruce here!</p>
              </div> 


            </div>
          </div>
        </div>
      </div>

      <div id="container2">


          <div className="" id='images-group'>
            <img id="Robot-img" src={Robot} alt='Robot'/>
            <div id="overlay"></div>
            <img id="Robot-Front-img" src={RobotSilver} alt='RobotImage'/>
            <div id='pulsating-circle'></div>
            <img id="Robot-Back-img" src={RobotinLibrary} alt='Robotimage'/>
          </div>
          <div></div>

          <div className="txt-container txt-group">
            <h1>Redefining Website Interaction with AI-Powered Digital Avatars</h1>
            <p className='pgrh-txt'>Team M8 offers a groundbreaking platform that allows for the creation and management of AI-powered digital beings, which we like to call avatars. These avatars are far more than your typical chatbot. They are trained to perform complex functions, adapt to various roles, and interact with visitors in a natural and engaging manner.</p>
            <button className='Register-btn'>MORE ABOUT US</button>
          </div>


      </div>

      <div id="container3">
        
        <div className="col about-txt">
              <h1>Streamline role-specific training effortlessly.</h1>
              <p className='snippet-txt'>Breathe unique life into every AI assistant, whether one or a thousand, effortlessly.</p>
        </div>
        <div className="row">

          <div className="col h-card" id="card1">
          <img id="Card-icon" src={diamondImg} alt='Diamond Icon'/>

            <div id='text-container'>
              <h3>Voice Communication</h3>
              <p>Communicate through natural conversation with multilingual voice communication.</p>
            </div>
            <h1 id="number">01</h1>
          </div>

          <div className="col h-card" id="card2">
          <img id="Card-icon" src={diamondImg} alt='Diamond Icon'/>
            <div id="text-container">
              <h3>Unique Personalities</h3>
              <p>Create highly individual personality types to make each AI unique.</p>
            </div>
            <h1 id="number">02</h1>
          </div>

          <div className="col h-card" id="card3">
          <img id="Card-icon" src={diamondImg} alt='Diamond Icon'/>
            <div id='text-container'>
              <h3>Role Training</h3>
              <p>Easy train to fulfill specific roles such as sales, service.</p>
              <img src={CRMLogoTitle} alt="Less Annoying CRM" id="crm-logos" />
              <img src={CRMlogos} alt="CRM Systems" id="crm-logo-title" />
            </div>
            <h1 id="number">03</h1>
          </div>

          <div className="col h-card" id="card4">
          <img id="Card-icon" src={diamondImg} alt='Diamond Icon'/>
            <div id="text-container">
              <h3>Ticket Automation</h3>
              <p>Automate ticket creation, management, and support.</p>
            </div>
            <h1 id="number">04</h1>
          </div>

        </div>
      </div>
      <div id="container4">
        <div className="col about-txt">
                <h1>Elevate Support and Effeciency.</h1>
                <p className='snippet-txt'>Breathe unique life into every AI assistant, whether one or a thousand, effortlessly.</p>
          </div>
          <div className="row">
            <div className="col rows-container">
              <h1 id="container4-title">Easy Deployment</h1>
              <div className="row v-card" id="v-card1">
                <div className="text-container">
                 <h3>Virtual Assistant</h3>
                 <p>Your ai assistant can help your website visitors just like a member of a staff.</p>
                </div>
              </div>

              <img src={UpandDownArrow} alt="up and down arrows" className="arrows-icon" />


              <div className="row v-card" id="v-card2">
               <div className="text-container">
                <h3>Instant Multilingual Messaging</h3>
                <p>Support instant messaging communication channels with multilingual support.</p>

                <span>
                  <img src={MessengerIcon} alt="up and down arrows" className="card-icon" />
                  <img src={InstagramIcon} alt="up and down arrows" className="card-icon" />
                  <img src={WhatsappIcon} alt="up and down arrows" className="card-icon" />

                </span>
               </div>
              </div>

              <img src={UpandDownArrow} alt="up and down arrows" className="arrows-icon" />


              <div className="row v-card" id="v-card3">
               <div className="text-container">
                <h3>Digital Deployment</h3>
                <p>Deploy in any digital landscape, including virtual and augmented reality. Perfect for immersive teaching and training.</p>
               </div>
              </div>
            </div>
   
            <div className="col">
             <img id="container4-img" src={standingrobotimg} alt="" className="side-robot-img" />
             <div className="row">
               <h1 id="container4-title">Automated Process</h1>
               <div className="text-container">
                <p>Empower your workflow with seamless AI integration. Delegate tasks effortlessly and connect seamlessly to your CRM system for streamlined productivity.</p>
                <img src={CRMlogos} alt="CRM Systems" id="crm-logo-title2" />
               </div>
              </div>
            </div>
          </div>
      </div>

      <div id="container5">
        <div className="">
              <h1>Our Digital Avatars Collection.</h1>
              <p className='snippet-txt'>Step into the future of website engagement with Team M8's revolutionary avatar collection.</p>
        </div>
        <Slider/>
      </div>

      <div id="container6">
        <div className="">
              <h1>Unleash the Power of Team M8.</h1>
              <p className='snippet-txt'>Transform your workflow with the unparalleled capabilities of Team M8.</p>
        </div>
        <div className="timeline-container">
          <div className="col">
            <div className='row'>
                <div className='col'>
                  <img src={brucetm8} alt="" className="timeline-img" />
                </div>
                <div className='col'>
                  <Timeline/>
                </div>
            </div>
          </div>

          <button className='Register-btn btn-position'>GET YOUR FREE TRIAL</button>
        </div>
      </div>
      
      <div id="container7">
        <div className="container7-headline">
            <h1>GET YOUR 14 DAYS TRIAL NOW.</h1>
            <p className='snippet-txt'>Get your AI up and chatting with your customers with our 14-day FREE TRIAL.</p>

                
        </div>
        <div className="row pricing-containers">
          <div className="col" id='Pricing-container1'>
            <h2>Starter</h2>
            <h3 className='pricing'><strong>$ 49</strong><small>/month</small></h3>
            <ul>
              <li><strong>20</strong> Hours of voice-to-voice credits</li>
              <li><strong>5,000</strong> Text-based interactions</li>
              <li><strong>100MB</strong> Training data allowance</li>
              <li>Create up to <strong>10</strong> digital AI assistants</li>
              <li>Easy avatar creator</li>
              <li>Team M8 website assistant</li>
              <li>Connect instant message apps</li>
              <li>CRM integration</li>
            </ul>
          </div>
          <div className="col" id='Pricing-container2'>
          <h2>Business</h2>
          <h3 className='pricing'><strong>$ 249</strong><small>/month</small></h3>
          <ul>
            <li><strong>120</strong> Hours of voice-to-voice credits</li>
            <li><strong>40,000</strong> Text-based interactions</li>
            <li><strong>500MB</strong> Training data allowance</li>
            <li>Create up to <strong>50 </strong>digital AI assistants</li>
            <li>Easy avatar creator</li>
            <li>Team M8 website assistant</li>
            <li>Connect instant message apps</li>
            <li>CRM integration</li>
          </ul>
          </div>
          <div className="col" id='Pricing-container3'>
            <h2>Enterprise</h2>
            <h3 className='pricing'><strong>$ ---</strong><small>/month</small></h3>
            <ul>
              <li>Bespoke packages</li>
            </ul>
            <button>Get Quota</button>
          </div>

        </div>


      </div>
      <div id="container8">
        <div id="sub-container8">
          <div id='c8-cols-container'>
            <div id="grid-col1">
              <h3 id='container8-title'>GET YOUR TM8 DIGITAL CHARACTER</h3>
              <p>Get updated with news, tips and tricks.</p>
              <button className='Register-btn' id='c8-btn'>GET CONNECTED FOR FREE</button>
            </div>
            <div id="grid-col2">
              <img src={bluebodyimg} alt=" Blue Body" className="blue-body-img" />

            </div>
          </div>

        </div>
      </div>
      <div id="container9">

          <div className="text-container" id='c9-headline'>
                <h1>ON-GROUND AI ASSISTANCE</h1>
                <p id='c9-snippet-txt'>Team M8 allows you to improve access to information and customer satisfaction. by providing wide coverage, and on-ground support for busy places such as airports, shopping malls, event spaces, and more. Your highly trained AI team can assist users through natural conversation and provide immediate assistance and resolution.</p>
                <button className='Register-btn' id='c8-btn'>GET IN TOUCH</button>
          </div>
      </div>
      <div id="container10">
        <div className="row">
          <div className="col">
            <h1 id='c10-title'>Test-drive Team M8</h1>
          </div>
          <div className="col" id='c10-snippet-txt'>
            <p>Experience the full potential of our services with a complimentary 14-day trial period. Dive into our features, explore our tools, and witness firsthand how we can revolutionize your workflow. Sign up now to start your trial and unlock the possibilities.</p>
            <button className='Register-btn' id='c8-btn'>GET YOUR 14 DAYS FREE TRIAL</button>
          </div>
        </div>
      </div>


      <Footer/>

    </div>
  </>
  )
}

export default Home
