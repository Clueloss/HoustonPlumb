import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Droplets, 
  Wrench, 
  Zap, 
  Thermometer, 
  Search, 
  Hammer, 
  Settings,
  Star,
  MapPin,
  ChevronDown,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-navy-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000" 
            alt="Plumbing Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-50 via-navy-50/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-navy-950 mb-6 leading-tight"
            >
              Fast & Reliable Plumbing Services in <span className="text-brand-600">Houston</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-navy-700 mb-10 max-w-2xl leading-relaxed"
            >
              Expert plumbing solutions for your home and business. From leaky faucets to complex sewer repairs, we handle it all with precision and care.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg">
                Book Service Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-brand-600 text-brand-600 hover:bg-brand-50">
                View All Services
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex items-center space-x-8"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="Customer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm font-bold text-navy-900">4.9/5 from 500+ Houston Residents</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, text: "Licensed & Insured" },
              { icon: Clock, text: "On-Time Arrival" },
              { icon: ShieldCheck, text: "Workmanship Guaranteed" },
              { icon: Award, text: "Top Rated Locally" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="bg-brand-50 p-4 rounded-2xl">
                  <item.icon className="h-8 w-8 text-brand-600" />
                </div>
                <span className="font-bold text-navy-950">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-navy-950 mb-4">Expert Plumbing Solutions</h2>
            <p className="text-navy-600 text-lg">We offer a wide range of plumbing services tailored to meet the needs of Houston homeowners.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Drain Cleaning", desc: "Clear stubborn clogs and restore proper flow to your drains." },
              { icon: Thermometer, title: "Water Heaters", desc: "Repair, maintenance and installation of all water heater types." },
              { icon: Search, title: "Leak Detection", desc: "Advanced technology to find hidden leaks before they cause damage." },
              { icon: Hammer, title: "Pipe Repair", desc: "Expert fixing of burst or corroded pipes in your plumbing system." },
              { icon: Wrench, title: "Fixture Install", desc: "Professional installation of faucets, toilets, and sinks." },
              { icon: Settings, title: "Sewer Repair", desc: "Comprehensive sewer line solutions including trenchless repair." },
              { icon: ShieldCheck, title: "Backflow Testing", desc: "Ensuring your water supply remains safe and uncontaminated." },
              { icon: Zap, title: "Emergency Repair", desc: "24/7 rapid response for critical plumbing failures." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full group hover:border-brand-300 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="bg-brand-50 p-4 rounded-xl mb-6 group-hover:bg-brand-600 transition-colors">
                      <service.icon className="h-8 w-8 text-brand-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-3">{service.title}</h3>
                    <p className="text-navy-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                    <a href="#" className="mt-auto inline-flex items-center text-brand-600 font-bold hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Plumber working" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-600 text-white p-8 rounded-2xl hidden md:block z-20 shadow-xl">
                <p className="text-4xl font-black mb-1">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full -z-0 opacity-50"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
              <h2 className="text-4xl font-extrabold text-navy-950 mb-6 leading-tight">Your Trusted Local Plumbing Experts in Houston</h2>
              <p className="text-navy-700 mb-6 text-lg leading-relaxed">
                Founded in 2011, HoustonPlumb Elite Services has been committed to providing top-tier plumbing solutions with a focus on integrity, quality, and exceptional customer service.
              </p>
              <p className="text-navy-700 mb-8 leading-relaxed">
                Our team of licensed professionals undergoes continuous training to stay ahead of the latest plumbing technologies and techniques. We don't just fix pipes; we provide peace of mind for your most valuable asset—your home.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Family owned and operated locally",
                  "Fully licensed, bonded, and insured",
                  "Upfront pricing with no hidden fees",
                  "24/7 Emergency response team"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-navy-900 font-semibold">
                    <CheckCircle className="h-5 w-5 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-navy-900 hover:bg-navy-950 text-white px-8 h-14 rounded-full">Learn More About Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Why Houstonians Choose Us</h2>
            <p className="text-navy-300 max-w-2xl mx-auto">We've built our reputation on quality workmanship and reliable service that you can count on every time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Upfront Pricing", 
                desc: "No surprises here. We provide clear, honest estimates before any work begins so you know exactly what to expect.",
                icon: Award
              },
              { 
                title: "Expert Technicians", 
                desc: "Our plumbers are highly trained, background-checked, and committed to doing the job right the first time.",
                icon: ShieldCheck
              },
              { 
                title: "Rapid Response", 
                desc: "Plumbing issues can't wait. We offer same-day service and 24/7 emergency support when you need us most.",
                icon: Clock
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-900/50 backdrop-blur-sm border border-navy-800 p-10 rounded-3xl hover:border-brand-500/50 transition-colors group"
              >
                <item.icon className="h-12 w-12 text-brand-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-navy-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl font-extrabold text-navy-950">What Our Customers Say</h2>
            </div>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1 bg-brand-50 px-4 py-2 rounded-full border border-brand-100">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-bold text-navy-950">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "The Heights",
                text: "HoustonPlumb saved my kitchen! I had a massive leak on a Sunday night, and they were here within 45 minutes. Professional, clean, and very reasonably priced.",
                image: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                name: "Michael Chen",
                location: "Sugar Land",
                text: "The most professional plumbers I've ever dealt with. They explained everything clearly, gave me options, and the final price was exactly what they quoted.",
                image: "https://i.pravatar.cc/150?u=michael"
              },
              {
                name: "Robert Miller",
                location: "Memorial",
                text: "Had them out for a water heater replacement. They were efficient, respectful of my home, and did a beautiful job. Highly recommend their elite service!",
                image: "https://i.pravatar.cc/150?u=robert"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl relative"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-navy-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-navy-950">{t.name}</h4>
                    <p className="text-sm text-navy-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 md:p-20">
                <h2 className="text-4xl font-extrabold text-navy-950 mb-6">Serving All of Greater Houston</h2>
                <p className="text-navy-600 mb-10 text-lg leading-relaxed">
                  We provide rapid response plumbing services to all neighborhoods in Houston and surrounding areas. Not sure if we cover your location? Give us a call!
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    "The Heights", "Sugar Land", "Katy", "The Woodlands", 
                    "Memorial", "Pearland", "Pasadena", "Cypress",
                    "Spring", "Bellaire", "Humble", "League City"
                  ].map((city, i) => (
                    <div key={i} className="flex items-center space-x-2 text-navy-800 font-medium">
                      <MapPin className="h-4 w-4 text-brand-600" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-brand-600 hover:bg-brand-700 h-14 px-8 rounded-full">Check Availability</Button>
              </div>
              <div className="lg:w-1/2 min-h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443089.05185966456!2d-95.730948!3d29.817178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-navy-950 mb-4">Frequently Asked Questions</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">Common questions about our plumbing services and what to expect when you work with us.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Do you offer emergency plumbing services?",
                a: "Yes! We provide 24/7 emergency plumbing services for critical issues like burst pipes, major leaks, and sewer backups. Call us anytime."
              },
              {
                q: "Are your plumbers licensed and insured?",
                a: "Absolutely. All our technicians are fully licensed, background-checked, and we carry comprehensive insurance for your protection and ours."
              },
              {
                q: "How much do you charge for a service call?",
                a: "We offer transparent, upfront pricing. While service call fees may vary depending on the complexity, we always provide an estimate before any work begins."
              },
              {
                q: "Do you provide warranties on your work?",
                a: "Yes, we stand behind our workmanship. We offer varying warranties on different services and parts used, ensuring you're satisfied with the results."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-lg font-bold text-navy-950">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-navy-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 text-navy-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-950/10 skew-x-12 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 -translate-x-20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-navy-950 mb-6">Request a Free Estimate</h2>
              <p className="text-navy-600 mb-10 text-lg">
                Fill out the form below and one of our experts will get back to you within 30 minutes to discuss your plumbing needs.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-brand-50 p-4 rounded-2xl">
                    <Phone className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-500 uppercase tracking-widest">Call Us Now</p>
                    <a href="tel:7135550123" className="text-2xl font-black text-navy-950 hover:text-brand-600 transition-colors">(713) 555-0123</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="bg-brand-50 p-4 rounded-2xl">
                    <ShieldCheck className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-500 uppercase tracking-widest">Our Promise</p>
                    <p className="text-xl font-bold text-navy-950">100% Satisfaction Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 p-8 md:p-12 rounded-[2rem]">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Phone Number</label>
                    <input type="tel" placeholder="(713) 555-0000" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Service Needed</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                    <option>Select a Service</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater</option>
                    <option>Leak Detection</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Message (Optional)</label>
                  <textarea placeholder="Tell us about your issue..." rows={4} className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"></textarea>
                </div>
                <Button className="w-full h-14 rounded-xl bg-brand-600 hover:bg-brand-700 text-lg font-bold">Send Request</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
