import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Home, Instagram, Twitter, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Interactive cursor glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Main Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-pulse animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg opacity-20 animate-pulse animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-20 animate-pulse animate-float delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg opacity-20 animate-pulse animate-float delay-3000"></div>
        </div>

        {/* Main Content */}
        <div className={`relative z-10 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo Section */}
          <div className="mb-16">
            <div className="relative inline-block group">
              {/* DG Logo */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                {/* D Block */}
                <div className="relative group/d">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/d:scale-110 group-hover/d:rotate-3 animate-glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 opacity-80 animate-color-shift"></div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-pink-500 rounded-sm transition-all duration-300 group-hover/d:bg-yellow-400"></div>
                    <span className="relative z-10 text-black font-bold text-xl transition-all duration-300 group-hover/d:text-white">d</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-sm transition-all duration-300 group-hover/d:bg-cyan-400 group-hover/d:scale-125"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-sm transition-all duration-300 group-hover/d:bg-pink-400 group-hover/d:scale-125"></div>
                </div>
                
                {/* G Block */}
                <div className="relative group/g">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/g:scale-110 group-hover/g:-rotate-3 animate-glow delay-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 opacity-80 animate-color-shift delay-1000"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-sm transition-all duration-300 group-hover/g:bg-blue-400"></div>
                    <span className="relative z-10 text-black font-bold text-xl transition-all duration-300 group-hover/g:text-white">g</span>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-sm transition-all duration-300 group-hover/g:bg-purple-400 group-hover/g:scale-125"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-400 rounded-sm transition-all duration-300 group-hover/g:bg-green-400 group-hover/g:scale-125"></div>
                </div>
              </div>
              
              {/* House Text */}
              <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white transition-all duration-300 group-hover:neon-glow">
                house
              </h1>
              
              {/* Sparkle effects */}
              <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Pre-sale Button */}
          <div className="mb-20">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 px-8 py-6 text-lg font-light tracking-wide group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                PRE-SALE
                <br />
                <span className="text-sm opacity-80">COMING SOON</span>
              </div>
            </Button>
          </div>

          {/* Join the Maker Space Section */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">
              Join the <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-normal animate-pulse">maker space</span>
            </h2>
            
            {/* House Icon with DG */}
            <div className="flex justify-center">
              <div className="relative group/house">
                {/* House Structure */}
                <div className="w-32 h-32 relative transition-all duration-500 group-hover/house:scale-110 animate-float">
                  {/* Chimney */}
                  <div className="absolute top-0 right-6 w-4 h-8 bg-white rounded-t-lg transition-all duration-300 group-hover/house:bg-gray-200">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-0 group-hover/house:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 right-5 w-6 h-4 bg-white rounded-full transition-all duration-300 group-hover/house:bg-gray-200"></div>
                  
                  {/* Roof */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-b-12 border-transparent border-b-white transition-all duration-300"></div>
                  
                  {/* Colorful Roof Overlay */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-7 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 clip-triangle animate-color-shift"></div>
                  
                  {/* House Body */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-white rounded-b-lg transition-all duration-300 group-hover/house:bg-gray-50">
                    {/* DG Text */}
                    <div className="flex items-center justify-center h-full">
                      <span className="text-black font-bold text-2xl transition-all duration-300 group-hover/house:scale-110 group-hover/house:text-purple-600">Dg</span>
                    </div>
                    
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gray-800 rounded-t-lg opacity-0 group-hover/house:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg opacity-0 group-hover/house:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-8 text-sm text-white/60 space-y-4 md:space-y-0">
          <div className="transition-colors duration-300 hover:text-white/80">WASH LABS © COPYRIGHT 2024</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110 group">
              <Instagram size={20} className="group-hover:text-pink-400" />
            </a>
            {/*
            <a href="https://x.com/WaguLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 group">
              <Twitter size={20} className="group-hover:text-blue-400" />
            </a>
            */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

