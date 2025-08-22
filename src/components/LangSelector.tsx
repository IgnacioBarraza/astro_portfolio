import { useState } from 'react'
import { Globe } from 'lucide-react'

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN')

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'JP', label: '日本語' },
    { code: 'ES', label: 'Español' },
  ]

  return (
    <div className="fixed top-6 right-6 z-40">
      <div className="surface-elevated rounded-full p-1 shadow-subtle">
        <div className="flex items-center space-x-1">
          <Globe className="h-4 w-4 text-primary ml-3" />
          <div className="flex items-center bg-secondary/30 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  selectedLanguage === lang.code
                    ? 'bg-primary text-white shadow-primary'
                    : 'text-secondary-foreground hover:text-primary'
                }`}
              >
                {lang.code}
                {selectedLanguage === lang.code && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse-glow opacity-20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageSelector
