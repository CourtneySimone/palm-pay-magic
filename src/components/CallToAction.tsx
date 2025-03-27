
import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 z-0"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 flex flex-col items-center text-center">
            <h2 className="heading-lg text-white mb-6 max-w-3xl">
              Join the Future of Payments Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mb-10">
              Ready to eliminate cash theft, increase transaction speed, and provide your customers with a seamless payment experience? Get started with Palm Pay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-white text-teal-700 hover:bg-white/90 btn-lg group">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn bg-transparent border border-white text-white hover:bg-white/10 btn-lg">
                Contact Sales
              </button>
            </div>
            
            {/* Trusted By Logos */}
            <div className="mt-16">
              <p className="text-white/70 text-sm uppercase tracking-wider mb-6">
                Trusted by leading businesses
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-24 bg-white/20 rounded-md flex items-center justify-center">
                    <div className="text-white font-bold">Logo {i}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
