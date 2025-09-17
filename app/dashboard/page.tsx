"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { BookOpen, Trophy, Zap, Target, Star, Gamepad2, Award, TrendingUp, Play, Users, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [selectedClass, setSelectedClass] = useState<number | null>(null)
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const email = localStorage.getItem("userEmail")
    const language = localStorage.getItem("userLanguage")

    if (!email) {
      router.push("/")
      return
    }

    setUserEmail(email)
    if (language) setSelectedLanguage(language)
  }, [router])

  const languages = {
    english: {
      title: "ShikshaPaath",
      subtitle: "Dashboard",
      welcome: "Welcome back",
      selectClass: "Select Your Class",
      activeGames: "Active Games",
      joinChallenge: "Join Challenge",
      playNow: "Play Now",
      viewAll: "View All Games",
      features: "Platform Features",
      stats: {
        xp: "Total XP",
        level: "Current Level",
        streak: "Learning Streak",
        rewards: "Rewards Earned",
      },
      gameFeatures: {
        gamified: "Gamified Learning",
        multilingual: "Multilingual Support",
        progress: "Progress Tracking",
        rewards: "Achievements & Rewards",
      },
    },
    hindi: {
      title: "शिक्षापाठ",
      subtitle: "डैशबोर्ड",
      welcome: "वापसी पर स्वागत है",
      selectClass: "अपनी कक्षा चुनें",
      activeGames: "सक्रिय खेल",
      joinChallenge: "चुनौती में शामिल हों",
      playNow: "अभी खेलें",
      viewAll: "सभी खेल देखें",
      features: "प्लेटफॉर्म सुविधाएं",
      stats: {
        xp: "कुल XP",
        level: "वर्तमान स्तर",
        streak: "सीखने की लकीर",
        rewards: "अर्जित पुरस्कार",
      },
      gameFeatures: {
        gamified: "गेमिफाइड लर्निंग",
        multilingual: "बहुभाषी सहायता",
        progress: "प्रगति ट्रैकिंग",
        rewards: "उपलब्धियां और पुरस्कार",
      },
    },
    bengali: {
      title: "শিক্ষাপাঠ",
      subtitle: "ড্যাশবোর্ড",
      welcome: "স্বাগতম",
      selectClass: "আপনার ক্লাস নির্বাচন করুন",
      activeGames: "সক্রিয় গেম",
      joinChallenge: "চ্যালেঞ্জে যোগ দিন",
      playNow: "এখনই খেলুন",
      viewAll: "সব গেম দেখুন",
      features: "প্ল্যাটফর্ম বৈশিষ্ট্য",
      stats: {
        xp: "মোট XP",
        level: "বর্তমান স্তর",
        streak: "শেখার ধারা",
        rewards: "অর্জিত পুরস্কার",
      },
      gameFeatures: {
        gamified: "গেমিফাইড লার্নিং",
        multilingual: "বহুভাষিক সহায়তা",
        progress: "অগ্রগতি ট্র্যাকিং",
        rewards: "অর্জন এবং পুরস্কার",
      },
    },
    tamil: {
      title: "சிக்ஷாபாத்",
      subtitle: "டாஷ்போர்டு",
      welcome: "மீண்டும் வரவேற்கிறோம்",
      selectClass: "உங்கள் வகுப்பைத் தேர்ந்தெடுக்கவும்",
      activeGames: "செயலில் உள்ள விளையாட்டுகள்",
      joinChallenge: "சவாலில் சேரவும்",
      playNow: "இப்போது விளையாடுங்கள்",
      viewAll: "அனைத்து விளையாட்டுகளையும் பார்க்கவும்",
      features: "தள அம்சங்கள்",
      stats: {
        xp: "மொத்த XP",
        level: "தற்போதைய நிலை",
        streak: "கற்றல் தொடர்ச்சி",
        rewards: "பெற்ற பரிசுகள்",
      },
      gameFeatures: {
        gamified: "கேமிஃபைட் கற்றல்",
        multilingual: "பல மொழி ஆதரவு",
        progress: "முன்னேற்ற கண்காணிப்பு",
        rewards: "சாதனைகள் மற்றும் பரிசுகள்",
      },
    },
    gujarati: {
      title: "શિક્ષાપાઠ",
      subtitle: "ડેશબોર્ડ",
      welcome: "પાછા આવવા બદલ સ્વાગત",
      selectClass: "તમારો વર્ગ પસંદ કરો",
      activeGames: "સક્રિય રમતો",
      joinChallenge: "પડકારમાં જોડાઓ",
      playNow: "હવે રમો",
      viewAll: "બધી રમતો જુઓ",
      features: "પ્લેટફોર્મ લક્ષણો",
      stats: {
        xp: "કુલ XP",
        level: "વર્તમાન સ્તર",
        streak: "શીખવાની સાંકળ",
        rewards: "મેળવેલા પુરસ્કારો",
      },
      gameFeatures: {
        gamified: "ગેમિફાઇડ લર્નિંગ",
        multilingual: "બહુભાષી સપોર્ટ",
        progress: "પ્રગતિ ટ્રેકિંગ",
        rewards: "સિદ્ધિઓ અને પુરસ્કારો",
      },
    },
    marathi: {
      title: "शिक्षापाठ",
      subtitle: "डॅशबोर्ड",
      welcome: "परत आल्याबद्दल स्वागत",
      selectClass: "तुमचा वर्ग निवडा",
      activeGames: "सक्रिय खेळ",
      joinChallenge: "आव्हानात सामील व्हा",
      playNow: "आता खेळा",
      viewAll: "सर्व खेळ पहा",
      features: "प्लॅटफॉर्म वैशिष्ट्ये",
      stats: {
        xp: "एकूण XP",
        level: "सध्याचा स्तर",
        streak: "शिकण्याची मालिका",
        rewards: "मिळवलेले पुरस्कार",
      },
      gameFeatures: {
        gamified: "गेमिफाइડ लर्निंग",
        multilingual: "बहुभाषिक समर्थन",
        progress: "प्रगती ट्रॅकिंग",
        rewards: "उपलब्धी आणि पुरस्कार",
      },
    },
    telugu: {
      title: "శిక్షాపాఠ్",
      subtitle: "డాష్‌బోర్డ్",
      welcome: "తిరిగి వచ్చినందుకు స్వాగతం",
      selectClass: "మీ తరగతిని ఎంచుకోండి",
      activeGames: "క్రియాశీల ఆటలు",
      joinChallenge: "సవాలులో చేరండి",
      playNow: "ఇప్పుడు ఆడండి",
      viewAll: "అన్ని ఆటలను చూడండి",
      features: "ప్లాట్‌ఫారమ్ లక్షణాలు",
      stats: {
        xp: "మొత్తం XP",
        level: "ప్రస్తుత స్థాయి",
        streak: "అభ్యాస శ్రేణి",
        rewards: "సంపాదించిన బహుమతులు",
      },
      gameFeatures: {
        gamified: "గేమిఫైడ్ లెర్నింగ్",
        multilingual: "బహుభాషా మద్దతు",
        progress: "పురోగతి ట్రాకింగ్",
        rewards: "విజయాలు మరియు బహుమతులు",
      },
    },
    kannada: {
      title: "ಶಿಕ್ಷಾಪಾಠ್",
      subtitle: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      welcome: "ಮರಳಿ ಬಂದಿದ್ದಕ್ಕೆ ಸ್ವಾಗತ",
      selectClass: "ನಿಮ್ಮ ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      activeGames: "ಸಕ್ರಿಯ ಆಟಗಳು",
      joinChallenge: "ಸವಾಲಿನಲ್ಲಿ ಸೇರಿ",
      playNow: "ಈಗ ಆಡಿ",
      viewAll: "ಎಲ್ಲಾ ಆಟಗಳನ್ನು ನೋಡಿ",
      features: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ವೈಶಿಷ್ಟ್ಯಗಳು",
      stats: {
        xp: "ಒಟ್ಟು XP",
        level: "ಪ್ರಸ್ತುత ಹಂತ",
        streak: "ಕಲಿಕೆಯ ಸರಣಿ",
        rewards: "ಗಳಿಸಿದ ಪುರಸ್ಕಾರಗಳು",
      },
      gameFeatures: {
        gamified: "ಗೇಮಿಫೈಡ್ ಲರ್ನಿಂಗ್",
        multilingual: "ಬಹುಭಾಷಾ ಬೆಂಬಲ",
        progress: "ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
        rewards: "ಸಾಧನೆಗಳು ಮತ್ತು ಪುರಸ್ಕಾರಗಳು",
      },
    },
    punjabi: {
      title: "ਸਿੱਖਿਆਪਾਠ",
      subtitle: "ਡੈਸ਼ਬੋਰਡ",
      welcome: "ਵਾਪਸ ਆਉਣ ਲਈ ਸੁਆਗਤ",
      selectClass: "ਆਪਣੀ ਕਲਾਸ ਚੁਣੋ",
      activeGames: "ਸਰਗਰਮ ਖੇਡਾਂ",
      joinChallenge: "ਚੁਣੌਤੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
      playNow: "ਹੁਣ ਖੇਡੋ",
      viewAll: "ਸਾਰੀਆਂ ਖੇਡਾਂ ਵੇਖੋ",
      features: "ਪਲੇਟਫਾਰਮ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
      stats: {
        xp: "ਕੁੱਲ XP",
        level: "ਮੌਜੂਦਾ ਪੱਧਰ",
        streak: "ਸਿੱਖਣ ਦੀ ਲੜੀ",
        rewards: "ਕਮਾਏ ਗਏ ਇਨਾਮ",
      },
      gameFeatures: {
        gamified: "ਗੇਮਿਫਾਈਡ ਲਰਨਿੰਗ",
        multilingual: "ਬਹੁਭਾਸ਼ੀ ਸਹਾਇਤਾ",
        progress: "ਪ੍ਰਗਤੀ ਟਰੈਕਿੰਗ",
        rewards: "ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਇਨਾਮ",
      },
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const classes = [
    { number: 6, progress: 85, subjects: ["Mathematics", "Science"] },
    { number: 7, progress: 72, subjects: ["Mathematics", "Science"] },
    { number: 8, progress: 91, subjects: ["Mathematics", "Science"] },
    {
      number: 9,
      progress: 68,
      subjects: ["Mathematics", "Science", "Information Technology"],
    },
    {
      number: 10,
      progress: 44,
      subjects: ["Mathematics", "Science", "Information Technology"],
    },
    {
      number: 11,
      progress: 25,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"],
    },
    {
      number: 12,
      progress: 41,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"],
    },
  ]

  const games = [
    {
      name: "Math Marathon",
      players: 24,
      xp: 100,
      icon: Target,
      active: true,
      timeLeft: "2h 30m",
      difficulty: "Medium",
    },
    {
      name: "Science Sprint",
      players: 18,
      xp: 150,
      icon: Trophy,
      active: false,
      timeLeft: "Starting soon",
      difficulty: "Easy",
    },
    {
      name: "Physics Quest",
      players: 32,
      xp: 200,
      icon: Zap,
      active: true,
      timeLeft: "1h 15m",
      difficulty: "Hard",
    },
  ]

  const handleJoinGame = (gameName: string) => {
    alert(`Joining ${gameName}! Game will start shortly.`)
  }

  const handleClassSelect = (classNumber: number) => {
    setSelectedClass(classNumber)
    router.push(`/class/${classNumber}`)
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
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

      <div className="relative z-10">
        <Navigation subtitle={currentLang.subtitle} />

        <div className="px-6 pb-6">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentLang.welcome}, {userEmail.split("@")[0]}!
            </h2>
            <p className="text-white/80">Ready to continue your learning adventure?</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-orange-400 to-red-500 border-0 animate-bounce-in">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/80 text-sm">{currentLang.stats.xp}</p>
                <p className="text-2xl font-bold text-white">1,250</p>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-purple-500 to-pink-500 border-0 animate-bounce-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/80 text-sm">{currentLang.stats.level}</p>
                <p className="text-2xl font-bold text-white">3</p>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-green-500 to-emerald-500 border-0 animate-bounce-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/80 text-sm">{currentLang.stats.streak}</p>
                <p className="text-2xl font-bold text-white">7 days</p>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-blue-500 to-cyan-500 border-0 animate-bounce-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-4 text-center">
                <Award className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/80 text-sm">{currentLang.stats.rewards}</p>
                <p className="text-2xl font-bold text-white">12</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Class Selection */}
            <div className="lg:col-span-2">
              <Card className="bg-white/20 backdrop-blur-lg border-white/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">{currentLang.selectClass}</h3>
                    </div>
                    {selectedClass && (
                      <Badge className="bg-white/20 text-white border-white/30">Class {selectedClass} Selected</Badge>
                    )}
                  </div>

                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {classes.map((classItem, index) => {
                      const cardColors = [
                        "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600", // Class 6 - Emerald to Cyan
                        "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600", // Class 7 - Violet to Indigo
                        "bg-gradient-to-br from-rose-400 via-pink-500 to-red-600", // Class 8 - Rose to Red
                        "bg-gradient-to-br from-amber-400 via-orange-500 to-red-600", // Class 9 - Amber to Red
                        "bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600", // Class 10 - Lime to Emerald
                        "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600", // Class 11 - Sky to Indigo
                        "bg-gradient-to-br from-fuchsia-400 via-purple-500 to-violet-600", // Class 12 - Fuchsia to Violet
                      ]

                      return (
                        <Card
                          key={classItem.number}
                          className={`cursor-pointer transition-all duration-500 hover:scale-105 flex-shrink-0 w-48 ${
                            selectedClass === classItem.number ? "ring-3 ring-yellow-300 shadow-2xl" : "hover:shadow-xl"
                          } ${cardColors[index]} border-0 shadow-lg`}
                          onClick={() => handleClassSelect(classItem.number)}
                        >
                          <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-white/90 rounded-xl mx-auto mb-3 flex items-center justify-center backdrop-blur-sm shadow-md">
                              <BookOpen className="w-8 h-8 text-gray-700" />
                            </div>
                            <p className="text-white font-bold text-lg mb-2 drop-shadow-md">Class {classItem.number}</p>
                            <Progress value={classItem.progress} className="mt-3 h-3 bg-white/30" />
                            <p className="text-white/95 text-sm mt-2 font-medium drop-shadow-sm">
                              {classItem.progress}% Complete
                            </p>
                            <div className="flex flex-wrap gap-1 mt-3 justify-center">
                              {classItem.subjects.slice(0, 2).map((subject) => (
                                <Badge
                                  key={subject}
                                  className="text-xs bg-white/20 text-white border-white/30 px-2 py-1 backdrop-blur-sm"
                                >
                                  {subject}
                                </Badge>
                              ))}
                              {classItem.subjects.length > 2 && (
                                <Badge className="text-xs bg-white/20 text-white border-white/30 px-2 py-1 backdrop-blur-sm">
                                  +{classItem.subjects.length - 2}
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Games & Challenges */}
            <div>
              <Card className="bg-white/20 backdrop-blur-lg border-white/30 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Gamepad2 className="w-6 h-6 text-white" />
                      <h3 className="text-lg font-bold text-white">{currentLang.activeGames}</h3>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      {currentLang.viewAll}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {games.map((game, index) => (
                      <Card key={index} className="bg-white/15 border-white/30 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <game.icon className="w-5 h-5 text-white" />
                              <span className="text-white font-medium">{game.name}</span>
                            </div>
                            {game.active && <Badge className="bg-green-400 text-white text-xs">Live</Badge>}
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                            <div className="flex items-center gap-1 text-white/80">
                              <Users className="w-3 h-3" />
                              {game.players} players
                            </div>
                            <div className="flex items-center gap-1 text-yellow-300">
                              <Star className="w-3 h-3" />
                              {game.xp} XP
                            </div>
                            <div className="flex items-center gap-1 text-white/80">
                              <Clock className="w-3 h-3" />
                              {game.timeLeft}
                            </div>
                            <div className="text-white/80">{game.difficulty}</div>
                          </div>

                          <Button
                            onClick={() => handleJoinGame(game.name)}
                            size="sm"
                            className={`w-full ${
                              game.active
                                ? "bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500"
                                : "bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
                            } text-white border-0`}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {game.active ? currentLang.joinChallenge : currentLang.playNow}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-white/20 backdrop-blur-lg border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{currentLang.features}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Gamepad2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm">{currentLang.gameFeatures.gamified}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm">{currentLang.gameFeatures.progress}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm">{currentLang.gameFeatures.rewards}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
