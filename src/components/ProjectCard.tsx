import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { ExternalLink, Github } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { translations } from '@/i18n/translations'

interface Project {
  name: Record<string, string>
  description: Record<string, string>
  tags: string[]
  // category: string
  images_url: string[]
  code_link: string
  demo_link: string
}

export const ProjectCards = ({ lang }: { lang: string }) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const t = translations[lang as keyof typeof translations].project

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
      })
      .finally(() => setIsVisible(true))
  }, [lang])

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.name['en']}
          className={`surface-elevated rounded-xl border-border/30 overflow-hidden hover:border-primary/30 transition-all duration-300 group ${
            isVisible ? 'animate-fade-in' : ''
          }`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Carousel */}
          <div className="aspect-video relative overflow-hidden">
            <Carousel
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {project.images_url.map((imageUrl, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`${project.name[lang]} screenshot ${
                          imageIndex + 1
                        }`}
                        width="400"
                        height="300"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border/50" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border/50" />
            </Carousel>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {project.name[lang]}
                </h3>
                {/* <Badge
                  variant="outline"
                  className="text-xs text-muted-foreground border-primary/50"
                >
                  Full Stack PWA
                  {project.category}
                </Badge> */}
              </div>
            </div>

            <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
              {project.description[lang]}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-muted/50 text-muted-foreground border-border/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {project.demo_link && project.code_link ? (
                <>
                  <a
                    href={project.code_link}
                    target="_blank"
                    className="flex items-center justify-center flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary hover:scale-105 cursor-pointer rounded-md p-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.code}
                  </a>
                  <a
                    href={project.demo_link}
                    target="_blank"
                    className="flex items-center justify-center flex-1 gradient-primary hover:scale-105 transition-transform cursor-pointer rounded-md p-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {/* Live Demo */}
                    {t.liveDemo}
                  </a>
                </>
              ) : (
                <Badge
                  variant="destructive"
                  className="text-primary-foreground text-sm"
                >
                  {/* Coming Soon... */}
                  {t.comingSoon}
                </Badge>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
