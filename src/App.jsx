import React from 'react'
import { Train, Clock, Zap, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
        
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-lg">
                <Train className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold tracking-tight">LINXNET S11</span>
            </div>
            <div className="hidden md:flex space-x-8 animate-fade-in">
              <a href="#about" className="hover:text-gray-200 transition font-medium">About</a>
              <a href="#features" className="hover:text-gray-200 transition font-medium">Features</a>
              <a href="#route" className="hover:text-gray-200 transition font-medium">Route</a>
              <a href="#partnership" className="hover:text-gray-200 transition font-medium">Partnership</a>
            </div>
          </div>
        </nav>

        <div className="relative section-container text-center pb-24 pt-12">
          <div className="animate-slide-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full">
              <span className="text-sm font-semibold tracking-wider uppercase">Launching Spring 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
              The Future of<br />
              <span className="bg-white text-transparent bg-clip-text">Barrie Transit</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 max-w-4xl mx-auto font-light leading-relaxed">
              Fast, reliable rail service connecting Barrie South to Allandale in <span className="font-bold text-yellow-300">under 10 minutes</span>
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Low-cost rapid transit done right. No 20-year wait. No billion-dollar budget. Just smart, efficient service using proven technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#about" className="group bg-white text-linx-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-2xl">
                Discover S11 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#route" className="bg-white bg-opacity-20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 transition-all inline-flex items-center justify-center border-2 border-white border-opacity-40">
                View Routes
              </a>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">7min</div>
              <div className="text-sm md:text-base opacity-90">Journey Time</div>
            </div>
            <div className="text-center border-l border-r border-white border-opacity-30">
              <div className="text-4xl md:text-5xl font-black mb-2">2026</div>
              <div className="text-sm md:text-base opacity-90">Launch Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Proven Tech</div>
            </div>
          </div>
        </div>
      </header>

      {/* Train Image Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet the <span className="gradient-text">S11</span>
              </h2>
              <p className="text-xl text-gray-600">Efficient. Proven. Ready to serve Barrie.</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-linx-blue to-linx-green rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img 
                  src="/budd-rdc-s11.png" 
                  alt="LINXNET S11 Budd Rail Diesel Car" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-lg">
              Budd Rail Diesel Car with LINXNET S11 branding
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="bg-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why <span className="gradient-text">S11</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary approach to rapid transit that puts Barrie on the map
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg hover-lift border border-blue-100">
              <div className="bg-gradient-to-br from-linx-blue to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Under 10 minutes from Barrie South to Allandale. Our Budd RDC trains beat GO Train times through superior physics and efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg hover-lift border border-green-100">
              <div className="bg-gradient-to-br from-linx-green to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rapid Deployment</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Spring 2026 launch. No decades-long wait. No billion-dollar price tag. Smart use of existing infrastructure and proven technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg hover-lift border border-blue-100">
              <div className="bg-gradient-to-br from-linx-blue to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">True Partnership</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Collaborative approach with Barrie Transit and local stakeholders. We're partners building better transit together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-linx-blue bg-opacity-10 rounded-full mb-6">
                  <span className="text-linx-blue font-semibold text-sm uppercase tracking-wider">The Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  A Game-Changer for <span className="gradient-text">Barrie</span>
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  The LINXNET S11 isn't just another transit proposal. It's a revolutionary approach to rapid transit that proves you don't need decades or billions to transform a city's mobility.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-linx-blue">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Smart Infrastructure</h3>
                  <p className="text-gray-600">
                    Leveraging existing rail corridors with efficient Budd RDC trains that are lighter and faster than conventional GO Trains.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-linx-green">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Physics-Based Advantage</h3>
                  <p className="text-gray-600">
                    Our trains beat GO's 7.5-minute journey time through superior acceleration and agility—it's simple physics.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-linx-blue">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Complete Network</h3>
                  <p className="text-gray-600">
                    Integrated bus connections create a comprehensive transit system that serves real community needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route & Integration */}
      <section id="route" className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Seamless <span className="gradient-text">Connections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An integrated network designed to move Barrie forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative bg-white p-10 rounded-2xl shadow-xl hover-lift overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-linx-blue to-blue-600 opacity-10 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-linx-blue to-blue-600 p-3 rounded-xl mr-4 shadow-lg">
                    <Train className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">S11 Rail Service</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Express rail connection between Barrie South and Allandale stations using efficient Budd RDC trains.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-linx-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Under 15-minute journey time</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-linx-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Efficient, proven rolling stock</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-linx-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Existing rail infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-linx-green to-green-600 p-10 rounded-2xl shadow-xl hover-lift text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-xl mr-4 border-2 border-white border-opacity-40">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Allandale-Downtown</h3>
                </div>
                <p className="text-white text-opacity-95 text-lg mb-6 leading-relaxed">
                  Essential connecting service linking the S11 rail terminal at Allandale to Downtown Barrie, completing the rapid transit corridor.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white text-opacity-95 text-lg">Direct Downtown Barrie Terminal connection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white text-opacity-95 text-lg">Lakeshore Drive & Bradford Street routes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white text-opacity-95 text-lg">Future tram conversion potential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-linx-blue to-linx-green p-3 rounded-xl mr-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Local Feeder Network</h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Comprehensive local bus services connect neighborhoods to S11 rail stations, creating a complete transit ecosystem.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-linx-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Painswick area connections to Barrie South</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-linx-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Park Place routes via multiple corridors</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-linx-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Downtown-Allandale local services</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-linx-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Innisdale and Bayview circulation routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Built on <span className="gradient-text">Partnership</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Collaboration, not competition. Working together for better transit.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-linx-blue via-blue-600 to-linx-green p-12 rounded-3xl shadow-2xl mb-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
              <div className="relative text-white">
                <div className="text-6xl mb-6 opacity-50">"</div>
                <p className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  We see ourselves as a partner, not a competitor.
                </p>
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-30">
                  <p className="text-lg md:text-xl mb-6 leading-relaxed">
                    We understand that Barrie Transit faces capacity constraints. Through SADC's incubator bus company, we can deliver the service people want and need while supporting our rail proposal.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    This rail project is a true partnership. We're not asking the County and City to shoulder all costs alone. We contribute labor and service through our bus operations, delivering value in lieu of cash.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-linx-blue to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="font-black text-2xl mb-3 text-gray-900">Collaborative</h3>
                <p className="text-gray-600 text-lg">Working hand-in-hand with existing transit providers</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-linx-green to-green-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="font-black text-2xl mb-3 text-gray-900">Cost-Effective</h3>
                <p className="text-gray-600 text-lg">Maximizing existing assets and infrastructure</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-linx-blue to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="font-black text-2xl mb-3 text-gray-900">Reliable</h3>
                <p className="text-gray-600 text-lg">Proven technology, rapid deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-linx-blue to-linx-green opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-linx-blue opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linx-green opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full mb-8">
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-white">
              Ready to <span className="gradient-text bg-gradient-to-r from-yellow-300 to-yellow-500">Launch</span>
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white border-opacity-20">
              <div className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text">
                Spring 2026
              </div>
              <p className="text-2xl md:text-3xl text-white mb-8 font-light">
                Planned Service Launch
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-linx-blue to-linx-green mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                This is low-cost rapid transit done right. No 20-year wait. No billion-dollar budget. Just reliable service using proven technology and existing infrastructure.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
                <div className="text-4xl font-black mb-2 text-yellow-300">Fast</div>
                <p className="text-gray-300">Months, not decades</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
                <div className="text-4xl font-black mb-2 text-yellow-300">Smart</div>
                <p className="text-gray-300">Proven technology</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
                <div className="text-4xl font-black mb-2 text-yellow-300">Affordable</div>
                <p className="text-gray-300">Cost-effective solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t-4 border-linx-blue">
        <div className="section-container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-linx-blue to-linx-green p-3 rounded-xl">
                <Train className="w-8 h-8" />
              </div>
              <span className="text-3xl font-black tracking-tight">LINXNET S11</span>
            </div>
            <p className="text-xl text-gray-300 mb-6 font-light">
              Fast, Reliable Rail Service for Barrie
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-linx-blue to-linx-green mx-auto mb-6 rounded-full"></div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              A SADC Initiative - Connecting Communities Through Smart Transit
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
