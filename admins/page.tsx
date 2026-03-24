"use client";

import { motion } from "framer-motion";
import { Users, Building2, Briefcase, TrendingUp, MoreHorizontal, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminsDashboard() {
    const stats = [
        {
            name: "Total Users",
            value: "14,302",
            change: "+12.5%",
            trend: "up",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            name: "Active Companies",
            value: "842",
            change: "+5.2%",
            trend: "up",
            icon: Building2,
            color: "text-sky-600",
            bg: "bg-sky-50",
        },
        {
            name: "Live Jobs",
            value: "3,245",
            change: "-1.1%",
            trend: "down",
            icon: Briefcase,
            color: "text-pink-600",
            bg: "bg-pink-50",
        },
        {
            name: "Profile Views",
            value: "2.4M",
            change: "+24.3%",
            trend: "up",
            icon: TrendingUp,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
        },
    ];

    return (
        <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Admin Overview
                    </h1>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Welcome back! Here's what's happening today.
                    </p>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {stats.map((stat, index) => (
                    <div
                        key={stat.name}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`rounded-xl p-2.5 ${stat.bg} ${stat.bg.includes('blue') ? 'dark:bg-blue-900/20' : stat.bg.includes('sky') ? 'dark:bg-sky-900/20' : stat.bg.includes('pink') ? 'dark:bg-pink-900/20' : 'dark:bg-emerald-900/20'}`}>
                                <stat.icon className={`h-5 w-5 ${stat.color} ${stat.color.includes('blue') ? 'dark:text-blue-400' : stat.color.includes('sky') ? 'dark:text-sky-400' : stat.color.includes('pink') ? 'dark:text-pink-400' : 'dark:text-emerald-400'}`} />
                            </div>
                            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {stat.name}
                            </h3>
                            <div className="flex items-baseline gap-2 mt-1">
                                <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                                    {stat.value}
                                </p>
                                <span className={`flex items-center text-xs font-medium px-1.5 py-0.5 rounded-full 
                                    ${stat.trend === 'up' ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20'}`}
                                >
                                    {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Content Layout */}
            <div className="grid gap-6 lg:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Applications</h2>
                        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="font-medium px-4 py-3 rounded-l-lg">Candidate</th>
                                    <th className="font-medium px-4 py-3">Applied For</th>
                                    <th className="font-medium px-4 py-3">Date</th>
                                    <th className="font-medium px-4 py-3 rounded-r-lg">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <tr key={item} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-medium">
                                                    JD
                                                </div>
                                                <div className="font-medium text-slate-900 dark:text-slate-200">John Doe {item}</div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Frontend Developer</td>
                                        <td className="px-4 py-3 text-slate-500 dark:text-slate-500">Today, 10:30 AM</td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">
                                                In Review
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Platform Activity</h2>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="relative mt-1">
                                        <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                                        {i !== 3 && <div className="absolute top-2.5 bottom-[-1rem] left-1/2 w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700"></div>}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">New company registered</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">TechCorp Ltd joined the platform. 2h ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
