"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-10 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white text-xs font-light relative z-10">🛡️ Privacy Protection Extension</span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">Secure</span> Browsing
          <br />
          <span className="font-light tracking-tight text-white">Protection</span>
        </h1>

        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Real-time protection against malicious websites, phishing attempts, and privacy threats. Our extension
          analyzes every site you visit and blocks dangerous content before it reaches you.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Learn More
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Download Extension
          </button>
        </div>
      </div>
    </main>
  )
}
