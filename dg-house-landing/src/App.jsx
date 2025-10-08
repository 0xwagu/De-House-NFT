import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Home, Instagram, Twitter, Sparkles } from 'lucide-react'
import Model3DViewer from './components/Model3DViewer.jsx'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentText, setCurrentText] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const triggerButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const carouselImages = [
    { src: '/doc1.png', alt: 'Documentation image 1' },
    { src: '/doc2.png', alt: 'Documentation image 2' },
    { src: '/doc3.png', alt: 'Documentation image 3' },
  ]
  
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

  // Keyboard controls for modal and focus management
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isModalOpen) return
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsModalOpen(false)
        // restore focus to trigger
        triggerButtonRef.current?.focus()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentSlide((s) => (s + 1) % carouselImages.length)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide((s) => (s - 1 + carouselImages.length) % carouselImages.length)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', onKeyDown)
      // Move focus to close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 0)
    }
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isModalOpen, carouselImages.length])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto relative">
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
      <div className="relative min-h-screen flex flex-col items-center justify-start md:justify-center px-4 z-10">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          <div className="mb-20 relative z-20">
            <div>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-white/20 hover:!bg-white hover:!text-black px-8 py-7 min-h-14 text-lg font-light tracking-wide group relative rainbow-border-animated pointer-events-auto cursor-pointer"
                style={{ touchAction: 'manipulation' }}
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
              <div className="relative group/house w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
                <Model3DViewer 
                  modelUrl="/Dehouse.glb" 
                  className="transition-all duration-500 group-hover/house:scale-105"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg opacity-0 group-hover/house:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
              </div>
            </div>
            {/* Help Button below canvas */}
            <div className="mt-6 flex justify-center relative z-20">
              <Button
                ref={triggerButtonRef}
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                size="icon"
                aria-haspopup="dialog"
                aria-controls="helpCarouselModal"
                aria-expanded={isModalOpen}
                className="bg-transparent text-white border-white/30 hover:!bg-white hover:!text-black w-10 h-10 rounded-full pointer-events-auto cursor-pointer"
                style={{ touchAction: 'manipulation' }}
              >
                ?
              </Button>
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
        <div className="md:absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-8 py-4 text-sm text-white/60 space-y-4 md:space-y-0 mt-8 md:mt-0">
          <div className="transition-colors duration-300 hover:text-white/80">WAGU LABS © COPYRIGHT 2025</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-all duration-300 hover:scale-110 group">
              <Instagram size={20} className="group-hover:text-pink-400" />
            </a>
            <a href="https://x.com/WaguLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 group">
              <Twitter size={20} className="group-hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Modal: Image Carousel */}
        {isModalOpen && (
          <div
            id="helpCarouselModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="helpCarouselTitle"
            aria-describedby="helpCarouselDesc"
            className="fixed inset-0 z-30 flex items-center justify-center"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => {
                setIsModalOpen(false)
                triggerButtonRef.current?.focus()
              }}
            />
            {/* Dialog */}
            <div className="relative z-40 w-[90vw] max-w-md sm:max-w-lg md:max-w-2xl bg-neutral-900 border border-white/20 rounded-lg shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h3 id="helpCarouselTitle" className="text-white text-base sm:text-lg">Overview</h3>
                <button
                  ref={closeButtonRef}
                  onClick={() => {
                    setIsModalOpen(false)
                    triggerButtonRef.current?.focus()
                  }}
                  className="text-white/80 hover:text-white focus:outline-none"
                  aria-label="Close help dialog"
                >
                  ✕
                </button>
              </div>
              <p id="helpCarouselDesc" className="sr-only">Image carousel showcasing DG House graphics. Use Next to cycle.</p>
              <div className="relative">
                {/* Image area with smooth transitions */}
                <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center bg-black">
                  <img
                    key={currentSlide}
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    className="max-h-full max-w-full object-contain transition-opacity duration-500 ease-in-out opacity-100"
                  />
                </div>
                {/* Controls */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                  <div className="text-white/60 text-xs sm:text-sm">Image {currentSlide + 1} of {carouselImages.length}</div>
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => setCurrentSlide((s) => (s - 1 + carouselImages.length) % carouselImages.length)}
                      variant="outline"
                      size="sm"
                      aria-label="Previous image"
                      className="bg-transparent text-white border-white/30 hover:!bg-white hover:!text-black"
                    >
                      Prev
                    </Button>
                    <Button
                      onClick={() => setCurrentSlide((s) => (s + 1) % carouselImages.length)}
                      variant="outline"
                      size="sm"
                      aria-label="Next image"
                      className="bg-transparent text-white border-white/30 hover:!bg-white hover:!text-black"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

