import React from 'react'
import { useEffect, useState } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJsSquare, faHtml5, faCss3, faUnity, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);  
        return () => clearTimeout(timer);
    }, []);
    


    return (
        <div className='container about-page'>
            {isLoading && (
                <div className="loader"></div>  
            )}
    
            {!isLoading && (
                <div>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>I hold a Bachelor of Science in Computer and Systems Sciences from Stockholm University, 
                            where I developed a strong foundation in software development and computational problem-solving. My education emphasized technical skills in programming languages such as C#, Python, SQL, Java and JavaScript,
                            alongside knowledge in HTML5, CSS3, Node.js, React, database design, and Unity. <br /><br />I completed my Bachelor’s thesis by designing an evolutionary algorithm for contamination detection in water distribution networks, utilizing Python, EPANET, and WNTR.</p>
                        <p>I am a curious and detail-oriented individual with a strong passion for technology and problem-solving. My interest in technology motivates me to take on personal projects, like this portfolio website, 
                            as a way to explore and learn more about the field. 
                            <br /><br />I enjoy working in groups and learning from others, as collaboration allows me to grow 
                            both personally and professionally. With strong communication skills, a positive outlook, and fluency in both Swedish and English, 
                            I bring enthusiasm and a solutions-focused mindset to every project I undertake.</p>
                        <p>Antonio Azdanlou Qajar</p>
                    </div>
    
                    <div className='tech-logos'>
                        <FontAwesomeIcon icon={faPython} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faJava} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" className="icon" />
                        <div className="icon custom-icon">C#</div>
                        <FontAwesomeIcon icon={faCss3} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faUnity} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faReact} size="3x" className="icon" />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" className="icon" />
                        
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default About