
import React, { useState } from "react";
import { Play, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Register Your Palm",
      description: "Create a secure Palm Pay account by registering your unique palm print at any authorized merchant."
    },
    {
      number: "02",
      title: "Link Your Account",
      description: "Connect your bank account or mobile money wallet to Palm Pay through our secure portal."
    },
    {
      number: "03",
      title: "Pay with Your Palm",
      description: "Simply place your palm over the scanner at any participating merchant to complete your transaction."
    },
    {
      number: "04",
      title: "Track Your Spending",
      description: "Monitor all transactions in real-time through the Palm Pay mobile app or web dashboard."
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="badge badge-secondary mb-4">How It Works</div>
          <h2 className="heading-lg mb-4">Simple, Secure, and Swift</h2>
          <p className="text-muted-foreground text-lg">
            Palm Pay combines cutting-edge biometric technology with simplicity to create a payment experience that's both secure and effortless.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="rounded-3xl overflow-hidden relative aspect-video mb-24 animate-fade-in shadow-elevated">
          <div 
            className={`absolute inset-0 bg-black z-10 flex items-center justify-center ${
              videoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            } transition-opacity duration-500`}
          >
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/70 to-teal-800/50 z-0"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                filter: "brightness(0.6)"
              }}
            ></div>
            
            <div className="relative z-20 text-white text-center p-6">
              <h3 className="text-3xl font-bold mb-4">See Palm Pay in Action</h3>
              <p className="text-white/80 max-w-md mx-auto mb-8">
                Watch how merchants and customers are using Palm Pay for faster, more secure transactions.
              </p>
              <button 
                onClick={() => setVideoPlaying(true)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white rounded-full p-6 group"
              >
                <Play className="h-8 w-8 fill-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Actual Video Element */}
          <iframe 
            className={`w-full h-full ${videoPlaying ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            src={videoPlaying ? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" : ""}
            title="Palm Pay Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* How It Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-fade-in animate-delay-200">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 text-5xl font-bold text-teal-500/20">{step.number}</div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 transform -translate-x-4">
                  <ChevronRight className="h-6 w-6 text-teal-400/50" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Integration Callout */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Works With Existing Systems</h3>
              <p className="text-muted-foreground max-w-xl">
                Palm Pay integrates seamlessly with your current POS systems and payment infrastructure. No need for a complete overhaul.
              </p>
            </div>
            <button className="btn btn-primary btn-lg whitespace-nowrap">
              Learn About Integration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
