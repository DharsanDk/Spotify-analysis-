import React from 'react';
import BarChart from './BarChart';
import { artistSuccessData } from '../data/analysisData';

const ArtistSuccessSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">Artist Success Patterns</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Artist Success Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="py-2 px-4 text-[#b3b3b3]">Metric</th>
                  <th className="py-2 px-4 text-[#1DB954]">The Weeknd</th>
                  <th className="py-2 px-4 text-[#1DB954]">Taylor Swift</th>
                  <th className="py-2 px-4 text-[#b3b3b3]">Industry Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4">Avg Popularity</td>
                  <td className="py-2 px-4 font-medium">73.2</td>
                  <td className="py-2 px-4 font-medium">72.4</td>
                  <td className="py-2 px-4">59.2</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4">Songs in Top 1000</td>
                  <td className="py-2 px-4 font-medium">45</td>
                  <td className="py-2 px-4 font-medium">25</td>
                  <td className="py-2 px-4">3.8</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4">Avg Duration (min)</td>
                  <td className="py-2 px-4 font-medium">3.78</td>
                  <td className="py-2 px-4 font-medium">3.92</td>
                  <td className="py-2 px-4">3.44</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4">Collaboration Rate</td>
                  <td className="py-2 px-4 font-medium">17.8%</td>
                  <td className="py-2 px-4 font-medium">16.0%</td>
                  <td className="py-2 px-4">11.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Songs in Top 1000</h3>
          <div className="h-[250px]">
            <BarChart 
              data={artistSuccessData.songsInTop1000} 
              xLabel="Artist" 
              yLabel="Songs Count" 
              color="#1DB954"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">The Weeknd's Success Strategies</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#b3b3b3]">
            <li><span className="text-white font-medium">Consistent Sound Evolution:</span> Gradual evolution from dark R&B to incorporating more pop and electronic elements</li>
            <li><span className="text-white font-medium">Strategic Collaborations:</span> Partnerships with diverse artists to reach different audience segments</li>
            <li><span className="text-white font-medium">Album Coherence:</span> Creates albums with strong thematic consistency that drive multiple songs to high popularity</li>
          </ul>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Taylor Swift's Success Strategies</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#b3b3b3]">
            <li><span className="text-white font-medium">Genre Flexibility:</span> Successfully transitioned across country, pop, and indie folk genres</li>
            <li><span className="text-white font-medium">Strong Narrative Control:</span> Creates cohesive album experiences that tell compelling stories</li>
            <li><span className="text-white font-medium">Re-recording Strategy:</span> Successfully re-released earlier work to maintain catalog relevance</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#181818] p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-bold mb-4 text-white">Common Success Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-black font-bold">1</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Album-Focused Strategy</h4>
              <p className="text-[#b3b3b3]">Both artists release cohesive albums rather than focusing solely on singles</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-black font-bold">2</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Visual Storytelling</h4>
              <p className="text-[#b3b3b3]">Both invest heavily in visual elements to enhance song recognition and popularity</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-black font-bold">3</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Optimal Song Duration</h4>
              <p className="text-[#b3b3b3]">Their songs are slightly longer than the industry average but remain accessible</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-black font-bold">4</span>
            </div>
            <div>
              <h4 className="font-medium text-white">Strategic Collaborations</h4>
              <p className="text-[#b3b3b3]">Both use collaborations to reach new audiences and boost visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSuccessSection;