import { BlogPosts } from '@/app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      abhi me ye Website bana raha hu, thode time baad aana.
      </h1>
      <Image
      src="https://media1.tenor.com/m/ss-WiQSw9G0AAAAC/mujhse-shaadi-karogi-akshay-kumar-and-salman-khan-tribal-dance.gif"
      alt="gif"
      sizes="100vw"
      width={500}
      height={500}
    />
    </section>
  )
}