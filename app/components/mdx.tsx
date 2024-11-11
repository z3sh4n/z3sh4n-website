import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

interface TableProps {
  data: {
    headers: Array<string | number | React.ReactNode | null>
    rows: Array<Array<string | number | React.ReactNode | null>>
  }
}

function Table({ data }: TableProps) {
  let headers = data.headers.map(
    (header: string | number | React.ReactNode | null, index: React.Key) => (
      <th key={index}>{header}</th>
    )
  )
  let rows = data.rows.map((row: Array<string | number | React.ReactNode | null>, index: React.Key) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

function CustomLink(props: CustomLinkProps) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

interface RoundedImageProps extends ImageProps {
  alt: string;
}

const RoundedImage: React.FC<RoundedImageProps> = (props) => {
  return <Image className="rounded-lg" {...props} />;
};

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children as string)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

