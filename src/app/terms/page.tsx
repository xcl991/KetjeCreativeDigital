'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Clock, DollarSign, Users, Shield } from 'lucide-react'

export default function TermsAndConditions() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sections = [
    {
      icon: CheckCircle,
      title: "Layanan Kami",
      content: [
        "UI/UX Design dan desain grafis",
        "Pengembangan website dan aplikasi mobile",
        "Content creation dan digital marketing",
        "Konsultasi digital strategy",
        "Maintenance dan support teknis"
      ]
    },
    {
      icon: DollarSign,
      title: "Pembayaran dan Harga",
      content: [
        "Harga yang tercantum dapat berubah sewaktu-waktu",
        "Pembayaran dilakukan sesuai kesepakatan kontrak",
        "DP minimal 50% untuk memulai proyek",
        "Pelunasan sebelum handover final",
        "Biaya tambahan untuk revisi di luar kesepakatan"
      ]
    },
    {
      icon: Clock,
      title: "Timeline dan Deadline",
      content: [
        "Timeline proyek ditentukan bersama di awal",
        "Keterlambatan karena client dapat menunda deadline",
        "Force majeure (bencana, dll) dapat menunda proyek",
        "Komunikasi regular untuk update progress",
        "Deadline dapat disesuaikan dengan perubahan scope"
      ]
    },
    {
      icon: Users,
      title: "Hak dan Kewajiban",
      content: [
        "Client bertanggung jawab atas konten yang disediakan",
        "Kami memiliki hak atas desain yang belum dibayar lunas",
        "Client mendapatkan hak penuh setelah pelunasan",
        "Kami berhak menampilkan portfolio karya",
        "Kerahasiaan informasi client dijaga ketat"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Pembatalan dan Refund",
      content: [
        "DP tidak dapat dikembalikan jika pembatalan dari client",
        "Pembatalan dari kami: DP dikembalikan 100%",
        "Refund untuk kesalahan kami sepenuhnya",
        "Perubahan besar di tengah proyek dapat dikenakan biaya",
        "Proses refund maksimal 14 hari kerja"
      ]
    },
    {
      icon: Shield,
      title: "Keamanan dan Jaminan",
      content: [
        "Hasil kerja bebas plagiarism",
        "Keamanan data client terjamin",
        "Garansi untuk bug teknis sesuai kesepakatan",
        "Backup data proyek secara berkala",
        "Asuransi untuk proyek-proyek besar"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse ${isLoaded ? '' : 'opacity-0'}`} />
        <div className={`absolute bottom-20 right-20 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce ${isLoaded ? '' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 flex items-center p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <Button 
          variant="ghost" 
          className="mr-4 hover:bg-green-100"
          onClick={() => window.location.href='/'}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
            <img src="/ketje-logo.png" alt="KETJE Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Terms & Conditions</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <Card className="mb-8 bg-white/90 backdrop-blur-sm border-green-200">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Syarat & Ketentuan
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 leading-relaxed">
                Syarat dan ketentuan ini mengatur penggunaan layanan PT KETJE CREATIVE DIGITAL. 
                Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
              </p>
            </CardContent>
          </Card>

          {/* Informasi Perusahaan */}
          <Card className="mb-8 bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Informasi Perusahaan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700">
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

          {/* Important Notice */}
          <Card className="mb-8 bg-yellow-50 border-2 border-yellow-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">Penting Diperhatikan! ⚠️</h4>
                  <p className="text-yellow-700">
                    Syarat dan ketentuan ini merupakan kesepakatan yang mengikat secara hukum antara 
                    PT KETJE CREATIVE DIGITAL dan klien. Pastikan Anda membaca dan memahami 
                    semua ketentuan sebelum menggunakan layanan kami.
                  </p>
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
                className={`mb-6 bg-white/90 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-100 -translate-x-10'
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}

          {/* Agreement Section */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Setuju dengan Syarat & Ketentuan?</h3>
              <p className="mb-6">
                Dengan melanjutkan penggunaan layanan kami, Anda menyatakan telah 
                membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href='/'}>
                  Saya Setuju
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Hubungi Kami untuk Pertanyaan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}