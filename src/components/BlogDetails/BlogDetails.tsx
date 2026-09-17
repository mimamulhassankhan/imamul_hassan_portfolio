import React, { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "@tanstack/react-router"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Code2,
  Contact,
  Eye,
  Heart,
  Mail,
  MessageSquare,
  Share2,
  Tag,
} from "lucide-react"

import { BlogFooter, BlogHeader, BlogShell } from "@/components/Layout/BlogShell"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import blogsData from "@/data/blogs.json"
import websiteData from "@/data/websiteData.json"
import "katex/dist/katex.min.css"

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featuredImage: string
  relatedPosts: string[]
  stats: {
    views: number
    likes: number
    shares: number
    comments: number
  }
  settings: {
    showToc: boolean
    enableSocialSharing: boolean
    enableReadingProgress: boolean
    enableRelatedPosts: boolean
  }
}

interface TableOfContentsItem {
  id: string
  text: string
  level: number
}

const slugify = (value: React.ReactNode) =>
  React.Children.toArray(value)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

const extractHeadings = (content: string): TableOfContentsItem[] => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const headings: TableOfContentsItem[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim()
    headings.push({ id: slugify(text), text, level: match[1].length })
  }

  return headings
}

const hasUsableFeaturedImage = (src: string) => src.length > 0 && !src.includes("/images/blog/")

const createDraftContent = (post: (typeof websiteData.blogs.posts)[number]) => `# ${post.title}

${post.excerpt}

## What this article covers

This post is being prepared as a full long-form article. The topic is part of my working notes around ${post.category.toLowerCase()} and production software engineering.

## Key themes

${post.tags.map((tag) => `- ${tag}`).join("\n")}

## Practical angle

I usually write from real project experience: tradeoffs, implementation details, and the decisions that make a system easier to maintain after launch.
`

const findBlog = (slug: string): BlogPost | null => {
  const fullPost = blogsData.blogs.find((post) => post.slug === slug)
  if (fullPost) {
    return fullPost
  }

  const summaryPost = websiteData.blogs.posts.find((post) => post.slug === slug)
  if (!summaryPost) {
    return null
  }

  return {
    id: String(summaryPost.id),
    slug: summaryPost.slug,
    title: summaryPost.title,
    excerpt: summaryPost.excerpt,
    content: createDraftContent(summaryPost),
    author: websiteData.profile.name,
    authorAvatar: "/images/profile-photo.jpg",
    publishDate: summaryPost.publishDate,
    readTime: summaryPost.readTime,
    category: summaryPost.category,
    tags: summaryPost.tags,
    featuredImage: summaryPost.image || "/images/blog/placeholder.jpg",
    relatedPosts: [],
    stats: {
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
    },
    settings: {
      showToc: true,
      enableSocialSharing: true,
      enableReadingProgress: true,
      enableRelatedPosts: false,
    },
  }
}

const NotFoundState: React.FC = () => (
  <BlogShell>
    <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-4xl place-items-center px-4 py-12 text-center sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <Badge variant="outline" className="mx-auto mb-2 w-fit">
            Blog
          </Badge>
          <CardTitle className="font-heading text-4xl font-semibold tracking-tight">Post not found</CardTitle>
          <CardDescription className="mx-auto max-w-xl text-base">
            This article is not available yet, or the URL has changed. The blog index has the current list of posts.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center gap-3">
          <Button render={<Link to="/blog" />}>
            <ArrowLeft data-icon="inline-start" />
            Back to blog
          </Button>
          <Button variant="outline" render={<Link to="/" />}>
            Home
          </Button>
        </CardContent>
      </Card>
    </section>
  </BlogShell>
)

const BlogDetails: React.FC = () => {
  const { slug } = useParams({ from: "/blog/$slug" })
  const blog = useMemo(() => findBlog(slug), [slug])
  const [activeHeading, setActiveHeading] = useState("")
  const [readingProgress, setReadingProgress] = useState(0)
  const [likes, setLikes] = useState(blog?.stats.likes ?? 0)
  const [isLiked, setIsLiked] = useState(false)

  const tableOfContents = useMemo(() => (blog ? extractHeadings(blog.content) : []), [blog])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [slug])

  useEffect(() => {
    setLikes(blog?.stats.likes ?? 0)
    setIsLiked(false)
  }, [blog])

  useEffect(() => {
    if (!blog?.settings.enableReadingProgress) return

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setReadingProgress(Math.min(progress, 100))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [blog])

  useEffect(() => {
    if (!blog || tableOfContents.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target.id) {
          setActiveHeading(visible.target.id)
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    )

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [blog, tableOfContents])

  if (!blog) {
    return <NotFoundState />
  }

  const relatedPosts = blogsData.blogs.filter((post) => blog.relatedPosts.includes(post.id))

  const share = (platform: "x" | "facebook" | "linkedin") => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(blog.title)
    const links = {
      x: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    }
    window.open(links[platform], "_blank", "width=720,height=520")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {blog.settings.enableReadingProgress && (
        <div className="fixed left-0 top-0 z-50 h-1 w-full bg-muted">
          <div className="h-full bg-primary transition-all" style={{ width: `${readingProgress}%` }} />
        </div>
      )}

      <BlogHeader />

      <section className="border-b bg-muted/35">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8 lg:py-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{blog.category}</Badge>
              <Badge variant="outline">
                <CalendarDays data-icon="inline-start" />
                {formatDate(blog.publishDate)}
              </Badge>
              <Badge variant="outline">
                <Clock data-icon="inline-start" />
                {blog.readTime}
              </Badge>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-4xl font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">{blog.excerpt}</p>
            </div>

            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarImage src={blog.authorAvatar} alt={blog.author} />
                <AvatarFallback>IH</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{blog.author}</p>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <Card className="self-start">
            <CardHeader>
              <CardTitle>Article Signals</CardTitle>
              <CardDescription>Quick context before reading.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border bg-background p-3">
                <Eye data-icon="inline-start" />
                <p className="mt-2 font-heading text-2xl font-semibold">{blog.stats.views}</p>
                <p className="text-xs text-muted-foreground">Views</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <Heart data-icon="inline-start" />
                <p className="mt-2 font-heading text-2xl font-semibold">{likes}</p>
                <p className="text-xs text-muted-foreground">Likes</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <Share2 data-icon="inline-start" />
                <p className="mt-2 font-heading text-2xl font-semibold">{blog.stats.shares}</p>
                <p className="text-xs text-muted-foreground">Shares</p>
              </div>
              <div className="rounded-lg border bg-background p-3">
                <MessageSquare data-icon="inline-start" />
                <p className="mt-2 font-heading text-2xl font-semibold">{blog.stats.comments}</p>
                <p className="text-xs text-muted-foreground">Comments</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:px-8">
        <article className="min-w-0">
          <Card>
            {hasUsableFeaturedImage(blog.featuredImage) ? (
              <img src={blog.featuredImage} alt={blog.title} className="aspect-[21/8] w-full object-cover" />
            ) : (
              <div className="flex aspect-[21/8] min-h-56 items-center justify-center bg-muted px-6 text-center">
                <div className="max-w-2xl">
                  <Badge variant="secondary" className="mb-4">
                    {blog.category}
                  </Badge>
                  <p className="font-heading text-2xl font-semibold tracking-tight text-balance">{blog.title}</p>
                </div>
              </div>
            )}
            <CardContent className="px-5 py-6 sm:px-7 lg:px-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h1: ({ children }) => (
                    <h1 id={slugify(children)} className="mb-4 mt-2 scroll-mt-24 font-heading text-2xl font-semibold tracking-tight">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 id={slugify(children)} className="mb-3 mt-8 scroll-mt-24 border-b pb-2 font-heading text-xl font-semibold tracking-tight">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 id={slugify(children)} className="mb-2 mt-6 scroll-mt-24 font-heading text-lg font-semibold">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => <p className="mb-4 text-base leading-7 text-muted-foreground">{children}</p>,
                  ul: ({ children }) => <ul className="mb-4 ml-5 list-disc text-muted-foreground">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-4 ml-5 list-decimal text-muted-foreground">{children}</ol>,
                  li: ({ children }) => <li className="mb-2 leading-7">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="mb-6 rounded-xl border-l-4 bg-muted p-5 text-muted-foreground">{children}</blockquote>
                  ),
                  code: ({ children, className }) => (
                    <code className={className ? "rounded-md bg-muted px-1.5 py-1 font-mono text-sm" : "rounded-md bg-muted px-1.5 py-1 font-mono text-sm"}>
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="mb-6 overflow-x-auto rounded-xl border bg-muted p-5 text-sm leading-7">{children}</pre>
                  ),
                  a: ({ children, href }) => (
                    <a href={href} target="_blank" rel="noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                      {children}
                    </a>
                  ),
                  table: ({ children }) => <div className="mb-6 overflow-x-auto rounded-xl border"><table className="w-full text-sm">{children}</table></div>,
                  th: ({ children }) => <th className="border-b bg-muted p-3 text-left font-medium">{children}</th>,
                  td: ({ children }) => <td className="border-b p-3 text-muted-foreground">{children}</td>,
                }}
              >
                {blog.content}
              </ReactMarkdown>

              <Separator className="my-8" />

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag data-icon="inline-start" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/40 p-3">
                <Button
                  type="button"
                  variant={isLiked ? "default" : "outline"}
                  onClick={() => {
                    if (!isLiked) {
                      setLikes((value) => value + 1)
                      setIsLiked(true)
                    }
                  }}
                >
                  <Heart data-icon="inline-start" />
                  {isLiked ? "Liked" : "Like this article"}
                </Button>

                {blog.settings.enableSocialSharing && (
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" variant="outline" onClick={() => share("x")}>
                      Share on X
                    </Button>
                    <Button type="button" variant="outline" onClick={() => share("linkedin")}>
                      LinkedIn
                    </Button>
                    <Button type="button" variant="outline" onClick={() => share("facebook")}>
                      Facebook
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {blog.settings.enableRelatedPosts && relatedPosts.length > 0 && (
            <div className="mt-6">
              <h2 className="mb-4 font-heading text-2xl font-semibold">Related posts</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Card key={post.id} className="transition-transform hover:-translate-y-1">
                    {hasUsableFeaturedImage(post.featuredImage) ? (
                      <img src={post.featuredImage} alt={post.title} className="aspect-[16/9] w-full object-cover" />
                    ) : (
                      <div className="flex aspect-[16/9] items-center justify-center bg-muted px-4 text-center">
                        <p className="font-heading text-lg font-semibold">{post.category}</p>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" render={<Link to="/blog/$slug" params={{ slug: post.slug }} />}>
                        Read next
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
          {blog.settings.showToc && tableOfContents.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>On this page</CardTitle>
                <CardDescription>Jump through the article sections.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                    className={`group flex items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-muted ${
                      activeHeading === item.id ? "bg-muted text-foreground" : "text-muted-foreground"
                    } ${item.level === 2 ? "ml-3" : item.level === 3 ? "ml-6" : ""}`}
                  >
                    <span className={`mt-2 size-1.5 shrink-0 rounded-full ${activeHeading === item.id ? "bg-primary" : "bg-muted-foreground/45 group-hover:bg-foreground"}`} />
                    <span>{item.text}</span>
                  </button>
                ))}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>About the author</CardTitle>
              <CardDescription>Full-stack engineer with 6+ years of product experience.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarImage src={blog.authorAvatar} alt={blog.author} />
                  <AvatarFallback>IH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-muted-foreground">React, Next.js, Node, .NET</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" render={<a href="https://github.com/mimamulhassankhan" target="_blank" rel="noreferrer" aria-label="Code profile" />}>
                  <Code2 />
                </Button>
                <Button variant="outline" size="icon" render={<a href="https://linkedin.com/in/imamul-hassan-khan" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" />}>
                  <Contact />
                </Button>
                <Button variant="outline" size="icon" render={<a href="mailto:pappuhassan440@gmail.com" aria-label="Email Imamul" />}>
                  <Mail />
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>

      <BlogFooter />
    </main>
  )
}

export default BlogDetails
