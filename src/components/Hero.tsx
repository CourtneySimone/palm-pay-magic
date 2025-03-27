
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const palmScanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScannerAnimation = () => {
      if (!scannerRef.current || !palmScanRef.current) return;
      
      // Initial palm scan effect
      setTimeout(() => {
        if (palmScanRef.current) {
          palmScanRef.current.classList.add("animate-palm-scan");
        }
      }, 500);
    };

    handleScannerAnimation();
    
    // Setup interval for repeating the animation
    const interval = setInterval(() => {
      if (palmScanRef.current) {
        palmScanRef.current.classList.remove("animate-palm-scan");
        
        // Force reflow
        void palmScanRef.current.offsetWidth;
        
        // Add the class again
        palmScanRef.current.classList.add("animate-palm-scan");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-2 animate-fade-in">
              <h1 className="heading-xl text-balance">
                <span className="block">Your Palm is</span>
                <span className="block text-primary">Your Password</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0">
                Pay instantly. Fight fraud. Embrace the future.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-200">
              <button className="btn btn-primary btn-lg group">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn btn-outline btn-lg">
                Watch How It Works
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-4 animate-fade-in animate-delay-300">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                <span className="text-sm font-medium">Military-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-coral-500"></div>
                <span className="text-sm font-medium">Lightning Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gold-500"></div>
                <span className="text-sm font-medium">Zero Hardware Costs</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 animate-fade-in animate-delay-300">
            <div className="relative">
              {/* Palm Scanner */}
              <div 
                ref={scannerRef}
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 border border-gray-200 shadow-subtle mx-auto max-w-md aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <div ref={palmScanRef} className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-teal-500/30 flex items-center justify-center">
                        <div className="relative w-16 h-16 md:w-24 md:h-24">
                          {/* Hand icon */}
                          <svg 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-full h-full text-white"
                          >
                            <path 
                              d="M18 11V6C18 5.45 17.8 4.97917 17.4 4.6C17.0167 4.2 16.55 4 16 4C15.45 4 14.9792 4.2 14.6 4.6C14.2 4.97917 14 5.45 14 6V11L13 10C12.7167 9.71667 12.4583 9.56667 12.125 9.55C11.7917 9.53333 11.5 9.66667 11.25 9.95C11 10.2167 10.8917 10.5083 10.925 10.825C10.9583 11.1417 11.1333 11.4167 11.45 11.65L12.675 12.675C13.0583 12.975 13.3333 13.3125 13.5 13.6875C13.6667 14.0625 13.75 14.5 13.75 15V20H15.25V15.85C15.25 15.6 15.3333 15.3917 15.5 15.225C15.6667 15.0583 15.8667 14.975 16.1 14.975C16.35 14.975 16.5583 15.0583 16.725 15.225C16.8917 15.3917 16.975 15.6 16.975 15.85V20H18.475V13.85C18.475 13.6 18.5583 13.3917 18.725 13.225C18.8917 13.0583 19.0917 12.975 19.325 12.975C19.575 12.975 19.7833 13.0583 19.95 13.225C20.1167 13.3917 20.2 13.6 20.2 13.85V20H21.7V13.35C21.7 12.8167 21.5333 12.3667 21.2 12C20.8667 11.6333 20.45 11.45 19.95 11.45C19.65 11.45 19.375 11.5125 19.125 11.6375C18.875 11.7625 18.6667 11.9333 18.5 12.15C18.3667 11.9333 18.1833 11.7625 17.95 11.6375C17.7167 11.5125 17.45 11.45 17.15 11.45C16.9833 11.45 16.825 11.4708 16.675 11.5125C16.525 11.5542 16.375 11.6167 16.225 11.7C16.0917 11.7667 15.9833 11.8417 15.9 11.925C15.8167 12.0083 15.7333 12.1 15.65 12.2V11.5C15.65 11.2167 15.5542 10.9792 15.3625 10.7875C15.1708 10.5958 14.9333 10.5 14.65 10.5C14.3667 10.5 14.1292 10.5958 13.9375 10.7875C13.7458 10.9792 13.65 11.2167 13.65 11.5V11.05C13.1 10.7 12.5167 10.525 11.9 10.525C11.2833 10.525 10.7333 10.7 10.25 11.05L8.65 12.275C8.31667 12.5417 8.04583 12.8625 7.8375 13.2375C7.62917 13.6125 7.525 14.0083 7.525 14.425V20H9.025V14.425C9.025 14.3417 9.04167 14.2625 9.075 14.1875C9.10833 14.1125 9.15 14.05 9.2 14L10.825 12.75C10.8583 12.7167 10.9 12.6917 10.95 12.675C11 12.6583 11.05 12.65 11.1 12.65C11.15 12.65 11.1958 12.6583 11.2375 12.675C11.2792 12.6917 11.3167 12.7167 11.35 12.75C11.4 12.8 11.425 12.8583 11.425 12.925C11.425 12.9917 11.4 13.05 11.35 13.1L9.375 14.85C9.125 15.0667 8.9375 15.3292 8.8125 15.6375C8.6875 15.9458 8.625 16.2667 8.625 16.6V20H10.125V16.975C10.125 16.9083 10.1417 16.85 10.175 16.8C10.2083 16.75 10.25 16.7167 10.3 16.7L12.05 15.3C12.15 15.2167 12.2375 15.1458 12.3125 15.0875C12.3875 15.0292 12.4583 14.9833 12.525 14.95L12.675 14.875V15C12.675 15.15 12.625 15.2875 12.525 15.4125C12.425 15.5375 12.3 15.6417 12.15 15.725L10.675 16.575C10.5583 16.6417 10.4583 16.7292 10.375 16.8375C10.2917 16.9458 10.25 17.0667 10.25 17.2V20H11.75V17.925L12.9 17.3C13.25 17.1 13.5292 16.8333 13.7375 16.5C13.9458 16.1667 14.05 15.8 14.05 15.4V15.05L14.175 15.075C14.2417 15.0917 14.2958 15.1208 14.3375 15.1625C14.3792 15.2042 14.4 15.2583 14.4 15.325V20H15.25H15.9V15.325C15.9 15.3917 15.9208 15.4458 15.9625 15.4875C16.0042 15.5292 16.0583 15.55 16.125 15.55C16.1917 15.55 16.2458 15.5292 16.2875 15.4875C16.3292 15.4458 16.35 15.3917 16.35 15.325V13.45C16.35 13.3833 16.3708 13.3292 16.4125 13.2875C16.4542 13.2458 16.5083 13.225 16.575 13.225C16.6417 13.225 16.6958 13.2458 16.7375 13.2875C16.7792 13.3292 16.8 13.3833 16.8 13.45V17.85C16.8 17.9167 16.7792 17.9708 16.7375 18.0125C16.6958 18.0542 16.6417 18.075 16.575 18.075C16.425 18.075 16.3125 18.0417 16.2375 17.975C16.1625 17.9083 16.0917 17.8167 16.025 17.7L15.725 18.7C15.8583 18.8833 16.0292 19.0292 16.2375 19.1375C16.4458 19.2458 16.6833 19.3 16.95 19.3C17.2667 19.3 17.5333 19.1958 17.75 18.9875C17.9667 18.7792 18.075 18.5167 18.075 18.2V14.325C18.075 14.2583 18.0958 14.2042 18.1375 14.1625C18.1792 14.1208 18.2333 14.1 18.3 14.1C18.3667 14.1 18.4208 14.1208 18.4625 14.1625C18.5042 14.2042 18.525 14.2583 18.525 14.325V17.725C18.525 17.7917 18.5042 17.8458 18.4625 17.8875C18.4208 17.9292 18.3667 17.95 18.3 17.95C18.1333 17.95 18.0125 17.9125 17.9375 17.8375C17.8625 17.7625 17.8 17.6667 17.75 17.55L17.425 18.475C17.5583 18.6917 17.7417 18.8542 17.975 18.9625C18.2083 19.0708 18.4583 19.125 18.725 19.125C19.0417 19.125 19.3083 19.0208 19.525 18.8125C19.7417 18.6042 19.85 18.3417 19.85 18.025V14.45C19.85 14.3833 19.8708 14.3292 19.9125 14.2875C19.9542 14.2458 20.0083 14.225 20.075 14.225C20.1417 14.225 20.1958 14.2458 20.2375 14.2875C20.2792 14.3292 20.3 14.3833 20.3 14.45V17.975C20.3 18.0417 20.2792 18.0958 20.2375 18.1375C20.1958 18.1792 20.1417 18.2 20.075 18.2C19.9417 18.2 19.8333 18.1667 19.75 18.1C19.6667 18.0333 19.5917 17.95 19.525 17.85L19.175 18.775C19.3417 18.975 19.55 19.1292 19.8 19.2375C20.05 19.3458 20.3167 19.4 20.6 19.4C20.9167 19.4 21.1833 19.2958 21.4 19.0875C21.6167 18.8792 21.725 18.6167 21.725 18.3V11.45L18 11Z" 
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Scanner Lines Animation */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-teal-500/20 animate-pulse-subtle"></div>
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-teal-500/20 animate-pulse-subtle"></div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="text-xs font-medium text-foreground">Palm Pay Scanner</div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse-subtle"></span>
                    <span className="text-xs font-medium text-teal-500">Ready</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-coral-400/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-teal-400/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
