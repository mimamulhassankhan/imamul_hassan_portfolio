import React, { useEffect } from "react"
import { Link } from "@tanstack/react-router"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Contact,
  Download,
  Mail,
  MapPin,
  Phone,
  Rocket,
} from "lucide-react"

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import websiteData from "@/data/websiteData.json"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
]

const featuredProjects = websiteData.projects.projects.slice(0, 4)
const featuredPosts = websiteData.blogs.posts.slice(0, 3)

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const Home: React.FC = () => {
  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "")
    if (!sectionId) return

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 h-20 border-b bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <Avatar size="lg">
              <AvatarImage src={websiteData.profile.avatar.image} alt={websiteData.profile.name} />
              <AvatarFallback>IH</AvatarFallback>
            </Avatar>
            <span className="hidden flex-col sm:flex">
              <span className="font-heading text-base font-semibold leading-none">
                {websiteData.profile.name}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{websiteData.profile.title}</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 rounded-xl border bg-card p-1 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.id}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle onHeader />
            <Button render={<a href={websiteData.aboutMe.personalInfo.resume.url} target="_blank" rel="noreferrer" />} className="hidden sm:inline-flex">
              <Download data-icon="inline-start" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="mx-auto grid min-h-[calc(100svh-5rem)] gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="flex flex-col justify-start gap-6 lg:pt-4">
          <Badge variant="secondary" className="h-7 w-fit px-3">
            <span className="size-2 rounded-full bg-emerald-500" />
            Available for full-stack product work
          </Badge>

          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl">
              Full-stack engineer building scalable web products.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I help teams ship secure dashboards, APIs, real-time features, and cloud-native
              systems with React, Next.js, Node.js, NestJS, .NET, PostgreSQL, MongoDB, Azure, and AWS.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" onClick={() => scrollToSection("projects")}>
              View selected work
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              <Mail data-icon="inline-start" />
              Contact me
            </Button>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-3">
            {websiteData.introduction.stats.map((stat) => (
              <Card key={stat.label} size="sm">
                <CardContent className="flex flex-col gap-1">
                  <span className="font-heading text-2xl font-semibold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4 lg:pt-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Profile Snapshot</CardTitle>
              <CardDescription>Focused on practical delivery and clean systems.</CardDescription>
              <CardAction>
                <Badge variant="outline">Dhaka</Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="grid gap-5 sm:grid-cols-[12rem_1fr]">
              <div className="overflow-hidden rounded-xl border bg-muted">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Imamul Hassan"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <Badge variant="secondary" className="w-fit">
                    Software Engineer
                  </Badge>
                  <p className="text-sm leading-6 text-muted-foreground">
                    6+ years building production applications for enterprise workflows,
                    real-time features, and cloud infrastructure.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border bg-background p-3">
                    <div className="font-medium">Strong in</div>
                    <div className="mt-1 text-muted-foreground">React, Next.js, Node</div>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="font-medium">Cloud</div>
                    <div className="mt-1 text-muted-foreground">Azure, AWS, Docker</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              {websiteData.aboutMe.skills.comfortable.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${skill.percentage}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">About</Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {websiteData.aboutMe.title}
          </h2>
          <p className="max-w-xl leading-7 text-muted-foreground">{websiteData.aboutMe.subtitle}</p>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin data-icon="inline-start" />
              {websiteData.aboutMe.personalInfo.location.value}
            </span>
            <span className="flex items-center gap-2">
              <Mail data-icon="inline-start" />
              {websiteData.aboutMe.personalInfo.email.value}
            </span>
            <span className="flex items-center gap-2">
              <Phone data-icon="inline-start" />
              {websiteData.aboutMe.personalInfo.phone.value}
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{websiteData.aboutMe.skills.title}</CardTitle>
              <CardDescription>Primary technologies I use for shipping production work.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {websiteData.aboutMe.skills.expertise.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{websiteData.aboutMe.education.title}</CardTitle>
                <CardDescription>{websiteData.aboutMe.education.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{websiteData.aboutMe.education.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{websiteData.aboutMe.education.period}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Workflow</CardTitle>
                <CardDescription>Daily development setup.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {websiteData.aboutMe.skills.tools.join(", ")} with CI/CD, Docker, cloud services,
                  and collaborative design handoff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.35fr] lg:px-8">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:h-fit">
            <Badge variant="outline" className="w-fit">Experience</Badge>
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Engineering timeline
              </h2>
              <p className="max-w-md leading-7 text-muted-foreground">
                {websiteData.experience.subtitle}
              </p>
            </div>
            <Card>
              <CardContent className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <div className="font-heading text-3xl font-semibold">6+</div>
                  <p className="text-sm text-muted-foreground">Years shipping production systems</p>
                </div>
                <div>
                  <div className="font-heading text-3xl font-semibold">2</div>
                  <p className="text-sm text-muted-foreground">Engineering teams across product domains</p>
                </div>
                <div>
                  <div className="font-heading text-3xl font-semibold">Cloud</div>
                  <p className="text-sm text-muted-foreground">Azure, AWS, Docker, and CI/CD delivery</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative flex flex-col gap-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:left-5">
            {websiteData.experience.experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative grid gap-4 pl-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 sm:pl-16"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute left-0 top-5 grid size-8 place-items-center rounded-full border bg-background shadow-sm sm:size-10">
                  <span className="size-2.5 rounded-full bg-primary" />
                </div>

                <Card className="overflow-hidden transition-transform hover:-translate-y-1">
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={index === 0 ? "default" : "secondary"}>
                        {index === 0 ? "Current role" : "Previous role"}
                      </Badge>
                      <Badge variant="outline">{experience.duration}</Badge>
                    </div>
                    <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
                      <div>
                        <CardTitle>{experience.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-2">
                          <Building2 data-icon="inline-start" />
                          {experience.company}
                        </CardDescription>
                      </div>
                      <CardAction className="text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <MapPin data-icon="inline-start" />
                          {experience.location}
                        </span>
                      </CardAction>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <p className="leading-7 text-muted-foreground">{experience.description}</p>

                    <div className="grid gap-3 md:grid-cols-2">
                      {experience.achievements.slice(0, 2).map((achievement) => (
                        <div key={achievement} className="flex gap-2 rounded-lg border bg-background/60 p-3 text-sm leading-6">
                          <CheckCircle2 data-icon="inline-start" className="mt-0.5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-4">
            <Badge variant="outline" className="w-fit">Selected Work</Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {websiteData.projects.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">{websiteData.projects.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="transition-transform hover:-translate-y-1">
              <img
                src={project.workImage}
                alt={`${project.name} project screenshot`}
                className="aspect-[16/9] w-full object-cover object-top"
              />
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="line-clamp-3">{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.tools.programming_language.slice(0, 5).map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.liveLink && (
                    <Button render={<a href={project.liveLink} target="_blank" rel="noreferrer" />}>
                      Live
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" render={<a href={project.githubLink} target="_blank" rel="noreferrer" />}>
                      <Code2 data-icon="inline-start" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="blog" className="bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="w-fit">Writing</Badge>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {websiteData.blogs.title}
              </h2>
            </div>
            <Button variant="outline" render={<Link to="/blog" />}>
              View all posts
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="transition-transform hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">{post.category}</Badge>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" render={<Link to="/blog/$slug" params={{ slug: post.slug }} />}>
                    Read article
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">Contact</Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {websiteData.contact.title}
          </h2>
          <p className="max-w-xl leading-7 text-muted-foreground">{websiteData.contact.subtitle}</p>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" render={<a href={websiteData.social.links[0].url} target="_blank" rel="noreferrer" aria-label="GitHub" />}>
              <Code2 />
            </Button>
            <Button variant="outline" size="icon" render={<a href={websiteData.social.links[1].url} target="_blank" rel="noreferrer" aria-label="LinkedIn" />}>
              <Contact />
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{websiteData.contact.formTitle}</CardTitle>
            <CardDescription>{websiteData.contact.formSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={websiteData.contact.formConfig.action}
              method={websiteData.contact.formConfig.method}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" required placeholder="Your name" />
                <Input name="email" type="email" required placeholder="Your email" />
              </div>
              <Textarea name="message" required rows={6} placeholder="Tell me about your project, team, or role..." />
              <Button type="submit" size="lg">
                Send message
                <Rocket data-icon="inline-end" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <span>Design and developed by Imamul Hassan Khan.</span>
        <span className="flex items-center gap-2">
          <BriefcaseBusiness data-icon="inline-start" />
          Open to product engineering roles
        </span>
      </footer>
    </main>
  )
}

export default Home
