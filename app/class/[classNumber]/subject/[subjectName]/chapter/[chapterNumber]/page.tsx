"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, CheckCircle, BookOpen, Lightbulb, Target, ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ChapterPage() {
  const params = useParams()
  const router = useRouter()
  const classNumber = Number.parseInt(params.classNumber as string)
  const subjectName = params.subjectName as string
  const chapterNumber = Number.parseInt(params.chapterNumber as string)
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])

  useEffect(() => {
    const language = localStorage.getItem("userLanguage")
    if (language) setSelectedLanguage(language)
  }, [])

  const languages = {
    english: {
      title: "ShikshaPath",
      backToSubject: "Back to Subject",
      tableOfContents: "Table of Contents",
      mainContent: "Main Content",
      examples: "Examples",
      exercises: "Exercises",
      progress: "Progress",
      completed: "Completed",
      markComplete: "Mark as Complete",
      nextSection: "Next Section",
      previousSection: "Previous Section",
      startExercises: "Start Exercises",
      viewExamples: "View Examples",
      chapterComplete: "Chapter Complete!",
      earnedXP: "You earned",
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
      backToSubject: "विषय पर वापस जाएं",
      tableOfContents: "विषय सूची",
      mainContent: "मुख्य सामग्री",
      examples: "उदाहरण",
      exercises: "अभ्यास",
      progress: "प्रगति",
      completed: "पूर्ण",
      markComplete: "पूर्ण के रूप में चिह्नित करें",
      nextSection: "अगला भाग",
      previousSection: "पिछला भाग",
      startExercises: "अभ्यास शुरू करें",
      viewExamples: "उदाहरण देखें",
      chapterComplete: "अध्याय पूर्ण!",
      earnedXP: "आपने अर्जित किया",
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

  // Generate chapter content based on subject and chapter
  const getChapterContent = (subject: string, chapterNum: number) => {
    const contentTemplates = {
      mathematics: {
        1: {
          title: "Number Systems",
          sections: [
            {
              title: "Introduction to Numbers",
              content:
                "Numbers are the foundation of mathematics. We use numbers to count, measure, and calculate. In this chapter, we'll explore different types of numbers and their properties.",
            },
            {
              title: "Natural Numbers",
              content:
                "Natural numbers are the counting numbers: 1, 2, 3, 4, 5, ... They are the first numbers we learn as children and form the basis for all other number systems.",
            },
            {
              title: "Whole Numbers",
              content:
                "Whole numbers include all natural numbers plus zero: 0, 1, 2, 3, 4, 5, ... Zero represents 'nothing' or 'empty' and is crucial in mathematics.",
            },
            {
              title: "Integers",
              content:
                "Integers include positive numbers, negative numbers, and zero: ..., -3, -2, -1, 0, 1, 2, 3, ... Negative numbers help us represent quantities below zero.",
            },
          ],
          examples: [
            {
              title: "Identifying Number Types",
              problem: "Classify these numbers: 5, -3, 0, 2.5, 1/2",
              solution:
                "5 is a natural number, whole number, and integer. -3 is an integer. 0 is a whole number and integer. 2.5 is a decimal. 1/2 is a fraction.",
            },
            {
              title: "Number Line",
              problem: "Plot -2, 0, 3 on a number line",
              solution:
                "Draw a horizontal line with equally spaced marks. Place -2 to the left of 0, 0 at the center, and 3 to the right of 0.",
            },
          ],
          exercises: [
            {
              question: "Which of the following is a natural number?",
              options: ["0", "-5", "3", "2.5"],
              correct: 2,
              explanation: "Natural numbers are positive counting numbers: 1, 2, 3, 4, ...",
            },
            {
              question: "What is the smallest whole number?",
              options: ["1", "0", "-1", "2"],
              correct: 1,
              explanation: "Whole numbers start from 0, so 0 is the smallest whole number.",
            },
          ],
        },
      },
      science: {
        1: {
          title: "Matter and Materials",
          sections: [
            {
              title: "What is Matter?",
              content:
                "Matter is anything that has mass and takes up space. Everything around us - air, water, rocks, plants, animals - is made of matter.",
            },
            {
              title: "States of Matter",
              content:
                "Matter exists in three main states: solid, liquid, and gas. Each state has different properties based on how particles are arranged and move.",
            },
            {
              title: "Properties of Solids",
              content:
                "Solids have a fixed shape and volume. Particles in solids are tightly packed and vibrate in fixed positions. Examples: ice, wood, metal.",
            },
            {
              title: "Properties of Liquids",
              content:
                "Liquids have a fixed volume but take the shape of their container. Particles can move around each other. Examples: water, oil, milk.",
            },
          ],
          examples: [
            {
              title: "Identifying States of Matter",
              problem: "Classify: ice cube, steam, orange juice",
              solution:
                "Ice cube is solid (fixed shape and volume). Steam is gas (no fixed shape or volume). Orange juice is liquid (fixed volume, takes container shape).",
            },
            {
              title: "State Changes",
              problem: "What happens when ice melts?",
              solution:
                "Ice (solid) changes to water (liquid) when heated. This is called melting. The particles gain energy and can move more freely.",
            },
          ],
          exercises: [
            {
              question: "Which state of matter has both fixed shape and volume?",
              options: ["Gas", "Liquid", "Solid", "Plasma"],
              correct: 2,
              explanation:
                "Solids have particles tightly packed in fixed positions, giving them both fixed shape and volume.",
            },
            {
              question: "What is the process called when liquid changes to gas?",
              options: ["Melting", "Freezing", "Evaporation", "Condensation"],
              correct: 2,
              explanation: "Evaporation is the process where liquid particles gain enough energy to become gas.",
            },
          ],
        },
      },
    }

    const subjectContent = contentTemplates[subject as keyof typeof contentTemplates]
    if (!subjectContent) {
      return {
        title: "Sample Chapter",
        sections: [
          {
            title: "Introduction",
            content:
              "This is a sample chapter content. In a real implementation, this would contain detailed educational material.",
          },
        ],
        examples: [],
        exercises: [],
      }
    }

    return subjectContent[chapterNum as keyof typeof subjectContent] || subjectContent[1]
  }

  const chapterContent = getChapterContent(subjectName, chapterNumber)
  const totalSections = chapterContent.sections.length
  const progressPercentage = Math.round((completedSections.length / totalSections) * 100)

  const handleBackToSubject = () => {
    router.push(`/class/${classNumber}/subject/${subjectName}`)
  }

  const handleSectionComplete = (sectionIndex: number) => {
    if (!completedSections.includes(sectionIndex)) {
      setCompletedSections([...completedSections, sectionIndex])
    }
  }

  const handleNextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleExerciseAnswer = (exerciseIndex: number, selectedOption: number) => {
    const exercise = chapterContent.exercises[exerciseIndex]
    if (selectedOption === exercise.correct) {
      alert(`Correct! ${exercise.explanation}`)
    } else {
      alert(`Incorrect. ${exercise.explanation}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <Navigation
          showBackButton={true}
          backUrl={`/class/${classNumber}/subject/${subjectName}`}
          backLabel={currentLang.backToSubject}
          subtitle={`${currentLang.subjects[subjectName as keyof typeof currentLang.subjects]} - Chapter ${chapterNumber}: ${chapterContent.title}`}
        />

        <div className="px-6 pb-6">
          {/* Progress Overview */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-high-contrast font-medium">{currentLang.progress}</span>
                <span className="text-high-contrast font-bold">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3 mb-2" />
              <div className="flex justify-between text-sm text-medium-contrast">
                <span>
                  {completedSections.length}/{totalSections} sections completed
                </span>
                <span>{completedSections.length * 25} XP earned</span>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-high-contrast flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {currentLang.tableOfContents}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    {chapterContent.sections.map((section, index) => (
                      <Button
                        key={index}
                        variant={currentSection === index ? "default" : "ghost"}
                        size="sm"
                        className={`w-full justify-start text-left ${
                          currentSection === index
                            ? "bg-white/20 text-high-contrast"
                            : "text-medium-contrast hover:text-high-contrast hover:bg-white/10"
                        }`}
                        onClick={() => setCurrentSection(index)}
                      >
                        <div className="flex items-center gap-2">
                          {completedSections.includes(index) ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-current" />
                          )}
                          <span className="text-xs">{section.title}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/10 border-white/20">
                  <TabsTrigger value="content" className="text-high-contrast">
                    {currentLang.mainContent}
                  </TabsTrigger>
                  <TabsTrigger value="examples" className="text-high-contrast">
                    {currentLang.examples}
                  </TabsTrigger>
                  <TabsTrigger value="exercises" className="text-high-contrast">
                    {currentLang.exercises}
                  </TabsTrigger>
                </TabsList>

                {/* Main Content Tab */}
                <TabsContent value="content" className="mt-6">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader>
                      <CardTitle className="text-high-contrast flex items-center justify-between">
                        <span>{chapterContent.sections[currentSection]?.title}</span>
                        {completedSections.includes(currentSection) && (
                          <Badge className="bg-green-500 text-white">
                            <Trophy className="w-3 h-3 mr-1" />
                            {currentLang.completed}
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-medium-contrast leading-relaxed text-lg">
                          {chapterContent.sections[currentSection]?.content}
                        </p>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between items-center mt-8">
                        <Button
                          variant="outline"
                          onClick={handlePreviousSection}
                          disabled={currentSection === 0}
                          className="bg-white/10 border-white/20 text-high-contrast hover:bg-white/20"
                        >
                          {currentLang.previousSection}
                        </Button>

                        <Button
                          onClick={() => handleSectionComplete(currentSection)}
                          disabled={completedSections.includes(currentSection)}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {currentLang.markComplete}
                        </Button>

                        <Button
                          onClick={handleNextSection}
                          disabled={currentSection === totalSections - 1}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        >
                          {currentLang.nextSection}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Examples Tab */}
                <TabsContent value="examples" className="mt-6">
                  <div className="space-y-6">
                    {chapterContent.examples.map((example, index) => (
                      <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardHeader>
                          <CardTitle className="text-high-contrast flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-400" />
                            Example {index + 1}: {example.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-high-contrast font-semibold mb-2">Problem:</h4>
                              <p className="text-medium-contrast">{example.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-high-contrast font-semibold mb-2">Solution:</h4>
                              <p className="text-medium-contrast">{example.solution}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Exercises Tab */}
                <TabsContent value="exercises" className="mt-6">
                  <div className="space-y-6">
                    {chapterContent.exercises.map((exercise, index) => (
                      <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardHeader>
                          <CardTitle className="text-high-contrast flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-400" />
                            Question {index + 1}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <p className="text-high-contrast font-medium">{exercise.question}</p>
                            <div className="grid grid-cols-1 gap-2">
                              {exercise.options.map((option, optionIndex) => (
                                <Button
                                  key={optionIndex}
                                  variant="outline"
                                  className="justify-start bg-white/5 border-white/20 text-medium-contrast hover:bg-white/20 hover:text-high-contrast"
                                  onClick={() => handleExerciseAnswer(index, optionIndex)}
                                >
                                  {String.fromCharCode(65 + optionIndex)}. {option}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
