// src/components/Teacher/pages/NaturopathyBooking.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Leaf, Calendar, User, Mail, Phone, Clock, MessageSquare, ArrowRight, CheckCircle, Sparkles, Heart } from 'lucide-react';

export default function NaturopathyBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    program: 'consultation',
    message: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // MODIFICATION: Only keeping 'initial consultation'
  const programTypes = [
    { value: 'consultation', label: 'Initial Consultation (45 min)', price: '$180' },
    // Removed: detox, nutrition, wellness programs
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        const appointmentDetails = {
          ...formData,
          therapy: 'Naturopathy',
          programDetails: programTypes.find(p => p.value === formData.program),
          bookingDate: new Date().toISOString()
        };
        
        console.log('Appointment booked:', appointmentDetails);
        alert('Appointment details saved! Redirecting to payment...');
        setIsSubmitting(false);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          program: 'consultation',
          message: ''
        });
      }, 1500);
    }
  };

  const selectedProgram = programTypes.find(p => p.value === formData.program);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12 backdrop-blur-sm bg-emerald-950/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              HealJourney
            </span>
          </div>
          <button onClick={() => navigate('/')} className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
            Back to Home
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-teal-400 mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Book Your Naturopathy Program
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Embrace nature's healing power and restore balance to your body, mind, and spirit
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-teal-400" />
                  <span>Appointment Details</span>
                </h2>

                {/* Personal Information */}
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                      <User className="w-4 h-4 text-teal-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-400`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-teal-400" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-400`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-teal-400" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-400`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

               {/* Program Type */}
<div className="mb-8">
  <label className="block text-sm font-semibold mb-3">Program Type *</label>

  <div className="relative flex items-center justify-between p-4 rounded-xl border-2 border-teal-500 bg-teal-500/20 transition-all">
    <div className="flex-1">
      <div className="font-semibold text-sm">{programTypes[0].label}</div>
      <div className="text-teal-400 font-bold mt-1">{programTypes[0].price}</div>
    </div>

    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 ml-2" />
  </div>
</div>


                {/* Date and Time */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-teal-400" />
                      <span>Preferred Start Date *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.date ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white`}
                    />
                    {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-teal-400" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.time ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white`}
                    >
                      <option value="" className="bg-slate-800">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-slate-800">
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Additional Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-teal-400" />
                    <span>Health History & Goals (Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Share your health concerns, dietary preferences, or wellness goals..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:shadow-lg hover:shadow-teal-500/50 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Proceed to Payment</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl p-6 border border-teal-500/30 shadow-2xl sticky top-8">
                <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">Therapy Type</div>
                      <div className="font-semibold">Naturopathy</div>
                    </div>
                  </div>

                  {selectedProgram && (
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400">Program</div>
                        <div className="font-semibold">{selectedProgram.label}</div>
                      </div>
                    </div>
                  )}

                  {formData.date && (
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400">Start Date & Time</div>
                        <div className="font-semibold">
                          {new Date(formData.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                          {formData.time && ` at ${formData.time}`}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/20 pt-4 mb-6">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-2xl text-teal-400">{selectedProgram?.price || '$180'}</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>100% Natural Treatments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Personalized Care Plans</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Certified Naturopaths</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Ongoing Support</span>
                  </div>
                </div>

                <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="flex items-start space-x-2">
                    <Leaf className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <div className="font-semibold text-white mb-1">Nature's Healing Promise</div>
                      Our programs use only natural therapies, herbs, and lifestyle modifications to restore your body's balance.
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-gray-400 text-center">
                  By booking, you agree to our Terms of Service and Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}