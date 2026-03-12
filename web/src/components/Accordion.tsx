/**
 * Accordion Component
 * Reusable expand/collapse accordion with smooth animations
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';

interface AccordionItemProps {
  id: string;
  title: string;
  preview?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export function AccordionItem({
  id,
  title,
  preview,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden bg-white/10 hover:bg-white/15 transition-all duration-300 hover:border-white/30"
      layout
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-transparent p-6 hover:bg-white/5 transition-colors text-left"
        layout
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary tracking-tight">
            {title}
          </h3>
          {preview && !isOpen && (
            <p className="text-sm text-slate-600 mt-1 line-clamp-1">
              {preview}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <MdExpandMore className="text-2xl text-accent" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-white/10 text-slate-700 bg-white/5">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.filter((item) => item.defaultOpen).map((item) => item.id))
  );

  const handleToggle = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      if (!allowMultiple) {
        newOpen.clear();
      }
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden bg-white/10 hover:bg-white/15 transition-all duration-300 hover:border-white/30"
          layout
        >
          <motion.button
            onClick={() => handleToggle(item.id)}
            className="w-full flex items-center justify-between bg-transparent p-6 hover:bg-white/5 transition-colors text-left"
            layout
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary tracking-tight">
                {item.title}
              </h3>
              {item.preview && !openItems.has(item.id) && (
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">
                  {item.preview}
                </p>
              )}
            </div>
            <motion.div
              animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 flex-shrink-0"
            >
              <MdExpandMore className="text-2xl text-accent" />
            </motion.div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: openItems.has(item.id) ? 1 : 0,
              height: openItems.has(item.id) ? 'auto' : 0,
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/10 text-slate-700 bg-white/5">
              {item.children}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
