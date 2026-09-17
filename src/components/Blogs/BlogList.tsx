import React, { useMemo, useState } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowRight, CalendarDays, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import websiteData from "@/data/websiteData.json"

const BlogList: React.FC = () => {
  const { blogs } = websiteData
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const categories = useMemo(() => ["All", ...new Set(blogs.posts.map((post) => post.category))], [blogs.posts])

  const filteredPosts = useMemo(() => {
    const filtered = blogs.posts.filter((post) => {
      const query = searchTerm.toLowerCase()
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    filtered.sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
      }

      if (sortBy === "featured") {
        return Number(b.featured) - Number(a.featured)
      }

      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    })

    return filtered
  }, [blogs.posts, searchTerm, selectedCategory, sortBy])

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
      <Card>
        <CardHeader className="pb-2">
          <Badge variant="outline" className="mb-2 w-fit">
            Blog
          </Badge>
          <CardTitle className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Notes on building software that lasts
          </CardTitle>
          <CardDescription className="max-w-3xl text-sm leading-6">
            {blogs.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="grid gap-4 md:grid-cols-[1fr_14rem_14rem]">
            <label className="flex flex-col gap-2 text-sm font-medium">
              Search posts
              <div className="relative">
                <Input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by title, topic, or tag..."
                  className="pr-9"
                />
                <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Category
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  if (value) setSelectedCategory(value)
                }}
              >
                <SelectTrigger className="w-full bg-background/60">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Sort
              <Select
                value={sortBy}
                onValueChange={(value) => {
                  if (value) setSortBy(value)
                }}
              >
                <SelectTrigger className="w-full bg-background/60">
                  <SelectValue placeholder="Sort posts" />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectGroup>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="featured">Featured first</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {blogs.posts.length} posts
            {searchTerm ? ` for "${searchTerm}"` : ""}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>
        </CardContent>
      </Card>

      {filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="transition-transform hover:-translate-y-0.5">
              <CardContent className="grid gap-4 py-4 md:grid-cols-[1fr_auto] md:items-center">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.featured && <Badge variant="outline">Featured</Badge>}
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarDays data-icon="inline-start" />
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="truncate font-heading text-xl font-semibold tracking-tight">{post.title}</h2>
                  <p className="mt-2 line-clamp-2 max-w-4xl text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex md:justify-end">
                  <Button variant="outline" render={<Link to="/blog/$slug" params={{ slug: post.slug }} />}>
                    Read
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mx-auto w-full max-w-2xl text-center">
          <CardHeader>
            <CardTitle>No posts found</CardTitle>
            <CardDescription>Try changing the search terms or clearing the filters.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              type="button"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSortBy("newest")
              }}
            >
              Clear filters
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

export default BlogList
