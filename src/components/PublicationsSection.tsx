import React, { useState } from "react";
import { FileText, Award, Eye, Download, X, Calendar, ExternalLink, Sparkles } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// PDF Assets
import bigdata_paper from "@/assets/Big_data_Paper.pdf";
import email_paper from "@/assets/Phishing-Email.pdf";
import Email_Cert from "@/assets/Email_Certificate.pdf";
import Bigdata_Cert from "@/assets/Bigdata_Certificate.pdf";

interface PublicationItem {
    type: "paper" | "certificate";
    title: string;
    org: string;
    date: string;
    description: string;
    file: string;
}

const publications: PublicationItem[] = [
    {
        type: "paper",
        title: "Data Provenance and Integrity in Big Data Systems",
        org: "IJPREMS Journal",
        date: "September 2025",
        description:
            "Explores blockchain-based tracking and metadata management to ensure trustworthy analytics in distributed Big Data environments.",
        file: bigdata_paper,
    },
    {
        type: "paper",
        title: "Interpretable Phishing Email Detection",
        org: "IJPREMS Journal",
        date: "February 2026",
        description:
            "A lightweight ML framework using Naïve Bayes and Random Forest, achieving 93% accuracy with explainable AI techniques.",
        file: email_paper,
    },
    {
        type: "certificate",
        title: "Big Data Systems Publication Award",
        org: "IJPREMS",
        date: "September 2025",
        description:
            "Official certificate recognizing the publication and contribution to the field of Data Integrity and Provenance.",
        file: Bigdata_Cert,
    },
    {
        type: "certificate",
        title: "Phishing Detection Research Award",
        org: "IJPREMS",
        date: "February 2026",
        description:
            "Recognition for research excellence in applying Lightweight Machine Learning for Cybersecurity in academic environments.",
        file: Email_Cert,
    },
];

const typeConfig = {
    paper: {
        icon: FileText,
        label: "Research Paper",
        theme: "purple",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        gradient: "from-purple-500/20 to-fuchsia-500/10",
    },
    certificate: {
        icon: Award,
        label: "Official Certificate",
        theme: "cyan",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        gradient: "from-cyan-500/20 to-emerald-500/10",
    },
};

/* ------------------------------ PDF Modal ------------------------------ */

const PdfModal = ({ item, onClose }: { item: PublicationItem; onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300">
        <div 
            className="relative w-full max-w-5xl h-[90vh] rounded-3xl border border-white/10 bg-[#0a0a15] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${item.type === 'paper' ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                        {item.type === 'paper' ? <FileText size={18} /> : <Award size={18} />}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white truncate max-w-[200px] sm:max-w-md">
                        {item.title}
                    </h3>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href={item.file}
                        download
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-all"
                    >
                        <Download size={14} />
                        Download
                    </a>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* PDF Viewport */}
            <div className="w-full h-[calc(90vh-73px)] bg-slate-800/50">
                <iframe src={`${item.file}#toolbar=0`} title={item.title} className="w-full h-full border-none" />
            </div>
        </div>
    </div>
);

/* --------------------------- Publication Card --------------------------- */

const PublicationCard = ({ item, index, isVisible, onPreview }: { item: PublicationItem; index: number; isVisible: boolean; onPreview: (item: PublicationItem) => void }) => {
    const config = typeConfig[item.type];
    const Icon = config.icon;

    return (
        <div
            className={`group relative rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl p-6 transition-all duration-700 hover:-translate-y-3 hover:border-white/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Background Glow */}
            <div className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-gradient-to-br ${config.gradient}`} />

            {/* Header: Icon & Label */}
            <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${config.gradient} border ${config.border} shadow-lg shadow-black/20`}>
                    <Icon size={28} className={config.color} />
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${config.bg} ${config.border} ${config.color}`}>
                    {config.label}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                    {item.title}
                </h3>
                <p className={`text-sm font-medium ${config.color} opacity-80`}>{item.org}</p>
                
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar size={14} />
                    {item.date}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 pt-2">
                    {item.description}
                </p>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                <button
                    onClick={() => onPreview(item)}
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
                >
                    <Eye size={16} className="text-slate-400" />
                    Preview
                </button>

                <a
                    href={item.file}
                    download
                    className={`flex items-center justify-center gap-2 py-3 rounded-2xl text-white text-xs font-semibold shadow-lg transition-all hover:brightness-110 active:scale-95 bg-gradient-to-r ${
                        item.type === 'paper' ? 'from-purple-600 to-fuchsia-600 shadow-purple-500/20' : 'from-cyan-600 to-emerald-600 shadow-cyan-500/20'
                    }`}
                >
                    <Download size={16} />
                    Get PDF
                </a>
            </div>

            {/* Decorative bottom line */}
            <div className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center bg-gradient-to-r ${
                item.type === 'paper' ? 'from-purple-500 to-transparent' : 'from-cyan-500 to-transparent'
            }`} />
        </div>
    );
};

/* --------------------------- Main Section --------------------------- */

const PublicationsSection = () => {
    const heading = useScrollReveal();
    const grid = useScrollReveal();
    const [previewItem, setPreviewItem] = useState<PublicationItem | null>(null);

    return (
        <section id="publications" className="relative py-24 sm:py-32 overflow-hidden bg-[#030308]">
            {/* Background Aesthetics */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div
                    ref={heading.ref}
                    className={`text-center mb-20 transition-all duration-1000 ${
                        heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                        <Sparkles size={14} className="text-amber-400" />
                        <span className="text-xs text-slate-300 font-medium tracking-widest uppercase">Intellectual Assets</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                        Research &{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            Publications
                        </span>
                    </h2>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Academic contributions and formal certifications validating my expertise in Big Data and Cybersecurity.
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    ref={grid.ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {publications.map((item, index) => (
                        <PublicationCard
                            key={index}
                            item={item}
                            index={index}
                            isVisible={grid.isVisible}
                            onPreview={setPreviewItem}
                        />
                    ))}
                </div>
            </div>

            {/* Fullscreen Preview Modal */}
            {previewItem && <PdfModal item={previewItem} onClose={() => setPreviewItem(null)} />}
        </section>
    );
};

export default PublicationsSection;