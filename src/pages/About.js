import React from 'react';
import { motion } from 'framer-motion';
import angularLogo from '../assets/angular.svg';
import cplusplusLogo from '../assets/cplusplus.svg';
import css3Logo from '../assets/css3.svg';
import dockerLogo from '../assets/docker.svg';
import html5Logo from '../assets/html5.svg';
import htmxLogo from '../assets/htmx.svg';
import javascriptLogo from '../assets/javascript.svg';
import kerasLogo from '../assets/keras.svg';
import kubernetesLogo from '../assets/kubernetes.svg';
import nodejsLogo from '../assets/nodedotjs.svg';
import '../About.css';

const icons = [
  { src: angularLogo, alt: 'Angular', style: { top: '10%', left: '15%' } },
  { src: cplusplusLogo, alt: 'C++', style: { top: '20%', right: '15%' } },
  { src: css3Logo, alt: 'CSS3', style: { top: '30%', left: '10%' } },
  { src: dockerLogo, alt: 'Docker', style: { bottom: '20%', left: '20%' } },
  { src: html5Logo, alt: 'HTML5', style: { top: '50%', right: '10%' } },
  { src: htmxLogo, alt: 'HTMX', style: { bottom: '10%', left: '30%' } },
  { src: javascriptLogo, alt: 'JavaScript', style: { bottom: '15%', right: '25%' } },
  { src: kerasLogo, alt: 'Keras', style: { bottom: '30%', left: '50%' } },
  { src: kubernetesLogo, alt: 'Kubernetes', style: { top: '15%', right: '30%' } },
  { src: nodejsLogo, alt: 'Node.js', style: { top: '40%', left: '60%' } },
];

const achievements = [
  { icon: '📈', text: 'Trending developer on GitHub' },
  { icon: '📊', text: 'API got 105k+ hits within 3 days' },
  { icon: '📥', text: 'Python app downloaded 110k+ times' },
  { icon: '🌍', text: 'Ytmdl Web has 4.2k+ monthly users' },
  { icon: '👀', text: 'Webapp got 35k+ pageviews in 3 days' },
];

const timelineData = [
  {
    number: 1,
    title: 'Ytmdl',
    description: 'Web App to download songs with metadata included in the highest quality possible. Backend used ytmdl CLI.',
    techStack: '{ Python, Vue }',
    views: '219.32k',
  },
  {
    number: 2,
    title: 'ytmdl',
    description: 'App to download songs with metadata included from sources like iTunes, Musicbrainz, LastFM, etc.',
    techStack: '{ Python }',
    views: '3.21k',
  },
];

const About = () => {
  return (
    <section className="home-section">
      <div className="divider"></div>

      <motion.h1 
        className="intro-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I build <span className="highlight-yellow">Useful</span>,<br />
        <span className="highlight-blue">Creative</span> and<br />
        <span className="highlight-green">Confident</span> apps.
      </motion.h1>

      <motion.p
        className="intro-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Passionate developer with a knack for building modern, responsive, and robust applications. 
        Skilled in a variety of frameworks and languages, I strive to deliver solutions that meet 
        both functional and aesthetic needs.
      </motion.p>

      <motion.div className="icon-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {icons.map((icon, index) => (
          <motion.div key={index} className="icon" style={icon.style}>
            <img src={icon.src} alt={icon.alt} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="button-group">
        <motion.button className="primary-button">View My Work</motion.button>
        <motion.button className="primary-button">View GitHub</motion.button>
      </motion.div>

      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-left">
            <h2 className="achievements-title">Things I achieved while creating and building over the last 5+ years.</h2>
            <button className="achievement-button">CHECK ACHIEVEMENTS</button>
          </div>
          <div className="achievements-right">
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <p className="achievement-text">{achievement.text}</p>
                  <span className="achievement-arrow">▼</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="timeline-section">
  <div className="timeline">
    {timelineData.map((item) => (
      <div key={item.number} className="timeline-item">
        <div className="timeline-marker">{item.number}</div>
        <div className="timeline-content">
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-description">{item.description}</p>
          <p className="timeline-techStack">{item.techStack}</p>
          <p className="timeline-views">
            <span className="icon-views">📄</span> {item.views}
          </p>
          <a href="#" className="check-button">
            CHECK <span className="arrow">⇒</span>
          </a>
        </div>
      </div>
    ))}
  </div>
  <div className="work-section">
    <h3>Some of my best works as a Full Stack Developer.</h3>
    <p>I really appreciate Open Source and almost all of my work is open source. I make sure that I always find a way to give back to the community.</p>
    <button className="work-button">CHECK MY WORK</button>
    <button className="secondary-button">CHECK WHAT I USE</button>
  </div>
</section>
<section class="contact-section">
  <div class="contact-container">
    <div class="contact-left">
      <h2 class="contact-title">Want to work with me on your<br/>next awesome project?</h2>
      <button class="contact-button">GET IN TOUCH ⇒</button>
    </div>
    <div class="contact-right">
      <p class="contact-description">
        I am always excited to work on something new. Be it a shiny new web app or a blazing fast API. Although I do lean towards backend mostly, I also love building command-line tools and anything Linux.
      </p>
      <div class="contact-info">
        <p>👤 Over 8 years of industry experience</p>
        <p>🕒 Always a part of the team</p>
      </div>
    </div>
  </div>
</section>



<section className="footer">
  <div className="footer-content">

    <div className="footer-left">
      <h2 className="footer-title">BB</h2>
      <p className="footer-subtitle">Bipasha<br />2022 - Present</p>
    </div>

    <div className="footer-middle-gap"></div>
    

    <div className="footer-links">
      <div className="footer-column">
        <h4 className="footer-column-title">Social</h4>
        <p>GitHub ⇒</p>
        <p>Twitter ⇒</p>
        <p>LinkedIn ⇒</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-column-title">Sitemap</h4>
        <p>About ⇒</p>
        <p>Works ⇒</p>
        <p>Achievements ⇒</p>
        <p>Uses ⇒</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-column-title">Others</h4>
        <p>Contact ⇒</p>
        <p>Blog ⇒</p>
        <p>Privacy ⇒</p>
      </div>
    </div>
  </div>
</section>


    </section>

  );
};

export default About;
