import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { getTranslations } from '@/i18n/utils'
import type { Language } from './DownloadCv'

const ContactForm = ({ lang }: { lang: string }) => {
  const t = getTranslations(lang as Language)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.contactName}
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary"
          placeholder={t.contact.contactNamePlaceholder}
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.contactEmail}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary"
          placeholder={t.contact.contactEmailPlaceholder}
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.contactMessage}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary min-h-[120px] resize-none"
          placeholder={t.contact.contactMessagePlaceholder}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full gradient-primary py-6 text-lg font-medium rounded-full hover:scale-105 transition-all duration-300 glow-hover"
      >
        <Send className="w-5 h-5 mr-2" />
        {t.contact.contactSend}
      </Button>
    </form>
  )
}

export default ContactForm
