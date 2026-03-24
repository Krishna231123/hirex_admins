"use client";

import { motion } from "framer-motion";
import { Search, MoreVertical, Edit2, Trash2, ShieldCheck, CheckCircle2, XCircle, Eye, Filter, Download } from "lucide-react";

export default function ManageJobs() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Manage Jobs
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Review, approve, or suspend job postings across the platform.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
            >
                {/* Actions Bar */}
                <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search by job title, ID, or company..."
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <Filter className="w-4 h-4" />
                            <span className="hidden sm:inline">Filters</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <select className="border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm cursor-pointer">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Pending Review</option>
                            <option>Suspended</option>
                        </select>
                        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 hover:shadow transition-all">
                            <Download className="w-4 h-4" />
                            Export List
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th scope="col" className="px-6 py-4">Job Info</th>
                                <th scope="col" className="px-6 py-4">Company</th>
                                <th scope="col" className="px-6 py-4">Status</th>
                                <th scope="col" className="px-6 py-4">Metrics</th>
                                <th scope="col" className="px-6 py-4">Posted / Expires</th>
                                <th scope="col" className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <tr key={item} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                                                {item % 2 === 0 ? "Senior Frontend Developer" : "Data Scientist"}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ID: JOB-{1040 + item} • {item % 2 === 0 ? "Remote" : "Hybrid"}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                                                {item % 2 === 0 ? "G" : "S"}
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-300">{item % 2 === 0 ? "Google India" : "Spotify"}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item === 3 ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 border border-amber-200/50">
                                                Pending Review
                                            </span>
                                        ) : item === 5 ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 border border-rose-200/50">
                                                Suspended
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/50">
                                                Active
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-slate-900">{24 * item} Views</span>
                                            <span className="text-xs text-slate-500">{5 * item} Applicants</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 dark:text-slate-200">Oct 24, 2023</span>
                                            <span>Exp: Nov 24, 2023</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item === 3 && (
                                                <button className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors rounded-lg flex items-center gap-1 text-xs font-medium" title="Approve">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </button>
                                            )}
                                            {item !== 5 && (
                                                <button className="p-1.5 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors rounded-lg flex items-center gap-1 text-xs font-medium" title="Suspend">
                                                    <XCircle className="h-4 w-4" />
                                                </button>
                                            )}
                                            <button className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors rounded-lg" title="View Details">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors rounded-lg" title="Delete">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 dark:text-slate-400 gap-4">
                    <div>Showing 1 to 6 of 3,245 jobs</div>
                    <div className="flex gap-1.5">
                        <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors disabled:opacity-50">Prev</button>
                        <button className="w-8 h-8 rounded-lg border border-blue-600 bg-blue-600 text-white font-medium shadow-sm flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center">2</button>
                        <span className="w-8 h-8 flex items-center justify-center">...</span>
                        <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">Next</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
