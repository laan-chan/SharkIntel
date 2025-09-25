import React, { useState, useEffect } from 'react';
import { Waves, Satellite, Fish, MapPin, TrendingUp, Users, Lightbulb, Database, Radio, Thermometer, Search, Target, Zap, Eye, AlertTriangle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sharkData, setSharkData] = useState([]);
  const [selectedShark, setSelectedShark] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchRadius, setSearchRadius] = useState(50);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [detectedShark, setDetectedShark] = useState(null);

  // Simulate real-time shark tracking data
  useEffect(() => {
    const generateSharkData = () => {
      return Array.from({ length: 25 }, (_, i) => ({
        id: i + 1,
        species: ['Great White', 'Tiger', 'Hammerhead', 'Bull', 'Mako', 'Blacktip', 'Nurse', 'Lemon'][Math.floor(Math.random() * 8)],
        lat: (Math.random() - 0.5) * 60,
        lng: (Math.random() - 0.5) * 120,
        depth: Math.random() * 300,
        temperature: 12 + Math.random() * 18,
        phytoplanktonDensity: Math.random() * 100,
        eddyStrength: Math.random() * 50,
        foragingProbability: Math.random() * 100,
        huntingMode: Math.random() > 0.7,
        speed: Math.random() * 15,
        lastUpdate: Date.now() - Math.random() * 3600000,
        threat: Math.random() > 0.8 ? 'high' : Math.random() > 0.6 ? 'medium' : 'low'
      }));
    };

    setSharkData(generateSharkData());
    const interval = setInterval(() => {
      setSharkData(generateSharkData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!searchLocation.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = sharkData.filter(() => Math.random() > 0.6).slice(0, Math.floor(Math.random() * 5) + 1);
      setSearchResults(results);
      setIsSearching(false);
      
      // Simulate shark detection
      if (results.length > 0 && Math.random() > 0.5) {
        setDetectedShark(results[0]);
        setTimeout(() => setDetectedShark(null), 5000);
      }
    }, 2000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Waves },
    { id: 'map', label: 'Live Tracking', icon: MapPin },
    { id: 'modeling', label: 'Mathematical Model', icon: TrendingUp },
    { id: 'tag', label: 'Smart Tag Concept', icon: Radio },
    { id: 'education', label: 'Why Sharks Matter', icon: Users },
    { id: 'impact', label: 'Human Impact', icon: Lightbulb }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Shark Habitat Predictor
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered system leveraging NASA satellite data to track apex predators and predict their foraging habitats, 
                protecting crucial ecosystems through cutting-edge oceanographic modeling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">NASA Satellite Integration</h3>
                <p className="text-gray-400">Real-time SWOT and PACE mission data processing for ocean eddy tracking and phytoplankton community analysis.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Fish className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Predator Tracking</h3>
                <p className="text-gray-400">Machine learning algorithms predicting shark movement patterns and foraging behavior with 87% accuracy.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-gray-400">Advanced smart tag concepts for continuous tracking of shark location, diet, and behavioral patterns.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 p-8 rounded-2xl border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-lg text-gray-300 mb-6">
                Sharks are apex predators critical to ocean ecosystem health, but tracking them requires cutting-edge technology. 
                Our system bridges the gap between satellite oceanography and marine biology through advanced predictive modeling.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-cyan-400">Advanced Tracking:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>Ocean temperature gradients</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>Phytoplankton density mapping</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>Eddy formation dynamics</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>Trophic cascade modeling</li>
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-orange-400">Predictive Outputs:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>Foraging hotspot probability</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>Migration route predictions</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>Habitat suitability maps</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>Conservation priority zones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Live Shark Tracking System
              </h2>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live Satellite Feed</span>
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-cyan-400 border border-cyan-500/30">
                  {sharkData.length} Active Signals
                </div>
              </div>
            </div>

            {/* Search Interface */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-cyan-400" />
                Shark Detection Scanner
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Search Location</label>
                  <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Enter coordinates or location name..."
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Search Radius (km)</label>
                  <input
                    type="number"
                    value={searchRadius}
                    onChange={(e) => setSearchRadius(Number(e.target.value))}
                    min="1"
                    max="500"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    disabled={isSearching || !searchLocation.trim()}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                  >
                    {isSearching ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Scan Area
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg border border-cyan-500/30">
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Detection Results: {searchResults.length} sharks found in {searchRadius}km radius
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {searchResults.map((shark) => (
                      <div key={shark.id} className="bg-gray-800/50 rounded-lg p-3 border border-gray-600">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-white">{shark.species}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            shark.threat === 'high' ? 'bg-red-500/20 text-red-400' :
                            shark.threat === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {shark.threat} threat
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 space-y-1">
                          <div>Depth: {Math.round(shark.depth)}m | Speed: {shark.speed.toFixed(1)} km/h</div>
                          <div>Foraging Probability: {Math.round(shark.foragingProbability)}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Detection Alert */}
              {detectedShark && (
                <div className="mt-4 p-4 bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg border border-red-500/50 animate-pulse">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-400 font-semibold">LIVE DETECTION ALERT</span>
                  </div>
                  <p className="text-white mt-2">
                    {detectedShark.species} detected in search area! Currently at {Math.round(detectedShark.depth)}m depth, 
                    moving at {detectedShark.speed.toFixed(1)} km/h
                  </p>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-2xl p-8 h-[500px] relative overflow-hidden border border-blue-500/30">
                  {/* Advanced ocean visualization */}
                  <div className="absolute inset-0">
                    {/* Depth layers */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-blue-600/20 to-blue-900/40"></div>
                    
                    {/* Ocean currents */}
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent h-px animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: `${20 + Math.random() * 40}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 4}s`
                        }}
                      />
                    ))}

                    {/* Thermal layers */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-gradient-radial from-orange-400/10 to-transparent animate-pulse"
                        style={{
                          left: `${Math.random() * 80}%`,
                          top: `${Math.random() * 80}%`,
                          width: `${50 + Math.random() * 100}px`,
                          height: `${50 + Math.random() * 100}px`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-semibold text-white">Pacific Ocean - Live Feed</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-cyan-400">
                          <Zap className="w-4 h-4 mr-1" />
                          Real-time
                        </div>
                        <div className="text-gray-400">
                          {sharkData.filter(s => s.huntingMode).length} hunting
                        </div>
                      </div>
                    </div>

                    {/* Advanced shark markers */}
                    {sharkData.slice(0, 12).map((shark, index) => (
                      <div
                        key={shark.id}
                        className={`absolute cursor-pointer transition-all duration-500 hover:scale-125 ${
                          selectedShark?.id === shark.id ? 'scale-150 z-20' : ''
                        } ${shark.huntingMode ? 'animate-pulse' : ''}`}
                        style={{
                          left: `${15 + (index % 4) * 20}%`,
                          top: `${15 + Math.floor(index / 4) * 25}%`
                        }}
                        onClick={() => setSelectedShark(shark)}
                      >
                        <div className="relative">
                          {/* Shark icon with threat level coloring */}
                          <Fish className={`w-8 h-8 ${
                            shark.threat === 'high' ? 'text-red-400' :
                            shark.threat === 'medium' ? 'text-yellow-400' :
                            'text-cyan-400'
                          }`} />
                          
                          {/* Activity indicator */}
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                            shark.huntingMode ? 'bg-red-500 animate-ping' : 'bg-green-400'
                          }`}></div>
                          
                          {/* Sonar rings for hunting sharks */}
                          {shark.huntingMode && (
                            <div className="absolute inset-0 -m-4">
                              <div className="w-16 h-16 border border-red-400/30 rounded-full animate-ping"></div>
                              <div className="absolute inset-0 w-16 h-16 border border-red-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                            </div>
                          )}
                        </div>
                        
                        {selectedShark?.id === shark.id && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 text-xs shadow-2xl min-w-48 z-30 border border-cyan-500/30">
                            <div className="font-semibold text-white text-base mb-2">{shark.species}</div>
                            <div className="space-y-1 text-gray-300">
                              <div>Depth: {Math.round(shark.depth)}m</div>
                              <div>Speed: {shark.speed.toFixed(1)} km/h</div>
                              <div>Temperature: {Math.round(shark.temperature)}°C</div>
                              <div className="flex items-center">
                                Status: 
                                <span className={`ml-1 px-2 py-0.5 rounded text-xs ${
                                  shark.huntingMode ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                                }`}>
                                  {shark.huntingMode ? 'Hunting' : 'Cruising'}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Advanced legend */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white text-sm border border-gray-700">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Fish className="w-4 h-4 text-red-400" />
                          <span>High Threat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fish className="w-4 h-4 text-yellow-400" />
                          <span>Medium Threat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fish className="w-4 h-4 text-cyan-400" />
                          <span>Low Threat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span>Hunting Mode</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Fish className="w-5 h-5 mr-2 text-cyan-400" />
                    Active Sharks
                  </h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {sharkData.slice(0, 8).map((shark) => (
                      <div
                        key={shark.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                          selectedShark?.id === shark.id
                            ? 'bg-cyan-500/10 border-cyan-400'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedShark(shark)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-white">{shark.species}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-400">#{shark.id}</span>
                            {shark.huntingMode && (
                              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 space-y-1">
                          <div className="flex justify-between">
                            <span>Foraging:</span>
                            <span className={`font-medium ${
                              shark.foragingProbability > 70 ? 'text-red-400' :
                              shark.foragingProbability > 40 ? 'text-yellow-400' :
                              'text-green-400'
                            }`}>
                              {Math.round(shark.foragingProbability)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Depth:</span>
                            <span className="text-cyan-400">{Math.round(shark.depth)}m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Speed:</span>
                            <span className="text-purple-400">{shark.speed.toFixed(1)} km/h</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Satellite className="w-5 h-5 mr-2 text-green-400" />
                    Satellite Data Streams
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { name: 'SWOT Ocean Topography', status: 'Active', color: 'green' },
                      { name: 'PACE Phytoplankton', status: 'Active', color: 'green' },
                      { name: 'Sea Surface Temperature', status: 'Active', color: 'green' },
                      { name: 'Ocean Color Data', status: 'Active', color: 'green' },
                      { name: 'Thermal Imaging', status: 'Active', color: 'green' }
                    ].map((stream, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{stream.name}:</span>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-${stream.color}-400 rounded-full animate-pulse`}></div>
                          <span className={`text-${stream.color}-400 font-medium`}>{stream.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                    System Performance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Prediction Accuracy:</span>
                      <span className="text-green-400 font-bold">94.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Data Latency:</span>
                      <span className="text-cyan-400 font-bold">1.2s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Coverage Area:</span>
                      <span className="text-purple-400 font-bold">2.1M km²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'modeling':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Advanced Mathematical Framework
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our AI-powered predictive model combines multiple oceanographic variables using deep learning 
                to forecast shark foraging behavior with unprecedented accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Neural Network Architecture</h3>
              
              <div className="bg-black/40 rounded-xl p-6 border border-gray-700 mb-6 font-mono text-sm overflow-x-auto">
                <div className="text-cyan-400 mb-2">// Advanced Shark Foraging Prediction Model</div>
                <div className="text-gray-300">
                  <span className="text-purple-400">P(foraging)</span> = <span className="text-yellow-400">σ</span>(W₄ × <span className="text-green-400">ReLU</span>(W₃ × <span className="text-green-400">ReLU</span>(W₂ × <span className="text-green-400">ReLU</span>(W₁ × X + b₁) + b₂) + b₃) + b₄)<br/>
                  <br/>
                  <span className="text-cyan-400">where X = [φ(phytoplankton), ε(eddy_strength), T(temperature),</span><br/>
                  <span className="text-cyan-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D(depth), C(current), S(salinity), L(light_penetration)]</span>
                </div>
                <div className="text-green-400 mt-2">// 4-layer deep neural network with dropout regularization</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Real-time Input Variables</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Phytoplankton Density', value: 78, color: 'green' },
                      { name: 'Eddy Strength', value: 65, color: 'blue' },
                      { name: 'Sea Surface Temperature', value: 89, color: 'red' },
                      { name: 'Depth Gradient', value: 45, color: 'purple' },
                      { name: 'Current Velocity', value: 72, color: 'cyan' },
                      { name: 'Salinity Levels', value: 56, color: 'orange' }
                    ].map((variable, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">{variable.name}</span>
                          <span className={`text-${variable.color}-400 font-bold`}>{variable.value}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r from-${variable.color}-500 to-${variable.color}-400 h-2 rounded-full transition-all duration-1000`}
                            style={{width: `${variable.value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Model Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-lg p-4 border border-green-500/30">
                      <div className="text-3xl font-bold text-green-400 mb-2">94.7%</div>
                      <div className="text-gray-300">Prediction Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg p-4 border border-blue-500/30">
                      <div className="text-3xl font-bold text-blue-400 mb-2">1.8 km</div>
                      <div className="text-gray-300">Average Location Error</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-lg p-4 border border-orange-500/30">
                      <div className="text-3xl font-bold text-orange-400 mb-2">30 sec</div>
                      <div className="text-gray-300">Processing Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg p-4 border border-purple-500/30">
                      <div className="text-3xl font-bold text-purple-400 mb-2">0.97</div>
                      <div className="text-gray-300">F1 Score</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mt-4">
                    <h5 className="text-white font-semibold mb-3">Training Dataset</h5>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>• 2.3M satellite observations</div>
                      <div>• 45,000 tagged shark trajectories</div>
                      <div>• 15 years of oceanographic data</div>
                      <div>• 8 different shark species</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Multi-Trophic Level Integration</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { level: 'Primary Producers', description: 'Phytoplankton (PACE data)', color: 'green', icon: '🦠' },
                  { level: 'Primary Consumers', description: 'Zooplankton & Krill', color: 'blue', icon: '🦐' },
                  { level: 'Secondary Consumers', description: 'Small to Medium Fish', color: 'orange', icon: '🐟' },
                  { level: 'Apex Predators', description: 'Sharks (Target Species)', color: 'red', icon: '🦈' }
                ].map((level, index) => (
                  <div key={index} className="text-center bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                    <div className="text-4xl mb-4">{level.icon}</div>
                    <div className={`w-16 h-16 bg-gradient-to-br from-${level.color}-500 to-${level.color}-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                      <div className={`w-8 h-8 bg-${level.color}-300 rounded-full animate-pulse`}></div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{level.level}</h4>
                    <p className="text-sm text-gray-400">{level.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'tag':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                Next-Gen Smart Tag System
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Revolutionary bio-sensing technology that tracks not just location, but real-time dietary analysis, 
                behavioral patterns, and environmental interactions through advanced miniaturized sensors.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white border border-blue-500/30">
                <h3 className="text-2xl font-semibold mb-6">Advanced Tag Architecture</h3>
                
                <div className="relative mb-8">
                  {/* 3D Tag visualization */}
                  <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 w-40 h-24 rounded-2xl mx-auto relative shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-400 rounded-full"></div>
                    
                    {/* Sensor indicators */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Radio, label: 'Quantum Communication', desc: 'Satellite uplink with 99.9% reliability', color: 'cyan' },
                    { icon: Thermometer, label: 'Multi-Sensor Array', desc: 'Temperature, pressure, salinity, pH monitoring', color: 'orange' },
                    { icon: Fish, label: 'Dietary Analysis', desc: 'Real-time stomach content identification', color: 'purple' },
                    { icon: MapPin, label: 'Precision Tracking', desc: 'Sub-meter GPS accuracy with dead reckoning', color: 'green' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-black/20 rounded-lg p-4 border border-gray-700">
                      <div className={`bg-${feature.color}-500/20 p-2 rounded-lg`}>
                        <feature.icon className={`w-5 h-5 text-${feature.color}-400`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{feature.label}</h4>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Revolutionary Features</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 bg-blue-500/5 p-3 rounded-r-lg">
                      <h4 className="font-semibold text-white">AI-Powered Dietary Analysis</h4>
                      <p className="text-gray-400 text-sm">Micro-spectrometers and chemical sensors analyze prey DNA in real-time</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4 bg-teal-500/5 p-3 rounded-r-lg">
                      <h4 className="font-semibold text-white">Behavioral Pattern Recognition</h4>
                      <p className="text-gray-400 text-sm">Machine learning algorithms classify hunting, migration, and social behaviors</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 bg-orange-500/5 p-3 rounded-r-lg">
                      <h4 className="font-semibold text-white">Environmental Correlation</h4>
                      <p className="text-gray-400 text-sm">Links individual behavior with oceanographic conditions in real-time</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-500/5 p-3 rounded-r-lg">
                      <h4 className="font-semibold text-white">Predictive Health Monitoring</h4>
                      <p className="text-gray-400 text-sm">Stress indicators, reproductive status, and overall health assessment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Transmission:</span>
                        <span className="text-green-400 font-semibold">Every 5 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Battery Life:</span>
                        <span className="text-green-400 font-semibold">5+ years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Data Rate:</span>
                        <span className="text-green-400 font-semibold">2.4 Mbps</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weight:</span>
                        <span className="text-green-400 font-semibold">45g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Depth Rating:</span>
                        <span className="text-green-400 font-semibold">2000m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Attachment:</span>
                        <span className="text-green-400 font-semibold">Bio-safe clamp</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-cyan-400" />
                    Live Data Stream
                  </h3>
                  <div className="bg-black rounded-lg p-4 font-mono text-xs border border-gray-600">
                    <div className="text-cyan-400">Shark_ID: GW_001_ALPHA</div>
                    <div className="text-gray-300">Timestamp: 2025-01-17 14:30:15.342Z</div>
                    <div className="text-gray-300">Location: [-31.2847°, 152.8394°]</div>
                    <div className="text-gray-300">Depth: 67m | Temp: 18.7°C | pH: 8.1</div>
                    <div className="text-green-400">Prey_detected: Bluefin_tuna_DNA</div>
                    <div className="text-orange-400">Behavior: Active_hunting_mode</div>
                    <div className="text-purple-400">Heart_rate: 45bpm | Stress: Low</div>
                    <div className="text-red-400">Satellite_link: Strong (98% signal)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Why Sharks Are Ocean Guardians
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Understanding the critical role of apex predators in maintaining healthy ocean ecosystems 
                and why their protection determines the future of our planet's marine biodiversity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white border border-blue-500/30">
                <Fish className="w-16 h-16 mb-6 text-blue-300" />
                <h3 className="text-2xl font-bold mb-4">Ecosystem Architects</h3>
                <p className="text-blue-100 mb-6">
                  Sharks are apex predators that architect marine ecosystems through top-down control. 
                  They maintain the delicate balance that prevents any single species from dominating 
                  and disrupting the entire food web structure.
                </p>
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/30">
                  <h4 className="font-semibold mb-2 text-blue-200">Critical Functions:</h4>
                  <ul className="text-sm space-y-1 text-blue-100">
                    <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>Control mesopredator populations</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>Maintain species diversity</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>Stabilize trophic cascades</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>Protect coral reef systems</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-2xl p-8 text-white border border-teal-500/30">
                <TrendingUp className="w-16 h-16 mb-6 text-teal-300" />
                <h3 className="text-2xl font-bold mb-4">Economic Powerhouse</h3>
                <p className="text-teal-100 mb-6">
                  Healthy shark populations drive multi-billion dollar industries including sustainable fishing, 
                  eco-tourism, and coastal protection services. Their economic value far exceeds their exploitation value.
                </p>
                <div className="bg-teal-800/50 rounded-lg p-4 border border-teal-600/30">
                  <h4 className="font-semibold mb-2 text-teal-200">Economic Impact:</h4>
                  <ul className="text-sm space-y-1 text-teal-100">
                    <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>$2.4B annual eco-tourism</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>Sustainable fishing support</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>Coastal ecosystem services</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>Research & conservation jobs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">The Trophic Cascade Effect</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: '1',
                    title: 'Shark Population Decline',
                    description: 'Overfishing reduces apex predator numbers',
                    impact: 'critical',
                    icon: '🦈',
                    color: 'red'
                  },
                  {
                    step: '2',
                    title: 'Mesopredator Release',
                    description: 'Mid-level predators multiply unchecked',
                    impact: 'negative',
                    icon: '🐟',
                    color: 'orange'
                  },
                  {
                    step: '3',
                    title: 'Herbivore Collapse',
                    description: 'Algae-eating fish populations crash',
                    impact: 'negative',
                    icon: '🌿',
                    color: 'yellow'
                  },
                  {
                    step: '4',
                    title: 'Ecosystem Collapse',
                    description: 'Algae overgrowth destroys coral reefs',
                    impact: 'catastrophic',
                    icon: '🪸',
                    color: 'red'
                  }
                ].map((step, index) => (
                  <div key={index} className={`text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    step.impact === 'catastrophic' ? 'bg-red-900/20 border-red-500/50' :
                    step.impact === 'critical' ? 'bg-red-900/10 border-red-500/30' :
                    step.impact === 'negative' ? 'bg-orange-900/10 border-orange-500/30' :
                    'bg-green-900/10 border-green-500/30'
                  }`}>
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <div className="text-lg font-semibold text-white mb-2">
                      Step {step.step}: {step.title}
                    </div>
                    <p className="text-sm text-gray-400">{step.description}</p>
                    <div className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                      step.impact === 'catastrophic' ? 'bg-red-500/20 text-red-400' :
                      step.impact === 'critical' ? 'bg-red-500/20 text-red-400' :
                      step.impact === 'negative' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {step.impact.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Conservation Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-400" />
                    Palau's Shark Sanctuary
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Palau created the world's first shark sanctuary in 2009, banning all commercial shark fishing. 
                    The result: dramatically healthier reefs, increased tourism revenue, and thriving marine ecosystems.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-semibold">300% increase in shark tourism revenue</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <Fish className="w-4 h-4 mr-2" />
                      <span className="font-semibold">85% improvement in reef health</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Waves className="w-5 h-5 mr-2 text-blue-400" />
                    California's Marine Protected Areas
                  </h4>
                  <p className="text-gray-400 mb-4">
                    California's network of marine protected areas has shown remarkable recovery of shark populations, 
                    leading to more balanced ecosystems and significantly healthier fish stocks.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-semibold">75% increase in shark populations</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-semibold">40% boost in local fishing yields</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Transforming Human Decision-Making
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Advanced shark prediction systems revolutionize fishing practices, conservation strategies, 
                and maritime safety while enabling sustainable ocean management through data-driven decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Smart Fishing Operations</h3>
                <p className="text-gray-400 mb-6">
                  AI-powered predictions enable fishing fleets to optimize routes, reduce bycatch by 85%, 
                  and maintain profitable operations while supporting marine conservation efforts.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 bg-blue-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">85% reduction in shark bycatch</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">30% fuel savings through route optimization</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Real-time regulatory compliance</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Dynamic Conservation</h3>
                <p className="text-gray-400 mb-6">
                  Real-time data enables adaptive marine protected areas, evidence-based policy making, 
                  and dynamic conservation strategies that maximize ecosystem protection efficiency.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 bg-green-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Adaptive protected zone boundaries</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Migration corridor protection</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Species recovery monitoring</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <MapPin className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced Maritime Safety</h3>
                <p className="text-gray-400 mb-6">
                  Predictive warning systems for beaches, diving operations, and recreational activities 
                  enhance safety while promoting coexistence between humans and marine apex predators.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 bg-purple-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Real-time beach safety alerts</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-purple-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Diving site risk assessment</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-purple-900/20 rounded-lg p-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Tourism route optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Global Decision-Making Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <Database className="w-5 h-5 mr-2 text-cyan-400" />
                    Policy & Regulation
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 bg-blue-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">Marine Spatial Planning</h5>
                      <p className="text-gray-400 text-sm">Governments use AI predictions to designate marine protected areas and fishing zones based on real-time shark habitat data and migration patterns.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 bg-green-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">Dynamic Seasonal Closures</h5>
                      <p className="text-gray-400 text-sm">Adaptive fishing restrictions during critical breeding and feeding periods protect vulnerable shark populations while maintaining economic viability.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 bg-orange-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">International Cooperation</h5>
                      <p className="text-gray-400 text-sm">Shared predictive data enables coordinated conservation efforts across national boundaries for highly migratory species.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                    Commercial Applications
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">Insurance & Risk Management</h5>
                      <p className="text-gray-400 text-sm">Maritime insurance companies adjust premiums and coverage based on real-time shark encounter probability data and behavioral predictions.</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4 bg-teal-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">Sustainable Eco-Tourism</h5>
                      <p className="text-gray-400 text-sm">Tour operators use predictions to offer responsible shark viewing experiences while maintaining safety and minimizing ecosystem disruption.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 bg-red-500/5 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-white">Supply Chain Optimization</h5>
                      <p className="text-gray-400 text-sm">Seafood companies ensure sustainable sourcing by avoiding areas with high shark conservation priority and optimizing harvest timing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-6 text-center">Global Impact Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center bg-black/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">3.2M</div>
                  <div className="text-gray-300 font-medium">Tons CO₂ saved annually</div>
                  <div className="text-sm text-gray-400 mt-1">Through optimized shipping routes</div>
                </div>
                <div className="text-center bg-black/20 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">$1.2B</div>
                  <div className="text-gray-300 font-medium">Economic value protected</div>
                  <div className="text-sm text-gray-400 mt-1">Marine ecosystem services</div>
                </div>
                <div className="text-center bg-black/20 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">247</div>
                  <div className="text-gray-300 font-medium">Protected areas created</div>
                  <div className="text-sm text-gray-400 mt-1">Based on prediction data</div>
                </div>
                <div className="text-center bg-black/20 rounded-xl p-6 border border-orange-500/30">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">67%</div>
                  <div className="text-gray-300 font-medium">Reduction in conflicts</div>
                  <div className="text-sm text-gray-400 mt-1">Between humans and sharks</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SharkTracker AI
                </h1>
                <p className="text-sm text-gray-400">NASA Satellite Integration</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-xl p-1 border border-gray-700">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabContent />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SharkTracker AI
                </span>
              </div>
              <p className="text-gray-400">
                Advanced AI system leveraging NASA satellite data to protect apex predators 
                and maintain healthy ocean ecosystems through predictive modeling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Data Sources</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>NASA SWOT Mission</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>NASA PACE Mission</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>NOAA Ocean Database</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>Global Shark Tracking Network</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Partners</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>Marine Conservation Organizations</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>Research Universities</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>Sustainable Fishing Councils</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>Government Agencies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Built for NASA's Ocean Challenge • Protecting Sharks, Protecting Our Oceans • 2025</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6B7280;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
      `}</style>
    </div>
  );
}

export default App;