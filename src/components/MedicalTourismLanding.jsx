import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Leaf,
  Brain,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Award,
  Heart,
  Shield,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Zap,
  Target,
  Activity,
  Sun
} from 'lucide-react';

export default function MedicalTourismLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  // Updated stats based on PDF
  const stats = [
    { number: "6+", label: "Hospitals (Mumbai & Navi Mumbai)" },
    { number: "200+", label: "Beds across network" },
    { number: "10+", label: "Specialist Care Services" },
    { number: "Coming Soon", label: "Robotic Surgery Hospital & Medical College" }
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


  // Testimonials adapted to PDF themes (keeps same UI)
  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Maharashtra, India",
      text: "HAB helped arrange my mother's admission and surgery in Mumbai when our local options were limited. Clear, compassionate support throughout.",
      rating: 5,
      therapy: "Patient Navigation"
    },
    {
      name: "Emily Roberts",
      location: "United Kingdom",
      text: "As an international patient, HAB guided visa & travel, lodging and connected me to specialists — affordable and professional care in India.",
      rating: 5,
      therapy: "Medical Tourism Support"
    },
    {
      name: "Aisha Khan",
      location: "Uttar Pradesh, India",
      text: "They arranged diagnostics, counselling and post-op follow-up — we never felt alone. The team took care of logistics and the emotional side too.",
      rating: 5,
      therapy: "End-to-End Support"
    }
  ];

  // Why Choose Us replaced with HAB-focused points
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Patient-Centric Process",
      description: "Every step is designed for clarity, quality and ease-of-use — from appointment to recovery."
    },
    {
      icon: Heart,
      title: "Comprehensive Support",
      description: "From first opinion to lodging, legal, travel and post-op counselling — end-to-end assistance."
    },
    {
      icon: Globe,
      title: "Cross-Border Assistance",
      description: "Support across states, countries and continents with visa & travel help for foreign nationals."
    },
    {
      icon: Users,
      title: "Experienced On-Ground Team",
      description: "Nurses, physicians, psychologists and navigators who combine expertise with human touch."
    }
  ];

  // "How We Assist" replaces Hypnotherapy benefits (keeps UI)
  

  // HBOT conditions list from PDF
  const hbotConditions = [
    "Severe anemia",
    "Brain abscess",
    "Arterial gas embolism",
    "Burns",
    "Carbon monoxide poisoning",
    "Crushing injury",
    "Sudden deafness",
    "Decompression sickness",
    "Gangrene",
    "Non-healing wounds (e.g., diabetic foot ulcer)",
    "Radiation injury",
    "Skin grafts/flaps at risk",
    "Traumatic brain injury",
    "Sudden painless vision loss"
  ];

  // Hospital network (from PDF)
  const hospitalNetwork = [
    { name: "Ghatkopar", detail: "2 hospitals — 30 beds each" },
    { name: "Sion", detail: "1 hospital — 65 beds" },
    { name: "Chembur", detail: "1 hospital — 40 beds" },
    { name: "Kurla", detail: "1 hospital — 20 beds" },
    { name: "Ghatkopar (Under Construction)", detail: "Upcoming — 50 beds" },
    { name: "Kharghar", detail: "1 hospital — 35 beds" },
    { name: "Kamothe", detail: "1 hospital — 49 beds" }
  ];

  // On-ground team from PDF
  const onGroundTeam = [
    { role: "Trained Nurses", count: 10 },
    { role: "Patient Attendants", count: 2 },
    { role: "General Physicians", count: 5 },
    { role: "Psychologists", count: 2 },
    { role: "Hypnotherapists", count: 3 },
    { role: "Nutritionists", count: 5 },
    { role: "Physiotherapists", count: 3 },
    { role: "Yoga Trainers", count: 4 },
    { role: "Pain & Palliative Physicians", count: 4 },
    { role: "Ortho-Dentists", count: 2 },
    { role: "Patient Navigators", count: 2 }
  ];

  // Features pills replaced with HAB features
  const features = [
    { icon: Globe, text: "Advanced Medical Navigation" },
    { icon: Users, text: "Cross-Border Treatment Assistance" },
    { icon: Award, text: "Patient-Centric Seamless Process" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12 backdrop-blur-sm bg-white/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              HAB
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('hypnotherapy-section')}
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
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
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 text-gray-900">
              Transform Your Life Through
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                 Hope Across Borders
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">{feature.text}</span>
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
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose HAB</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless, transparent, patient-first support for advanced medical care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hypnotherapy Section */}
      <section 
        className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24"
        id="hypnotherapy-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/30 shadow-2xl">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hypnotherapy</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Unlock the power of your subconscious mind. Our certified hypnotherapists guide you through transformative sessions to overcome anxiety, break habits, and achieve deep relaxation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {hypnotherapyBenefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-md rounded-xl p-6 border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What We Treat</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Stress & Anxiety Relief', 'Sleep Improvement', 'Habit Transformation', 'Pain Management', 'Confidence Building', 'Weight Management'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-800">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>45 min sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>One-on-one care</span>
                </div>
              </div>
              <button onClick={() => navigate('/hypnotherapy-booking')} className="flex items-center space-x-2 px-8 py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
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
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-emerald-500/30 shadow-2xl">
            <div className="text-center mb-12">
              <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Naturopathy</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Embrace nature's healing wisdom. Experience holistic treatments that work with your body's innate ability to heal, using natural therapies, nutrition, and lifestyle modifications.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {naturopathyBenefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-md rounded-xl p-6 border border-emerald-400/30 hover:border-teal-400/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <benefit.icon className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Natural Solutions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Detoxification Programs', 'Herbal Medicine', 'Nutritional Counseling', 'Lifestyle Optimization', 'Ayurvedic Treatments', 'Yoga & Meditation'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-800">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Flexible programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span>100% Natural</span>
                </div>
              </div>
              <button onClick={() => navigate('/naturopathy-booking')} className="flex items-center space-x-2 px-8 py-4 text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 group">
                <span>Explore Naturopathy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 bg-gradient-to-b from-transparent to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Our Patients Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from people who found care, support and clear guidance with HAB.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200 font-medium">
                    {testimonial.therapy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (A Patient's Journey) */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24" id="process-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">A Patient’s Journey to Recovery</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Clear steps, transparent processes and compassionate support at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "First Consultation", desc: "Video conferencing first opinion to understand needs and next steps." },
              { step: "02", title: "Assessment & Plan", desc: "Doctor confirmation for admission, diagnosis and surgical planning." },
              { step: "03", title: "Travel & Admission", desc: "Transit, domestic travel, ambulance and hospital admission coordination." },
              { step: "04", title: "Treatment & Follow-up", desc: "Hospitalisation, surgery, nursing support and continuous counselling." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-300 text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyperbaric Oxygen Therapy Section (New) */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24" id="hbot-section">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-indigo-200 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hyperbaric Oxygen Therapy (HBOT)</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                HBOT involves breathing pure oxygen in a pressurized environment to promote healing. HAB connects you to partner HBOT centres in Mumbai for advanced care.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/90 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">What HBOT Is</h3>
                <p className="text-sm text-gray-700">Treatment in a pressurized chamber where lungs gather more oxygen to fight infection and promote tissue repair.</p>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">How It Helps</h3>
                <p className="text-sm text-gray-700">Increases oxygen delivery, triggers growth factors and stem cells, and speeds recovery when used alongside standard care.</p>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Conditions Treated</h3>
                <p className="text-sm text-gray-700">Includes burns, non-healing wounds, decompression sickness, carbon monoxide poisoning, radiotherapy injuries and more.</p>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Available Through HAB</h3>
                <p className="text-sm text-gray-700">Offered via HAB partners at select HBOT centres in central Mumbai — coordinated as part of your care plan.</p>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
              <h3 className="text-xl font-bold mb-4">Some Conditions Where HBOT Helps</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {hbotConditions.map((c, i) => (
                  <div key={i} className="text-sm text-gray-800 flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Network Section (New) */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24" id="network-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Network of Multispeciality Hospitals</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">HAB works with a network of hospitals across Mumbai & Navi Mumbai to provide comprehensive care.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalNetwork.map((h, idx) => (
              <div key={idx} className="bg-white/90 rounded-2xl p-6 border border-blue-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{h.name}</h3>
                <p className="text-sm text-gray-700">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Ground Team Section (New) */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24" id="team-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">On-Ground Team</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">A multidisciplinary team to guide patients clinically and emotionally through every step.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onGroundTeam.map((member, idx) => (
              <div key={idx} className="bg-white/90 rounded-2xl p-6 border border-blue-100 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{member.role}</div>
                  <div className="text-sm text-gray-600">{member.count} on-ground</div>
                </div>
                <div className="text-blue-600 font-bold text-xl">{member.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 rounded-3xl p-8 sm:p-12 md:p-16 border border-blue-200 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Begin Your Treatment Journey with HAB
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
              Connect for a free first opinion, travel and hospital coordination, and a compassionate recovery plan tailored to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button onClick={() => scrollToSection('hypnotherapy-section')} className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white rounded-full font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
                Schedule Your Free Consultation
              </button>
              <button onClick={() => navigate('/brochure')} className="px-8 sm:px-12 py-4 sm:py-5 bg-white border-2 border-blue-300 text-blue-700 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300">
                Download Brochure
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>hello@hopeacrossborders.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:px-12 border-t border-blue-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">HAB</span>
              </div>
              <p className="text-sm text-gray-600">Hope Across Borders — Medical Assist Tourism by Infinite Ventures.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Patient Navigation</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Diagnostics & Second Opinion</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Hospital & Surgery Coordination</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">HBOT & Specialized Care</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">About HAB</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Our Network</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Testimonials</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Cookie Policy</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-blue-100">
            <p>&copy; {new Date().getFullYear()} Hope Across Borders (Infinite Ventures). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
