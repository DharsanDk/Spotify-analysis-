import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ArtistSuccessSection from './components/ArtistSuccessSection';
import PredictiveModelSection from './components/PredictiveModelSection';
import TemporalTrendsSection from './components/TemporalTrendsSection';

function App() {
  const [activeSection, setActiveSection] = useState('artist');
  const artistRef = useRef(null);
  const predictiveRef = useRef(null);
  const temporalRef = useRef(null);
  
  const handleNavigation = (section) => {
    setActiveSection(section);
    
    // Scroll to the selected section with smooth animation
    const sectionRefs = {
      artist: artistRef,
      predictive: predictiveRef,
      temporal: temporalRef
    };
    
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle scroll events to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      const sections = [
        { id: 'artist', ref: artistRef },
        { id: 'predictive', ref: predictiveRef },
        { id: 'temporal', ref: temporalRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetHeight = section.ref.current.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      <main className="container mx-auto px-4 py-8">
        <section ref={artistRef} id="artist-section" className="mb-20 pt-6">
          <ArtistSuccessSection />
        </section>
        
        <div className="w-full flex justify-center py-8">
          <div className="w-1/3 border-b border-[#333]"></div>
        </div>
        
        <section ref={predictiveRef} id="predictive-section" className="mb-20 pt-6">
          <PredictiveModelSection />
        </section>
        
        <div className="w-full flex justify-center py-8">
          <div className="w-1/3 border-b border-[#333]"></div>
        </div>
        
        <section ref={temporalRef} id="temporal-section" className="mb-12 pt-6">
          <TemporalTrendsSection />
        </section>
      </main>

      <footer className="bg-[#181818] py-6 mt-12">
        <div className="container mx-auto px-4 text-[#b3b3b3] text-sm text-center">
          <p>Data analysis based on Spotify Top 1000 Songs dataset</p>
          <p className="mt-2">Created by DHARSAN KUMAR P, LINELDEN <a href="https://www.linkedin.com/in/dk---" className="text-[#1DB954] hover:underline" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/dk---</a></p>
          <p className="mt-1">© 2023 DK Spotify Data Analysis</p>
        </div>
      </footer>
    </div>
  );
}

export default App;