import React, { useEffect, useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { Player } from '@lottiefiles/react-lottie-player';
import { UserContext } from "../../UserContext";

import animationData from './animationData.json'
import groupAnimation from './64087-team-group.json'
import paperAnimation from './95556-paperwork-black.json'
import an2 from './99502-career-coach.json'
import an12 from './an12.json'
import an15 from './an15.json'
import an19 from './an19.json'

import './car.css'
export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();
/* Function that handles logout*/
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    /*useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])*/
    var auth = getAuth();
    var cur_user = auth.currentUser;
  
    return (
        <div>
          
            <div className='main-ban'>
                <div>
                <h2>
                    Where Talent<br/> Meets <br/>Opportunity
                </h2>
                <button>
                    Hire Now!
                </button>
                </div>
                
                <Player
        src={animationData}
        className="player"
        loop
        autoplay
        style={{ height: '700px', width: '700px' }}
        speed={0.3}

      />
            </div>
            <div className='offer-cont'>
                <h2>
                    WHAT WE OFFER
                </h2>
                <div className='offer'>
                    <div className='of-h'>
                    <Player
            src={groupAnimation}
            className="player"
            loop
            autoplay
            style={{ height: '160px', width: '200px' }}
            speed={0.5}

            />
                        <h3>
                        WHO<br />WE ARE
                        </h3>
                    </div>
                    <div className='of-b'>
                    <p>
                    We’re a creative staffing employment agency that’s doing things a little differently. We represent some of the most talked about digital, creative, and marketing talent around – and we get to know each one of them on a personal level. It’s how we’re able to connect you with the top professionals in the industry.

                            <br/><br/>Whether you’re looking to hire freelancers, full time, or “temp-to-perm” talent, we’re ready to make a match made in talent heaven.
                    </p>
                </div>
                </div>
                <div className='offer'>
                    <div className='of-h'>
                            <Player
                    src={paperAnimation}
                    className="player"
                    loop
                    autoplay
                    style={{ height: '150px', width: '200px' }}
                    speed={0.3}

                    />
                        <h3>
                            
                        WHAT<br />WE DO
                        </h3>
                    </div>
                    <div className='of-b'>
                        <p>
                        Over the years, our staffing employment agency has mastered the art of matching talent. And it all boils down to the unique way we build our network. We stand behind the talent we represent – because we get to know them, check their references, and vet their skills. When you partner with us, you can be sure we’ve done our homework to find the best fit for you. <br/>And to make your job even easier, we’ll take care of the paperwork and forms so you don’t have to.
                        </p>
                    </div>
                </div>
            </div>
            <div className='service-cont offer-cont'>
                <h2>OUR SERVICES</h2>
                <div className='service offer'>
                    <div className='ser-h of-h'>
                        <h3>INFRASTRUCTURE</h3>
                        <ul>
                            <li>
                            ATS setup and training
                            </li>
                            <li>
                            Recruiting toolset setup
                            </li>
                            <li>
                            Custom integrations and internal tooling
                            </li>
                        </ul>
                    </div>
                    <div className='ser-b of-b'>
                    <Player
            src={an2}
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '100%' }}
            speed={0.5}

            />
                        <p>
                        A recruiter's toolset is the back-bone of any healthy pipeline. We’re here to help you develop an ecosystem of tools that is ergonomic to your team. No two teams are perfectly alike, so we'll work with you to understand your unique goals and craft solutions to meet them. You deserve a hiring system that’s custom-built to fit your needs!
                        </p>
                    </div>
                </div>
                <div className='service offer'>
                <div className='ser-b of-b'>
                    <Player
            src={an15}
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '100%' }}
            speed={0.5}

            />
                        <p>

                        Internal alignment is the key to running an efficient pipeline. We’ll help you establish the necessary templates and standard operating procedures to keep your team aligned whenever you need to launch a new role. With this toolset, you can easily scale your recruiting processes as you grow!
                        </p>
                    </div>
                    <div className='ser-h of-h'>
                        <h3>Alignment</h3>
                        <ul>
                            <li>
                            Job description design
                                                        </li>
                            <li>
                            Hiring packet design
                            </li>
                            <li>
                            Interview process design
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='service offer'>
                    <div className='ser-h of-h'>
                        <h3>Process</h3>
                        <ul>
                            <li>
                            Performance metrics and reporting
                            </li>
                            <li>
                            Employer brand design
                            </li>
                            <li>
                            Candidate experience optimization
                            </li>
                        </ul>
                    </div>
                    <div className='ser-b of-b'>
                    <Player
            src={an19}
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '100%' }}
            speed={0.5}

            />
                        <p>
                        There are bound to be kinks even when you have a pretty solid recruiting pipeline established. We can help optimize your pipeline for both the individual prospects and your company, yielding better hires and happier candidates. Let's make your recruiting function the best it can be!








The best way to establish and optimize your recruiting process is to run it. We provide boots-on-the-ground recruiting services, allowing you to build the plane as you fly it. Let's get candidates flowing through your pipeline!

                        </p>
                    </div>
                </div>
                <div className='service offer'>
                <div className='ser-b of-b'>
                    <Player
            src={an12}
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '100%' }}
            speed={0.5}

            />
                        <p>
                        The best way to establish and optimize your recruiting process is to run it. We provide boots-on-the-ground recruiting services, allowing you to build the plane as you fly it. Let's get candidates flowing through your pipeline!
                        </p>
                    </div>
                    <div className='ser-h of-h'>
                        <h3>Recruiting</h3>
                        <ul>
                            <li>
                            Passive and active candidate sourcing
                            </li>
                            <li>
                            Highly personalized nurturing
                            </li>
                            <li>
                            Initial screening
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className='test-cont offer-conr'>
                <h2>A Few Words<br/> On Us</h2>
                
                <div className='test'>
        <div className='tcard'>
          <p>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  "
          </p>
          <h4>
            Director - Contractor Firm
          </h4>
        </div>
        <div className='tcard'>
          <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit  "
          </p>
          <h4>
            Director - Contractor Firm
          </h4>
        </div>
      </div>
            </div>
     <div className='brands-car'>
     <h3>Who Chooses Our Talent</h3>
     <div class="slider">
      
	<div class="slide-track">
		
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
     </div>
     <div className='foot'>
      <div className='foot1'>
            <h2>DO YOU HAVE A QUESTION</h2>
            <button>Contact Us</button>
            <div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
      </div>
      <div className='foot2'>
        <h3>Our Offices</h3>
        <ul>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
        </ul>
        <ul>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
        </ul>
        <ul>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
        </ul>
        <ul>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
          <li>
            AUSTIN,TX
          </li>
        </ul>
      </div>
     </div>
        
        </div>
    )
}




