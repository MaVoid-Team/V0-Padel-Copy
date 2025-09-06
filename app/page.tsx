import type React from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-teal-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-teal-900 rounded-sm"></div>
            </div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          <span className="text-xl font-bold ml-2">Padel Social</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/pricing" className="hover:text-yellow-400 transition-colors">
            Pricing
          </a>
          <a href="/events" className="hover:text-yellow-400 transition-colors">
            Events
          </a>
          <a href="/about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
          <a href="/padel-basics" className="hover:text-yellow-400 transition-colors">
            Padel Basics
          </a>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6">Book</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-12 lg:px-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Get in
                <br />
                the Game
              </h1>
              <p className="text-2xl lg:text-3xl font-bold text-yellow-400">Open Now!</p>
            </div>

            {/* Right Images */}
            <div className="relative">
              {/* Yellow decorative circle */}
              <div className="absolute -top-8 right-0 w-16 h-16 bg-yellow-400 rounded-full"></div>

              {/* Large circular background */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-teal-700/30 rounded-full"></div>

                {/* Male player image */}
                <div className="absolute top-4 right-4 w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src="/male-padel-player-in-yellow-shirt-holding-paddle-d.jpg"
                    alt="Male padel player"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Female player image */}
                <div className="absolute bottom-8 left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src="/female-padel-player-smiling-in-black-top.jpg"
                    alt="Female padel player"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative text around circle */}
                <div className="absolute bottom-0 right-0 text-xs text-white/60 transform rotate-12">
                  BETHESDA • PADEL • SOCIAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bethesda Pop-Up Section */}
      <section className="px-6 py-12 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Bethesda Pop-Up</h2>

          <p className="text-lg leading-relaxed">
            We're excited to welcome you to our first location at Westbard Square in Bethesda. Enjoy three outdoor padel
            courts, a fully stocked pro shop, and plenty of space to unwind with friends after your game.
          </p>

          <p className="text-lg leading-relaxed">
            Behind the scenes, we're also building a full-service indoor facility just around the corner. Stay tuned for
            updates as we prepare for the grand opening of our permanent padel club in late 2026.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Play */}
            <div className="space-y-4">
              <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="9" y2="15" />
                  <line x1="15" y1="9" x2="15" y2="15" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Play</h3>
              <p className="text-sm leading-relaxed">
                Log into the <span className="text-yellow-400">Playtomic</span> app to book a session on one of our
                state-of-the-art, lighted padel courts. Search for Padel
              </p>
            </div>

            {/* Train */}
            <div className="space-y-4">
              <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 11l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Train</h3>
              <p className="text-sm leading-relaxed">
                Learn the game and improve your skills with world-class padel coaches. We offer lessons and clinics for
                both beginners
              </p>
            </div>

            {/* Meet */}
            <div className="space-y-4">
              <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Meet</h3>
              <p className="text-sm leading-relaxed">
                Let's hang out. Connect with our community of players through competitive and social events. Join our
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
