import { Droplets, Mail, MapPin, Phone, Globe, MessageSquare, Info } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Houston<span className="text-brand-400">Plumb</span>
              </span>
            </a>
            <p className="text-navy-200 leading-relaxed">
              Providing premium plumbing solutions to Houston residents for over 15 years. Professional, reliable, and always here for your emergencies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="bg-navy-800 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Info className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-navy-300 hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-navy-300 hover:text-brand-400 transition-colors">Our Services</a></li>
              <li><a href="/about" className="text-navy-300 hover:text-brand-400 transition-colors">About Company</a></li>
              <li><a href="/emergency" className="text-navy-300 hover:text-brand-400 transition-colors">Emergency Plumbing</a></li>
              <li><a href="/contact" className="text-navy-300 hover:text-brand-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-navy-300 hover:text-brand-400 transition-colors">Drain Cleaning</a></li>
              <li><a href="#" className="text-navy-300 hover:text-brand-400 transition-colors">Water Heater Repair</a></li>
              <li><a href="#" className="text-navy-300 hover:text-brand-400 transition-colors">Leak Detection</a></li>
              <li><a href="#" className="text-navy-300 hover:text-brand-400 transition-colors">Pipe Replacement</a></li>
              <li><a href="#" className="text-navy-300 hover:text-brand-400 transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-400 mt-1" />
                <span className="text-navy-300">123 Plumbing Way, Houston, TX 77001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-400" />
                <a href="tel:7135550123" className="text-navy-300 hover:text-brand-400 transition-colors">(713) 555-0123</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-400" />
                <a href="mailto:info@houstonplumb.com" className="text-navy-300 hover:text-brand-400 transition-colors">info@houstonplumb.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-navy-400 text-sm">
            © {currentYear} HoustonPlumb Elite Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-navy-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
