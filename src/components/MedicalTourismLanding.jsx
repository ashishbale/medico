import React, { useState, useEffect } from 'react';
import { Sparkles, Leaf, Brain, ArrowRight, CheckCircle, Globe, Users, Award, Heart, Shield, Star, Clock, MapPin, Phone, Mail, Zap, Target, Activity, Sun } from 'lucide-react';

export default function MedicalTourismLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: "15K+", label: "Happy Patients" },
    { number: "98%", label: "Success Rate" },
    { number: "25+", label: "Countries Served" },
    { number: "50+", label: "Expert Practitioners" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "United Kingdom",
      text: "The hypnotherapy sessions completely transformed my approach to stress management. I feel more in control than ever before.",
      rating: 5,
      therapy: "Hypnotherapy"
    },
    {
      name: "David Chen",
      location: "Singapore",
      text: "After years of trying conventional medicine, naturopathy gave me the holistic healing I was searching for. Truly life-changing.",
      rating: 5,
      therapy: "Naturopathy"
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      text: "The combination of both therapies helped me overcome chronic pain and anxiety. The team's expertise is unmatched.",
      rating: 5,
      therapy: "Combined Treatment"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Certified Excellence",
      description: "All practitioners are internationally certified with years of proven experience"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Custom treatment plans designed specifically for your unique health journey"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class facilities meeting international healthcare standards"
    },
    {
      icon: Users,
      title: "Holistic Approach",
      description: "Treating the whole person - mind, body, and spirit in harmony"
    }
  ];

  const hypnotherapyBenefits = [
    { icon: Brain, title: "Mental Clarity", desc: "Clear mental blocks and enhance focus" },
    { icon: Heart, title: "Emotional Balance", desc: "Manage stress and anxiety effectively" },
    { icon: Zap, title: "Behavioral Change", desc: "Break unwanted habits permanently" },
    { icon: Target, title: "Goal Achievement", desc: "Unlock your full potential" }
  ];

  const naturopathyBenefits = [
    { icon: Leaf, title: "Natural Healing", desc: "Harness your body's innate healing power" },
    { icon: Activity, title: "Vitality Boost", desc: "Increase energy and overall wellness" },
    { icon: Sun, title: "Lifestyle Balance", desc: "Optimize nutrition and daily habits" },
    { icon: Heart, title: "Preventive Care", desc: "Build long-term health resilience" }
  ];

  const features = [
    { icon: Globe, text: "Global Network of Certified Practitioners" },
    { icon: Users, text: "Personalized Treatment Plans" },
    { icon: Award, text: "Award-Winning Care Standards" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-cyan-900 to-teal-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12 backdrop-blur-sm bg-indigo-950/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              HealJourney
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-24 md:px-12 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Transform Your Life Through
              <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Holistic Healing
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Discover world-class alternative medicine therapies tailored to your unique journey towards wellness
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="text-xs sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 py-12 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose HealJourney</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference of truly personalized, world-class holistic healthcare
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hypnotherapy Section */}
      <section 
        className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24"
        onMouseEnter={() => setActiveSection('hypnotherapy')}
        onMouseLeave={() => setActiveSection(null)}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/30 shadow-2xl">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hypnotherapy</h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                Unlock the power of your subconscious mind. Our certified hypnotherapists guide you through transformative sessions to overcome anxiety, break habits, and achieve deep relaxation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {hypnotherapyBenefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-md rounded-xl p-6 border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <benefit.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8">
              <h3 className="text-xl font-bold mb-4">What We Treat</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Stress & Anxiety Relief', 'Sleep Improvement', 'Habit Transformation', 'Pain Management', 'Confidence Building', 'Weight Management'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>60-90 min sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>One-on-one care</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-8 py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
                <span>Explore Hypnotherapy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Naturopathy Section */}
      <section 
        className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24"
        onMouseEnter={() => setActiveSection('naturopathy')}
        onMouseLeave={() => setActiveSection(null)}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-emerald-500/30 shadow-2xl">
            <div className="text-center mb-12">
              <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Naturopathy</h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                Embrace nature's healing wisdom. Experience holistic treatments that work with your body's innate ability to heal, using natural therapies, nutrition, and lifestyle modifications.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {naturopathyBenefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-teal-400/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <benefit.icon className="w-10 h-10 text-teal-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8">
              <h3 className="text-xl font-bold mb-4">Our Natural Solutions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Detoxification Programs', 'Herbal Medicine', 'Nutritional Counseling', 'Lifestyle Optimization', 'Ayurvedic Treatments', 'Yoga & Meditation'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <span>Flexible programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-teal-400" />
                  <span>100% Natural</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-8 py-4 text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 group">
                <span>Explore Naturopathy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from people who transformed their lives with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-xs px-3 py-1 bg-cyan-500/30 rounded-full border border-cyan-500/50">
                    {testimonial.therapy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Your Journey With Us</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              A simple, seamless process designed around your comfort and healing
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Free initial consultation to understand your needs" },
              { step: "02", title: "Assessment", desc: "Comprehensive health evaluation by our experts" },
              { step: "03", title: "Treatment", desc: "Personalized therapy sessions tailored to you" },
              { step: "04", title: "Follow-up", desc: "Ongoing support and progress monitoring" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-cyan-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
              Join thousands who have discovered the transformative power of holistic medicine. Your path to wellness starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                Schedule Your Consultation
              </button>
              <button className="px-8 sm:px-12 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300">
                Download Brochure
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@healjourney.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold">HealJourney</span>
              </div>
              <p className="text-sm text-gray-400">Transforming lives through holistic healing and natural wellness.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Hypnotherapy</li>
                <li>Naturopathy</li>
                <li>Consultation</li>
                <li>Wellness Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-white/10">
            <p>&copy; 2024 HealJourney. All rights reserved. Transform your wellness journey with us.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}