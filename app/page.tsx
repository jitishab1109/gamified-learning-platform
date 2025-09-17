"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { BookOpen, Globe, Sparkles, Gamepad2, Trophy, TrendingUp, Users, Target } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const languages = {
    english: {
      title: "ShikshaPath",
      subtitle: "Gamified Learning Platform",
      tagline: "Level Up Your Learning Journey!",
      description: "Transform STEM education into exciting games and adventures for rural students across India",
      emailPlaceholder: "Enter your email or phone",
      startButton: "Start Learning Adventure",
      loginButton: "Enter Platform",
      features: {
        gamified: "Gamified Learning",
        multilingual: "Multilingual Support",
        progress: "Progress Tracking",
        rewards: "Achievements & Rewards",
      },
      userTypes: {
        student: "Student",
        teacher: "Teacher",
        analytics: "Government Analytics",
      },
    },
    hindi: {
      title: "शिक्षापथ",
      subtitle: "गेमिफाइड लर्निंग प्लेटफॉर्म",
      tagline: "अपनी सीखने की यात्रा को आगे बढ़ाएं!",
      description: "भारत के ग्रामीण छात्रों के लिए STEM शिक्षा को रोमांचक खेलों में बदलें",
      emailPlaceholder: "अपना ईमेल या फोन दर्ज करें",
      startButton: "सीखने की शुरुआत करें",
      loginButton: "प्लेटफॉर्म में प्रवेश करें",
      features: {
        gamified: "गेमिफाइड लर्निंग",
        multilingual: "बहुभाषी सहायता",
        progress: "प्रगति ट्रैकिंग",
        rewards: "उपलब्धियां और पुरस्कार",
      },
      userTypes: {
        student: "छात्र",
        teacher: "शिक्षक",
        analytics: "सरकारी विश्लेषण",
      },
    },
    bengali: {
      title: "শিক্ষাপথ",
      subtitle: "গেমিফাইড লার্নিং প্ল্যাটফর্ম",
      tagline: "আপনার শেখার যাত্রাকে এগিয়ে নিয়ে যান!",
      description: "ভারতের গ্রামীণ শিক্ষার্থীদের জন্য STEM শিক্ষাকে উত্তেজনাপূর্ণ গেমে রূপান্তরিত করুন",
      emailPlaceholder: "আপনার ইমেইল বা ফোন লিখুন",
      startButton: "শেখার অ্যাডভেঞ্চার শুরু করুন",
      loginButton: "প্ল্যাটফর্মে প্রবেশ করুন",
      features: {
        gamified: "গেমিফাইড লার্নিং",
        multilingual: "বহুভাষিক সহায়তা",
        progress: "অগ্রগতি ট্র্যাকিং",
        rewards: "অর্জন এবং পুরস্কার",
      },
      userTypes: {
        student: "ছাত্র",
        teacher: "শিক্ষক",
        analytics: "সরকারি বিশ্লেষণ",
      },
    },
    tamil: {
      title: "சிக்ஷாபத்",
      subtitle: "கேமிஃபைட் கற்றல் தளம்",
      tagline: "உங்கள் கற்றல் பயணத்தை மேம்படுத்துங்கள்!",
      description: "இந்தியாவின் கிராமப்புற மாணவர்களுக்கு STEM கல்வியை உற்சாகமான விளையாட்டுகளாக மாற்றுங்கள்",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் அல்லது தொலைபேசியை உள்ளிடுங்கள்",
      startButton: "கற்றல் சாகசத்தைத் தொடங்குங்கள்",
      loginButton: "தளத்தில் நுழையுங்கள்",
      features: {
        gamified: "கேமிஃபைட் கற்றல்",
        multilingual: "பல மொழி ஆதரவு",
        progress: "முன்னேற்ற கண்காணிப்பு",
        rewards: "சாதனைகள் மற்றும் பரிசுகள்",
      },
      userTypes: {
        student: "மாணவர்",
        teacher: "ஆசிரியர்",
        analytics: "அரசு பகுப்பாய்வு",
      },
    },
    gujarati: {
      title: "શિક્ષાપથ",
      subtitle: "ગેમિફાઇડ લર્નિંગ પ્લેટફોર્મ",
      tagline: "તમારી શીખવાની યાત્રાને આગળ વધારો!",
      description: "ભારતના ગ્રામીણ વિદ્યાર્થીઓ માટે STEM શિક્ષણને રોમાંચક રમતોમાં રૂપાંતરિત કરો",
      emailPlaceholder: "તમારું ઇમેઇલ અથવા ફોન દાખલ કરો",
      startButton: "શીખવાનું સાહસ શરૂ કરો",
      loginButton: "પ્લેટફોર્મમાં પ્રવેશ કરો",
      features: {
        gamified: "ગેમિફાઇડ લર્નિંગ",
        multilingual: "બહુભાષી સપોર્ટ",
        progress: "પ્રગતિ ટ્રેકિંગ",
        rewards: "સિદ્ધિઓ અને પુરસ્કારો",
      },
      userTypes: {
        student: "વિદ્યાર્થી",
        teacher: "શિક્ષક",
        analytics: "સરકારી વિશ્લેષણ",
      },
    },
    marathi: {
      title: "शिक्षापथ",
      subtitle: "गेमिफाइड लर्निंग प्लॅटफॉर्म",
      tagline: "तुमच्या शिकण्याच्या प्रवासाला पुढे नेऊन जा!",
      description: "भारतातील ग्रामीण विद्यार्थ्यांसाठी STEM शिक्षणाचे रोमांचक खेळांमध्ये रूपांतर करा",
      emailPlaceholder: "तुमचा ईमेल किंवा फोन टाका",
      startButton: "शिकण्याचे साहस सुरू करा",
      loginButton: "प्लॅटफॉर्ममध्ये प्रवेश करा",
      features: {
        gamified: "गेमिफाइड लर्निंग",
        multilingual: "बहुभाषिक समर्थन",
        progress: "प्रगती ट्रॅकिंग",
        rewards: "उपलब्धी आणि पुरस्कार",
      },
      userTypes: {
        student: "विद्यार्थी",
        teacher: "शिक्षक",
        analytics: "सरकारी विश्लेषण",
      },
    },
    telugu: {
      title: "శిక్షాపథ్",
      subtitle: "గేమిఫైడ్ లెర్నింగ్ ప్లాట్‌ఫారమ్",
      tagline: "మీ అభ్యాస ప్రయాణాన్ని ముందుకు తీసుకెళ్లండి!",
      description: "భారతదేశంలోని గ్రామీణ విద్యార్థుల కోసం STEM విద్యను ఉత్తేజకరమైన ఆటలుగా మార్చండి",
      emailPlaceholder: "మీ ఇమెయిల్ లేదా ఫోన్ నమోదు చేయండి",
      startButton: "అభ్యాస సాహసం ప్రారంభించండి",
      loginButton: "ప్లాట్‌ఫారమ్‌లోకి ప్రవేశించండి",
      features: {
        gamified: "గేమిఫైడ్ లెర్నింగ్",
        multilingual: "బహుభాషా మద్దతు",
        progress: "పురోగతి ట్రాకింగ్",
        rewards: "విజయాలు మరియు బహుమతులు",
      },
      userTypes: {
        student: "విద్యార్థి",
        teacher: "ఉపాధ్యాయుడు",
        analytics: "ప్రభుత్వ విశ్లేషణ",
      },
    },
    kannada: {
      title: "ಶಿಕ್ಷಾಪಥ್",
      subtitle: "ಗೇಮಿಫೈಡ್ ಲರ್ನಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
      tagline: "ನಿಮ್ಮ ಕಲಿಕೆಯ ಪ್ರಯಾಣವನ್ನು ಮುಂದುವರಿಸಿ!",
      description: "ಭಾರತದ ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ STEM ಶಿಕ್ಷಣವನ್ನು ರೋಮಾಂಚಕ ಆಟಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ",
      emailPlaceholder: "ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ನಮೂದಿಸಿ",
      startButton: "ಕಲಿಕೆಯ ಸಾಹಸವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      loginButton: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗೆ ಪ್ರವೇಶಿಸಿ",
      features: {
        gamified: "ಗೇಮಿಫೈಡ್ ಲರ್ನಿಂಗ್",
        multilingual: "ಬಹುಭಾಷಾ ಬೆಂಬಲ",
        progress: "ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
        rewards: "ಸಾಧನೆಗಳು ಮತ್ತು ಪುರಸ್ಕಾರಗಳು",
      },
      userTypes: {
        student: "ವಿದ್ಯಾರ್ಥಿ",
        teacher: "ಶಿಕ್ಷಕ",
        analytics: "ಸರ್ಕಾರಿ ವಿಶ್ಲೇಷಣೆ",
      },
    },
    punjabi: {
      title: "ਸਿੱਖਿਆਪਥ",
      subtitle: "ਗੇਮਿਫਾਈਡ ਲਰਨਿੰਗ ਪਲੇਟਫਾਰਮ",
      tagline: "ਆਪਣੀ ਸਿੱਖਿਆ ਦੀ ਯਾਤਰਾ ਨੂੰ ਅੱਗੇ ਵਧਾਓ!",
      description: "ਭਾਰਤ ਦੇ ਪੇਂਡੂ ਵਿਦਿਆਰਥੀਆਂ ਲਈ STEM ਸਿੱਖਿਆ ਨੂੰ ਦਿਲਚਸਪ ਖੇਡਾਂ ਵਿੱਚ ਬਦਲੋ",
      emailPlaceholder: "ਆਪਣਾ ਈਮੇਲ ਜਾਂ ਫੋਨ ਦਾਖਲ ਕਰੋ",
      startButton: "ਸਿੱਖਣ ਦਾ ਸਾਹਸ ਸ਼ੁਰੂ ਕਰੋ",
      loginButton: "ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਦਾਖਲ ਹੋਵੋ",
      features: {
        gamified: "ਗੇਮਿਫਾਈਡ ਲਰਨਿੰਗ",
        multilingual: "ਬਹੁਭਾਸ਼ੀ ਸਹਾਇਤਾ",
        progress: "ਪ੍ਰਗਤੀ ਟਰੈਕਿੰਗ",
        rewards: "ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਇਨਾਮ",
      },
      userTypes: {
        student: "ਵਿਦਿਆਰਥੀ",
        teacher: "ਅਧਿਆਪਕ",
        analytics: "ਸਰਕਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ",
      },
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const handleLogin = async () => {
    if (!email.trim()) return

    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store user session
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userLanguage", selectedLanguage)

    // Navigate to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding & Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  <span className="text-orange-400">शिक्षा</span>
                  <span className="text-white">Path</span>
                </h1>
                <p className="text-white/80 text-sm">{currentLang.subtitle}</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{currentLang.tagline}</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">{currentLang.description}</p>

            {/* Language Selector */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-48 bg-white/20 border-white/30 text-white">
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
            </div>

            {/* User Type Selection */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button variant="outline" className="bg-blue-500/30 border-blue-300 text-white hover:bg-blue-500/40">
                <Users className="w-4 h-4 mr-2" />
                {currentLang.userTypes.student}
              </Button>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/25">
                <BookOpen className="w-4 h-4 mr-2" />
                {currentLang.userTypes.teacher}
              </Button>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/25">
                <TrendingUp className="w-4 h-4 mr-2" />
                {currentLang.userTypes.analytics}
              </Button>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/20 backdrop-blur-lg border-white/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Target className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">{currentLang.startButton}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <Input
                    type="email"
                    placeholder={currentLang.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />

                  <Button
                    onClick={handleLogin}
                    disabled={!email.trim() || isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Loading...
                      </div>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        {currentLang.loginButton}
                      </>
                    )}
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <Gamepad2 className="w-4 h-4 text-purple-300" />
                    <span className="text-sm">{currentLang.features.gamified}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Globe className="w-4 h-4 text-blue-300" />
                    <span className="text-sm">{currentLang.features.multilingual}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <TrendingUp className="w-4 h-4 text-green-300" />
                    <span className="text-sm">{currentLang.features.progress}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Trophy className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm">{currentLang.features.rewards}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
