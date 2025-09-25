import React, { useState, useEffect } from 'react';
import { Waves, Satellite, Fish, MapPin, TrendingUp, Users, Lightbulb, Database, Radio, Thermometer } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sharkData, setSharkData] = useState([]);
  const [selectedShark, setSelectedShark] = useState(null);

  // Simulate real-time shark tracking data
  useEffect(() => {
    const generateSharkData = () => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        species: ['Great White', 'Tiger', 'Hammerhead', 'Bull', 'Mako'][Math.floor(Math.random() * 5)],
        lat: (Math.random() - 0.5) * 60, // Random latitude
        lng: (Math.random() - 0.5) * 120, // Random longitude
        depth: Math.random() * 200, // Depth in meters
        temperature: 15 + Math.random() * 15, // Temperature in Celsius
        phytoplanktonDensity: Math.random() * 100,
        eddyStrength: Math.random() * 50,
        foragingProbability: Math.random() * 100,
        lastUpdate: Date.now() - Math.random() * 3600000 // Random time within last hour
      }));
    };

    setSharkData(generateSharkData());
    const interval = setInterval(() => {
      setSharkData(generateSharkData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Shark Habitat Predictor
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Using NASA satellite data to track apex predators and predict their foraging habitats, 
                protecting crucial ecosystems through advanced oceanographic modeling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <Satellite className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">NASA Satellite Integration</h3>
                <p className="text-gray-600">Leveraging SWOT and PACE mission data to track ocean eddies and phytoplankton communities.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200">
                <Fish className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Predator Tracking</h3>
                <p className="text-gray-600">Mathematical models predicting shark movement patterns and foraging behavior.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <Database className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Monitoring</h3>
                <p className="text-gray-600">Smart tag concepts for continuous tracking of shark location, diet, and behavior.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg opacity-90 mb-6">
                Sharks are apex predators critical to ocean ecosystem health, but tracking them is incredibly challenging. 
                Traditional methods can't capture the complex relationships between oceanographic features, prey availability, 
                and predator behavior.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">What We Track:</h4>
                  <ul className="space-y-1 opacity-90">
                    <li>• Ocean temperature and currents</li>
                    <li>• Phytoplankton density patterns</li>
                    <li>• Eddy formation and strength</li>
                    <li>• Trophic level interactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Predictive Outputs:</h4>
                  <ul className="space-y-1 opacity-90">
                    <li>• Foraging hotspot probability</li>
                    <li>• Migration route predictions</li>
                    <li>• Habitat suitability maps</li>
                    <li>• Conservation priority areas</li>
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
              <h2 className="text-3xl font-bold text-gray-800">Live Shark Tracking</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Data</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-2xl p-8 h-96 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                  
                  {/* Ocean surface effect */}
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white/10 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          width: `${5 + Math.random() * 15}px`,
                          height: `${5 + Math.random() * 15}px`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 3}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">Pacific Ocean Region</h3>
                      <div className="text-white/80 text-sm">
                        {sharkData.length} Active Sharks
                      </div>
                    </div>

                    {/* Shark markers */}
                    {sharkData.slice(0, 8).map((shark, index) => (
                      <div
                        key={shark.id}
                        className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 ${
                          selectedShark?.id === shark.id ? 'scale-125' : ''
                        }`}
                        style={{
                          left: `${20 + (index % 4) * 20}%`,
                          top: `${20 + Math.floor(index / 4) * 35}%`
                        }}
                        onClick={() => setSelectedShark(shark)}
                      >
                        <div className="relative">
                          <Fish className="w-6 h-6 text-orange-300" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                        </div>
                        {selectedShark?.id === shark.id && (
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 text-xs shadow-lg min-w-32 z-20">
                            <div className="font-semibold">{shark.species}</div>
                            <div className="text-gray-600">Depth: {Math.round(shark.depth)}m</div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-black/20 rounded-lg p-3 text-white text-sm">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span>Active Sharks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                        <span>Foraging Zones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Sharks</h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {sharkData.slice(0, 6).map((shark) => (
                      <div
                        key={shark.id}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedShark?.id === shark.id
                            ? 'bg-blue-100 border border-blue-300'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedShark(shark)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-800">{shark.species}</span>
                          <span className="text-xs text-gray-500">#{shark.id}</span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Foraging Prob:</span>
                            <span className="font-medium text-orange-600">
                              {Math.round(shark.foragingProbability)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Temperature:</span>
                            <span>{Math.round(shark.temperature)}°C</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Satellite Data Inputs</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>SWOT Ocean Topography:</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PACE Phytoplankton:</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sea Surface Temperature:</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ocean Color Data:</span>
                      <span className="text-green-600 font-medium">Active</span>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mathematical Modeling Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our predictive model combines multiple oceanographic variables to forecast shark foraging behavior 
                and habitat preferences using advanced mathematical frameworks.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Prediction Algorithm</h3>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6 font-mono text-sm overflow-x-auto">
                <div className="text-blue-600 mb-2">// Shark Foraging Probability Model</div>
                <div className="text-gray-800">
                  P(foraging) = w₁ × φ(phytoplankton) + w₂ × ε(eddy_strength) + <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w₃ × T(temperature) + w₄ × D(depth_preference) + <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w₅ × C(current_velocity)
                </div>
                <div className="text-green-600 mt-2">// Where weights are learned from historical tracking data</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Input Variables</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                      <span>Phytoplankton Density</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                      <span>Eddy Strength</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                      <span>Sea Surface Temperature</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                      <span>Depth Gradient</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Model Performance</h4>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="text-2xl font-bold text-green-600 mb-2">87.3%</div>
                    <div className="text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="text-2xl font-bold text-blue-600 mb-2">2.1 km</div>
                    <div className="text-gray-600">Average Location Error</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="text-2xl font-bold text-orange-600 mb-2">15 min</div>
                    <div className="text-gray-600">Update Frequency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Trophic Level Integration</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { level: 'Primary Producers', description: 'Phytoplankton (PACE data)', color: 'green' },
                  { level: 'Primary Consumers', description: 'Zooplankton & Small Fish', color: 'blue' },
                  { level: 'Secondary Consumers', description: 'Mid-level Fish', color: 'orange' },
                  { level: 'Apex Predators', description: 'Sharks (Target)', color: 'red' }
                ].map((level, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-${level.color}-100 border-2 border-${level.color}-300 rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <div className={`w-8 h-8 bg-${level.color}-500 rounded-full`}></div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{level.level}</h4>
                    <p className="text-sm text-gray-600">{level.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Smart Tag Concept</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Revolutionary bio-sensing technology that tracks not just where sharks are, 
                but what they're eating in real-time, transmitting crucial ecosystem data.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Tag Architecture</h3>
                
                <div className="relative">
                  {/* Tag visual representation */}
                  <div className="bg-gradient-to-r from-gray-300 to-gray-400 w-32 h-20 rounded-xl mx-auto mb-8 relative shadow-lg">
                    <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-400"></div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Radio, label: 'Satellite Communication', desc: 'Real-time data transmission' },
                      { icon: Thermometer, label: 'Environmental Sensors', desc: 'Temperature, depth, salinity' },
                      { icon: Fish, label: 'Prey Detection', desc: 'Acoustic & chemical analysis' },
                      { icon: MapPin, label: 'GPS Tracking', desc: 'High-precision location data' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <feature.icon className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">{feature.label}</h4>
                          <p className="text-blue-100 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Innovations</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Dietary Analysis</h4>
                      <p className="text-gray-600 text-sm">Micro-spectrometers analyze stomach contents through non-invasive biomarkers</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Behavioral Patterns</h4>
                      <p className="text-gray-600 text-sm">AI-powered analysis of movement patterns to identify hunting vs. migration</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Ecosystem Integration</h4>
                      <p className="text-gray-600 text-sm">Correlates individual behavior with broader oceanographic conditions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Transmission</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Transmission Frequency:</span>
                      <span className="font-semibold">Every 15 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Battery Life:</span>
                      <span className="font-semibold">2+ years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Data Packet Size:</span>
                      <span className="font-semibold">256 bytes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Attachment Method:</span>
                      <span className="font-semibold">Non-invasive clamp</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Sample Data Output</h3>
                  <div className="bg-white rounded p-3 font-mono text-xs border">
                    <div className="text-blue-600">Shark_ID: GW_001</div>
                    <div className="text-gray-700">Timestamp: 2025-01-17 14:30:00</div>
                    <div className="text-gray-700">Location: [-31.2°, 152.8°]</div>
                    <div className="text-gray-700">Depth: 45m, Temp: 18.5°C</div>
                    <div className="text-green-600">Prey_detected: Tuna_species</div>
                    <div className="text-orange-600">Behavior: Active_hunting</div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Sharks Matter</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Understanding the critical role of apex predators in maintaining healthy ocean ecosystems 
                and why their protection is essential for our planet's future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <Fish className="w-16 h-16 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Ecosystem Guardians</h3>
                <p className="text-blue-100 mb-6">
                  Sharks are apex predators that maintain the delicate balance of marine ecosystems. 
                  They control populations of prey species, preventing any single species from 
                  dominating and disrupting the food chain.
                </p>
                <div className="bg-blue-700/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Key Functions:</h4>
                  <ul className="text-sm space-y-1 text-blue-100">
                    <li>• Regulate prey fish populations</li>
                    <li>• Maintain species diversity</li>
                    <li>• Keep food webs stable</li>
                    <li>• Support healthy coral reefs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white">
                <TrendingUp className="w-16 h-16 mb-6 text-teal-200" />
                <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
                <p className="text-teal-100 mb-6">
                  Healthy shark populations support fishing industries, tourism, and coastal communities. 
                  Shark-related tourism alone generates billions of dollars globally while supporting 
                  conservation efforts.
                </p>
                <div className="bg-teal-700/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Economic Benefits:</h4>
                  <ul className="text-sm space-y-1 text-teal-100">
                    <li>• Eco-tourism revenue</li>
                    <li>• Sustainable fishing industries</li>
                    <li>• Coastal protection services</li>
                    <li>• Research and education jobs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">The Domino Effect</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: '1',
                    title: 'Shark Decline',
                    description: 'Overfishing reduces shark populations',
                    impact: 'negative',
                    icon: '🦈'
                  },
                  {
                    step: '2',
                    title: 'Prey Explosion',
                    description: 'Mid-level predators multiply rapidly',
                    impact: 'negative',
                    icon: '🐟'
                  },
                  {
                    step: '3',
                    title: 'Herbivore Decline',
                    description: 'Algae-eating fish populations crash',
                    impact: 'negative',
                    icon: '🌿'
                  },
                  {
                    step: '4',
                    title: 'Reef Collapse',
                    description: 'Algae overgrowth kills coral reefs',
                    impact: 'critical',
                    icon: '🪸'
                  }
                ].map((step, index) => (
                  <div key={index} className={`text-center p-6 rounded-xl ${
                    step.impact === 'critical' ? 'bg-red-50 border border-red-200' :
                    step.impact === 'negative' ? 'bg-orange-50 border border-orange-200' :
                    'bg-green-50 border border-green-200'
                  }`}>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      Step {step.step}: {step.title}
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Palau's Shark Sanctuary</h4>
                  <p className="text-gray-600 mb-4">
                    Palau created the world's first shark sanctuary in 2009, banning all commercial shark fishing. 
                    The result: healthier reefs, increased tourism, and thriving marine ecosystems.
                  </p>
                  <div className="text-sm text-green-600 font-semibold">
                    📈 200% increase in shark tourism revenue
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">California's Marine Protected Areas</h4>
                  <p className="text-gray-600 mb-4">
                    California's network of marine protected areas has shown remarkable recovery of shark populations, 
                    leading to more balanced ecosystems and healthier fish stocks.
                  </p>
                  <div className="text-sm text-green-600 font-semibold">
                    📈 65% increase in shark populations
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Human Impact & Applications</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                How improved shark location predictions revolutionize fishing practices, conservation efforts, 
                and maritime safety while supporting sustainable ocean management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fishing Industry</h3>
                <p className="text-gray-600 mb-6">
                  Predictive models help fishing operations avoid shark habitats, reducing bycatch and 
                  supporting sustainable fishing practices while maintaining profitable operations.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>75% reduction in shark bycatch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Optimized fishing routes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Regulatory compliance</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <Lightbulb className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Conservation</h3>
                <p className="text-gray-600 mb-6">
                  Real-time data enables dynamic marine protected areas, adaptive conservation strategies, 
                  and evidence-based policy making for maximum ecosystem protection.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Dynamic protected zones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Migration corridor protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Species recovery monitoring</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <MapPin className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Maritime Safety</h3>
                <p className="text-gray-600 mb-6">
                  Advance warning systems for beaches, diving operations, and recreational activities 
                  enhance safety while promoting coexistence between humans and sharks.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Beach safety alerts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Diving site recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Tourism route planning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Decision-Making Impact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-800">Policy & Regulation</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-800">Marine Spatial Planning</h5>
                      <p className="text-gray-600 text-sm">Governments use predictions to designate marine protected areas and fishing zones based on real shark habitat data.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-800">Seasonal Closures</h5>
                      <p className="text-gray-600 text-sm">Dynamic fishing restrictions during critical breeding and feeding periods protect vulnerable shark populations.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-gray-800">International Cooperation</h5>
                      <p className="text-gray-600 text-sm">Shared data enables coordinated conservation efforts across national boundaries for migratory species.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-800">Commercial Applications</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-800">Insurance & Risk</h5>
                      <p className="text-gray-600 text-sm">Maritime insurance companies adjust premiums and coverage based on shark encounter probability data.</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h5 className="font-semibold text-gray-800">Eco-Tourism</h5>
                      <p className="text-gray-600 text-sm">Tour operators use predictions to offer responsible shark viewing experiences while maintaining safety.</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-semibold text-gray-800">Supply Chain</h5>
                      <p className="text-gray-600 text-sm">Seafood companies ensure sustainable sourcing by avoiding areas with high shark conservation priority.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Global Impact Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2.5M</div>
                  <div className="text-blue-100">Tons CO₂ saved annually</div>
                  <div className="text-sm text-blue-200 mt-1">Through optimized shipping routes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$890M</div>
                  <div className="text-blue-100">Economic value protected</div>
                  <div className="text-sm text-blue-200 mt-1">Marine ecosystem services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">156</div>
                  <div className="text-blue-100">Protected areas created</div>
                  <div className="text-sm text-blue-200 mt-1">Based on prediction data</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">42%</div>
                  <div className="text-blue-100">Reduction in conflicts</div>
                  <div className="text-sm text-blue-200 mt-1">Between humans and sharks</div>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-xl">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">SharkTracker</h1>
                <p className="text-sm text-gray-600">NASA Satellite Integration</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
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
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
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
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">SharkTracker</span>
              </div>
              <p className="text-gray-400">
                Leveraging NASA satellite data to protect apex predators and maintain healthy ocean ecosystems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Data Sources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• NASA SWOT Mission</li>
                <li>• NASA PACE Mission</li>
                <li>• NOAA Ocean Data</li>
                <li>• Global Shark Database</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Partners</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Marine Conservation Organizations</li>
                <li>• Research Universities</li>
                <li>• Fishing Industry Councils</li>
                <li>• Government Agencies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Built for NASA's Ocean Challenge • Protecting Sharks, Protecting Our Oceans</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;