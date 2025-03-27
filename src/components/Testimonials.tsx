
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ada Okafor",
    role: "Market Vendor",
    location: "Lagos, Nigeria",
    quote: "Before Palm Pay, I lost 20% of sales to cash theft. Now? Zero. My customers love how quick and easy it is.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535146851324-6571050ac175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
  },
  {
    id: 2,
    name: "Samuel Mwangi",
    role: "Café Owner",
    location: "Nairobi, Kenya",
    quote: "The speed is incredible. Transactions that used to take minutes now take seconds, even when my internet is down.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Thandi Nkosi",
    role: "Grocery Store Owner",
    location: "Johannesburg, South Africa",
    quote: "My customers were skeptical at first, but now they ask specifically if I have Palm Pay. It's become a selling point for my business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-advance testimonials
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="badge badge-accent mb-4">Testimonials</div>
          <h2 className="heading-lg mb-4">Trusted by Businesses Across Africa</h2>
          <p className="text-muted-foreground text-lg">
            Hear from merchants who've transformed their businesses with Palm Pay's revolutionary technology.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-elevated">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? "opacity-100 translate-x-0 z-10" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden h-full">
                  {/* Testimonial Image */}
                  <div 
                    className="md:col-span-2 aspect-square md:aspect-auto bg-cover bg-center" 
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  >
                    <div className="h-full w-full bg-teal-900/20 backdrop-blur-xs"></div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="md:col-span-3 p-8 md:p-12 bg-white flex flex-col justify-center">
                    <Quote className="h-10 w-10 text-teal-500/20 mb-6" />
                    <p className="text-xl md:text-2xl font-medium mb-8 italic text-gray-800">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          {testimonial.role}, {testimonial.location}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-gold-500 fill-gold-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-subtle flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-subtle flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-teal-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
