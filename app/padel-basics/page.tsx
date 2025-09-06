import type React from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function PadelBasicsPage(): React.JSX.Element {
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
          <a href="/padel-basics" className="text-yellow-400 transition-colors">
            Padel Basics
          </a>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6">Book</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* What is padel all about? */}
          <section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold">What is padel all about?</h1>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    Padel got its start in Mexico in 1969, then quickly took off in Spain —where it's now a national
                    pastime. These days, padel is considered the fastest-growing racquet sport in the world. It's the
                    world, in the U.S., Miami has been the padel epicenter, but courts are popping up all over the
                    country.
                  </p>
                  <p>
                    Padel is a fun mix of various racquet sports, played on turf with a net, and surrounded by four
                    glass walls. The ball stays in play off the walls, which makes for long, exciting points. Played
                    mostly as doubles with four to a court, padel's social aspect is a key part of what makes it so fun.
                    It's easy to learn but challenging enough to master.
                  </p>
                </div>
              </div>

              {/* Right side image */}
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-8 right-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>

                {/* Main circular image */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                    <img
                      src="/padel-player-in-action-on-court.jpg"
                      alt="Padel player in action"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What are the rules? */}
          <section className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold">What are the rules?</h2>

            <div className="space-y-12">
              {/* Scoring */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Scoring</h3>
                  <p className="text-base leading-relaxed">
                    Padel scoring is much like tennis: Love, 15, 30, 40 and Deuce. At deuce, a golden point is often
                    played to break the tie. Sets go to 6 games, win by 2, with a tiebreaker at 6 all.
                  </p>
                </div>
              </div>

              <hr className="border-white/20" />

              {/* The Serve */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    <path d="M8 11l2 2 4-4" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">The Serve</h3>
                  <p className="text-base leading-relaxed">
                    The server must bounce the ball behind the service line and hit it underhand serve crosscourt into
                    the opposite service box. The ball must bounce in the service box before hitting any walls or the
                    net.
                  </p>
                </div>
              </div>

              <hr className="border-white/20" />

              {/* In and Out */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">In and Out</h3>
                  <p className="text-base leading-relaxed">
                    During play, the ball must first hit the turf to be considered in. If it hits the grass or fence
                    first on the opposite side, the ball is out. Players may return the ball off the glass or the fence
                    on their own side, if the net during regular play. Serves may be returned off the glass, but a serve
                    that hits the fence is out.
                  </p>
                </div>
              </div>

              <hr className="border-white/20" />

              {/* Playing off the Walls */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="9" x2="9" y2="15" />
                    <line x1="15" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Playing off the Walls</h3>
                  <p className="text-base leading-relaxed">
                    The walls are what make padel so exciting and challenging. If a ball passes you, you may let it
                    bounce off the glass and then hit it before it bounces twice. You can even use the walls on your
                    side of the court to make your shot.
                  </p>
                </div>
              </div>

              <hr className="border-white/20" />

              {/* Winning points */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Winning points</h3>
                  <p className="text-base leading-relaxed">
                    Points are won whenever a ball cannot be returned over the net or if the ball bounces twice.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
