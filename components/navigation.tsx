"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookOpen, Star, Trophy, Globe, LogOut, Home, ArrowLeft } from "lucide-react"

interface NavigationProps {
  showBackButton?: boolean
  backUrl?: string
  backLabel?: string
  title?: string
  subtitle?: string
}

export function Navigation({ showBackButton = false, backUrl, backLabel, title, subtitle }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const email = localStorage.getItem("userEmail")
    const language = localStorage.getItem("userLanguage")

    if (email) setUserEmail(email)
    if (language) setSelectedLanguage(language)
  }, [])

  const languages = {
    english: {
      title: "ShikshaPath",
      logout: "Logout",
      home: "Home",
      back: "Back",
    },
    hindi: {
      title: "शिक्षापथ",
      logout: "लॉगआउट",
      home: "होम",
      back: "वापस",
    },
    bengali: {
      title: "শিক্ষাপথ",
      logout: "লগআউট",
      home: "হোম",
      back: "ফিরে যান",
    },
    tamil: {
      title: "சிக்ஷாபத்",
      logout: "வெளியேறு",
      home: "முகப்பு",
      back: "திரும்பு",
    },
    gujarati: {
      title: "શિક્ષાપથ",
      logout: "લૉગઆઉટ",
      home: "હોમ",
      back: "પાછા",
    },
    marathi: {
      title: "शिक्षापथ",
      logout: "लॉगआउट",
      home: "होम",
      back: "परत",
    },
    telugu: {
      title: "శిక్షాపథ్",
      logout: "లాగ్ అవుట్",
      home: "హోమ్",
      back: "వెనుకకు",
    },
    kannada: {
      title: "ಶಿಕ್ಷಾಪಥ್",
      logout: "ಲಾಗ್ ಔಟ್",
      home: "ಮುಖ್ಯ",
      back: "ಹಿಂದೆ",
    },
    punjabi: {
      title: "ਸਿੱਖਿਆਪਥ",
      logout: "ਲਾਗ ਆਊਟ",
      home: "ਘਰ",
      back: "ਵਾਪਸ",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage)
    localStorage.setItem("userLanguage", newLanguage)
  }

  const handleLogout = () => {
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userLanguage")
    router.push("/")
  }

  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl)
    } else {
      router.back()
    }
  }

  const handleHome = () => {
    router.push("/dashboard")
  }

  // Don't show navigation on landing page
  if (pathname === "/") {
    return null
  }

  return (
    <header className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Back Button */}
        {showBackButton && (
          <Button
            onClick={handleBack}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel || currentLang.back}
          </Button>
        )}

        {/* Home Button (only show if not on dashboard) */}
        {pathname !== "/dashboard" && (
          <Button
            onClick={handleHome}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Home className="w-4 h-4 mr-2" />
            {currentLang.home}
          </Button>
        )}

        {/* Title Section */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-orange-400">शिक्षा</span>
              <span className="text-white">Path</span>
            </h1>
            {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Language Selector */}
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-32 bg-white/20 border-white/30 text-white">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">हिंदी</SelectItem>
            <SelectItem value="bengali">বাংলা</SelectItem>
            <SelectItem value="tamil">தமிழ்</SelectItem>
            <SelectItem value="gujarati">ગુજરાતી</SelectItem>
            <SelectItem value="marathi">मराठी</SelectItem>
            <SelectItem value="telugu">తెలుగు</SelectItem>
            <SelectItem value="kannada">ಕನ್ನಡ</SelectItem>
            <SelectItem value="punjabi">ਪੰਜਾਬੀ</SelectItem>
          </SelectContent>
        </Select>

        {/* User Stats */}
        <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-semibold">1,250 XP</span>
          <Badge className="bg-yellow-500 text-black text-xs">Lv.3</Badge>
        </div>

        {/* Leaderboard Button (only show on dashboard) */}
        {pathname === "/dashboard" && (
          <Button
            onClick={() => router.push("/leaderboard")}
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/25"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Leaderboard
          </Button>
        )}

        {/* Logout Button */}
        {userEmail && (
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/25"
          >
            <LogOut className="w-4 h-4 mr-2" />
            {currentLang.logout}
          </Button>
        )}
      </div>
    </header>
  )
}
