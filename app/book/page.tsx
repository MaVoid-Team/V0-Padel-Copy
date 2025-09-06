"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

interface TimeSlot {
  time: string
  available: boolean
  bookedBy?: string
}

interface Court {
  id: number
  name: string
  type: string
  image: string
}

const courts: Court[] = [
  { id: 1, name: "Court 1", type: "Outdoor", image: "/padel-court-1.jpg" },
  { id: 2, name: "Court 2", type: "Outdoor", image: "/padel-court-2.jpg" },
  { id: 3, name: "Court 3", type: "Outdoor", image: "/padel-court-3.jpg" },
  { id: 4, name: "Court 4", type: "Indoor", image: "/padel-court-4.jpg" },
]

const timeSlots: TimeSlot[] = [
  { time: "7:00 AM", available: true },
  { time: "8:30 AM", available: false, bookedBy: "John D." },
  { time: "10:00 AM", available: true },
  { time: "11:30 AM", available: true },
  { time: "1:00 PM", available: false, bookedBy: "Sarah M." },
  { time: "2:30 PM", available: true },
  { time: "4:00 PM", available: true },
  { time: "5:30 PM", available: false, bookedBy: "Mike R." },
  { time: "7:00 PM", available: true },
  { time: "8:30 PM", available: true },
]

export default function BookingPage() {
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState("")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [view, setView] = useState<"courts" | "calendar">("courts")

  const handleCourtSelect = (court: Court) => {
    setSelectedCourt(court)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setShowEmailForm(true)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && selectedCourt && selectedTime) {
      setBookingConfirmed(true)
      setShowEmailForm(false)
    }
  }

  const resetBooking = () => {
    setSelectedCourt(null)
    setSelectedTime("")
    setShowEmailForm(false)
    setEmail("")
    setBookingConfirmed(false)
  }

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

      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Book Your Court</h1>
            <p className="text-lg text-white/80">
              Choose your preferred court and time slot for the perfect padel experience
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-teal-800 rounded-full p-1 flex">
              <button
                onClick={() => setView("courts")}
                className={`px-6 py-2 rounded-full transition-all ${
                  view === "courts" ? "bg-yellow-400 text-teal-900 font-medium" : "text-white hover:text-yellow-400"
                }`}
              >
                Court View
              </button>
              <button
                onClick={() => setView("calendar")}
                className={`px-6 py-2 rounded-full transition-all ${
                  view === "calendar" ? "bg-yellow-400 text-teal-900 font-medium" : "text-white hover:text-yellow-400"
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>

          {/* Booking Confirmation */}
          {bookingConfirmed && (
            <div className="bg-green-600 border border-green-500 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-xl font-bold mb-2">Booking Confirmed!</h3>
              <p className="mb-4">
                Your reservation for {selectedCourt?.name} on {selectedDate} at {selectedTime} has been confirmed. A
                confirmation email has been sent to {email}.
              </p>
              <Button onClick={resetBooking} className="bg-white text-green-600 hover:bg-green-50">
                Book Another Court
              </Button>
            </div>
          )}

          {/* Email Collection Form */}
          {showEmailForm && !bookingConfirmed && (
            <div className="bg-teal-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Complete Your Booking</h3>
              <div className="mb-4 text-sm text-white/80">
                <p>
                  <strong>Court:</strong> {selectedCourt?.name}
                </p>
                <p>
                  <strong>Date:</strong> {selectedDate}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime}
                </p>
              </div>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label htmlFor="booking-email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 px-0 py-2 focus:bg-white focus:text-teal-900 focus:placeholder-teal-900/60 focus:border-white focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="bg-yellow-400 text-teal-900 hover:bg-yellow-500">
                    Confirm Booking
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="bg-transparent border border-white text-white hover:bg-white hover:text-teal-900"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Court View */}
          {view === "courts" && !bookingConfirmed && (
            <div className="space-y-8">
              {/* Date Selection */}
              <div className="text-center">
                <label htmlFor="date" className="block text-lg font-medium mb-4">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-teal-800 border border-white/30 rounded-lg px-4 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>

              {/* Courts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courts.map((court) => (
                  <div
                    key={court.id}
                    className={`bg-teal-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:bg-teal-700 ${
                      selectedCourt?.id === court.id ? "ring-2 ring-yellow-400" : ""
                    }`}
                    onClick={() => handleCourtSelect(court)}
                  >
                    <div className="aspect-video bg-teal-700 flex items-center justify-center">
                      <img
                        src={court.image || "/placeholder.svg"}
                        alt={court.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{court.name}</h3>
                      <p className="text-white/70 text-sm">{court.type}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-white/80">Available</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {selectedCourt && (
                <div className="bg-teal-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Available Times for {selectedCourt.name} on {selectedDate}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          slot.available
                            ? "bg-yellow-400 text-teal-900 hover:bg-yellow-500"
                            : "bg-teal-700 text-white/50 cursor-not-allowed"
                        }`}
                      >
                        {slot.time}
                        {!slot.available && <div className="text-xs mt-1">Booked</div>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Calendar View */}
          {view === "calendar" && !bookingConfirmed && (
            <div className="bg-teal-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Court Availability Calendar</h3>

              {/* Date Selection for Calendar */}
              <div className="mb-6">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-teal-700 border border-white/30 rounded-lg px-4 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>

              {/* Calendar Grid */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 font-medium">Time</th>
                      {courts.map((court) => (
                        <th key={court.id} className="text-center p-3 font-medium">
                          {court.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((slot) => (
                      <tr key={slot.time} className="border-b border-white/10">
                        <td className="p-3 font-medium">{slot.time}</td>
                        {courts.map((court) => (
                          <td key={`${court.id}-${slot.time}`} className="p-3 text-center">
                            <button
                              onClick={() => {
                                setSelectedCourt(court)
                                handleTimeSelect(slot.time)
                              }}
                              disabled={!slot.available}
                              className={`w-full py-2 px-3 rounded text-sm font-medium transition-all ${
                                slot.available
                                  ? "bg-green-600 text-white hover:bg-green-500"
                                  : "bg-red-600 text-white cursor-not-allowed"
                              }`}
                            >
                              {slot.available ? "Available" : "Booked"}
                            </button>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
