"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import {
  Star,
  Trophy,
  Clock,
  CheckCircle,
  PlayCircle,
  Lock,
  Calculator,
  Atom,
  Zap,
  FlaskConical,
  Dna,
} from "lucide-react"

export default function SubjectPage() {
  const params = useParams()
  const router = useRouter()
  const classNumber = Number.parseInt(params.classNumber as string)
  const subjectName = params.subjectName as string
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  useEffect(() => {
    const language = localStorage.getItem("userLanguage")
    if (language) setSelectedLanguage(language)
  }, [])

  const languages = {
    english: {
      title: "ShikshaPath",
      backToClass: "Back to Class",
      chapters: "Chapters",
      selectChapter: "Select a chapter to start learning",
      startChapter: "Start Chapter",
      continueChapter: "Continue",
      completed: "Completed",
      inProgress: "In Progress",
      locked: "Locked",
      totalProgress: "Total Progress",
      subjects: {
        mathematics: "Mathematics",
        science: "Science",
        physics: "Physics",
        chemistry: "Chemistry",
        biology: "Biology",
      },
    },
    hindi: {
      title: "शिक्षापथ",
      backToClass: "कक्षा में वापस जाएं",
      chapters: "अध्याय",
      selectChapter: "सीखना शुरू करने के लिए एक अध्याय चुनें",
      startChapter: "अध्याय शुरू करें",
      continueChapter: "जारी रखें",
      completed: "पूर्ण",
      inProgress: "प्रगति में",
      locked: "बंद",
      totalProgress: "कुल प्रगति",
      subjects: {
        mathematics: "गणित",
        science: "विज्ञान",
        physics: "भौतिकी",
        chemistry: "रसायन विज्ञान",
        biology: "जीव विज्ञान",
      },
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  // Get subject icon and color
  const getSubjectDetails = (subject: string) => {
    const details = {
      mathematics: { icon: Calculator, color: "from-blue-500 to-blue-600" },
      science: { icon: Atom, color: "from-green-500 to-green-600" },
      physics: { icon: Zap, color: "from-purple-500 to-purple-600" },
      chemistry: { icon: FlaskConical, color: "from-orange-500 to-orange-600" },
      biology: { icon: Dna, color: "from-emerald-500 to-emerald-600" },
    }
    return details[subject as keyof typeof details] || details.science
  }

  // Generate chapters based on subject and class
  const getChaptersForSubject = (subject: string, classNum: number) => {
    const chapterTemplates = {
      mathematics: [
        { title: "Number Systems", description: "Natural numbers, integers, rational numbers", difficulty: "Easy" },
        { title: "Algebra", description: "Linear equations, polynomials", difficulty: "Medium" },
        { title: "Geometry", description: "Lines, angles, triangles", difficulty: "Medium" },
        { title: "Mensuration", description: "Area and perimeter calculations", difficulty: "Hard" },
        { title: "Statistics", description: "Data handling and probability", difficulty: "Easy" },
        { title: "Coordinate Geometry", description: "Plotting points and graphs", difficulty: "Hard" },
        { title: "Trigonometry", description: "Ratios and identities", difficulty: "Hard" },
        { title: "Quadratic Equations", description: "Solving quadratic problems", difficulty: "Medium" },
      ],
      science: [
        { title: "Matter and Materials", description: "States of matter, properties", difficulty: "Easy" },
        { title: "Living Organisms", description: "Plants and animals", difficulty: "Easy" },
        { title: "Natural Resources", description: "Water, air, soil", difficulty: "Medium" },
        { title: "Energy and Motion", description: "Force, work, energy", difficulty: "Medium" },
        { title: "Light and Sound", description: "Properties of light and sound", difficulty: "Hard" },
        { title: "Our Environment", description: "Ecosystem and pollution", difficulty: "Easy" },
      ],
      physics: [
        { title: "Motion", description: "Types of motion, velocity, acceleration", difficulty: "Medium" },
        { title: "Force and Laws of Motion", description: "Newton's laws", difficulty: "Hard" },
        { title: "Gravitation", description: "Universal law of gravitation", difficulty: "Hard" },
        { title: "Work and Energy", description: "Work, power, energy conservation", difficulty: "Medium" },
        { title: "Sound", description: "Production and propagation", difficulty: "Easy" },
        { title: "Light", description: "Reflection and refraction", difficulty: "Medium" },
        { title: "Electricity", description: "Current, voltage, resistance", difficulty: "Hard" },
        { title: "Magnetic Effects", description: "Electromagnetic induction", difficulty: "Hard" },
      ],
      chemistry: [
        { title: "Matter in Our Surroundings", description: "States and properties", difficulty: "Easy" },
        { title: "Atoms and Molecules", description: "Atomic structure", difficulty: "Medium" },
        { title: "Structure of Atom", description: "Electrons, protons, neutrons", difficulty: "Hard" },
        { title: "Chemical Reactions", description: "Types of reactions", difficulty: "Medium" },
        { title: "Acids and Bases", description: "Properties and reactions", difficulty: "Easy" },
        { title: "Metals and Non-metals", description: "Properties and uses", difficulty: "Medium" },
        { title: "Periodic Classification", description: "Periodic table", difficulty: "Hard" },
        { title: "Carbon Compounds", description: "Organic chemistry basics", difficulty: "Hard" },
      ],
      biology: [
        { title: "Life Processes", description: "Nutrition, respiration, transport", difficulty: "Medium" },
        { title: "Control and Coordination", description: "Nervous and hormonal systems", difficulty: "Hard" },
        { title: "Reproduction", description: "Sexual and asexual reproduction", difficulty: "Medium" },
        { title: "Heredity and Evolution", description: "Genetics and natural selection", difficulty: "Hard" },
        { title: "Our Environment", description: "Ecosystem management", difficulty: "Easy" },
        { title: "Natural Resource Management", description: "Conservation strategies", difficulty: "Medium" },
        { title: "Human Body", description: "Organ systems", difficulty: "Medium" },
        { title: "Plant Kingdom", description: "Classification of plants", difficulty: "Easy" },
      ],
    }

    const baseChapters = chapterTemplates[subject as keyof typeof chapterTemplates] || chapterTemplates.science
    const numChapters = Math.min(baseChapters.length, classNum >= 11 ? 8 : classNum >= 9 ? 6 : 4)

    return baseChapters.slice(0, numChapters).map((chapter, index) => ({
      ...chapter,
      number: index + 1,
      completed: Math.random() > 0.6, // Random completion status
      inProgress: Math.random() > 0.7 && Math.random() < 0.6, // Some in progress
      xp: (index + 1) * 50,
      estimatedTime: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
    }))
  }

  const subjectDetails = getSubjectDetails(subjectName)
  const chapters = getChaptersForSubject(subjectName, classNumber)
  const completedChapters = chapters.filter((ch) => ch.completed).length
  const totalProgress = Math.round((completedChapters / chapters.length) * 100)

  const handleBackToClass = () => {
    router.push(`/class/${classNumber}`)
  }

  const handleChapterClick = (chapterNumber: number) => {
    router.push(`/class/${classNumber}/subject/${subjectName}/chapter/${chapterNumber}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Hard":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
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
        <header className="p-6 flex justify-between items-center">
          <Navigation
            showBackButton={true}
            backUrl={`/class/${classNumber}`}
            backLabel={`${currentLang.backToClass} ${classNumber}`}
            subtitle={`${currentLang.subjects[subjectName as keyof typeof currentLang.subjects]} - Class ${classNumber}`}
          />

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-semibold">1,250 XP</span>
              <Badge className="bg-yellow-500 text-black text-xs">Lv.3</Badge>
            </div>
          </div>
        </header>

        <div className="px-6 pb-6">
          {/* Subject Info */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentLang.subjects[subjectName as keyof typeof currentLang.subjects]} {currentLang.chapters}
            </h2>
            <p className="text-white/80 mb-4">{currentLang.selectChapter}</p>

            {/* Progress Overview */}
            <Card className="bg-white/20 backdrop-blur-lg border-white/30 max-w-md mx-auto">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{currentLang.totalProgress}</span>
                  <span className="text-white font-bold">{totalProgress}%</span>
                </div>
                <Progress value={totalProgress} className="h-3 mb-2" />
                <div className="flex justify-between text-sm text-white/80">
                  <span>
                    {completedChapters}/{chapters.length} {currentLang.chapters}
                  </span>
                  <span>{completedChapters * 50} XP earned</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chapters Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => {
                const isLocked = index > 0 && !chapters[index - 1].completed && !chapter.completed

                return (
                  <Card
                    key={chapter.number}
                    className={`bg-white/20 backdrop-blur-lg border-white/30 transition-all duration-300 animate-bounce-in ${
                      isLocked ? "opacity-60 cursor-not-allowed" : "hover:bg-white/30 hover:scale-105 cursor-pointer"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => !isLocked && handleChapterClick(chapter.number)}
                  >
                    <CardContent className="p-6">
                      {/* Chapter Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-bold text-lg">Chapter {chapter.number}</span>
                            <Badge className={`text-xs text-white ${getDifficultyColor(chapter.difficulty)}`}>
                              {chapter.difficulty}
                            </Badge>
                          </div>
                          <h3 className="text-white font-semibold mb-1">{chapter.title}</h3>
                          <p className="text-white/80 text-sm">{chapter.description}</p>
                        </div>

                        <div className="ml-4">
                          {isLocked ? (
                            <Lock className="w-6 h-6 text-gray-400" />
                          ) : chapter.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : chapter.inProgress ? (
                            <PlayCircle className="w-6 h-6 text-yellow-400" />
                          ) : (
                            <PlayCircle className="w-6 h-6 text-blue-400" />
                          )}
                        </div>
                      </div>

                      {/* Chapter Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-white/80">
                          <Clock className="w-4 h-4" />
                          <span>{chapter.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Star className="w-4 h-4" />
                          <span>{chapter.xp} XP</span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="mb-4">
                        {isLocked ? (
                          <Badge className="bg-gray-500 text-white">
                            <Lock className="w-3 h-3 mr-1" />
                            {currentLang.locked}
                          </Badge>
                        ) : chapter.completed ? (
                          <Badge className="bg-green-500 text-white">
                            <Trophy className="w-3 h-3 mr-1" />
                            {currentLang.completed}
                          </Badge>
                        ) : chapter.inProgress ? (
                          <Badge className="bg-yellow-500 text-black">
                            <PlayCircle className="w-3 h-3 mr-1" />
                            {currentLang.inProgress}
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-500 text-white">
                            <PlayCircle className="w-3 h-3 mr-1" />
                            Ready to start
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button
                        className={`w-full ${
                          isLocked
                            ? "bg-gray-500 cursor-not-allowed"
                            : chapter.completed
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                              : chapter.inProgress
                                ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        }`}
                        disabled={isLocked}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (!isLocked) handleChapterClick(chapter.number)
                        }}
                      >
                        {isLocked
                          ? currentLang.locked
                          : chapter.inProgress
                            ? currentLang.continueChapter
                            : currentLang.startChapter}
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
