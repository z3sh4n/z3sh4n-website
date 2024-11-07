import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import gif from 'gifs/3.gif'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      abhi me ye Website bana raha hu, thode time baad aana.
      </h1>
      <Image
      src={gif}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    </section>
  )
}
