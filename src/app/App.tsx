import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Home,
  BarChart3,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  Grid,
  Wrench,
  Bell,
  User,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  RefreshCw,
  Edit,
  TrendingUp,
  UsersRound,
  Briefcase,
  Trophy,
  Target,
  Award,
  Gift,
  X,
  CheckCircle2,
  Circle,
  Sparkles,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const chartData = [
  { date: "15 мая", value: 820 },
  { date: "16 мая", value: 950 },
  { date: "17 мая", value: 890 },
  { date: "18 мая", value: 1100 },
  { date: "19 мая", value: 1050 },
  { date: "20 мая", value: 1180 },
  { date: "21 мая", value: 1245 },
];

const models = [
  {
    id: 1,
    name: "Sakura",
    karma: 567,
    subscribers: 34,
    posts: 24,
    avatar:
      "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "Megan",
    karma: 489,
    subscribers: 28,
    posts: 21,
    avatar:
      "https://images.unsplash.com/photo-1692869439847-80c355a2b7f2?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    name: "Mimi",
    karma: 412,
    subscribers: 19,
    posts: 18,
    avatar:
      "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=80&h=80&fit=crop",
  },
  {
    id: 4,
    name: "Kaori",
    karma: 356,
    subscribers: 15,
    posts: 16,
    avatar:
      "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=80&h=80&fit=crop",
  },
];

const shifts = [
  {
    day: "Пн",
    date: "15",
    status: "completed",
    posts: 32,
    karma: 1245,
    time: "14:05 - 05:40",
  },
  {
    day: "Вт",
    date: "16",
    status: "completed",
    posts: 28,
    karma: 1050,
    time: "14:20 - 04:15",
  },
  {
    day: "Ср",
    date: "17",
    status: "warmup",
    posts: 18,
    karma: 680,
    time: "15:00 - 02:30",
  },
  {
    day: "Чт",
    date: "18",
    status: "completed",
    posts: 35,
    karma: 1380,
    time: "13:45 - 06:10",
  },
  {
    day: "Пт",
    date: "19",
    status: "completed",
    posts: 30,
    karma: 1150,
    time: "14:30 - 05:00",
  },
  {
    day: "Сб",
    date: "20",
    status: "pending",
    posts: 0,
    karma: 0,
    time: "—",
  },
  {
    day: "Вс",
    date: "21",
    status: "pending",
    posts: 0,
    karma: 0,
    time: "—",
  },
];

const goals = [
  {
    id: 1,
    title: "Занять топ 10",
    xp: 25,
    completed: true,
    borderColor: "red",
    description:
      "Войти в топ-10 недели в сабреддите от 100к подписчиков",
    progress: 8,
    total: 10,
    reward: "25 XP + 5 монет",
  },
  {
    id: 2,
    title: "7 дней без пропусков",
    xp: 15,
    completed: false,
    borderColor: "blue",
    description:
      "Отработать 7 дней подряд без единого пропуска смены",
    progress: 5,
    total: 7,
    reward: "15 XP",
  },
  {
    id: 3,
    title: "Написать тайтл со словом cat",
    xp: 10,
    completed: true,
    borderColor: "yellow",
    description: "Написать тайтл со словом cat",
    progress: 45,
    total: 45,
    reward: "10 XP + 5 монет",
  },
  {
    id: 4,
    title: "Отпостить смену без ремувов",
    xp: 10,
    completed: false,
    borderColor: "yellow",
    description: "Отпостить смену без единого удаления поста",
    progress: 68,
    total: 100,
    reward: "10 XP",
  },
];

const achievements = [
  {
    id: 1,
    title: "Post Master III",
    description: "Сделано 1000 постов",
    progress: 750,
    total: 1000,
    icon: "📝",
  },
  {
    id: 2,
    title: "Karma Hunter",
    description: "Набрано 50000 кармы",
    progress: 38250,
    total: 50000,
    icon: "⚡",
  },
  {
    id: 3,
    title: "Day Streak",
    description: "14 дней подряд",
    progress: 6,
    total: 14,
    icon: "🔥",
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [gamificationOpen, setGamificationOpen] =
    useState(true);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [chartTab, setChartTab] = useState("karma");
  const [expandedGoals, setExpandedGoals] = useState<number[]>(
    [],
  );

  const menuItems = [
    { id: "dashboard", icon: Home, label: "Главная" },
    { id: "shifts", icon: Briefcase, label: "Смены" },
    { id: "models", icon: Users, label: "Модели и аккаунты" },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Графики и аналитика",
    },
    { id: "tasks", icon: Target, label: "Задания" },
    {
      id: "reviews",
      icon: MessageSquare,
      label: "Отзывы по контенту",
    },
    { id: "tables", icon: Grid, label: "Таблицы" },
    {
      id: "tools",
      icon: Wrench,
      label: "Инструменты",
      hasDropdown: true,
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Уведомления",
      badge: 3,
    },
    { id: "profile", icon: User, label: "Профиль" },
    { id: "help", icon: HelpCircle, label: "Помощь" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Left Sidebar */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -260 }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#0f0f14] to-[#1a1a24] border-r border-purple-500/10 z-50"
      >
        <div className="p-6 h-full flex flex-col">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=80&h=80&fit=crop"
                  alt="Sofia"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/50"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f0f14]"></span>
              </div>
              <div>
                <p className="font-semibold">Sofia</p>
                <p className="text-xs text-gray-400">Worker</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Онлайн
            </div>
          </motion.div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto space-y-1">
            {menuItems.map((item, index) => (
              <div key={item.id}>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => {
                    setActiveNav(item.id);
                    if (item.id === "tools")
                      setToolsOpen(!toolsOpen);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all group ${
                    activeNav === item.id
                      ? "bg-purple-500/20 text-purple-300 shadow-lg shadow-purple-500/20"
                      : "text-gray-400 hover:bg-purple-500/5 hover:text-gray-200"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span className="text-sm">
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${toolsOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </motion.button>
                {item.hasDropdown && toolsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-8 mt-1 space-y-1"
                  >
                    {["Redgifs", "Spoofer", "Analysis"].map(
                      (subItem) => (
                        <button
                          key={subItem}
                          className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-gray-200 rounded-lg hover:bg-purple-500/5"
                        >
                          {subItem}
                        </button>
                      ),
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Collapse Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-400 hover:text-gray-200 rounded-xl hover:bg-purple-500/5 transition-all"
          >
            <ChevronLeft size={18} />
            <span>Свернуть меню</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } ${gamificationOpen ? "mr-80" : "mr-0"} p-8 overflow-y-auto h-screen`}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Привет, Sofia!
              </h1>
              <p className="text-gray-400">
                Вот твоя статистика за сегодня
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-xl text-sm focus:outline-none focus:border-purple-500/60 backdrop-blur-sm">
                <option>Сегодня</option>
                <option>Вчера</option>
                <option>Неделя</option>
                <option>Месяц</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center gap-2 text-sm shadow-lg shadow-purple-500/30"
              >
                <RefreshCw size={16} />
                Обновить
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Посты за сегодня",
              value: "32",
              change: "+12%",
              yesterday: "Вчера: 28",
              icon: Edit,
              gradient: "from-purple-500/20 to-purple-600/5",
              iconBg: "from-purple-500 to-purple-600",
            },
            {
              title: "Карма",
              value: "+1245",
              change: "+8.5%",
              yesterday: "Вчера: +1150",
              icon: TrendingUp,
              gradient: "from-orange-500/20 to-orange-600/5",
              iconBg: "from-orange-500 to-orange-600",
            },
            {
              title: "Подписчики",
              value: "+86",
              change: "+5.2%",
              yesterday: "Вчера: +82",
              icon: UsersRound,
              gradient: "from-pink-500/20 to-pink-600/5",
              iconBg: "from-pink-500 to-pink-600",
            },
            {
              title: "Смены",
              value: "6.5",
              change: null,
              yesterday: "",
              icon: Briefcase,
              gradient: "from-blue-500/20 to-blue-600/5",
              iconBg: "from-blue-500 to-blue-600",
            },
          ].map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${kpi.gradient} backdrop-blur-xl border border-purple-500/10 shadow-xl`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${kpi.iconBg} shadow-lg`}
                >
                  <kpi.icon size={24} />
                </div>
                {kpi.change && (
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">
                    {kpi.change}
                  </span>
                )}
              </div>
              <motion.p
                className="text-3xl font-bold mb-1"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                }}
              >
                {kpi.value}
              </motion.p>
              <p className="text-sm text-gray-400 mb-1">
                {kpi.title}
              </p>
              <p className="text-xs text-gray-500">
                {kpi.yesterday}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Chart and Models */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/5 backdrop-blur-xl border border-purple-500/10 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">
                Динамика за 7 дней
              </h3>
              <div className="flex gap-2">
                {["Карма", "Подписчики", "Посты"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setChartTab(tab.toLowerCase())
                    }
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      chartTab === tab.toLowerCase()
                        ? "bg-purple-500/30 text-white shadow-lg shadow-purple-500/20"
                        : "bg-purple-900/20 text-gray-400 hover:bg-purple-500/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData}>
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#6b21a8"
                  opacity={0.1}
                />
                <XAxis
                  dataKey="date"
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                />
                <YAxis
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a0f2e",
                    border: "1px solid #a855f7",
                    borderRadius: "12px",
                    boxShadow:
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#a855f7", r: 5 }}
                  activeDot={{ r: 7, fill: "#ec4899" }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Models */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/5 backdrop-blur-xl border border-purple-500/10 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">
              Мои модели
            </h3>
            <div className="space-y-3">
              {models.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:bg-purple-500/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ImageWithFallback
                      src={model.avatar}
                      alt={model.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500/30"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {model.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {model.posts} постов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-400">
                      +{model.karma} 💎
                    </span>
                    <span className="text-pink-400">
                      +{model.subscribers} 👥
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Shifts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/5 backdrop-blur-xl border border-purple-500/10 shadow-xl"
        >
          <h3 className="text-xl font-bold mb-6">Мои смены</h3>
          <div className="grid grid-cols-7 gap-4 mb-4">
            {shifts.map((shift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  shift.status === "completed"
                    ? "bg-green-500/10 border-green-500/50 shadow-lg shadow-green-500/20"
                    : shift.status === "warmup"
                      ? "bg-yellow-500/10 border-yellow-500/50"
                      : "bg-gray-500/5 border-gray-500/20"
                } ${index === 0 ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0a0a0f]" : ""}`}
              >
                <div className="text-center mb-3">
                  <p className="text-xs text-gray-400 mb-1">
                    {shift.day}
                  </p>
                  <p className="text-2xl font-bold">
                    {shift.date}
                  </p>
                </div>
                <div className="mb-3">
                  {shift.status === "completed" && (
                    <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-lg justify-center">
                      ✅ Смена
                    </span>
                  )}
                  {shift.status === "warmup" && (
                    <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-lg justify-center">
                      🟡 Прогрев
                    </span>
                  )}
                  {shift.status === "pending" && (
                    <span className="flex items-center gap-1 text-xs text-gray-400 bg-gray-400/10 px-2 py-1 rounded-lg justify-center">
                      ⚫ Не начата
                    </span>
                  )}
                </div>
                {shift.status !== "pending" && (
                  <div className="space-y-1 text-xs">
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">
                        {shift.posts}
                      </span>{" "}
                      постов
                    </p>
                    <p className="text-gray-400">
                      <span className="text-orange-400 font-semibold">
                        +{shift.karma}
                      </span>{" "}
                      💎
                    </p>
                    <p className="text-gray-500 text-[10px]">
                      {shift.time}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 bg-purple-500/5 p-3 rounded-lg border border-purple-500/10">
            💡 Смена считается отработанной при 25 ≤ постов &lt;
            35. Прогрев — от 15 до 24 постов. Менее 15 — не
            засчитывается.
          </p>
        </motion.div>
      </div>

      {/* Right Panel - Gamification */}
      <AnimatePresence>
        {gamificationOpen && (
          <motion.aside
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-screen w-80 bg-gradient-to-b from-purple-900/40 via-blue-900/30 to-pink-900/30 backdrop-blur-xl border-l border-purple-500/20 overflow-y-auto z-50"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ТВОЙ ПРОГРЕСС
                </h2>
                <button
                  onClick={() => setGamificationOpen(false)}
                  className="p-2 hover:bg-purple-500/20 rounded-lg transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Profile XP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=80&h=80&fit=crop"
                      alt="Sofia"
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-500/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      23
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Poster</p>
                    <p className="text-xs text-gray-400">
                      Уровень 23 из 150
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>56 / 60 XP</span>
                    <span>97%</span>
                  </div>
                  <div className="h-3 bg-purple-900/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "97%" }}
                      transition={{
                        delay: 0.5,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="text-center p-2 bg-purple-500/10 rounded-lg">
                    <p className="text-xs text-gray-400">XP</p>
                    <p className="font-bold">1250</p>
                  </div>
                  <div className="text-center p-2 bg-orange-500/10 rounded-lg">
                    <p className="text-xs text-gray-400">
                      Стрик
                    </p>
                    <p className="font-bold">6 🔥</p>
                  </div>
                  <div className="text-center p-2 bg-yellow-500/10 rounded-lg">
                    <p className="text-xs text-gray-400">
                      Монеты
                    </p>
                    <p className="font-bold">250 💰</p>
                  </div>
                </div>
              </motion.div>

              {/* Weekly Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <Target
                      size={18}
                      className="text-blue-400"
                    />
                    Цели на неделю
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  {goals.map((goal, index) => {
                    const isExpanded = expandedGoals.includes(
                      goal.id,
                    );
                    const borderColors = {
                      red: "border-red-500",
                      blue: "border-blue-500",
                      yellow: "border-yellow-500",
                      purple: "border-purple-500",
                    };
                    const bgColors = {
                      red: "bg-red-500/5 hover:bg-red-500/10",
                      blue: "bg-blue-500/5 hover:bg-blue-500/10",
                      yellow:
                        "bg-yellow-500/5 hover:bg-yellow-500/10",
                      purple:
                        "bg-purple-500/5 hover:bg-purple-500/10",
                    };
                    const textColors = {
                      red: "text-red-400",
                      blue: "text-blue-400",
                      yellow: "text-yellow-400",
                      purple: "text-purple-400",
                    };
                    const bgColorClass = {
                      red: "bg-red-400/10",
                      blue: "bg-blue-400/10",
                      yellow: "bg-yellow-400/10",
                      purple: "bg-purple-400/10",
                    };

                    return (
                      <motion.div
                        key={goal.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                        }}
                        className={`rounded-xl border-2 ${borderColors[goal.borderColor]} ${bgColors[goal.borderColor]} transition-all overflow-hidden`}
                      >
                        <div className="p-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                goal.completed
                                  ? "bg-green-500 border-green-500"
                                  : "border-gray-500"
                              }`}
                            >
                              {goal.completed && (
                                <CheckCircle2 size={14} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm ${goal.completed ? "line-through text-gray-500" : ""}`}
                              >
                                {goal.title}
                              </p>
                            </div>
                            <span
                              className={`text-xs ${textColors[goal.borderColor]} ${bgColorClass[goal.borderColor]} px-2 py-1 rounded-lg flex-shrink-0`}
                            >
                              +{goal.xp} XP
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setExpandedGoals((prev) =>
                                prev.includes(goal.id)
                                  ? prev.filter(
                                      (id) => id !== goal.id,
                                    )
                                  : [...prev, goal.id],
                              );
                            }}
                            className={`w-full text-xs ${textColors[goal.borderColor]} hover:underline text-left`}
                          >
                            {isExpanded
                              ? "Скрыть"
                              : "Посмотреть"}
                          </button>
                        </div>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-3 pb-3"
                            >
                              <div
                                className={`p-3 rounded-lg ${bgColorClass[goal.borderColor]} space-y-2`}
                              >
                                <p className="text-xs text-gray-300">
                                  {goal.description}
                                </p>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-gray-400">
                                    Награда:
                                  </span>
                                  <span
                                    className={`font-semibold ${textColors[goal.borderColor]}`}
                                  >
                                    {goal.reward}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-600/5 border border-yellow-500/20 shadow-xl"
              >
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Trophy
                    size={18}
                    className="text-yellow-400"
                  />
                  Последние ачивки
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">
                            {achievement.title}
                          </p>
                          <p className="text-xs text-gray-400">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>
                            {achievement.progress} /{" "}
                            {achievement.total}
                          </span>
                          <span>
                            {Math.round(
                              (achievement.progress /
                                achievement.total) *
                                100,
                            )}
                            %
                          </span>
                        </div>
                        <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(achievement.progress / achievement.total) * 100}%`,
                            }}
                            transition={{
                              delay: 0.6 + index * 0.1,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Все ачивки
                </button>
              </motion.div>

              {/* Wheel of Fortune */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 shadow-xl cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-pink-500/50">
                    🎡
                  </div>
                  <p className="font-bold mb-1">
                    Колесо фортуны
                  </p>
                  <p className="text-sm text-gray-400">
                    Доступно в понедельник при выполнении всех заданий
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Toggle Gamification Panel (when closed) */}
      {!gamificationOpen && (
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          onClick={() => setGamificationOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-l-2xl shadow-2xl shadow-purple-500/50 z-50"
          whileHover={{ x: -5, scale: 1.05 }}
        >
          <Sparkles size={24} />
        </motion.button>
      )}
    </div>
  );
}
