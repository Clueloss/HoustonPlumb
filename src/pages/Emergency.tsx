import { motion } from 'framer-motion'
import { Phone, Clock, ShieldCheck, AlertTriangle, Droplets, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EmergencyPage = () => {
  return (
    <div className="bg-white">
      {/* Urgency Banner */}
      <div className="bg-red-600 text-white py-4 text-center overflow-hidden">
        <motion.p 
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="font-black tracking-widest uppercase text-sm px-4"
        >
          🚨 EMERGENCY PLUMBING HOTLINE: (713) 555-0123 — 24/7 RAPID RESPONSE 🚨
        </motion.p>
      </div>

      {/* Hero */}
      <section className="relative py-24 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 skew-x-12 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-600/5 -skew-x-12 -translate-x-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-2 rounded-full mb-8"
              >
                <Clock className="h-4 w-4 animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest">Average Response: 45 Minutes or Less</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Plumbing Emergency? <br />
                <span className="text-red-600">We're On Our Way.</span>
              </h1>
              
              <p className="text-xl text-navy-300 mb-10 leading-relaxed max-w-2xl">
                Don't wait for the damage to get worse. Our rapid-response team is stationed throughout Houston and ready to dispatch to your location right now.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 h-20 px-10 rounded-2xl text-2xl font-black shadow-[0_0_30px_rgba(220,38,38,0.3)] animate-bounce">
                  <Phone className="mr-3 h-8 w-8" /> (713) 555-0123
                </Button>
                <div className="flex flex-col justify-center">
                  <p className="text-navy-400 text-sm font-bold uppercase tracking-widest">Available Now</p>
                  <div className="flex items-center text-green-500 font-bold">
                    <span className="h-3 w-3 rounded-full bg-green-500 mr-2 animate-ping"></span>
                    8 Technicians On Duty
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, text: "Licensed & Insured" },
                  { icon: Zap, text: "No Emergency Premiums" },
                  { icon: Droplets, text: "Immediate Containment" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-navy-200 font-bold">
                    <item.icon className="h-5 w-5 text-red-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-navy-900 border border-navy-800 p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
              >
                <div className="absolute -top-6 -right-6 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl rotate-12 shadow-lg">
                  24/7
                </div>
                <h3 className="text-2xl font-black mb-6 text-center">Dispatch Status</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-navy-800/50 rounded-2xl border border-navy-700">
                    <span className="font-bold">Downtown / Heights</span>
                    <span className="text-green-500 font-black">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-navy-800/50 rounded-2xl border border-navy-700">
                    <span className="font-bold">Sugar Land / Katy</span>
                    <span className="text-green-500 font-black">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-navy-800/50 rounded-2xl border border-navy-700">
                    <span className="font-bold">Woodlands / Spring</span>
                    <span className="text-yellow-500 font-black">HIGH CALL VOL</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-navy-800/50 rounded-2xl border border-navy-700">
                    <span className="font-bold">Memorial / Galleria</span>
                    <span className="text-green-500 font-black">ACTIVE</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-navy-400 text-sm">Last updated: Just now</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-navy-950 mb-4">What's Considered an Emergency?</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">If you're experiencing any of these, don't wait. Call us immediately to prevent property damage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Burst Pipes", 
                desc: "Flooding can cause thousands in damage in minutes. Shut off your main valve and call us.",
                icon: AlertTriangle
              },
              { 
                title: "Sewer Backup", 
                desc: "Health hazards and property damage require immediate professional extraction.",
                icon: AlertTriangle
              },
              { 
                title: "Gas Leaks", 
                desc: "Extremely dangerous. Evacuate the premises first, then call us for repair.",
                icon: AlertTriangle
              },
              { 
                title: "Major Water Leak", 
                desc: "Uncontrollable leaks from heaters, sinks, or toilets need instant attention.",
                icon: AlertTriangle
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border-2 border-red-50 rounded-3xl hover:border-red-100 transition-colors"
              >
                <item.icon className="h-10 w-10 text-red-600 mb-6" />
                <h3 className="text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
                <p className="text-navy-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Take */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[3rem] shadow-2xl" 
                alt="Plumber at work"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-navy-950 mb-8">What to Do While You Wait</h2>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Shut Off the Water", text: "Locate your main water shut-off valve and turn it clockwise until it stops." },
                  { step: "2", title: "Turn Off the Heater", text: "If it's a water heater issue, turn off the power (electric) or gas supply to the unit." },
                  { step: "3", title: "Clear the Area", text: "Remove valuables, furniture, and electronics from the path of leaking water." },
                  { step: "4", title: "Open Faucets", text: "Open outside faucets to drain any remaining water from your pipes away from the house." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="bg-navy-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-950 text-lg mb-1">{item.title}</h4>
                      <p className="text-navy-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-red-600">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-4xl font-black mb-8">Minutes Matter. Call Now.</h2>
          <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 h-20 px-12 rounded-2xl text-3xl font-black shadow-2xl">
            (713) 555-0123
          </Button>
          <p className="mt-8 text-red-100 font-bold tracking-widest uppercase">No Extra Charge for Nights, Weekends, or Holidays</p>
        </div>
      </section>
    </div>
  )
}

export default EmergencyPage
