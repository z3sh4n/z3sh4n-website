import Link from 'next/link';

export default function ContactButton() {
  return (
    <Link href="mailto:zishanghaniwala@gmail.com" 
        className="flex items-center gap-1.5 mt-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="size-2 rounded-full bg-green-500"></div>
        <div className="relative cursor-pointer overflow-hidden">
          <p className="group text-muted-foreground">
            <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-500 ease-slow">
              Available for work
              <span className="invisible h-0"> Reach out</span>
            </span>
            <span className="group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-500 ease-slow">
              Reach out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 size-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </span>
          </p>
        </div>
    </Link>
  );
}
