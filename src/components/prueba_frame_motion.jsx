import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    { id: 1, title: 'Card 1', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2' },
    // ... other items
];

function YourComponent() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div>
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => setSelectedId(item.id)}
                    style={{ cursor: 'pointer' }} // Add cursor style
                >
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        key={selectedId}
                        layoutId={selectedId}
                        initial={{ opacity: 0 }} // Initial opacity
                        animate={{ opacity: 1 }} // Animate opacity
                        exit={{ opacity: 0 }} // Animate opacity on exit
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            zIndex: 1000,
                            padding: '1rem',
                        }}
                    >
                        <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
                        <motion.h2>{items[selectedId - 1].title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default YourComponent