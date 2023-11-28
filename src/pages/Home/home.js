import ProjectSlider from './../../components/projectSlider';
import { useState } from 'react';
import React, {useEffect, useRef} from "react";
import {ReactComponent as QuoteRight} from './../../assets/images/quote-right.svg';
import {ReactComponent as QuoteLeft} from './../../assets/images/quote-left.svg';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';

import './home.scss'
import { ReactComponent as ReactImg } from './../../assets/images/react.svg'
import { ReactComponent as AngularImg } from './../../assets/images/angular.svg'
import { ReactComponent as NodeImg } from './../../assets/images/node.svg'
import { ReactComponent as MongoImg } from './../../assets/images/mongo.svg'
import { ReactComponent as JavascriptImg } from './../../assets/images/javascript.svg'
import { ReactComponent as FigmaImg } from './../../assets/images/figma.svg'
import { ReactComponent as SassImg } from './../../assets/images/sass.svg'
import { ReactComponent as TypescriptImg } from './../../assets/images/typescript.svg'
import { ReactComponent as SolidityImg } from './../../assets/images/solidity.svg'
import { ReactComponent as PolygonImg } from './../../assets/images/github.svg'
import php from './../../assets/images/php.png';
import girl from './../../assets/images/girl.png';
import github from './../../assets/images/github.png';
import python from './../../assets/images/python.png';
import project1 from './../../assets/images/project1.png';
import project2 from './../../assets/images/project2.png';
import project3 from './../../assets/images/project3.png';
import project4 from './../../assets/images/project4.png';
import project5 from './../../assets/images/project5.png';

const Data = [
    {
        id: 0,
        img: project1,
    },
    {
        id: 1,
        img: project2,
    },
    {
        id: 2,
        img: project3,
    },
    {
        id: 3,
        img: project4,
    },
    {
        id: 4,
        img: project5,
    }
];


function Home() {
    const navigate = useNavigate();
    const Illus = useRef();
    const i = gsap.utils.selector(Illus);
    const tlm = useRef();
    const dlm = useRef();

    // useEffect(() => {
    //     dlm.current = gsap.timeline()
    //     .fromTo(i(".c-tween"), {scale: 0.7}, {
    //         scale: 1, repeat: -1, yoyo: true,
    //       })
    // });

    useEffect(() => {
        tlm.current = gsap.timeline()
        .fromTo(i(".b-one"), {fill: "#1E2128", opacity: 0, scale: 0.7}, {
            fill: "#FF605C", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
          })
        .fromTo(i(".b-two"), {fill: "#1E2128", opacity: 0, scale: 0.7}, {
            fill: "#FFBD44", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
          })
        .fromTo(i(".b-three"), {fill: "#1E2128", opacity: 0, scale: 0.7}, {
            fill: "#00CA4E", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
          })
        .fromTo(i(".a-one"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          })
        .fromTo(i(".a-two"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-three"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-four"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-five"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-six"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-seven"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-eight"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          }) 
        .fromTo(i(".a-nine"), {opacity: 0}, {
            opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
          })     
    });

    const [background, setBackground] = useState('');

    const image = Data.filter(data => data.id === background).map(filteredData => (
        filteredData.img
    ))

    const nav = () => {
        return navigate('/work'), window.location.reload();
        
      }
    
    const Styles = {
       backgroundImage: `url(${image})`
    }

    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

    hiddenElements.forEach((el) => observer.observe(el))

    return (
        <div className="home">
            <div className="home-intro hidden">
                <div className="content">
                <div className="content-tertiary">
                    <p><span>✌🏻</span> Hi there! I'm Anan Afrida</p>
                </div>
                <div className="content-primary">
                    <h1>a <span>Research Assistant</span>. I help <span>build</span> and <span>process</span> RNN models</h1>
                </div>
                <div className="content-secondary">
                    <p>I am a Computer Science and Mathematics major and Applied Data Analysis minor at Wesleyan University. I interned as a software engineer while I was in high school. Being an active participant of Math Olympiad, Informatics Olympiad, Putnam Math Competition, and International Collegiate Programming Contest (ICPC), I love algorithmic and mathematical problem solving.</p>
                </div>
                </div>
                
                <div className="hero-icon">
                <img src={girl} alt="Hero Icon" style={{ width: '100%', maxWidth: '500px' }} />
                </div>
            </div>
            <div className="tooling hidden">
                <div className="tooling-title"><h2>Tooling</h2></div>
                <div className="tooling-box">
                <div className="box-content">
                <div className="box-icon"><ReactImg className="icon" /></div>
                <div className="box-text"><p>React</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><AngularImg className="icon" /></div>
                <div className="box-text"><p>Angular</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><NodeImg className="icon" /></div>
                <div className="box-text"><p>Node</p></div>
                </div>
                <div className="box-content">
                <img className="icon" src={php} alt="Logo" style={{ width: '30%', maxWidth: '500px' }} />
                <div className="box-text"><p>PHP</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><JavascriptImg className="icon" /></div>
                <div className="box-text"><p>Javascript</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><FigmaImg className="icon" /></div>
                <div className="box-text"><p>Figma</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><SassImg className="icon" /></div>
                <div className="box-text"><p>Sass</p></div>
                </div>
                <div className="box-content">
                <div className="box-icon"><TypescriptImg className="icon" /></div>
                <div className="box-text"><p>Typescript</p></div>
                </div>
                <div className="box-content">
                <img className="icon" src={github} alt="Logo" style={{ width: '30%', maxWidth: '500px' }} />
                <div className="box-text"><p>GitHub</p></div>
                </div>
                <div className="box-content">
                <img className="icon" src={python} alt="Logo" style={{ width: '30%', maxWidth: '500px' }} />
                <div className="box-text"><p>Python</p></div>
                </div>
                </div>
            </div>
            <div className="showroom-section hidden">
            <div className="showroom-title"><h2>Showroom</h2></div>
            <div className="showroom">
                <div className="showroom-background" style={Styles}></div>
                <ProjectSlider setBackground={setBackground} />
            </div>
            <div class="button-wrap">
            <button class="butt" onClick={nav}>All Project details</button>
            </div>
            </div>
            {/* One feature ommitted */}
            {/* <div className="featured hidden">

            </div> */}
            <div className="quote hidden">
            <div className="quote-body">
                <QuoteLeft className="left" />
            <div className="quote-body-content">
                <p>Work hard in silence. Let your success be your noise.<span>!</span></p>
            </div>
            <QuoteRight className="right" />
            </div>
            </div>
        </div>
    )
}

export default Home