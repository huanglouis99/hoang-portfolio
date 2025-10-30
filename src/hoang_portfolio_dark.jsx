import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  FaBehance, FaDribbble, FaInstagram, FaEnvelope,
  FaPaintBrush, FaGraduationCap, FaBriefcase, FaSun, FaMoon
} from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro } from 'react-icons/si';
import { PiScissorsBold } from 'react-icons/pi';

export default function PortfolioHoang() {
  const [activeImage, setActiveImage] = useState(null);
  const [angle, setAngle] = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => (a + 1) % 360), 60);
    return () => clearInterval(id);
  }, []);

  const projects = [
    { id: 1, title: 'Neon City Poster', img: 'https://picsum.photos/600/400?1' },
    { id: 2, title: 'Futuristic Branding', img: 'https://picsum.photos/600/400?2' },
    { id: 3, title: 'Darkwave Album Art', img: 'https://picsum.photos/600/400?3' },
    { id: 4, title: 'Cyber Logo Set', img: 'https://picsum.photos/600/400?4' },
    { id: 5, title: 'Red Pulse Poster', img: 'https://picsum.photos/600/400?5' },
    { id: 6, title: 'Motion Pack Vol.1', img: 'https://picsum.photos/600/400?6' }
  ];

  const skills = [
    { icon: <SiAdobephotoshop className="text-[#31A8FF] text-[4rem] bg-[#001E36] p-3 rounded-2xl" />, color: '#001E36', level: 90 },
    { icon: <SiAdobeillustrator className="text-[#FF9A00] text-[4rem] bg-[#330000] p-3 rounded-2xl" />, color: '#330000', level: 85 },
    { icon: <SiAdobeaftereffects className="text-[#9999FF] text-[4rem] bg-[#1F0033] p-3 rounded-2xl" />, color: '#1F0033', level: 80 },
    { icon: <SiAdobepremierepro className="text-[#9999FF] text-[4rem] bg-[#1A0033] p-3 rounded-2xl" />, color: '#1A0033', level: 78 },
    { icon: <PiScissorsBold className="text-white text-[4rem] bg-[#000000] p-3 rounded-2xl" />, color: '#000000', level: 75 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const bgBase = theme === 'dark'
    ? {
        color: '#e5e7eb',
        link: 'text-gray-400 hover:text-red-600',
        heading: 'text-red-500',
        cardBg: 'bg-[#0f0f0f]',
        cardBorder: 'border-red-800',
        btnBorder: 'border-red-600',
        btnText: 'text-red-600',
        btnHover: 'hover:bg-red-600 hover:text-black',
        inputBg: 'bg-[#0f0f0f]',
        inputBorder: 'border-red-600',
      }
    : {
        color: '#0b0b0b',
        link: 'text-gray-600 hover:text-[#c80f2e]',
        heading: 'text-[#c80f2e]',
        cardBg: 'bg-white/70 backdrop-blur-sm',
        cardBorder: 'border-[#e8e8e8]',
        btnBorder: 'border-[#c80f2e]',
        btnText: 'text-[#c80f2e]',
        btnHover: 'hover:bg-[#c80f2e] hover:text-white',
        inputBg: 'bg-white/80',
        inputBorder: 'border-[#c80f2e]/60',
      };

  const pageBackground = theme === 'dark'
    ? {
        background:
          `radial-gradient(900px 500px at 20% 0%, rgba(255,0,0,0.16), transparent 60%),` +
          `radial-gradient(900px 500px at 80% 100%, rgba(255,0,0,0.12), transparent 60%),` +
          `linear-gradient(180deg, #000 0%, #050404 50%, #000 100%)`
      }
    : {
        background:
          `radial-gradient(900px 500px at 20% 0%, rgba(255,30,60,0.20), transparent 60%),` +
          `radial-gradient(900px 500px at 80% 100%, rgba(255,90,120,0.16), transparent 60%),` +
          `linear-gradient(180deg, #f8f9fb 0%, #ffffff 60%, #f6f7f9 100%)`
      };

  const hologramStyle = theme === 'dark'
    ? { mix: 'mix-blend-screen', opacity: 0.4 }
    : { mix: 'mix-blend-multiply', opacity: 0.18 };

  const ribbonStyle = theme === 'dark'
    ? { opacity: 0.25, grad: 'linear-gradient(100deg, rgba(0,0,0,0) 0%, rgba(255,40,40,0.15) 35%, rgba(255,80,80,0.22) 50%, rgba(255,40,40,0.15) 65%, rgba(0,0,0,0) 100%)' }
    : { opacity: 0.18, grad: 'linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,120,140,0.12) 35%, rgba(255,70,100,0.16) 50%, rgba(255,120,140,0.12) 65%, rgba(255,255,255,0) 100%)' };

  const grainOpacity = theme === 'dark' ? 'opacity-[0.08]' : 'opacity-[0.04]';

  return (
    <div className={`relative min-h-screen font-[Poppins] overflow-x-hidden ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`} style={pageBackground}>
      
      {/* THEME TOGGLE BUTTON */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`fixed right-6 top-6 z-50 rounded-full px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-sm transition border ${
          theme === 'dark'
            ? 'bg-[#121212]/70 border-red-600 text-red-500 hover:bg-[#1b1b1b]/80'
            : 'bg-white/80 border-[#c80f2e]/50 text-[#c80f2e] hover:bg-white'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
        <span className="text-sm font-medium">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
      </button>

      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${hologramStyle.mix}`}
        style={{
          opacity: hologramStyle.opacity,
          background: `conic-gradient(from ${angle}deg at 50% 50%, rgba(255,60,60,0.0) 0deg, rgba(255,60,60,0.25) 90deg, rgba(255,0,0,0.0) 180deg, rgba(255,60,60,0.25) 270deg, rgba(255,0,0,0.0) 360deg)`
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-1/4 -z-10 h-[40vh] w-[160vw] rotate-[-8deg]"
        style={{
          opacity: ribbonStyle.opacity,
          background: ribbonStyle.grad,
          backgroundSize: '200% 100%',
          animation: 'ribbonMove 12s linear infinite'
        }}
      />

      <style>{`
        @keyframes ribbonMove {
          0% { transform: translateX(0) rotate(-8deg); }
          50% { transform: translateX(-25%) rotate(-8deg); }
          100% { transform: translateX(0) rotate(-8deg); }
        }
      `}</style>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden mb-32">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
          <FaPaintBrush className={`absolute top-10 left-10 text-5xl ${theme === 'dark' ? 'text-red-600 drop-shadow-[0_0_15px_#ff0000]' : 'text-[#c80f2e]'} animate-pulse`} />
        </motion.div>

        <motion.img
          src="https://i.pravatar.cc/200?img=68"
          alt="Phan Văn Võ Hoàng Avatar"
          className={`w-40 h-40 rounded-full mb-6 border-4 ${theme === 'dark' ? 'border-red-600 shadow-[0_0_25px_#ff0000]' : 'border-[#c80f2e]'}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.h1 variants={fadeIn} initial="hidden" animate="show" className={`text-6xl font-bold ${bgBase.heading} ${theme === 'dark' ? 'drop-shadow-[0_0_15px_#ff0000]' : ''}`}>
          Phan Văn Võ Hoàng
        </motion.h1>

        <motion.p variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.4 }} className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} text-lg tracking-wide`}>
          Designing visuals that burn through the dark.
        </motion.p>

        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#portfolio" className={`mt-10 px-6 py-3 border ${bgBase.btnBorder} ${bgBase.btnText} ${bgBase.btnHover} rounded-full transition font-medium`}>
          View My Work
        </motion.a>
      </section>

      {/* ABOUT SECTION */}
      <motion.section id="about" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl mb-4 font-semibold ${bgBase.heading}`}>About Me</h2>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} leading-relaxed max-w-2xl mx-auto mb-8`}>
          I’m a graphic designer obsessed with contrast, rhythm, and storytelling through visuals.
          My work blends darkness and light, precision and chaos — creating a language that speaks in color, texture, and form.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 text-left max-w-3xl mx-auto">
          <div className={`${bgBase.cardBg} p-6 rounded-xl border ${bgBase.cardBorder} shadow-lg w-full md:w-1/2`}>
            <div className={`flex items-center gap-3 mb-3 text-xl font-semibold ${bgBase.heading}`}>
              <FaGraduationCap /> Education
            </div>
            <p className="font-medium">Bachelor of Graphic Design</p>
            <p className="text-sm text-gray-400 mb-3">Ho Chi Minh City University of Architecture (2018 - 2022)</p>
            <p className="font-medium">Advanced Course in Motion Design</p>
            <p className="text-sm text-gray-400">Arena Multimedia, 2023</p>
          </div>

          <div className={`${bgBase.cardBg} p-6 rounded-xl border ${bgBase.cardBorder} shadow-lg w-full md:w-1/2`}>
            <div className={`flex items-center gap-3 mb-3 text-xl font-semibold ${bgBase.heading}`}>
              <FaBriefcase /> Experience
            </div>
            <p className="font-medium">Senior Graphic Designer</p>
            <p className="text-sm text-gray-400 mb-1">Freelance & Studio Work – 4 years experience</p>
            <p className="font-medium">Former Motion Designer</p>
            <p className="text-sm text-gray-400">Creative Agency Ho Chi Minh City (2022 - 2024)</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 text-3xl mt-10">
          <a href="#" className={`${bgBase.link}`}><FaBehance /></a>
          <a href="#" className={`${bgBase.link}`}><FaDribbble /></a>
          <a href="#" className={`${bgBase.link}`}><FaInstagram /></a>
          <a href="mailto:youremail@example.com" className={`${bgBase.link}`}><FaEnvelope /></a>
        </div>
      </motion.section>

      {/* PORTFOLIO */}
      <motion.section id="portfolio" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-20 px-6">
        <h2 className={`text-4xl text-center mb-8 font-semibold ${bgBase.heading}`}>Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={zoomIn}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveImage(p)}
              className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg border group ${bgBase.cardBg} ${theme === 'dark' ? 'border-red-800' : 'border-[#ececec]'}`}
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
                <p className={`${bgBase.heading} text-lg font-semibold mb-1`}>{p.title}</p>
                <p className="text-gray-400 text-xs">Click to view details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-20 px-6 text-center">
        <h2 className={`text-4xl mb-8 font-semibold ${bgBase.heading}`}>Skills</h2>
        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {skills.map(({ icon, color, level }, index) => (
            <motion.div key={index} variants={zoomIn} initial="hidden" whileInView="show" whileHover={{ scale: 1.08 }} className="flex flex-col items-center w-36">
              <div className="relative flex items-center justify-center w-32 h-32 mb-2">
                <svg className="absolute w-full h-full rotate-[-90deg]">
                  <circle cx="64" cy="64" r="56" strokeWidth="8" fill="none" stroke={color} opacity="0.3" />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={color}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="352"
                    strokeDashoffset={352 - (352 * level) / 100}
                    transition={{ duration: 1 }}
                  />
                </svg>
                <div className="absolute flex items-center justify-center">{icon}</div>
              </div>
              <p className="text-gray-400 font-medium text-sm">{level}%</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
<motion.section
  id="contact"
  variants={fadeIn}
  initial="hidden"
  whileInView="show"
  className="py-20 px-6 text-center"
>
  <h2 className={`text-4xl mb-6 font-semibold ${bgBase.heading}`}>Contact</h2>

  <motion.form
    onSubmit={async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const statusEl = document.getElementById("form-status");

      try {
        statusEl.textContent = "⏳ Sending message...";
        const response = await fetch("https://formspree.io/f/xrbolgod", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          statusEl.textContent = "✅ Message sent successfully!";
          form.reset();
        } else {
          statusEl.textContent = "❌ Failed to send. Please try again later.";
        }
      } catch (error) {
        statusEl.textContent = "❌ Network error. Please try again.";
      }

      // Tự ẩn thông báo sau 5s
      setTimeout(() => (statusEl.textContent = ""), 5000);
    }}
    className="max-w-md mx-auto space-y-3"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className={`w-full p-3 ${bgBase.inputBg} border ${bgBase.inputBorder} rounded focus:outline-none`}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className={`w-full p-3 ${bgBase.inputBg} border ${bgBase.inputBorder} rounded focus:outline-none`}
      required
    />
    <textarea
      name="message"
      rows="4"
      placeholder="Your Message"
      className={`w-full p-3 ${bgBase.inputBg} border ${bgBase.inputBorder} rounded focus:outline-none`}
      required
    ></textarea>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className={`w-full px-6 py-3 border ${bgBase.btnBorder} ${bgBase.btnText} ${bgBase.btnHover} rounded-full transition font-medium`}
    >
      Send Message
    </motion.button>

    <p id="form-status" className="text-sm mt-3 text-gray-400"></p>
  </motion.form>

  <motion.p variants={fadeIn} className="text-gray-500 mt-10 text-sm">
    © 2025 Phan Văn Võ Hoàng | All rights reserved.
  </motion.p>
</motion.section>

      {/* MODAL */}
      {activeImage && (
        <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/90' : 'bg-black/50'} flex items-center justify-center z-50`} onClick={() => setActiveImage(null)}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative max-w-4xl w-full p-4">
            <img src={activeImage.img} alt={activeImage.title} className="w-full rounded-lg" />
            <p className={`text-center mt-4 text-lg ${bgBase.heading}`}>{activeImage.title}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
