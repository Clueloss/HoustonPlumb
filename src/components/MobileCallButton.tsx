import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const MobileCallButton = () => {
  return (
    <motion.a
      href="tel:7135550123"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg md:hidden"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-brand-500"></span>
      </span>
    </motion.a>
  )
}

export default MobileCallButton
