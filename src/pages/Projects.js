// src/pages/Works.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Projects.css';

const Works = () => {
    const projectList = [
        {
            id: 1,
            title: 'Jiggler',
            description: 'Developed a web app using Spotify API to analyze music qualities such as Instrumentalness and Liveness, boosting user retention by 30% and daily active users by 20%. Created playlists from user feeds and history with auto-save functionality.',
            tech: '{ MERN Stack }',
            views: 'Unknown',
            link: 'https://github.com/mahi0601/Jiggler'
        },
        {
            id: 2,
            title: 'YouTube Downloader',
            description: 'Built a React Web App with a backend API using RegEx for query processing, allowing users to download videos and audio in various formats (mp4, mp3, MOV).',
            tech: '{ React.js, Express.js, Node.js }',
            views: 'Unknown',
            link: 'https://github.com/mahi0601/Youtube-Downloader'
        },
        {
            id: 3,
            title: 'Crypto Tracker',
            description: 'Monitored coins, set price alerts, and tracked cryptocurrency news. Used OHLC indicators to generate graphs, stored data using Kubernetes, and identified top patterns for trading analysis.',
            tech: '{ TA-lib, React.js, yfinance, Kubernetes }',
            views: 'Unknown',
            link: 'https://github.com/mahi0601/CryptoTracker'
        },
        {
            id: 4,
            title: 'Text Generator',
            description: 'Built a text generation model using Bi-LSTM and LSTM networks in PyTorch with pre-trained large language models for enhanced context understanding. Developed an interactive UI and implemented prompt engineering for optimization.',
            tech: '{ PyTorch, Python }',
            views: 'Unknown',
            link: 'https://github.com/mahi0601/TextGen/tree/main'
        }
    ];
    

    return (
        <section className="works-page">
            {/* Introduction Section */}
            <div className="works-intro text-center">
                <h1 className="intro-title" >I talk code.<br/> I'm most fluent<br/> in Javascript!</h1>
                <p className="intro-subtitle">
                    For backend I use Javascript with various frameworks. <br />
                    For frontend, I prefer ReactJS as my framework with CSS. Also Tailwind is awesome!
                </p>
            </div>

            {/* Project Timeline Section */}
            <div className="timeline">
                <div className="timeline-items">
                    {projectList.map((project, index) => (
                        <div key={project.id} className="timeline-container">
                            <div className="timeline-marker">{index + 1}</div>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
