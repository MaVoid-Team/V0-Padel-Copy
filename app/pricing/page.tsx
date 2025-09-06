import type React from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function PricingPage(): React.JSX.Element {
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
          <a href="/pricing" className="text-yellow-400 transition-colors">
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

      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <p className="text-lg leading-relaxed">
              At Padel Social, court bookings are open to everyone. You can either pay as you go or choose one of our
              two membership options.
            </p>
          </div>

          {/* Pricing Options */}
          <div className="space-y-12">
            {/* Pay to Play */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4 lg:flex-1">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Pay to Play</h2>
                  <p className="text-base leading-relaxed">
                    Sessions are available for 1 hour, 90-minutes or 2 hours. You may book up to 7 days in advance.
                  </p>
                </div>
              </div>
              <div className="lg:flex-1 lg:max-w-md space-y-4">
                <div className="space-y-2">
                  <div className="text-xl font-bold">$80 per hour / peak</div>
                  <div className="text-sm text-white/80">($20 per person)</div>
                  <div className="text-sm text-white/80">Monday to Friday 4pm-10pm & weekends</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">$60 per hour / off-peak</div>
                  <div className="text-sm text-white/80">($15 per person)</div>
                  <div className="text-sm text-white/80">Monday to Friday 7am-4pm</div>
                </div>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Founding Membership */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4 lg:flex-1">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Founding Membership</h2>
                </div>
              </div>
              <div className="lg:flex-1 lg:max-w-md space-y-4">
                <div className="text-xl font-bold">$100 per month</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    50% off all court bookings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    Book up to 14 days in advance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    Cancellation allowed 12 hours in advance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    10% off all pro shop purchases
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Private Lessons */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4 lg:flex-1">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Private Lessons</h2>
                </div>
              </div>
              <div className="lg:flex-1 lg:max-w-md space-y-4">
                <div className="text-xl font-bold">$150 per hour</div>
                <div className="text-sm text-white/80">Maximum of three people</div>
              </div>
            </div>

            <hr className="border-white/20" />

            {/* Clinics */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4 lg:flex-1">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Clinics</h2>
                </div>
              </div>
              <div className="lg:flex-1 lg:max-w-md space-y-4">
                <div className="space-y-2">
                  <div className="text-xl font-bold">$45 per person for one hour</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">$65 per person for 90 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
