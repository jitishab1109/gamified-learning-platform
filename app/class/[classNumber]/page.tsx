"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Calculator, Atom, Zap, FlaskConical, Dna, Star, Trophy, Target, Clock, Computer, Globe } from "lucide-react"

export default function ClassPage() {
  const params = useParams()
  const router = useRouter()
  const classNumber = Number.parseInt(params.classNumber as string)
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  useEffect(() => {
    const language = localStorage.getItem("userLanguage")
    if (language) setSelectedLanguage(language)
  }, [])

  const languages = {
    english: {
      title: "ShikshaPaath",
      backToDashboard: "Back to Dashboard",
      classTitle: `Class ${classNumber} Subjects`,
      selectSubject: "Select a subject to start learning",
      chapters: "Chapters",
      completed: "Completed",
      inProgress: "In Progress",
      locked: "Ready to Start",
      startLearning: "Start Learning",
      continue: "Continue",
      subjects: {
        Mathematics: "Mathematics",
        Science: "Science",
        Physics: "Physics",
        Chemistry: "Chemistry",
        Biology: "Biology",
        "Computer Science": "Computer Science",
        "Information Technology": "Information Technology",
        "Environmental Science": "Environmental Science",
      },
    },
    hindi: {
      title: "शिक्षापाठ",
      backToDashboard: "डैशबोर्ड पर वापस जाएं",
      classTitle: `कक्षा ${classNumber} विषय`,
      selectSubject: "सीखना शुरू करने के लिए एक विषय चुनें",
      chapters: "अध्याय",
      completed: "पूर्ण",
      inProgress: "प्रगति में",
      locked: "शुरू करने के लिए तैयार",
      startLearning: "सीखना शुरू करें",
      continue: "जारी रखें",
      subjects: {
        Mathematics: "गणित",
        Science: "विज्ञान",
        Physics: "भौतिकी",
        Chemistry: "रसायन विज्ञान",
        Biology: "जीव विज्ञान",
        "Computer Science": "कंप्यूटर विज्ञान",
        "Information Technology": "सूचना प्रौद्योगिकी",
        "Environmental Science": "पर्यावरण विज्ञान",
      },
    },
    bengali: {
      title: "শিক্ষাপাঠ",
      backToDashboard: "ড্যাশবোর্ডে ফিরে যান",
      classTitle: `ক্লাস ${classNumber} বিষয়সমূহ`,
      selectSubject: "শেখা শুরু করতে একটি বিষয় নির্বাচন করুন",
      chapters: "অধ্যায়",
      completed: "সম্পূর্ণ",
      inProgress: "চলমান",
      locked: "শুরু করার জন্য প্রস্তুত",
      startLearning: "শেখা শুরু করুন",
      continue: "চালিয়ে যান",
      subjects: {
        Mathematics: "গণিত",
        Science: "বিজ্ঞান",
        Physics: "পদার্থবিজ্ঞান",
        Chemistry: "রসায়ন",
        Biology: "জীববিজ্ঞান",
        "Computer Science": "কম্পিউটার বিজ্ঞান",
        "Information Technology": "তথ্য প্রযুক্তি",
        "Environmental Science": "পরিবেশ বিজ্ঞান",
      },
    },
    tamil: {
      title: "சிக்ஷாபாத்",
      backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
      classTitle: `வகுப்பு ${classNumber} பாடங்கள்`,
      selectSubject: "கற்றலைத் தொடங்க ஒரு பாடத்தைத் தேர்ந்தெடுக்கவும்",
      chapters: "அத்தியாயங்கள்",
      completed: "முடிந்தது",
      inProgress: "நடந்து கொண்டிருக்கிறது",
      locked: "தொடங்க தயார்",
      startLearning: "கற்றலைத் தொடங்குங்கள்",
      continue: "தொடரவும்",
      subjects: {
        Mathematics: "கணிதம்",
        Science: "அறிவியல்",
        Physics: "இயற்பியல்",
        Chemistry: "வேதியியல்",
        Biology: "உயிரியல்",
        "Computer Science": "கணினி அறிவியல்",
        "Information Technology": "தகவல் தொழில்நுட்பம்",
        "Environmental Science": "சுற்றுச்சூழல் அறிவியல்",
      },
    },
    gujarati: {
      title: "શિક્ષાપાઠ",
      backToDashboard: "ડેશબોર્ડ પર પાછા જાઓ",
      classTitle: `વર્ગ ${classNumber} વિષયો`,
      selectSubject: "શીખવાનું શરૂ કરવા માટે એક વિષય પસંદ કરો",
      chapters: "પ્રકરણો",
      completed: "પૂર્ણ",
      inProgress: "ચાલુ",
      locked: "શરૂ કરવા માટે તૈયાર",
      startLearning: "શીખવાનું શરૂ કરો",
      continue: "ચાલુ રાખો",
      subjects: {
        Mathematics: "ગણિત",
        Science: "વિજ્ઞાન",
        Physics: "ભૌતિકશાસ્ત્ર",
        Chemistry: "રસાયણશાસ્ત્ર",
        Biology: "જીવવિજ્ઞાન",
        "Computer Science": "કમ્પ્યુટર સાયન્સ",
        "Information Technology": "માહિતી તકનીક",
        "Environmental Science": "પર્યાવરણ વિજ્ઞાન",
      },
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  const getSubjectsForClass = (classNum: number) => {
    const subjects = []

    // Mathematics - Available for all classes 6-12
    subjects.push({
      name: "Mathematics",
      icon: Calculator,
      color: "from-blue-500 to-blue-600",
      chapters: classNum <= 8 ? 14 : classNum <= 10 ? 15 : 13,
      completed: Math.floor(Math.random() * (classNum <= 8 ? 14 : classNum <= 10 ? 15 : 13)),
      description:
        classNum <= 8
          ? "Numbers, Algebra, Geometry"
          : classNum <= 10
            ? "Real Numbers, Polynomials, Trigonometry"
            : "Relations, Calculus, Probability",
    })

    // Science - For classes 6-10 (integrated), then splits into Physics, Chemistry, Biology for 11-12
    if (classNum <= 10) {
      subjects.push({
        name: "Science",
        icon: Atom,
        color: "from-green-500 to-green-600",
        chapters: classNum <= 8 ? 18 : 16,
        completed: Math.floor(Math.random() * (classNum <= 8 ? 18 : 16)),
        description: classNum <= 8 ? "Light, Sound, Natural Resources" : "Matter, Life Processes, Natural Resources",
      })
    }

    // Physics - Separate subject for classes 11-12
    if (classNum >= 11) {
      subjects.push({
        name: "Physics",
        icon: Zap,
        color: "from-purple-500 to-purple-600",
        chapters: classNum === 11 ? 15 : 14,
        completed: Math.floor(Math.random() * (classNum === 11 ? 15 : 14)),
        description: classNum === 11 ? "Mechanics, Thermodynamics, Waves" : "Electrostatics, Optics, Modern Physics",
      })
    }

    // Chemistry - Separate subject for classes 11-12
    if (classNum >= 11) {
      subjects.push({
        name: "Chemistry",
        icon: FlaskConical,
        color: "from-orange-500 to-orange-600",
        chapters: classNum === 11 ? 14 : 16,
        completed: Math.floor(Math.random() * (classNum === 11 ? 14 : 16)),
        description: classNum === 11 ? "Atomic Structure, Chemical Bonding" : "Solutions, Electrochemistry, Polymers",
      })
    }

    // Biology - Separate subject for classes 11-12
    if (classNum >= 11) {
      subjects.push({
        name: "Biology",
        icon: Dna,
        color: "from-emerald-500 to-emerald-600",
        chapters: classNum === 11 ? 22 : 16,
        completed: Math.floor(Math.random() * (classNum === 11 ? 22 : 16)),
        description: classNum === 11 ? "Cell Biology, Plant Physiology" : "Reproduction, Genetics, Evolution",
      })
    }

    // Computer Science - Available for classes 11-12
    if (classNum >= 11) {
      subjects.push({
        name: "Computer Science",
        icon: Computer,
        color: "from-indigo-500 to-indigo-600",
        chapters: 12,
        completed: Math.floor(Math.random() * 12),
        description: "Programming, Data Structures, Algorithms",
      })
    }

    // Information Technology - Available for classes 9-10
    if (classNum >= 9 && classNum <= 10) {
      subjects.push({
        name: "Information Technology",
        icon: Computer,
        color: "from-cyan-500 to-cyan-600",
        chapters: 10,
        completed: Math.floor(Math.random() * 10),
        description: "Digital Literacy, Programming Basics",
      })
    }

    // Environmental Science - Available for classes 6-8
    if (classNum <= 8) {
      subjects.push({
        name: "Environmental Science",
        icon: Globe,
        color: "from-teal-500 to-teal-600",
        chapters: 8,
        completed: Math.floor(Math.random() * 8),
        description: "Ecosystem, Conservation, Sustainability",
      })
    }

    return subjects
  }

  const subjects = getSubjectsForClass(classNumber)

  const handleSubjectClick = (subjectName: string) => {
    router.push(`/class/${classNumber}/subject/${subjectName.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const handleBackToDashboard = () => {
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

      <div className="relative z-10">
        {/* Header */}
        <Navigation
          showBackButton={true}
          backUrl="/dashboard"
          backLabel={currentLang.backToDashboard}
          subtitle={`Class ${classNumber} - NCERT STEM Subjects`}
        />

        <div className="px-6 pb-6">
          {/* Class Info */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{currentLang.classTitle}</h2>
            <p className="text-white/80">{currentLang.selectSubject}</p>
            <Badge className="mt-2 bg-green-500 text-white">NCERT Curriculum</Badge>
          </div>

          {/* Subjects Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => {
                const progressPercentage = Math.round((subject.completed / subject.chapters) * 100)
                const isCompleted = subject.completed === subject.chapters
                const isInProgress = subject.completed > 0 && subject.completed < subject.chapters

                return (
                  <Card
                    key={subject.name}
                    className="bg-white/20 backdrop-blur-lg border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    <CardContent className="p-6">
                      {/* Subject Icon and Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <subject.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">
                            {currentLang.subjects[subject.name as keyof typeof currentLang.subjects]}
                          </h3>
                          <p className="text-white/80 text-sm">{subject.description}</p>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white text-sm font-medium">
                            {currentLang.chapters}: {subject.completed}/{subject.chapters}
                          </span>
                          <span className="text-white text-sm font-medium">{progressPercentage}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-3" />
                      </div>

                      {/* Status Badge */}
                      <div className="flex justify-between items-center mb-4">
                        {isCompleted ? (
                          <Badge className="bg-green-500 text-white">
                            <Trophy className="w-3 h-3 mr-1" />
                            {currentLang.completed}
                          </Badge>
                        ) : isInProgress ? (
                          <Badge className="bg-yellow-500 text-black">
                            <Clock className="w-3 h-3 mr-1" />
                            {currentLang.inProgress}
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-500 text-white">
                            <Target className="w-3 h-3 mr-1" />
                            {currentLang.locked}
                          </Badge>
                        )}

                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4" />
                          <span className="text-sm font-medium">{subject.completed * 50} XP</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        className={`w-full font-semibold ${
                          isCompleted
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                            : isInProgress
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSubjectClick(subject.name)
                        }}
                      >
                        {isInProgress ? currentLang.continue : currentLang.startLearning}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
