'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react'

export default function PrivacyPolicy() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sections = [
    {
      icon: Eye,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Nama dan informasi kontak Anda",
        "Alamat email dan nomor telepon", 
        "Informasi perusahaan jika berlaku",
        "Data penggunaan website (cookies, analytics)",
        "Informasi yang Anda berikan secara sukarela"
      ]
    },
    {
      icon: Lock,
      title: "Cara Kami Menggunakan Informasi",
      content: [
        "Untuk menyediakan layanan digital creative",
        "Mengkomunikasikan proyek dan update",
        "Mem personalisasi pengalaman Anda",
        "Mengirim informasi relevan tentang layanan kami",
        "Memastikan keamanan dan kinerja platform"
      ]
    },
    {
      icon: Database,
      title: "Penyimpanan dan Keamanan Data",
      content: [
        "Data disimpan dengan enkripsi yang aman",
        "Akses terbatas untuk authorized personnel",
        "Backup data teratur untuk mencegah kehilangan",
        "Server berlokasi di Indonesia untuk kepatuhan PSE",
        "Monitoring keamanan 24/7"
      ]
    },
    {
      icon: UserCheck,
      title: "Hak Anda sebagai Pengguna",
      content: [
        "Hak untuk mengakses data pribadi Anda",
        "Hak untuk memperbaiki data yang tidak akurat",
        "Hak untuk menghapus data pribadi Anda",
        "Hak untuk menolak penggunaan data tertentu",
        "Hak untuk melaporkan pelanggaran privasi"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse ${isLoaded ? '' : 'opacity-0'}`} />
        <div className={`absolute bottom-20 left-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce ${isLoaded ? '' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 flex items-center p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <Button 
          variant="ghost" 
          className="mr-4 hover:bg-purple-100"
          onClick={() => window.location.href='/'}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
            <img src="/ketje-logo.png" alt="KETJE Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Privacy Policy</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <Card className="mb-8 bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kebijakan Privasi
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 leading-relaxed">
                Di PT KETJE CREATIVE DIGITAL, privasi Anda adalah prioritas utama kami. 
                Kami berkomitmen untuk melindungi data pribadi Anda dengan transparansi dan integritas.
              </p>
            </CardContent>
          </Card>

          {/* Informasi Perusahaan */}
          <Card className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Informasi Perusahaan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-700">
                <div>
                  <strong>Nama Pelaku Usaha:</strong> PT KETJE CREATIVE DIGITAL
                </div>
                <div>
                  <strong>Alamat:</strong> Jl. Cikini IV No.10 3A, Jakarta Pusat 10330
                </div>
                <div>
                  <strong>Telepon:</strong> 0838-2714-8952
                </div>
                <div>
                  <strong>Status:</strong> PMDN - Usaha Mikro
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sections */}
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card 
                key={index}
                className={`mb-6 bg-white/90 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-100 -translate-x-10'
                }`}
                style={{ transitionDelay: `${700 + index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}

          {/* Contact for Privacy */}
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Pertanyaan tentang Privasi?</h3>
              <p className="mb-6">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                jangan ragu untuk menghubungi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Email: privacy@ketje-creative.com
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Telepon: 0838-2714-8952
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}