import { motion } from 'framer-motion'
import { Award, Heart, ShieldCheck, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-50 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-navy-950 mb-8 leading-tight"
            >
              Excellence in Plumbing Since <span className="text-brand-600">2011</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy-700 leading-relaxed mb-10"
            >
              HoustonPlumb Elite Services was founded with a simple mission: to provide the highest quality plumbing services with honesty and integrity to our Houston neighbors.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1200" 
            alt="Houston Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-50 via-transparent to-navy-50"></div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Happy Customers", value: "10k+" },
              { label: "Licensed Plumbers", value: "25" },
              { label: "Emergency Calls", value: "5k+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-5xl font-black text-brand-600 mb-2">{stat.value}</p>
                <p className="text-navy-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-navy-950 mb-4">Our Core Values</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">These principles guide every service call we make and every relationship we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "We believe in honest work and fair pricing. We never recommend services you don't need."
              },
              {
                icon: Heart,
                title: "Quality",
                desc: "We take pride in our craftsmanship. If it's not done right, it's not done yet."
              },
              {
                icon: Users,
                title: "Community",
                desc: "As a local family business, we treat every customer like a neighbor."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <value.icon className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-navy-950 mb-8 leading-tight">Meet the Leaders of HoustonPlumb</h2>
              <p className="text-navy-700 text-lg leading-relaxed mb-8">
                Founded by David Henderson, a Master Plumber with over 30 years of experience, our company has grown from a single truck to one of the most respected plumbing fleets in Houston.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-100 p-2 rounded-full mt-1">
                    <Award className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950">Certified Master Plumbers</h4>
                    <p className="text-navy-600">Our leadership team holds the highest certifications in the state of Texas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-100 p-2 rounded-full mt-1">
                    <Zap className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950">Innovative Training</h4>
                    <p className="text-navy-600">We invest in monthly training for our entire fleet to master new technologies.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-navy-950 h-14 px-8 rounded-full">Work With Our Experts</Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-3xl shadow-lg mt-12" 
                  alt="Team Meeting"
                />
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-3xl shadow-lg" 
                  alt="Service Van"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-50 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-600">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-4xl font-black mb-8">Ready to Experience Elite Service?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">Join the 10,000+ happy customers who trust us with their plumbing needs.</p>
          <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-50 h-16 px-10 rounded-2xl text-xl font-black shadow-2xl">
            Book Your Service Today
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
