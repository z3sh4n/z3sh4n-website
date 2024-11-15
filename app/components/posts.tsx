import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="mb-4 flex flex-col gap-1 transition-all duration-400 hover:translate-x-2 hover:border-l-4 hover:pl-2">
              <p className="text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
export function BlogPosts3() {
  let allBlogs = getBlogPosts().slice(0, 3)

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="mb-4 flex flex-col gap-1 transition-all duration-400 hover:translate-x-2 hover:border-l-4 hover:pl-2">
              <p className="text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}