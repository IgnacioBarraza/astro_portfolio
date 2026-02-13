import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, Send } from 'lucide-react'
import { getTranslations } from '@/i18n/utils'
import type { Language } from './DownloadCv'

const ContactForm = ({ lang }: { lang: string }) => {
  const t = getTranslations(lang as Language)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '61ac23cc-ffaf-4ede-b93e-be862930ecaa',
        ...formData,
        subject: `Nuevo mensaje de contacto de ${formData.name}`,
      }),
    })

    const result = await response.json()
    if (result.success) {
      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    }
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
        <h3 className="text-2xl font-bold text-primary">
          {t.contact.contactThank}
        </h3>
        <p className="text-secondary-foreground">{t.contact.contactReceive}</p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="rounded-full"
        >
          {t.contact.contactSendAnother}
        </Button>
      </div>
    )
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
        disabled={isSubmitting}
        className="w-full gradient-primary py-6 text-lg font-medium rounded-full hover:scale-105 transition-all duration-300 glow-hover"
      >
        <Send className="w-5 h-5 mr-2" />
        {isSubmitting ? t.contact.contactSend2 : t.contact.contactSend}
      </Button>
    </form>
  )
}

export default ContactForm
