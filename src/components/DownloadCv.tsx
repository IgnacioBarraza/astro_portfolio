import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

type Language = 'en' | 'es'

export const CvDownloadModal = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const downloadCV = (language: Language) => {
    const fileName =
      language === 'en' ? 'CV_Ignacio_EN.pdf' : 'CV_Ignacio_ES.pdf'
    const filePath = `/cv/${fileName}`

    // Trigger download
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    link.click()

    setIsCvModalOpen(false)
  }

  return (
    <Dialog open={isCvModalOpen} onOpenChange={setIsCvModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="px-8 py-6 text-lg font-medium rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
        >
          Download CV
          <Download className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose CV Language</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 pt-4">
          <Button
            onClick={() => downloadCV('en')}
            className="w-full justify-start gap-3 h-12"
            variant="outline"
          >
            <span className="text-2xl">🇺🇸</span>
            <div className="text-left">
              <div className="font-medium">English Version</div>
              <div className="text-sm text-muted-foreground">
                CV_Ignacio_EN.pdf
              </div>
            </div>
          </Button>

          <Button
            onClick={() => downloadCV('es')}
            className="w-full justify-start gap-3 h-12"
            variant="outline"
          >
            <span className="text-2xl">🇪🇸</span>
            <div className="text-left">
              <div className="font-medium">Spanish Version</div>
              <div className="text-sm text-muted-foreground">
                CV_Ignacio_ES.pdf
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
