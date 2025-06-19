"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ContactFaqProps {
  question: string
  answer: string
}

export function ContactFaq({ question, answer }: ContactFaqProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex w-full items-center justify-between py-2 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-[#0a3b5c]">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-[#00b3d7] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pt-2 pb-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[#5a7184]">{answer}</p>
      </div>
    </div>
  )
}
