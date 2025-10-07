import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Home, Instagram, Twitter, Sparkles } from 'lucide-react'
import Model3DViewer from './components/Model3DViewer.jsx'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentText, setCurrentText] = useState(0)
  
  const rotatingTexts = ['Maker Space', 'Creator Space', 'Hacker House', 'Revolution']

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [rotatingTexts.length])

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
              <div className="flex items-center justify-center mb-4">
                <img src="/logo-animation.gif" alt="DG Logo" className="w-48 h-24 transition-all duration-300 hover:scale-110" />
              </div>
              
              {/* House Text */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-white transition-all duration-300 group-hover:neon-glow">
                <span className="animate-rainbow-outline-1">H</span>
                <span className="animate-rainbow-outline-2">o</span>
                <span className="animate-rainbow-outline-3">u</span>
                <span className="animate-rainbow-outline-4">s</span>
                <span className="animate-rainbow-outline-5">e</span>
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
            <div>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-white/20 hover:!bg-white hover:!text-black px-8 py-7 min-h-14 text-lg font-light tracking-wide group relative rainbow-border-animated"
              >
                <a href="https://launchmynft.io/collections/Fh9CjFZ3gvFfbNVLViYFxxPNM52XWbYgEeuLp2qoVC2T/nF1cuaIMhOZ7TH6nt3WD" target="_blank" rel="noopener noreferrer">
                  <div className="relative z-10">
                    MINT
                    <br />
                    <span className="text-sm opacity-80">PRE-SALE KEY</span>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          {/* 3D Model Viewer */}
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="relative group/house w-[400px] h-[400px]">
                <Model3DViewer 
                  modelUrl="/Dehouse.glb" 
                  className="transition-all duration-500 group-hover/house:scale-105"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg opacity-0 group-hover/house:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Join the Maker Space Section */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">
              Join the <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-normal animate-pulse">{rotatingTexts[currentText].toLowerCase()}</span>
            </h2>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-8 py-4 text-sm text-white/60 space-y-4 md:space-y-0">
          <div className="transition-colors duration-300 hover:text-white/80">WAGU LABS © COPYRIGHT 2025</div>
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

