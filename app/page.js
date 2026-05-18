"use client";
export default function DesignGridWebsite() {
  const projects = [
  {
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
  },
  {
  category: "Modular Kitchen",
  image:
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop",
},
  {
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop",
  },
   
];

  const services = [
    {
      title: 'Architecture Design',
      desc: 'Innovative architectural planning with modern luxury aesthetics.',
    },
    {
      title: 'Interior Design',
      desc: 'Elegant and functional interiors designed for sophisticated lifestyles.',
    },
    {
      title: 'Turnkey Projects',
      desc: 'Complete execution from concept to completion with premium quality.',
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-700/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <img
  src="/images/logo.png"
  alt="Design Grid Logo"
  className="h-16 w-auto"
/>
            <p className="text-xs text-gray-300 tracking-[4px]">
              DESIGN GRID ARCHITECTS & INTERIORS
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-yellow-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-[#1b1b1b] to-[#d6c3a3] px-6"
      >
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center pt-24">
          <div>
            <p className="uppercase tracking-[6px] text-yellow-500 mb-4 text-sm">
              Luxury Architecture & Interiors
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              DESIGNING
              <span className="text-yellow-500"> Elegant </span>
              Living Spaces
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              End-to-End Architecture & Interior Solutions crafted with elegance,
              luxury, and timeless aesthetics.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Interior"
              className="rounded-3xl shadow-2xl border border-yellow-600/20"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#151515]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop"
            alt="Interior Design"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <p className="text-yellow-500 uppercase tracking-[4px] mb-3">
              About Us
            </p>

            <h3 className="text-4xl font-bold mb-6">
              Premium Interior & Architectural Excellence
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              DESIGN GRID ARCHITECTS AND INTERIORS delivers luxury residential,
              commercial, and architectural design solutions with a modern,
              sophisticated approach.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We specialize in transforming spaces into timeless masterpieces
              through innovative planning, elegant aesthetics, and premium
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Our Services
          </p>

          <h3 className="text-5xl font-bold mb-16">
            End-to-End Interior Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-yellow-700/20 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <div className="text-5xl mb-5 text-yellow-500">✦</div>

                <h4 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-[#151515]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['All', 'Living Room', 'Bedroom', 'Modular Kitchen', 'Architecture'].map((category, index) => (
                <button
                  key={index}
                  className="px-5 py-2 border border-yellow-600/30 rounded-full text-sm hover:bg-yellow-500 hover:text-black transition"
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Our Projects
            </p>

            <h3 className="text-5xl font-bold mb-6">
              Luxury Interior Gallery
            </h3>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Explore our premium residential interior projects crafted with
              elegance, modern aesthetics, and luxury detailing.
            </p>
          </div>

          <div className="space-y-16">
  {["Living Room", "Bedroom", "Modular Kitchen", "Architecture"].map(
    (room) => (
      <div key={room}>
        <h4 className="text-3xl font-bold mb-8 text-yellow-500">
          {room}
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.category === room)
            .map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl group"
              >
                <img
                  src={project.image}
                  alt={room}
                  className="w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
        </div>
      </div>
    )
  )}

  <div className="overflow-hidden rounded-3xl shadow-2xl">
    <video
      src="/videos/project-video.mp4"
      controls
      muted
      loop
      className="w-full rounded-3xl"
    ></video>
  </div>
</div>
 </div>
      </section>

{/* Contact */}
<section id="contact" className="py-24 px-6 bg-black">
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
      Contact Us
    </p>

    <h3 className="text-5xl font-bold mb-10">
      Let’s Build Your Dream Space
    </h3>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Contact Info */}
      <div className="bg-[#181818] rounded-3xl p-10 border border-yellow-700/20 shadow-2xl space-y-5 text-lg text-gray-300 text-left">
        <p>
          📞 <span className="text-white">8790043024</span>
        </p>

        <p>
          ✉️
          <span className="text-white ml-2">
            dgarchitectsandinteriors7@gmail.com
          </span>
        </p>

        <p className="leading-relaxed">
          📍 LIG 19/6 FIRST FLOOR 3rd PHASE, RAMYA GROUND KPHB
          COLONY, KUKATPALLY, MEDCHAL (MALKAJGIRI), 500072
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-[#181818] rounded-3xl p-10 border border-yellow-700/20 shadow-2xl space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-500"
        />

        <textarea
          rows="5"
          placeholder="Tell us about your project"
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-yellow-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#0b0b0b] border-t border-yellow-700/20 py-8 text-center text-gray-500 text-sm tracking-wide">
        © 2026 DESIGN GRID ARCHITECTS AND INTERIORS — Luxury Architecture &
        Interior Solutions.
      </footer>

      {/* Social Media Section */}
      <section className="bg-[#111111] py-10 border-t border-yellow-700/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-2xl font-semibold mb-6 text-yellow-500 tracking-wide">
            Follow Us
          </h4>

          <div className="flex justify-center gap-6 flex-wrap">
           <a
  href="https://www.instagram.com/dgai_architects_interiors/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-pink-500/30 hover:bg-pink-500 hover:text-white transition"
>
  Instagram
</a>

           <a
  href="https://www.youtube.com/@dgarchitectsandinteriors"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-red-500/30 hover:bg-red-600 hover:text-white transition"
>
  YouTube
</a>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918790043024"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl z-50 transition-transform hover:scale-110"
      >
        💬
      </a>
    </div>
  );
}
