import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {
  Main,
  Experience,
  Project,
  Education,
  Leadership,
  Expertise,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import ProjectDetail from './pages/ProjectDetail';
import { AIChatDemo } from './pages/AIChatDemo';
import './index.scss';
import './tailwind.css';

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
        if (scrollTarget && scrollTarget !== 'home') {
            const timer = setTimeout(() => {
                const el = document.getElementById(scrollTarget);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
            return () => clearTimeout(timer);
        }
        window.scrollTo({top: 0, left: 0});
    }, [location.state]);

    return (
    <div className="main-container">
        <FadeIn transitionDuration={500} delay={30}>
            <Main/>
            <Experience/>
            <Project/>
            <Education/>
            <Leadership/>
            <Expertise/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
                <Route path="/ai-chat" element={<AIChatDemo />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

export default App;
