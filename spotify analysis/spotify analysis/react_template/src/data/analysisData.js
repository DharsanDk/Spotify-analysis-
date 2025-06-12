// Sample data for the Spotify data analysis charts
// Based on the analysis report

export const artistSuccessData = {
  songsInTop1000: [
    { label: "The Weeknd", value: 45 },
    { label: "Taylor Swift", value: 25 },
    { label: "Kendrick Lamar", value: 18 },
    { label: "Drake", value: 20 },
    { label: "Dua Lipa", value: 16 },
    { label: "Average Artist", value: 3.8 }
  ],
  successMetrics: {
    avgPopularity: {
      "The Weeknd": 73.2,
      "Taylor Swift": 72.4,
      "Industry Average": 59.2
    },
    songsInTop1000: {
      "The Weeknd": 45,
      "Taylor Swift": 25,
      "Industry Average": 3.8
    },
    avgDuration: {
      "The Weeknd": 3.78,
      "Taylor Swift": 3.92,
      "Industry Average": 3.44
    },
    collaborationRate: {
      "The Weeknd": 17.8,
      "Taylor Swift": 16.0,
      "Industry Average": 11.0
    }
  }
};

export const predictiveModelData = {
  modelPerformance: [
    { model: "Linear Regression", r2: 0.951, rmse: 6.66, mae: 2.83 },
    { model: "Ridge Regression", r2: 0.951, rmse: 6.67, mae: 2.85 },
    { model: "Gradient Boosting", r2: 0.938, rmse: 7.49, mae: 2.98 },
    { model: "Random Forest", r2: 0.931, rmse: 7.90, mae: 3.24 },
    { model: "XGBoost (Optimized)", r2: 0.941, rmse: 7.31, mae: 3.53 }
  ],
  featureImportance: [
    { label: "Album Popularity", value: 83.3 },
    { label: "Artist Popularity", value: 6.3 },
    { label: "Years Since Release", value: 2.8 },
    { label: "Release Month", value: 2.3 },
    { label: "Artist Track Count", value: 1.9 },
    { label: "Other Factors", value: 3.4 }
  ],
  correlations: [
    { label: "Album Popularity", value: 0.967 },
    { label: "Artist Popularity", value: 0.896 },
    { label: "Song Duration", value: 0.256 },
    { label: "Decade", value: -0.242 }
  ]
};

export const temporalTrendsData = {
  songDuration: [
    { label: "1970s", value: 3.45 },
    { label: "1980s", value: 3.38 },
    { label: "1990s", value: 3.51 },
    { label: "2000s", value: 3.57 },
    { label: "2010s", value: 3.62 },
    { label: "2020s", value: 2.79 }
  ],
  collaborationRate: [
    { label: "1970s", value: 2.1 },
    { label: "1980s", value: 2.8 },
    { label: "1990s", value: 3.9 },
    { label: "2000s", value: 5.4 },
    { label: "2010s", value: 8.3 },
    { label: "2020s", value: 10.1 }
  ],
  popularityByDecade: [
    { label: "1970s", value: 55.3 },
    { label: "1980s", value: 57.8 },
    { label: "1990s", value: 60.2 },
    { label: "2000s", value: 62.5 },
    { label: "2010s", value: 65.0 },
    { label: "2020s", value: 45.3 }
  ],
  titleLength: [
    { label: "1970s", value: 17.2 },
    { label: "1980s", value: 16.8 },
    { label: "1990s", value: 16.5 },
    { label: "2000s", value: 15.9 },
    { label: "2010s", value: 15.4 },
    { label: "2020s", value: 15.6 }
  ]
};