import React from 'react';

const Header = ({ activeSection, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#121212] bg-opacity-95 backdrop-blur-sm shadow-lg transition-all duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="flex items-center mb-4 md:mb-0">
            <svg className="w-10 h-10 text-[#1DB954] mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <h1 className="text-2xl font-bold text-white">Spotify Data Analysis</h1>
          </div>
          
          <nav className="flex items-center overflow-x-auto pb-2 md:pb-0 space-x-1 md:space-x-2">
            <button 
              onClick={() => onNavigate('artist')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'artist' ? 'bg-[#1DB954] text-white scale-105' : 'text-[#b3b3b3] hover:text-white hover:bg-[#282828]'}`}
            >
              Artist Success
            </button>
            <button 
              onClick={() => onNavigate('predictive')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'predictive' ? 'bg-[#1DB954] text-white scale-105' : 'text-[#b3b3b3] hover:text-white hover:bg-[#282828]'}`}
            >
              Popularity Factors
            </button>
            <button 
              onClick={() => onNavigate('temporal')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'temporal' ? 'bg-[#1DB954] text-white scale-105' : 'text-[#b3b3b3] hover:text-white hover:bg-[#282828]'}`}
            >
              Music Trends
            </button>
          </nav>
        </div>
        
        <div className="w-full hidden md:block">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#333] to-transparent opacity-70"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;