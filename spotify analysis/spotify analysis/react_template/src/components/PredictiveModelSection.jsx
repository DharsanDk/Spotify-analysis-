import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { predictiveModelData } from '../data/analysisData';

const PredictiveModelSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">Predictive Factors for Song Popularity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Model Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="py-2 px-4 text-[#b3b3b3]">Model Type</th>
                  <th className="py-2 px-4 text-[#b3b3b3]">R² Score</th>
                  <th className="py-2 px-4 text-[#b3b3b3]">RMSE</th>
                  <th className="py-2 px-4 text-[#b3b3b3]">MAE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4 text-white">Linear Regression</td>
                  <td className="py-2 px-4 text-[#1DB954] font-medium">0.951</td>
                  <td className="py-2 px-4">6.66</td>
                  <td className="py-2 px-4">2.83</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4 text-white">Ridge Regression</td>
                  <td className="py-2 px-4 text-[#1DB954] font-medium">0.951</td>
                  <td className="py-2 px-4">6.67</td>
                  <td className="py-2 px-4">2.85</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4 text-white">Gradient Boosting</td>
                  <td className="py-2 px-4">0.938</td>
                  <td className="py-2 px-4">7.49</td>
                  <td className="py-2 px-4">2.98</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4 text-white">Random Forest</td>
                  <td className="py-2 px-4">0.931</td>
                  <td className="py-2 px-4">7.90</td>
                  <td className="py-2 px-4">3.24</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="py-2 px-4 text-white">XGBoost (Optimized)</td>
                  <td className="py-2 px-4">0.941</td>
                  <td className="py-2 px-4">7.31</td>
                  <td className="py-2 px-4">3.53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Feature Importance</h3>
          <div className="h-[300px]">
            <PieChart data={predictiveModelData.featureImportance} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Correlation Analysis</h3>
          <div className="h-[250px]">
            <BarChart 
              data={predictiveModelData.correlations} 
              xLabel="Factor" 
              yLabel="Correlation with Popularity" 
              color="#1DB954"
              horizontal={true}
            />
          </div>
        </div>

        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">Recommendations for Song Success</h3>
          <ol className="list-decimal pl-5 space-y-3 text-[#b3b3b3]">
            <li><span className="text-white font-medium">Artist Association:</span> Partner with established popular artists</li>
            <li><span className="text-white font-medium">Album Strategy:</span> Create cohesive albums with multiple strong tracks</li>
            <li><span className="text-white font-medium">Strategic Collaborations:</span> Utilize partnerships with popular artists</li>
            <li><span className="text-white font-medium">Optimal Duration:</span> Target 3-4 minutes for maximum engagement</li>
            <li><span className="text-white font-medium">Release Timing:</span> Consider seasonal trends in music consumption</li>
          </ol>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1DB954] to-[#1ed760] p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-bold mb-2 text-black">Key Finding</h3>
        <p className="text-black font-medium text-lg">The album a song belongs to is the strongest predictor of its popularity, accounting for 83.3% of predictive power.</p>
      </div>
    </div>
  );
};

export default PredictiveModelSection;