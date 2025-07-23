'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Users, Smartphone, CreditCard, BarChart3, Globe, ArrowRight, Download, Play, Star, MapPin, DollarSign } from 'lucide-react';

const ColectaWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'market', label: 'Market' },
    { id: 'pitch', label: 'Pitch Deck' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                Colecta
              </div>
              <div className="ml-2 text-sm text-gray-500" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Quetzales
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-2 text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-blue-600 font-bold'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    style={{ fontFamily: 'Karla, sans-serif' }}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block px-3 py-2 text-base w-full text-left ${
                    activeSection === section.id
                      ? 'text-blue-600 font-bold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16 pb-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              Split Bills.
              <br />
              <span className="text-blue-600">Share Joy.</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              The first free bill-splitting app designed for Central America. 
              Connect through WhatsApp, pay through any bank, and never worry about 
              who owes what again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download size={20} />
                Coming Soon
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                51.5M
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                People in Central America
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                70%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Still use cash for bills
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                85%
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Use WhatsApp daily
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                Free
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                For all users, forever
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              The Bill-Splitting Revolution
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Born from the frustration of dinner parties and group outings, 
              Colecta transforms the way Central Americans share expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  The Problem We Solve
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
                >
                  In Central America, splitting bills is painful. People use WhatsApp messages, 
                  manual calculations, and IOUs. It creates social friction and wastes time.
                </p>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  <li>• 45% split bills with cash + manual math</li>
                  <li>• 32% use WhatsApp messages + bank transfers</li>
                  <li>• 18% rely on "one person pays, others pay back later"</li>
                  <li>• Only 5% use existing apps (all terrible)</li>
                </ul>
              </div>

              <div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Our Solution
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
                >
                  Colecta automates the entire process through WhatsApp integration. 
                  Create splits, send requests, and settle up instantly—all without paying fees. 
                  We make money through bank partnerships, keeping the app free for users.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Smartphone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Photo → Split
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Snap a receipt photo, and our OCR automatically calculates everyone's share
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      WhatsApp Native
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Send payment requests through WhatsApp—the app everyone already uses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <CreditCard className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Any Bank
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Connect any bank account—we work across all major banks in the region
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              How Colecta Works
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              From receipt to payment in under 60 seconds. 
              Three simple steps that eliminate the friction of group expenses.
            </p>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Step 1: Photo → Split */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="text-blue-600 text-sm font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    ~10 seconds
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 mb-6 flex items-center justify-center aspect-square">
                  <Smartphone className="text-blue-600" size={64} />
                </div>

                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Photo → Split
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
                >
                  Snap a photo of any receipt. Our advanced OCR technology automatically 
                  detects items, prices, taxes, and tips—then calculates everyone's fair share.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      AI-powered receipt scanning
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Automatic tax & tip calculation
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Smart item-to-person matching
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Manual editing if needed
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-gray-300" size={32} />
              </div>
            </div>

            {/* Step 2: WhatsApp Native */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="text-green-600 text-sm font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    ~20 seconds
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6 mb-6 flex items-center justify-center aspect-square">
                  <Users className="text-green-600" size={64} />
                </div>

                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  WhatsApp Native
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
                >
                  Add participants from your contacts and send payment requests directly 
                  through WhatsApp—the app everyone in Central America already uses daily.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Import from WhatsApp contacts
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Automated message templates
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Real-time payment status
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Gentle reminder system
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-gray-300" size={32} />
              </div>
            </div>

            {/* Step 3: Any Bank */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="text-purple-600 text-sm font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    ~30 seconds
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-6 mb-6 flex items-center justify-center aspect-square">
                  <CreditCard className="text-purple-600" size={64} />
                </div>

                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Karla, sans-serif' }}
                >
                  Any Bank
                </h3>
                <p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
                >
                  One-tap payments through any bank account. We integrate with all major 
                  banks across Guatemala, Costa Rica, and Panama for instant settlements.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Universal bank connectivity
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Real-time payment processing
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Bank-grade security
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Instant settlement confirmation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 
                className="text-3xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Powered by Advanced Technology
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Smartphone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      OCR Technology
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Machine learning models trained on 50,000+ Central American receipts. 
                      Recognizes text in Spanish, handles local currency formats, and understands 
                      regional tax structures (IVA, ISC, etc.).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      WhatsApp Business API
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Official WhatsApp Business API integration enables native messaging, 
                      secure payment links, and real-time status updates. Works seamlessly 
                      within existing WhatsApp conversations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <CreditCard className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Multi-Bank Integration
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Direct API connections to 15+ major banks including Banco Industrial, 
                      Banrural, BAC Credomatic, and Banco General. Real-time balance checks 
                      and instant payment processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Karla, sans-serif' }}>
                Real-World Performance
              </h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    OCR Accuracy Rate
                  </span>
                  <span className="font-bold text-blue-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    94.2%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Average Processing Time
                  </span>
                  <span className="font-bold text-green-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    58 seconds
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Payment Success Rate
                  </span>
                  <span className="font-bold text-purple-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    96.8%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Banks Supported
                  </span>
                  <span className="font-bold text-orange-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    15+
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Countries Covered
                  </span>
                  <span className="font-bold text-red-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    7
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Languages Supported
                  </span>
                  <span className="font-bold text-teal-600 text-lg" style={{ fontFamily: 'Karla, sans-serif' }}>
                    Spanish, English
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  *Performance metrics from 8-week pilot program with 500+ users across Guatemala City
                </p>
              </div>
            </div>
          </div>

          {/* Supported Banks */}
          <div className="mt-20">
            <h3 
              className="text-2xl font-bold text-gray-900 text-center mb-12"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              Supported Banks & Financial Institutions
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'Banco Industrial', 'Banrural', 'G&T Continental', 'BAC Credomatic', 
                'Banco Popular', 'Banco Nacional', 'Banco General', 'Multibank',
                'Banco Promerica', 'Banco Azteca', 'Banco Agromercantil', 'Citi'
              ].map((bank, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="bg-gray-100 rounded-lg p-4 mb-2 aspect-square flex items-center justify-center">
                    <CreditCard className="text-gray-400" size={24} />
                  </div>
                  <div className="text-xs text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    {bank}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              Ready to Revolutionize Bill Splitting?
            </h3>
            <p 
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Join thousands of Central Americans who are already using Colecta 
              to make group expenses effortless. Sign up for early access today.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              Built for Real Life
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Every feature designed with Central American culture and habits in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Multi-Currency Support
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Handle GTQ, USD, CRC, and cross-border payments seamlessly. 
                Perfect for travelers and international groups.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Group Memory
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Remember your usual dining groups and recurring splits. 
                One tap to recreate your Friday night dinner crew.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
                <Smartphone className="text-purple-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Offline Mode
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Works with poor connectivity. Create splits offline, 
                sync when connected. Built for real Central American infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-orange-100 p-4 rounded-lg w-fit mb-6">
                <BarChart3 className="text-orange-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Smart Analytics
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Track spending patterns, see who you split with most, 
                and get insights into your social expenses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-red-100 p-4 rounded-lg w-fit mb-6">
                <Star className="text-red-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                OCR Receipt Scanning
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Take a photo of any receipt and let AI handle the math. 
                Automatically calculate tips, taxes, and individual items.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-teal-100 p-4 rounded-lg w-fit mb-6">
                <CreditCard className="text-teal-600" size={32} />
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Instant Settlements
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Real-time payments through bank APIs. 
                No more waiting days for transfers to clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              A $66.5B Market Opportunity
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Central America is ready for digital transformation. 
              We're positioned to capture 15% of the regional P2P market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <div className="font-bold text-2xl text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                      51.5M People
                    </div>
                    <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Across Guatemala, Costa Rica, Panama, and beyond
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Smartphone className="text-blue-600" size={24} />
                  <div>
                    <div className="font-bold text-2xl text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                      30.4M Smartphones
                    </div>
                    <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      59% penetration and growing rapidly
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <DollarSign className="text-blue-600" size={24} />
                  <div>
                    <div className="font-bold text-2xl text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                      $1.66B SAM
                    </div>
                    <div className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Serviceable addressable market for P2P bill-splitting
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Why Now?
                </h4>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  <li>• Post-COVID digital payment adoption surge</li>
                  <li>• 85% WhatsApp penetration creates network effects</li>
                  <li>• Young population (60% under 35) embraces fintech</li>
                  <li>• No regional player has solved bill-splitting specifically</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Market Validation
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Would use free bill-splitting app
                    </span>
                    <span className="font-bold text-blue-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      73%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Split bills weekly or more
                    </span>
                    <span className="font-bold text-blue-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      60%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Want WhatsApp integration
                    </span>
                    <span className="font-bold text-blue-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      38%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Survey respondents
                    </span>
                    <span className="font-bold text-gray-900" style={{ fontFamily: 'Karla, sans-serif' }}>
                      2,847
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Karla, sans-serif' }}>
                  5-Year Projections
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Target Users
                    </span>
                    <span className="font-bold text-green-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      750K
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Annual Revenue
                    </span>
                    <span className="font-bold text-green-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      $52.2M
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      Market Share
                    </span>
                    <span className="font-bold text-green-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      15%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      IRR
                    </span>
                    <span className="font-bold text-green-600" style={{ fontFamily: 'Karla, sans-serif' }}>
                      45%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck Section */}
      <section id="pitch" className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              Investment Opportunity
            </h2>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Join us in revolutionizing payments across Central America. 
              Series A: $2.5M for 18-month runway to 150K MAU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-400 mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                $2.5M
              </div>
              <div className="text-gray-300 mb-2" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Series A Funding
              </div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                18-month runway to profitability
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                45%
              </div>
              <div className="text-gray-300 mb-2" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Expected IRR
              </div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Conservative 5-year projection
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                $85M
              </div>
              <div className="text-gray-300 mb-2" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                NPV (5-year)
              </div>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                15% discount rate
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Use of Funds
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Product Development
                  </span>
                  <span className="font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    $800K (32%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Marketing & User Acquisition
                  </span>
                  <span className="font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    $600K (24%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Team & Operations
                  </span>
                  <span className="font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    $500K (20%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Compliance & Regulatory
                  </span>
                  <span className="font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    $400K (16%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                    Contingency Reserve
                  </span>
                  <span className="font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                    $200K (8%)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                Key Milestones
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Months 1-6: Launch Guatemala
                    </div>
                    <div className="text-gray-300 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      10K users, first bank partnership, regulatory approval
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Months 7-12: Costa Rica Expansion
                    </div>
                    <div className="text-gray-300 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      50K users, second market entry, gross profit positive
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1" style={{ fontFamily: 'Karla, sans-serif' }}>
                      Months 13-18: Regional Leader
                    </div>
                    <div className="text-gray-300 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                      150K users, Panama launch, EBITDA positive, Series B ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
              Request Full Pitch Deck
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              See Colecta in Action
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Simple, intuitive, and designed for real Central American users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock screenshots/wireframes */}
            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Smartphone size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Split Creation
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Photo → Automatic calculation
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  WhatsApp Integration
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Send requests natively
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <CreditCard size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  One-Tap Payment
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Bank integration
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Smart Analytics
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Spending insights
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Globe size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Multi-Currency
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  GTQ, USD, CRC support
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Star size={48} className="mx-auto mb-4" />
                <div className="font-bold mb-2" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Group Memory
                </div>
                <div className="text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Remember your crews
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p 
              className="text-gray-600 mb-8"
              style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
            >
              Join our beta testing program and be among the first to experience Colecta
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
              Join Beta Program
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Karla, sans-serif' }}>
                  Colecta
                </div>
                <div className="ml-2 text-sm text-gray-400" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                  Quetzales
                </div>
              </div>
              <p 
                className="text-gray-300 mb-6 max-w-md leading-relaxed"
                style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}
              >
                Revolutionizing how Central Americans split bills and share expenses. 
                Free forever, powered by bank partnerships.
              </p>
              <div className="text-sm text-gray-400" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Made with ❤️ for Central America
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                Product
              </h4>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Karla, sans-serif' }}>
                Company
              </h4>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#pitch" className="hover:text-white">Investors</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
              © 2025 Colecta. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'Spectral, serif', fontWeight: '300' }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Spectral:wght@300;400&display=swap');
      `}</style>
    </div>
  );
};

export default ColectaWebsite;