import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          Your Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="bg-background border-border/50 focus:border-primary min-h-[120px] resize-none"
          placeholder="Tell me about your project or just say hello..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full gradient-primary py-6 text-lg font-medium rounded-full hover:scale-105 transition-all duration-300 glow-hover"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
