
import React from "react";
import { Shield, Clock, Banknote, Languages } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`feature-card glass animate-fade-in ${delay}`}>
      <div className="feature-icon">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military-Grade Security",
      description: "Palm vein encryption (256-bit) ensures your biometric data can't be replicated or stolen.",
      delay: "animate-delay-100"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lightning Speed",
      description: "Complete transactions in just 2 seconds, even when offline. No waiting, no hassle.",
      delay: "animate-delay-200"
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      title: "Zero Hardware Costs",
      description: "Merchants receive free palm scanners with our innovative revenue share model.",
      delay: "animate-delay-300"
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Seamlessly switch between English, Swahili, Yoruba, and Zulu for local convenience.",
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="features" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="badge badge-primary mb-4">Features</div>
          <h2 className="heading-lg mb-4">Revolutionary Technology at Your Fingertips</h2>
          <p className="text-muted-foreground text-lg">
            Palm Pay combines cutting-edge biometric technology with user-friendly design to create a payment system that's secure, fast, and accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Advanced Feature Highlight */}
        <div className="mt-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl overflow-hidden shadow-glow-teal animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Designed for Markets with Unreliable Access</h3>
              <p className="mb-6 opacity-90">
                Palm Pay works flawlessly even in areas with unstable internet connections or power outages, making it ideal for emerging markets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Processes transactions offline</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Battery backup for continuous operation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Low power consumption design</span>
                </li>
              </ul>
            </div>
            <div className="bg-teal-400/20 aspect-square relative">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 gap-4 h-full w-full p-8">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="rounded-full bg-white"></div>
                  ))}
                </div>
              </div>
              
              {/* Central image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full animate-pulse-subtle"></div>
                  <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-full animate-pulse-subtle animate-delay-300"></div>
                  <div className="absolute inset-8 bg-white/30 backdrop-blur-sm rounded-full animate-pulse-subtle animate-delay-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
