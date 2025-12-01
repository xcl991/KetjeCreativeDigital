'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Palette, 
  Code, 
  Smartphone, 
  Camera, 
  Zap, 
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    { icon: Palette, title: 'UI/UX Design', color: 'bg-pink-500' },
    { icon: Code, title: 'Web Development', color: 'bg-blue-500' },
    { icon: Smartphone, title: 'Mobile Apps', color: 'bg-green-500' },
    { icon: Camera, title: 'Content Creation', color: 'bg-purple-500' }
  ]

  const funFacts = [
    '☕ 100+ kopi dikonsumsi setiap bulan',
    '🎨 50+ proyek kreatif selesai',
    '🚀 100% kepuasan klien',
    '💡 24/7 ide-ide brilian'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce ${isLoaded ? '' : 'opacity-0'}`} />
        <div className={`absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${isLoaded ? '' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce ${isLoaded ? '' : 'opacity-0'}`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 flex justify-between items-center p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
            <img src="/ketje-logo.png" alt="KETJE Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">KETJE</span>
        </div>
        <div className="hidden md:flex gap-6">
          <Button variant="ghost" className="hover:bg-purple-100">Beranda</Button>
          <Button variant="ghost" className="hover:bg-purple-100" onClick={() => window.location.href='/privacy'}>Privacy</Button>
          <Button variant="ghost" className="hover:bg-purple-100" onClick={() => window.location.href='/terms'}>Terms</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Hero */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-300">
              <img src="/ketje-logo.png" alt="KETJE Logo" className="w-28 h-28 object-contain" />
            </div>
          </div>
          
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
            <Zap className="w-4 h-4 mr-2" />
            Digital Creative Agency
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              KETJE CREATIVE
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-800">DIGITAL</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Wujudkan ide gila Anda menjadi digital yang luar biasa! 
            Kami tim kreatif yang siap membuat brand Anda meledak di dunia digital 💥
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
              <Rocket className="w-5 h-5 mr-2" />
              Mulai Proyek Keren
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
              <Coffee className="w-5 h-5 mr-2" />
              Yuk, Ngopi Dulu
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6 py-20">
        <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Layanan Keren Kami
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Dari desain yang memukau hingga kode yang magis</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className={`relative transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 ${
                  activeService === index ? 'scale-105 -rotate-2' : ''
                } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 ${activeService === index ? 'rotate-12 scale-110' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">Solusi digital yang bikin WOW!</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="relative z-10 px-6 py-20">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Fun Facts 🎉
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-gray-800">{fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-20">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami Yuk! 📞</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-sm opacity-90">Jl. Cikini IV No.10 3A, Jakarta Pusat</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-sm opacity-90">0838-2714-8952</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm opacity-90">hello@ketje-creative.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <img src="/ketje-logo.png" alt="KETJE Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xl font-bold">KETJE CREATIVE DIGITAL</span>
          </div>
          <p className="text-gray-400 mb-4">Membuat digital lebih berwarna sejak 2024</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>in Jakarta</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 PT KETJE CREATIVE DIGITAL. All rights reserved. | 
              <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300" onClick={() => window.location.href='/privacy'}>Privacy Policy</Button> | 
              <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300" onClick={() => window.location.href='/terms'}>Terms & Conditions</Button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}