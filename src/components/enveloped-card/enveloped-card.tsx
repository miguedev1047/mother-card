import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { TypingText } from '../animate-ui/text/typing'
import { Flowers } from '../../assets/images'

export function EvelopedCard() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => setIsOpen(true), [])

  return (
    <div>
      <div
        className='relative w-[340px] h-48 shadow-lg'
        onClick={() => setIsOpen(true)}
      >
        {/* Paredes internas del sobre (laterales oscuros) */}
        <div className='absolute inset-0 z-[35]'>
          <div
            className='absolute bottom-0 left-0 w-full h-full bg-[#DF5348]'
            style={{
              clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
            }}
          />
        </div>
        <div className='absolute inset-0 z-[35]'>
          <div
            className='absolute bottom-0 left-0 w-full h-full bg-[#C14E43]'
            style={{
              clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)',
            }}
          />
        </div>
        <div className='absolute inset-0 z-[35]'>
          <div
            className='absolute bottom-0 left-0 w-full h-full bg-[#C14E43]'
            style={{
              clipPath: 'polygon(50% 50%, 0% 100%, 0% 0%)',
            }}
          />
        </div>

        {/* Contenido del sobre */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='w-[300px] h-[180px] rounded-lg p-4 mx-auto bg-white absolute top-0 inset-x-0 flex gap-4 items-start justify-center px-4 z-[25]'
              initial={{ y: 0, opacity: 0 }}
              exit={{ y: 0, opacity: 0 }}
              animate={{ y: -100, opacity: 1, transition: { delay: 0.5 } }}
              transition={{ delay: 0.5 }}
            >
              <TypingText
                cursor
                className='text-pretty text-center'
                duration={50}
                text='Gracias por guiarme con amor y sabiduría. Tu luz hace más bello mi camino. ¡Felicidades, Mami!'
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sombra y parte superior del sobre */}
        <div
          className='absolute w-full h-full origin-top bg-[#D04D42] z-20'
          style={{
            clipPath: 'polygon(0% 0%, 50% 50%, 100% 0%)',
          }}
        />
        {/* Solapa superior del sobre */}
        <motion.div
          className='absolute w-full h-full origin-top bg-[#D04D42] z-20'
          style={{
            clipPath: 'polygon(0% 0%, 50% 50%, 100% 0%)',
          }}
          animate={{ rotateX: isOpen ? -180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>

      <figure className='absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-20 rotate-12'>
        <img
          src={Flowers}
          alt='Flower Image'
        />
      </figure>

      <p className='absolute bottom-0 left-0 w-full text-center mb-8'>
        De Miguel a su mamá. <br /> por el dia de las madres
      </p>
    </div>
  )
}
