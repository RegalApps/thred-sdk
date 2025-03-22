"use client"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-black border border-[#00FF00]/20 p-6 rounded-none">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg
            className="h-8 w-8 text-[#00FF00]/40"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <p className="text-lg mb-6 flex-1">{quote}</p>

        <div className="flex items-center gap-3">
          <img src={avatar || "/placeholder.svg"} alt={author} className="w-10 h-10 rounded-none bg-gray-800" />
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

