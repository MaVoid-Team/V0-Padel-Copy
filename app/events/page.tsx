import type React from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function EventsPage(): React.JSX.Element {
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
          <a href="/events" className="text-yellow-400 transition-colors">
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

      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Padel Social Bethesda is the ideal place to host your private gathering. Our team is ready to help you
                  organize a perfect experience, whether it's a corporate event, birthday party, or other special
                  occasion. Come play and have fun at our one-of-a-kind venue!
                </p>
              </div>

              {/* Circular Image */}
              <div className="relative">
                {/* Yellow decorative circle */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full"></div>

                {/* Main circular image */}
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                    <img
                      src="/two-padel-players-shaking-hands-on-court-after-gam.jpg"
                      alt="Two padel players shaking hands"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-8">Complete this form and our team will be in touch soon.</h2>
              </div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="people" className="block text-sm font-medium mb-2">
                      How Many People would you like to host?
                    </label>
                    <input
                      type="text"
                      id="people"
                      name="people"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Preferred Date*
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="MM/DD/YYYY"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Type your message..."
                      className="w-full bg-transparent border border-white/30 rounded-lg text-white placeholder-white/60 px-4 py-3 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900 rounded-full px-8 py-2 transition-all duration-200"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
