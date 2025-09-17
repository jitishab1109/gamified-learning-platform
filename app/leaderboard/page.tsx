"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Medal, Award, Crown, Users, Zap, Filter } from "lucide-react"

export default function LeaderboardPage() {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [selectedFilter, setSelectedFilter] = useState("overall")
  const [selectedClass, setSelectedClass] = useState("all")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
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
      title: "Leaderboard",
      topPerformers: "Top Performers",
      yourRank: "Your Rank",
      filterBy: "Filter By",
      classFilter: "Class Filter",
      overall: "Overall",
      weekly: "This Week",
      monthly: "This Month",
      allClasses: "All Classes",
      rank: "Rank",
      student: "Student",
      level: "Level",
      xpPoints: "XP Points",
      chaptersCompleted: "Chapters Completed",
      averageScore: "Average Score",
      streakDays: "Streak Days",
    },
    hindi: {
      title: "लीडरबोर्ड",
      topPerformers: "शीर्ष प्रदर्शनकर्ता",
      yourRank: "आपकी रैंक",
      filterBy: "फ़िल्टर करें",
      classFilter: "कक्षा फ़िल्टर",
      overall: "समग्र",
      weekly: "इस सप्ताह",
      monthly: "इस महीने",
      allClasses: "सभी कक्षाएं",
      rank: "रैंक",
      student: "छात्र",
      level: "स्तर",
      xpPoints: "XP अंक",
      chaptersCompleted: "पूर्ण अध्याय",
      averageScore: "औसत स्कोर",
      streakDays: "लगातार दिन",
    },
  }

  const currentLang = languages[selectedLanguage as keyof typeof languages]

  // Generate mock leaderboard data
  const generateLeaderboardData = () => {
    const names = [
      "Arjun Kumar",
      "Priya Sharma",
      "Rahul Patel",
      "Sneha Gupta",
      "Vikram Singh",
      "Anita Rao",
      "Karan Mehta",
      "Pooja Jain",
      "Amit Verma",
      "Riya Agarwal",
      "Suresh Yadav",
      "Kavya Nair",
      "Rohit Joshi",
      "Meera Reddy",
      "Akash Pandey",
    ]

    return names.map((name, index) => ({
      id: index + 1,
      name,
      email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
      xp: Math.floor(Math.random() * 5000) + 1000,
      level: Math.floor(Math.random() * 10) + 1,
      chaptersCompleted: Math.floor(Math.random() * 50) + 10,
      exercisesCompleted: Math.floor(Math.random() * 200) + 50,
      averageScore: Math.floor(Math.random() * 40) + 60,
      streakDays: Math.floor(Math.random() * 30) + 1,
      achievements: Math.floor(Math.random() * 15) + 5,
      classNumber: Math.floor(Math.random() * 7) + 6,
      isCurrentUser: name.toLowerCase().includes(userEmail.split("@")[0]?.toLowerCase() || ""),
    }))
  }

  const [leaderboardData, setLeaderboardData] = useState(generateLeaderboardData())

  // Sort and filter data
  const filteredData = leaderboardData
    .filter((user) => selectedClass === "all" || user.classNumber.toString() === selectedClass)
    .sort((a, b) => {
      switch (selectedFilter) {
        case "weekly":
          return b.xp * 0.3 - a.xp * 0.3 // Simulate weekly data
        case "monthly":
          return b.xp * 0.7 - a.xp * 0.7 // Simulate monthly data
        default:
          return b.xp - a.xp
      }
    })
    .map((user, index) => ({ ...user, rank: index + 1 }))

  const currentUser = filteredData.find((user) => user.isCurrentUser)

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />
      case 3:
        return <Award className="w-6 h-6 text-orange-400" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-high-contrast font-bold">{rank}</span>
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-yellow-600"
      case 2:
        return "from-gray-300 to-gray-500"
      case 3:
        return "from-orange-400 to-orange-600"
      default:
        return "from-purple-500 to-blue-500"
    }
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-high-contrast">Loading...</div>
      </div>
    )
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
        <Navigation
          showBackButton={true}
          backUrl="/dashboard"
          backLabel="Back to Dashboard"
          title={currentLang.title}
          subtitle={currentLang.topPerformers}
        />

        <div className="px-6 pb-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-high-contrast" />
              <span className="text-high-contrast font-medium">{currentLang.filterBy}:</span>
            </div>

            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-40 bg-white/10 border-white/20 text-high-contrast">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overall">{currentLang.overall}</SelectItem>
                <SelectItem value="weekly">{currentLang.weekly}</SelectItem>
                <SelectItem value="monthly">{currentLang.monthly}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-40 bg-white/10 border-white/20 text-high-contrast">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{currentLang.allClasses}</SelectItem>
                <SelectItem value="6">Class 6</SelectItem>
                <SelectItem value="7">Class 7</SelectItem>
                <SelectItem value="8">Class 8</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">Class 11</SelectItem>
                <SelectItem value="12">Class 12</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Current User Rank */}
          {currentUser && (
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-300/30 mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(currentUser.rank)}
                      <span className="text-high-contrast font-bold text-lg">#{currentUser.rank}</span>
                    </div>
                    <div>
                      <p className="text-high-contrast font-semibold">{currentLang.yourRank}</p>
                      <p className="text-medium-contrast text-sm">{currentUser.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-high-contrast font-bold text-xl">{currentUser.xp.toLocaleString()} XP</p>
                    <p className="text-medium-contrast text-sm">Level {currentUser.level}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {filteredData.slice(0, 3).map((user, index) => (
              <Card
                key={user.id}
                className={`bg-gradient-to-br ${getRankColor(
                  user.rank,
                )} border-0 animate-bounce-in ${index === 0 ? "md:order-2 transform md:scale-110" : index === 1 ? "md:order-1" : "md:order-3"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{getRankIcon(user.rank)}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{user.name}</h3>
                  <p className="text-white/80 text-sm mb-2">Class {user.classNumber}</p>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-xl">{user.xp.toLocaleString()} XP</p>
                    <p className="text-white/80 text-sm">Level {user.level}</p>
                    <p className="text-white/80 text-xs">{user.chaptersCompleted} chapters</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Leaderboard */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-high-contrast flex items-center gap-2">
                <Users className="w-5 h-5" />
                Full Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 text-high-contrast font-semibold">{currentLang.rank}</th>
                      <th className="text-left p-4 text-high-contrast font-semibold">{currentLang.student}</th>
                      <th className="text-center p-4 text-high-contrast font-semibold">{currentLang.level}</th>
                      <th className="text-center p-4 text-high-contrast font-semibold">{currentLang.xpPoints}</th>
                      <th className="text-center p-4 text-high-contrast font-semibold">
                        {currentLang.chaptersCompleted}
                      </th>
                      <th className="text-center p-4 text-high-contrast font-semibold">{currentLang.averageScore}</th>
                      <th className="text-center p-4 text-high-contrast font-semibold">{currentLang.streakDays}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((user, index) => (
                      <tr
                        key={user.id}
                        className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                          user.isCurrentUser ? "bg-purple-500/20" : ""
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">{getRankIcon(user.rank)}</div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="text-high-contrast font-medium">{user.name}</p>
                            <p className="text-medium-contrast text-sm">Class {user.classNumber}</p>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <Badge className="bg-blue-500 text-white">{user.level}</Badge>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-high-contrast font-semibold">{user.xp.toLocaleString()}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-high-contrast">{user.chaptersCompleted}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-high-contrast">{user.averageScore}%</span>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-high-contrast">{user.streakDays}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
