import { motion } from 'framer-motion'
import { 
  Droplets, 
  Thermometer, 
  Search, 
  Hammer, 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Our professional drain cleaning services use advanced equipment to clear the most stubborn blockages and restore your pipes to optimal flow.",
    features: ["Hydro-jetting", "Video camera inspection", "Root removal", "Preventative maintenance"]
  },
  {
    icon: Thermometer,
    title: "Water Heaters",
    description: "From traditional tank models to modern tankless systems, we provide expert repair, maintenance, and installation services for all brands.",
    features: ["Tankless installation", "Gas & electric repair", "Annual flushing", "Safety inspections"]
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Don't let hidden leaks damage your home. Our non-invasive acoustic and thermal imaging technology pinpoints leaks with precision.",
    features: ["Slab leak detection", "Wall & ceiling leaks", "Main line detection", "Pressure testing"]
  },
  {
    icon: Hammer,
    title: "Pipe Repair & Replacement",
    description: "Whether it's a small patch or a full house repipe, we use high-quality materials like PEX and copper to ensure long-lasting results.",
    features: ["Burst pipe repair", "Whole house repipe", "Corrosion solutions", "Noisy pipe fixes"]
  },
  {
    icon: Wrench,
    title: "Fixtures & Faucets",
    description: "Upgrade your kitchen and bathroom with our professional installation services for sinks, toilets, faucets, and showers.",
    features: ["Toilet installation", "Kitchen sink repair", "Shower valve replacement", "Garbage disposals"]
  },
  {
    icon: Settings,
    title: "Sewer Line Services",
    description: "Comprehensive sewer solutions including trenchless repair options that save your landscaping and driveway from extensive digging.",
    features: ["Trenchless sewer repair", "Main line cleaning", "Sewer camera surveys", "Tree root intrusion"]
  },
  {
    icon: ShieldCheck,
    title: "Gas Line Services",
    description: "Safety is our priority. We offer expert gas line installation and repair for stoves, fireplaces, and outdoor grills.",
    features: ["Gas leak repair", "New line installation", "Code compliance", "Safety shut-off valves"]
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    description: "Plumbing disasters don't wait for business hours. Our rapid response team is available 24/7 to handle your critical failures.",
    features: ["24/7 Availability", "Rapid response times", "Expert diagnosis", "Temporary & permanent fixes"]
  }
]

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-950 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            Professional Plumbing Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-navy-300 max-w-2xl mx-auto"
          >
            Comprehensive solutions for residential and commercial plumbing needs across Greater Houston.
          </motion.p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-brand-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="h-10 w-10 text-brand-600" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-navy-950 mb-6">{service.title}</h2>
                  <p className="text-navy-700 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-navy-900 font-bold">
                        <CheckCircle className="h-5 w-5 text-brand-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-brand-600 hover:bg-brand-700 h-14 px-8 rounded-xl text-lg">
                    Book This Service <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=${i}`} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-50 rounded-full -z-10 opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-4xl font-extrabold text-navy-950 mb-6">Need a Custom Quote?</h2>
            <p className="text-navy-600 text-lg mb-10 leading-relaxed">
              Every plumbing job is unique. We provide free, no-obligation estimates for all major repairs and installations. Our pricing is transparent and upfront.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-brand-600 h-16 px-10 rounded-2xl text-xl font-bold">Request Free Estimate</Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl font-bold border-2 border-brand-600 text-brand-600">Call (713) 555-0123</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
