import { motion, AnimatePresence } from "framer-motion";

export function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07080c] text-[#ece8df]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="w-[min(320px,80vw)] text-center">
            <p className="font-mono text-[11px] tracking-[0.32em] text-[#7ee0c8] uppercase">
              Initializing
            </p>
            <p className="mt-4 font-serif text-3xl">Jaffarson JS</p>
            <div className="mt-8 h-[2px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-[#7ee0c8]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-[#9a9588]">Loading portfolio</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
