import React, { useState, useEffect } from 'react';
import LogoTitle2 from '../../assets/images/A_logo2.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isLoading, setIsLoading] = useState(true);

    const greetingLine1 = ['H', 'i', ','];
    const greetingLine2 = ['I', '\'', 'm'];
    const nameArray = ['n', 't', 'o', 'n', 'i', 'o'];
    const degreeTitle = ['a', ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'g', 'r', 'a', 'd', 'u', 'a', 't', 'e', ' '];
    const degree = ['(', 'B', 'S', 'c', ')'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container home-page">
            {isLoading && (
                <div className="loader"></div>  
            )}

            {!isLoading && (  
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={greetingLine1} idx={1} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={greetingLine2} idx={4} />
                        <img src={LogoTitle2} alt="developer" className="logo" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={degreeTitle} idx={14} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={degree} idx={42} />
                    </h1>
                    <h2>Aspiring Software Engineer. Eager to Learn and Create</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            )}
        </div>
    );
};

export default Home;
