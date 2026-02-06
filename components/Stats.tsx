"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Siswa Aktif", value: "103", suffix: "" },
  { label: "Guru", value: "11", suffix: "" },
  { label: "Penghargaan", value: "120", suffix: "" },
  { label: "Alumni Sukses", value: "20", suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-green-800 relative overflow-hidden">
      
      {/* Background Pattern Hiasan */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
        
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {item.value}<span className="text-yellow-300 text-3xl">{item.suffix}</span>
            </h3>
            <p className="text-yellow-200 text-lg uppercase tracking-wider font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}