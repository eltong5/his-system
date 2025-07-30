// src/app/page.tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 grid grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16">
      <Hero />
      <footer className="text-sm text-gray-500 dark:text-gray-400 flex gap-6 flex-wrap justify-center row-start-3">
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Next.js
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Tailwind CSS
        </a>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Deploy con Vercel
        </a>
      </footer>
    </div>
  );
}
