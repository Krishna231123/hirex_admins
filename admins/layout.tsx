"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Users,
    Building2,
    Briefcase,
    BarChart3,
    LogOut,
    Menu,
    ChevronLeft,
    Bell,
    Settings,
    Search
} from "lucide-react";

export default function AdminsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admins", icon: LayoutDashboard },
        { name: "Manage Jobs", href: "/admins/jobs", icon: Briefcase },
        { name: "Manage Users", href: "/admins/users", icon: Users },
        { name: "Manage Companies", href: "/admins/companies", icon: Building2 },
        { name: "Reports", href: "/admins/reports", icon: BarChart3 },
    ];

    return (
        <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    width: isSidebarOpen ? 260 : 80,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-20 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-sm shrink-0"
            >
                {/* Logo Area */}
                <div className="flex h-16 items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800">
                    <AnimatePresence mode="popLayout">
                        {isSidebarOpen && (
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.1 } }}
                                className="text-xl font-bold tracking-tight truncate flex items-center gap-1.5"
                            >
                                <span>
                                    <span className="text-[#0ea5e9]">Hire</span><span className="text-slate-900 dark:text-white font-black">X</span>
                                </span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium text-lg">Admin</span>
                            </motion.span>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-[#0ea5e9] hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors mx-auto"
                    >
                        {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    group relative flex items-center rounded-xl px-3 py-2.5 transition-all duration-200
                                    ${isActive
                                        ? "bg-sky-50 dark:bg-slate-800 text-[#0ea5e9] font-semibold"
                                        : "text-slate-500 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] font-medium"}
                                `}
                                title={!isSidebarOpen ? item.name : undefined}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#0ea5e9] rounded-r-full"
                                    />
                                )}
                                <item.icon
                                    className={`h-5 w-5 shrink-0 transition-colors duration-200 
                                        ${isActive ? "text-[#0ea5e9]" : "text-slate-400 dark:text-slate-500 group-hover:text-[#0ea5e9]"}
                                        ${!isSidebarOpen && "mx-auto"}
                                    `}
                                />
                                <AnimatePresence mode="popLayout">
                                    {isSidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0, transition: { duration: 0.1 } }}
                                            className="ml-3 truncate text-sm"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Actions */}
                <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                    <Link
                        href="/settings"
                        className="group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-[#0ea5e9] transition-colors"
                        title={!isSidebarOpen ? "Settings" : undefined}
                    >
                        <Settings className={`h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500 transition-colors group-hover:text-[#0ea5e9] ${!isSidebarOpen && "mx-auto"}`} />
                        {isSidebarOpen && <span className="ml-3 truncate">Settings</span>}
                    </Link>
                    <Link
                        href="/"
                        className="group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        title={!isSidebarOpen ? "Sign Out" : undefined}
                    >
                        <LogOut className={`h-5 w-5 shrink-0 transition-colors ${!isSidebarOpen && "mx-auto"}`} />
                        {isSidebarOpen && <span className="ml-3 truncate">Sign Out</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-full pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all focus:bg-white dark:focus:bg-slate-800 focus:shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-slate-900"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#0ea5e9] to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md cursor-pointer ring-2 ring-white">
                            A
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="mx-auto max-w-[1400px]">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
