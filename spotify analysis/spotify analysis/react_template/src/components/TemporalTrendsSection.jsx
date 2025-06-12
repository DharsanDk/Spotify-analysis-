import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { temporalTrendsData } from '../data/analysisData';

const TemporalTrendsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">Temporal Music Trends (1976-2025)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Song Duration Evolution</h3>
          <div className="h-[250px]">
            <LineChart 
              data={temporalTrendsData.songDuration} 
              xLabel="Decade" 
              yLabel="Average Duration (minutes)" 
              color="#1DB954"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between bg-[#282828] p-3 rounded-md">
              <span className="text-[#b3b3b3]">Decrease from 2000s to 2020s</span>
              <span className="text-[#1DB954] font-bold text-xl">20.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Collaboration Rate Trends</h3>
          <div className="h-[250px]">
            <LineChart 
              data={temporalTrendsData.collaborationRate} 
              xLabel="Decade" 
              yLabel="Collaboration Rate (%)" 
              color="#1DB954"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between bg-[#282828] p-3 rounded-md">
              <span className="text-[#b3b3b3]">Increase over decades</span>
              <span className="text-[#1DB954] font-bold text-xl">296.9%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Popularity Distribution</h3>
          <div className="h-[250px]">
            <BarChart 
              data={temporalTrendsData.popularityByDecade} 
              xLabel="Decade" 
              yLabel="Average Popularity" 
              color="#1DB954"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between bg-[#282828] p-3 rounded-md">
              <span className="text-[#b3b3b3]">Decrease from 2000s to 2020s</span>
              <span className="text-[#1DB954] font-bold text-xl">18.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Song Naming Evolution</h3>
          <div className="h-[250px]">
            <LineChart 
              data={temporalTrendsData.titleLength} 
              xLabel="Decade" 
              yLabel="Average Title Length" 
              color="#1DB954"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between bg-[#282828] p-3 rounded-md">
              <span className="text-[#b3b3b3]">Title length decrease over time</span>
              <span className="text-[#1DB954] font-bold text-xl">9.2%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#181818] p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-bold mb-4 text-white">Key Trends & Industry Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#282828] p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">For Artists</h4>
            <ul className="text-[#b3b3b3] space-y-2 list-disc pl-5">
              <li>Focus on album-centric strategy</li>
              <li>Embrace strategic collaborations</li>
              <li>Create shorter songs (2.5-3.5 min)</li>
              <li>Use direct, searchable titles</li>
            </ul>
          </div>
          <div className="bg-[#282828] p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">For Labels & Producers</h4>
            <ul className="text-[#b3b3b3] space-y-2 list-disc pl-5">
              <li>Invest in artist development</li>
              <li>Focus on cohesive album experiences</li>
              <li>Actively facilitate collaborations</li>
              <li>Manage catalogs to maintain relevance</li>
            </ul>
          </div>
          <div className="bg-[#282828] p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">For Platforms</h4>
            <ul className="text-[#b3b3b3] space-y-2 list-disc pl-5">
              <li>Optimize for shorter songs</li>
              <li>Highlight collaborative works</li>
              <li>Develop album-listening features</li>
              <li>Balance new releases with classics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemporalTrendsSection;