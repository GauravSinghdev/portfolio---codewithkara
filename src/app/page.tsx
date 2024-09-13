'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Monitor, Moon, Sun } from "lucide-react"
import Header from '@/components/subcompo/Header'
import About from '@/components/subcompo/About'
import Skills from '@/components/subcompo/Skills'
import Projects from '@/components/subcompo/Project'
import Experience from '@/components/subcompo/Experience'
import Education from '@/components/subcompo/Education'
import Contact from '@/components/subcompo/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

function ThemeToggle({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-3 right-0 sm:right-40 "
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Home() {
  const [theme, setTheme] = useState('system')

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark'
      if (prevTheme === 'dark') return 'system'
      return 'light'
    })
  }

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (theme === 'system') {
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [theme])

  return (
    <div className={`min-h-screen bg-background text-foreground ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="max-w-4xl mx-auto p-6">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <ToastContainer />
      </div>
      
    </div>
  )
}
