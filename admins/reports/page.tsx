"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, DollarSign, Download, Calendar } from "lucide-react";

export default function ReportsAnalytics() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Reports & Analytics
                    </h1>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        In-depth statistics and performance metrics of the platform.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors shadow-sm">
                        <Calendar className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-500 transition-all">
                        <Download className="h-4 w-4" />
                        Export Data
                    </button>
                </div>
            </motion.div>

            {/* Top Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid gap-6 sm:grid-cols-3"
            >
                {[
                    { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/10", line: "bg-emerald-500", border: "border-emerald-100 dark:border-emerald-500/20" },
                    { label: "New Users", value: "+2,350", change: "+14.2%", icon: Users, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-500/10", line: "bg-blue-500", border: "border-blue-100 dark:border-blue-500/20" },
                    { label: "Conversion Rate", value: "4.83%", change: "+2.4%", icon: TrendingUp, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-500/10", line: "bg-sky-500", border: "border-sky-100 dark:border-sky-500/20" }
                ].map((stat, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.line}`}></div>
                        <div className="flex items-center gap-4">
                            <div className={`rounded-xl p-3 border ${stat.border} ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center text-sm">
                            <span className="flex items-center font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md">
                                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                                {stat.change}
                            </span>
                            <span className="ml-2 text-slate-500 dark:text-slate-400">vs last month</span>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm min-h-[400px]"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Traffic Overview</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Daily active users over the last 7 days</p>
                        </div>
                        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                            <BarChart3 className="h-5 w-5 text-slate-400" />
                        </div>
                    </div>

                    {/* Placeholder Chart */}
                    <div className="relative flex-1 flex items-end gap-3 justify-between mt-auto pt-10 border-b border-slate-200 dark:border-slate-800 pb-2">
                        {/* Background grid lines */}
                        <div className="absolute inset-x-0 bottom-2 top-0 flex flex-col justify-between pointer-events-none">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-full border-t border-slate-100 dark:border-slate-800 border-dashed" />
                            ))}
                        </div>

                        {/* Bars */}
                        {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                            <div key={i} className="relative z-10 w-full group flex flex-col items-center">
                                <div
                                    className="w-full max-w-[40px] rounded-t-lg bg-blue-100 dark:bg-blue-900/40 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors relative"
                                    style={{ height: `${height}%` }}
                                >
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-blue-600 dark:bg-blue-500 rounded-t-lg transition-all"
                                        style={{ height: `${height * 0.7}%` }} // Darker portion
                                    ></div>
                                </div>
                                <div className="absolute -bottom-7 w-full text-center text-xs font-medium text-slate-500 dark:text-slate-400">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Top Demographics</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">User distribution by country</p>
                        </div>
                    </div>

                    <div className="space-y-6 mt-2">
                        {[
                            { country: "United States", value: "45%", count: "12,450", color: "bg-blue-600 dark:bg-blue-500" },
                            { country: "United Kingdom", value: "25%", count: "6,210", color: "bg-sky-500 dark:bg-sky-400" },
                            { country: "Canada", value: "15%", count: "4,150", color: "bg-sky-500 dark:bg-sky-400" },
                            { country: "Germany", value: "10%", count: "2,840", color: "bg-teal-500 dark:bg-teal-400" },
                            { country: "Other", value: "5%", count: "1,980", color: "bg-slate-300 dark:bg-slate-600" },
                        ].map((item, idx) => (
                            <div key={idx} className="group cursor-default">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item.country}</span>
                                    <span className="text-slate-500 dark:text-slate-400 font-medium">{item.count}</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                    <div
                                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                                        style={{ width: item.value }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
