/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Settings, 
  Send, 
  ArrowRight, 
  Code, 
  Cpu, 
  Layers, 
  Zap, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  ChevronDown,
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

type Screen = 'home' | 'projects' | 'skills' | 'lab' | 'contact';

// --- Components ---

const Navbar = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  const navItems: { id: Screen; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'lab', label: 'Lab' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div 
          className="text-xl font-black tracking-tighter text-primary-dim font-headline cursor-pointer uppercase"
          onClick={() => setScreen('home')}
        >
          ARCHITECT_OS
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={cn(
                "font-headline font-bold tracking-tight text-sm uppercase transition-all duration-200",
                currentScreen === item.id 
                  ? "text-primary-dim border-b-2 border-primary-dim pb-1" 
                  : "text-on-surface-variant hover:text-primary-dim"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button className="p-2 text-primary-dim hover:bg-surface-high transition-all active:scale-95">
            <Terminal size={20} />
          </button>
          <button className="p-2 text-primary-dim hover:bg-surface-high transition-all active:scale-95">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-background border-t border-white/5 px-8 py-12 mt-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="text-primary-dim font-headline font-black tracking-tighter text-lg mb-2">ARCHITECT_OS</div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-outline">© 2024 DIGITAL_ARCHITECT // ALL RIGHTS RESERVED</p>
      </div>
      
      <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase">
        <a href="#" className="text-outline hover:text-primary-dim transition-colors">GitHub</a>
        <a href="#" className="text-outline hover:text-primary-dim transition-colors">LinkedIn</a>
        <a href="#" className="text-outline hover:text-primary-dim transition-colors">Twitter</a>
      </div>

      <div className="font-mono text-[10px] tracking-widest text-primary-dim">
        SYSTEM_CLOCK: {new Date().toLocaleTimeString('en-GB', { hour12: false })}_UTC
      </div>
    </div>
  </footer>
);

const TerminalWindow = ({ children, title, className }: { children: React.ReactNode, title?: string, className?: string }) => (
  <div className={cn("bg-surface-high border border-white/10 shadow-2xl overflow-hidden", className)}>
    <div className="bg-surface-high px-4 py-2 flex items-center justify-between border-b border-white/5">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 bg-error" />
        <div className="w-2.5 h-2.5 bg-primary" />
        <div className="w-2.5 h-2.5 bg-secondary" />
      </div>
      {title && <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">{title}</span>}
    </div>
    <div className="p-6 md:p-8 bg-black/40">
      {children}
    </div>
  </div>
);

// --- Pages ---

const HomePage = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-32"
  >
    {/* Hero */}
    <section className="grid md:grid-cols-12 gap-12 items-center min-h-[80vh]">
      <div className="md:col-span-7 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border-l-4 border-primary">
          <span className="font-mono text-[10px] tracking-widest text-primary uppercase">System Status: Optimal</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
          ALEX <span className="text-primary italic">"THE ARCHITECT"</span> CARTER
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
          Bridging the gap between <span className="text-white font-semibold underline decoration-primary/40 decoration-2 underline-offset-4">Physical Silicon</span> and <span className="text-white font-semibold underline decoration-primary/40 decoration-2 underline-offset-4">Digital logic</span>. Electronics Engineer & Full-Stack Developer.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => setScreen('projects')}
            className="px-8 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-wider transition-all hover:bg-primary-dim hover:shadow-[0_0_20px_rgba(170,255,220,0.3)] active:scale-95"
          >
            Initialize Project_View
          </button>
          <button className="px-8 py-4 border border-outline text-white font-headline font-bold uppercase tracking-wider hover:bg-surface transition-all active:scale-95">
            Download_Schematics.pdf
          </button>
        </div>
      </div>
      
      <div className="md:col-span-5">
        <TerminalWindow title="architect_v2.0.4 — process_01">
          <div className="font-mono text-sm space-y-4 text-on-surface-variant">
            <div className="flex gap-4">
              <span className="text-primary opacity-50">01</span>
              <span className="text-white">import {'{ hardware, software }'} from 'architect-core';</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary opacity-50">02</span>
              <span>const profile = new Engineer('Alex Carter');</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary opacity-50">03</span>
              <span>profile.stack = ['RTOS', 'Rust', 'PCB_Design', 'Next.js'];</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary opacity-50">04</span>
              <span className="text-primary-dim">while (designing) {'{ optimize(); build(); }'}</span>
            </div>
            <div className="mt-8 h-48 overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/circuit/800/600" 
                alt="Circuitry" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>

    {/* Intro Stats */}
    <section className="grid md:grid-cols-2 gap-20 items-start py-24 bg-surface/30 -mx-8 px-8">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tighter mb-8 uppercase">
          I DON'T JUST WRITE CODE.<br/>
          <span className="text-primary">I DESIGN ECOSYSTEMS.</span>
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
          <p>
            From the initial trace on a PCB to the final deployment of a cloud-native dashboard, my work lives at the intersection of bits and atoms. I specialize in high-performance embedded systems, custom hardware prototyping, and scalable full-stack applications.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: 'PCBs Engineered', value: '120+' },
          { label: 'LOC Deployed', value: '15M+' },
          { label: 'Patents Filed', value: '08' },
          { label: 'Major Projects', value: '42' },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface p-8 border-l-2 border-primary/30">
            <div className="text-4xl font-headline font-black text-primary mb-2">{stat.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Skill Matrix */}
    <section className="py-24">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">// technical_capabilities</span>
          <h2 className="text-5xl font-extrabold tracking-tighter uppercase">Skill Matrix</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-surface p-8 space-y-6">
          <Cpu className="text-primary" size={40} />
          <h3 className="text-2xl font-bold uppercase">Embedded Systems</h3>
          <p className="text-sm text-on-surface-variant">Low-latency C/C++, Rust, RTOS (FreeRTOS, Zephyr), ARM Cortex-M architecture.</p>
          <div className="flex flex-wrap gap-2">
            {['STM32', 'ESP32', 'NORDIC'].map(t => (
              <span key={t} className="font-mono text-[10px] bg-surface-high px-2 py-1">{t}</span>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 bg-surface-high p-8 border-t-4 border-primary">
          <Zap className="text-primary" size={40} />
          <h3 className="text-2xl font-bold uppercase mb-2">PCB Engineering</h3>
          <p className="text-sm text-on-surface-variant">Multi-layer board design, High-speed signal integrity, RF layout optimization.</p>
        </div>
        <div className="md:col-span-1 bg-surface p-8">
          <Layers className="text-primary" size={40} />
          <h3 className="text-2xl font-bold uppercase mb-2">Web Stack</h3>
          <ul className="text-sm text-on-surface-variant space-y-1">
            <li>Next.js / React</li>
            <li>TypeScript</li>
            <li>Node.js / Go</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32">
      <div className="bg-surface p-12 md:p-24 text-center border border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
        <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase mb-8 block">Execute Command: NAV_PROJECTS</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase leading-none">
          Ready to see the <span className="italic text-primary-dim">Blueprint</span> in action?
        </h2>
        <button 
          onClick={() => setScreen('projects')}
          className="px-12 py-6 bg-primary text-on-primary font-headline font-black text-xl uppercase tracking-tighter transition-all hover:-translate-y-1"
        >
          Open Project Archives
        </button>
      </div>
    </section>
  </motion.div>
);

const ProjectsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-20"
  >
    <header>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block">Archive.v3 // 2024</span>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase">PROJECTS<span className="text-primary">.</span></h1>
      <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed font-light">
        A curated collection of systems engineering, embedded hardware design, and high-performance software architecture.
      </p>
    </header>

    <div className="grid md:grid-cols-12 gap-12">
      <article className="md:col-span-8 space-y-8">
        <TerminalWindow title="SOURCE: REPO/KERNEL_HACK_X86">
          <img 
            src="https://picsum.photos/seed/kernel/1200/800" 
            alt="Kernel" 
            className="w-full aspect-video object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
        </TerminalWindow>
        <div className="flex flex-wrap gap-2">
          {['C++', 'Assembly', 'RTOS', 'X86_ARCH'].map(t => (
            <span key={t} className="bg-surface-high px-3 py-1 font-mono text-[10px] uppercase">{t}</span>
          ))}
        </div>
        <h3 className="text-4xl font-black tracking-tight uppercase">Custom Kernel Architecture</h3>
        <p className="text-on-surface-variant leading-relaxed max-w-xl">
          A microkernel-based operating system designed for real-time industrial robotics. Implements low-latency task scheduling and memory isolation.
        </p>
        <div className="flex gap-6">
          <button className="flex items-center gap-2 font-bold text-sm tracking-widest text-primary uppercase">
            View Documentation <ArrowRight size={16} />
          </button>
          <button className="flex items-center gap-2 font-bold text-sm tracking-widest text-on-surface-variant uppercase">
            <Code size={18} /> GitHub
          </button>
        </div>
      </article>

      <aside className="md:col-span-4 space-y-8">
        <div className="bg-surface p-8 border-l-4 border-tertiary">
          <span className="font-mono text-[10px] text-tertiary block mb-4 uppercase">Hardware_Experiment</span>
          <h3 className="text-2xl font-black uppercase mb-4">FPGA Signal Processor</h3>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            High-speed digital signal processing unit built on Verilog. Optimized for sub-millisecond audio filtering.
          </p>
          <button className="bg-primary text-on-primary px-6 py-3 font-black text-xs tracking-widest uppercase">
            Technical Specs
          </button>
        </div>
      </aside>
    </div>
  </motion.div>
);

const SkillsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-20"
  >
    <header className="border-b border-white/5 pb-20">
      <span className="font-mono text-primary text-xs tracking-widest uppercase mb-4 block">System_Manifest // 2024.v1</span>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 uppercase">
        TECHNICAL<br/><span className="text-primary">ARCHITECTURE.</span>
      </h1>
    </header>

    <div className="grid md:grid-cols-12 gap-1">
      <div className="md:col-span-7 bg-surface/50 p-8 space-y-12">
        <div className="flex items-center gap-2 mb-8">
          <Code className="text-primary" size={24} />
          <h3 className="text-2xl font-bold uppercase">Programming_Logic</h3>
        </div>
        {[
          { name: 'C / C++ (Legacy & Modern)', prof: '0xFA', desc: 'System-level optimization, memory management, and high-performance computation engines.' },
          { name: 'RUST (Systems Safety)', prof: '0xE2', desc: 'Memory safety without garbage collection. Implementing secure concurrent primitives.' },
          { name: 'PYTHON (Tooling & AI)', prof: '0xF1', desc: 'Rapid prototyping, automation scripts, and data processing pipelines.' },
        ].map(skill => (
          <div key={skill.name} className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-sm text-secondary">{skill.name}</span>
              <span className="font-mono text-[10px] text-outline">PROFICIENCY: {skill.prof}</span>
            </div>
            <div className="w-full bg-surface-high h-1">
              <div className="bg-primary h-full" style={{ width: `${parseInt(skill.prof, 16) / 2.55}%` }} />
            </div>
            <p className="text-sm text-on-surface-variant">{skill.desc}</p>
          </div>
        ))}
      </div>
      <div className="md:col-span-5 bg-surface p-8">
        <div className="flex items-center gap-2 mb-8">
          <Cpu className="text-primary" size={24} />
          <h3 className="text-2xl font-bold uppercase">Embedded_Kernel</h3>
        </div>
        <div className="space-y-6">
          {['REAL-TIME OS (RTOS)', 'BARE-METAL', 'FPGA / HDL'].map(item => (
            <div key={item} className="bg-surface-high p-4 border-l-2 border-primary">
              <div className="font-mono text-xs text-primary mb-1">{item}</div>
              <p className="text-sm text-on-surface-variant">Specialized implementation and optimization for mission-critical hardware.</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-white/5" />
        <h2 className="text-3xl font-black uppercase tracking-tighter">Work_History</h2>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="space-y-12">
        {[
          { role: 'Lead Systems Architect', company: 'NEURAL_GRID_LABS', period: '2022 — PRESENT', desc: 'Designing distributed RTOS kernels for autonomous drone swarms.' },
          { role: 'Senior Hardware Engineer', company: 'SILICON_VALLEY_CIRCUITS', period: '2019 — 2022', desc: 'Optimized high-speed signal integrity for next-gen 5G base stations.' },
          { role: 'Embedded Developer', company: 'PROTO_CORE_SYSTEMS', period: '2017 — 2019', desc: 'Developed bare-metal firmware for industrial IoT sensors.' },
        ].map((job, i) => (
          <div key={i} className="grid md:grid-cols-4 gap-8 group">
            <div className="font-mono text-xs text-primary tracking-widest uppercase">{job.period}</div>
            <div className="md:col-span-3 space-y-2">
              <h3 className="text-xl font-bold uppercase group-hover:text-primary transition-colors">{job.role} // {job.company}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const LabPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-20"
  >
    <header className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        <div className="font-mono text-[10px] tracking-[0.2em] text-primary mb-4 uppercase">System.Logs // Research_Database</div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">LAB_NOTES</h1>
        <p className="text-on-surface-variant max-w-xl text-lg">
          Technical documentation, hardware experiment logs, and deep-dives into systems engineering.
        </p>
      </div>
    </header>

    <section>
      <TerminalWindow title="LATEST_ENTRY.EXE" className="bg-surface">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-64 md:h-auto overflow-hidden">
            <img 
              src="https://picsum.photos/seed/lab/800/600" 
              alt="Lab" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-3">
              <span className="bg-surface-high text-primary font-mono text-[10px] px-3 py-1 uppercase">#FPGA</span>
              <span className="bg-surface-high text-primary font-mono text-[10px] px-3 py-1 uppercase">#Verilog</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Real-time Video Processing on Lattice iCE40</h2>
            <p className="text-on-surface-variant">An exploration into implementing a custom Bayer filter and HDMI output core using minimal logic gates.</p>
            <button className="bg-primary text-on-primary px-6 py-2 font-bold text-xs uppercase tracking-widest self-start">
              Read_Entry
            </button>
          </div>
        </div>
      </TerminalWindow>
    </section>

    <div className="grid md:grid-cols-3 gap-12">
      {[
        { title: 'Memory Management in FreeRTOS', tag: '#RTOS_TIPS', date: '08_OCT_2024' },
        { title: 'High-Speed Differential Pair Routing', tag: '#PCBDRAWINGS', date: '02_OCT_2024' },
        { title: 'Distributed State Machines', tag: '#SYSTEM_ARCH', date: '25_SEP_2024' },
      ].map(post => (
        <article key={post.title} className="group cursor-pointer">
          <div className="aspect-video bg-surface mb-6 overflow-hidden relative">
            <img 
              src={`https://picsum.photos/seed/${post.tag}/800/600`} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-black/80 px-3 py-1 font-mono text-[10px] text-primary">{post.tag}</span>
            </div>
          </div>
          <div className="font-mono text-[10px] text-outline mb-3">TIMESTAMP: {post.date}</div>
          <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{post.title}</h3>
          <button className="inline-flex items-center gap-2 text-primary font-mono text-[10px] tracking-widest">
            VIEW_SPEC <ArrowRight size={14} />
          </button>
        </article>
      ))}
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-20"
  >
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="w-full md:w-2/3">
        <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4 opacity-70">// COMMUNICATION_CHANNEL_STABLISHED</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
          GET_IN_TOUCH.
        </h1>
      </div>
      <div className="w-full md:w-1/3">
        <p className="text-on-surface-variant text-sm max-w-xs md:text-right">
          Initiate a secure handshake to discuss projects, collaborations, or technical architectural inquiries.
        </p>
      </div>
    </header>

    <div className="grid lg:grid-cols-12 gap-0 border border-white/5">
      <div className="lg:col-span-7 bg-surface p-8 md:p-12">
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-primary uppercase tracking-widest">01_SENDER_NAME</label>
              <input className="w-full bg-transparent border-b border-outline focus:border-primary focus:outline-none py-3 text-white font-body placeholder:text-outline/30" placeholder="IDENTIFY_YOURSELF" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-primary uppercase tracking-widest">02_SENDER_MAIL</label>
              <input className="w-full bg-transparent border-b border-outline focus:border-primary focus:outline-none py-3 text-white font-body placeholder:text-outline/30" placeholder="SECURE_ADDRESS@DOMAIN.COM" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-primary uppercase tracking-widest">03_TRANSMISSION_SUBJECT</label>
            <input className="w-full bg-transparent border-b border-outline focus:border-primary focus:outline-none py-3 text-white font-body placeholder:text-outline/30" placeholder="NATURE_OF_INQUIRY" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] text-primary uppercase tracking-widest">04_DATA_PAYLOAD</label>
            <textarea className="w-full bg-transparent border-b border-outline focus:border-primary focus:outline-none py-3 text-white font-body placeholder:text-outline/30 resize-none" rows={4} placeholder="ENTER_DETAILS_HERE..." />
          </div>
          <button className="inline-flex items-center px-8 py-4 bg-primary text-on-primary font-bold uppercase tracking-tighter text-sm transition-all hover:shadow-[0_0_20px_rgba(170,255,220,0.3)]">
            SEND_TRANSMISSION <Send size={18} className="ml-3" />
          </button>
        </form>
      </div>

      <div className="lg:col-span-5 bg-surface-high p-8 md:p-12 flex flex-col justify-between space-y-12">
        <div className="space-y-10">
          <div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-4">DIRECT_LINE</span>
            <div className="flex items-center gap-4 text-primary">
              <Mail size={20} />
              <span className="text-2xl font-bold tracking-tight">HELLO@DIGITAL_ARCHITECT.IO</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-6">IDENTITY_NODES</span>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'GITHUB', icon: <Github size={16} /> },
                { label: 'LINKEDIN', icon: <Linkedin size={16} /> },
                { label: 'TWITTER_X', icon: <Twitter size={16} /> },
                { label: 'DRIBBBLE', icon: <Dribbble size={16} /> },
              ].map(node => (
                <button key={node.label} className="flex items-center justify-between p-4 bg-surface hover:bg-primary/10 hover:border-primary transition-all border border-white/5">
                  <span className="font-mono text-xs uppercase">{node.label}</span>
                  {node.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex justify-between font-mono text-[10px] text-outline uppercase">
          <span>AVAILABILITY: HIGH</span>
          <span>RESPONSE_TIME: &lt; 24H</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div className="min-h-screen grid-pattern relative selection:bg-primary selection:text-on-primary">
      <div className="scanline fixed inset-0 pointer-events-none opacity-10 z-50" />
      
      <Navbar currentScreen={screen} setScreen={setScreen} />

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10">
        <AnimatePresence mode="wait">
          {screen === 'home' && <HomePage key="home" setScreen={setScreen} />}
          {screen === 'projects' && <ProjectsPage key="projects" />}
          {screen === 'skills' && <SkillsPage key="skills" />}
          {screen === 'lab' && <LabPage key="lab" />}
          {screen === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
