import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-navy-950 mb-8"
          >
            Get In <span className="text-brand-600">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-navy-700 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or need a service? We're here to help. Reach out to us through any of the channels below or fill out the form.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Call Us", info: "(713) 555-0123", sub: "24/7 Emergency Response", color: "bg-brand-50 text-brand-600" },
              { icon: Mail, title: "Email Us", info: "info@houstonplumb.com", sub: "Response within 2 hours", color: "bg-navy-50 text-navy-600" },
              { icon: MapPin, title: "Our Office", info: "123 Plumbing Way", sub: "Houston, TX 77001", color: "bg-green-50 text-green-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-navy-400 mb-2">{item.title}</h3>
                <p className="text-2xl font-black text-navy-950 mb-1">{item.info}</p>
                <p className="text-navy-500 font-medium">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Form */}
            <div className="lg:w-1/2">
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold text-navy-950 mb-4">Send a Message</h2>
                <p className="text-navy-600 leading-relaxed">Fill out the form below for non-emergency inquiries and our team will get back to you promptly.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">First Name</label>
                    <input type="text" className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Last Name</label>
                    <input type="text" className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Email Address</label>
                    <input type="email" className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Phone Number</label>
                    <input type="tel" className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="(713) 555-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900">Subject</label>
                  <select className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Quote Request</option>
                    <option>Maintenance Plan</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900">Message</label>
                  <textarea rows={6} className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>

                <Button className="w-full h-16 rounded-2xl bg-brand-600 hover:bg-brand-700 text-lg font-black shadow-lg">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="lg:w-1/2">
              <div className="bg-navy-950 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl mb-8">
                <h3 className="text-2xl font-black mb-8 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-brand-400" /> Business Hours
                </h3>
                <div className="space-y-4 mb-12">
                  <div className="flex justify-between border-b border-navy-800 pb-4">
                    <span className="text-navy-400 font-bold uppercase tracking-widest text-sm">Monday - Friday</span>
                    <span className="font-bold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-800 pb-4">
                    <span className="text-navy-400 font-bold uppercase tracking-widest text-sm">Saturday</span>
                    <span className="font-bold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-800 pb-4">
                    <span className="text-navy-400 font-bold uppercase tracking-widest text-sm">Sunday</span>
                    <span className="font-bold text-brand-400">Emergency Only</span>
                  </div>
                </div>
                
                <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-brand-600 p-2 rounded-lg">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-black">Live Chat Support</h4>
                  </div>
                  <p className="text-navy-400 mb-6 leading-relaxed">Our support agents are available during business hours to answer your quick questions.</p>
                  <Button variant="outline" className="w-full border-navy-700 text-white hover:bg-navy-800 rounded-xl">Start Chatting</Button>
                </div>
              </div>
              
              <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443089.05185966456!2d-95.730948!3d29.817178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
