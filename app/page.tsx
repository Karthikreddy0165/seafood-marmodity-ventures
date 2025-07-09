'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence,Variants } from 'framer-motion';
import LogoImage from '../components/LogoImage'

export default function Home() {

    type Product = {
    id: number;
    name: string;
    description: string;
    adultSize: string;
    image: string;
    category: string;
  };
  type GalleryItem = {
      id: number,
      type: string,
      src: string,
      title: string,
      description: string
    }

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

    const handleWhatsAppInquiry = (productName?: string) => {
    const message = productName 
      ? `Hi! I'm interested in ${productName}. Could you please provide more details about pricing, availability, and shipping options?`
      : "Hi! I'm interested in your seafood products. Could you please provide more information about your offerings?";
    
    const whatsappUrl = `https://wa.me/919743336489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

    const allFish = [
      {
        id: 1,
        name: 'Bagda Chingri',
        description: 'Popular brackish water shrimp species known for export demand.',
        adultSize: '30–60 g',
        image: '/BagdaChingri.jpeg',
        category: 'prawn'
      },
      {
        id: 2,
        name: 'Black Pomfret',
        description: 'Popular marine fish with rich flavor and soft texture.',
        adultSize: '400–800 g',
        image: '/BlackPomfret.jpeg',
        category: 'Premium Marine'
      },
      {
        id: 3,
        name: 'Black Tiger Prawns',
        description: 'Large prawns preferred for export due to size and flavor.',
        adultSize: '40–80 g',
        image: '/BlackTigerPrawns.jpeg',
        category: 'prawn'
      },
      {
        id: 4,
        name: 'Brown Shrimp (Local)',
        description: 'Commonly consumed shrimp, found in coastal regions.',
        adultSize: '20–30 g',
        image: '/BrownShrimp(local).jpeg',
        category: 'prawn'
      },
      {
        id: 5,
        name: 'Chinese Pomfret',
        description: 'Premium table fish known for tender meat and mild flavor.',
        adultSize: '300–600 g',
        image: '/ChinesePomfret.jpeg',
        category: 'Premium Marine'
      },
      {
        id: 6,
        name: 'Common Carp',
        description: 'Hardy freshwater species, widely cultivated.',
        adultSize: '1.0–1.5 kg',
        image: '/CommonCarp.jpeg',
        category: 'Exotic Carp'
      },
      {
        id: 7,
        name: 'Desi Magur (Walking Catfish)',
        description: 'Air-breathing catfish valued for high protein meat.',
        adultSize: '200–500 g',
        image: '/DesiMagur.jpeg',
        category: 'catfish'
      },
      {
        id: 8,
        name: 'Grass Carp',
        description: 'Herbivorous species used in weed control and aquaculture.',
        adultSize: '2.0–3.5 kg+',
        image: '/GrassCarp.jpeg',
        category: 'Exotic Carp'
      },
      {
        id: 9,
        name: 'Gulsha Fish',
        description: 'Delicate freshwater fish popular in Bengali cuisine.',
        adultSize: '150–300 g',
        image: '/GulshaFish.jpeg',
        category: 'Fresh Water'
      },
      {
        id: 10,
        name: 'Hilsa (Ilish)',
        description: 'Iconic migratory fish known for flavor and high demand.',
        adultSize: '500 g–1.0 kg',
        image: '/Hilsa.jpeg',
        category: 'Premium Marine'
      },
      {
        id: 11,
        name: 'Indian Salmon (Rawas)',
        description: 'Premium estuarine species with firm meat.',
        adultSize: '1.5–2.5 kg',
        image: '/IndianSalmon.jpeg',
        category: 'Premium Marine'
      },
      {
        id: 12,
        name: 'Katla (Catla catla)',
        description: 'Large-bodied Indian major carp ideal for meat production.',
        adultSize: '1.5–2.5 kg+',
        image: '/Katla.jpeg',
        category: 'Major Carp'
      },
      {
        id: 13,
        name: 'Mrigal (Cirrhinus mrigala)',
        description: 'Bottom-feeding carp species common in polyculture.',
        adultSize: '1.0–1.2 kg+',
        image: '/Mrigal.jpeg',
        category: 'Major Carp'
      },
      {
        id: 14,
        name: 'Murrel Fish (Snakehead)',
        description: 'Carnivorous freshwater fish prized for taste and recovery value.',
        adultSize: '600–900 g',
        image: '/MurrelFish.jpeg',
        category: 'Fresh Water'
      },
      {
        id: 15,
        name: 'Pabda Fish',
        description: 'Popular soft-textured freshwater fish.',
        adultSize: '100–250 g',
        image: '/PabdaFish.jpeg',
        category: 'Fresh Water'
      },
      {
        id: 16,
        name: 'Pangasius (Basa)',
        description: 'Fast-growing catfish widely farmed and exported.',
        adultSize: '1.0–1.2 kg+',
        image: '/PangasiusFish.jpeg',
        category: 'catfish'
      },
      {
        id: 17,
        name: 'Rohu (Labeo rohita)',
        description: 'Widely cultivated Indian carp known for mild flavor.',
        adultSize: '1.0–1.5 kg+',
        image: '/Rohu.jpeg',
        category: 'Major Carp'
      },
      {
        id: 18,
        name: 'Rupchanda (Moonfish)',
        description: 'Premium brackish water table fish.',
        adultSize: '300–500 g',
        image: '/RupchandaFish.jpeg',
        category: 'Brackish Water'
      },
      {
        id: 19,
        name: 'Sea Bass (Bhetki)',
        description: 'Premium estuarine predator ideal for export.',
        adultSize: '1.0–1.8 kg',
        image: '/SeaBass(bhetki)Fish.jpeg',
        category: 'Premium Marine'
      },
      {
        id: 20,
        name: 'Silver Carp',
        description: 'Filter-feeding carp often used in composite culture.',
        adultSize: '1.0–2.0 kg',
        image: '/SilverCarp.jpeg',
        category: 'Exotic Carp'
      },
      {
        id: 21,
        name: 'Tilapia (GIFT strain)',
        description: 'Prolific and fast-growing fish common in global aquaculture.',
        adultSize: '0.4–0.8 kg',
        image: '/TilapiaFish.jpeg',
        category: 'cichlid'
      },
      {
        id: 22,
        name: 'Vannamei Prawns',
        description: 'Globally preferred shrimp species in commercial farming.',
        adultSize: '20–30 g',
        image: '/VannameiPrawns.jpeg',
        category: 'prawn'
      },
      {
        id: 23,
        name: 'White Silver Pomfret',
        description: 'Premium quality marine fish with excellent meat.',
        adultSize: '300–600 g',
        image: '/WhiteSilverPomfret.jpeg',
        category: 'Premium Marine'
      }
    ];


  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fresh Fish Processing',
      description: 'State-of-the-art processing facility'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Control',
      description: 'Rigorous quality testing procedures'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cold Storage',
      description: 'Temperature-controlled storage facilities'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Export Packaging',
      description: 'Professional packaging for international shipping'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fish Farm',
      description: 'Sustainable aquaculture practices'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Logistics',
      description: 'Global shipping and distribution network'
    }
  ];

  const certifications = [
    {
      name: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Points',
      icon: '🏆'
    },
    {
      name: 'ISO 22000:2018',
      description: 'Food Safety Management System',
      icon: '📋'
    },
    {
      name: 'FSSAI Licensed',
      description: 'Food Safety and Standards Authority of India',
      icon: '✅'
    },
    {
      name: 'Export License',
      description: 'Government of India Export Authorization',
      icon: '🌍'
    },
    {
      name: 'Cold Chain Certified',
      description: 'Temperature Controlled Logistics',
      icon: '❄️'
    },
    {
      name: 'Sustainable Sourcing',
      description: 'Responsible Aquaculture Practices',
      icon: '🌱'
    }
  ];

  const companyValues = [
    {
      icon: '🌊',
      title: 'Sustainable Fishing',
      description: 'We practice responsible fishing methods to preserve marine ecosystems and promote ethical aquaculture'
    },
    {
      icon: '❄️',
      title: 'Cold Chain Excellence',
      description: 'Advanced temperature-controlled logistics ensure maximum freshness from pond to port'
    },
    {
      icon: '🚚',
      title: 'Global Logistics',
      description: 'Worldwide shipping with specialized seafood transportation and customs expertise'
    },
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Only the finest quality fish meet our strict international standards and certifications'
    },
    {
      icon: '🔬',
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage of the supply chain'
    },
    {
      icon: '🤝',
      title: 'Trusted Partnerships',
      description: 'Building long-term relationships with farmers, suppliers, and international buyers'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-x-hidden">
      {/* Animated Ocean Background */}
      <div className="fixed inset-0 z-0">
        <div className="ocean-waves"></div>
        <div className="floating-fish"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>
      </div>

      {/* Navigation with Mobile Menu */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-center space-x-3"
            >
            <div className="relative">
            <LogoImage />
            </div>
              <div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Marmodity Ventures LLP
                </span>
                <p className="text-xs text-blue-600 font-medium">Premium Seafood Exports</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Products', 'Gallery', 'About', 'Certifications', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                  className="text-blue-800 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-blue-600 text-white"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100"
              >
                <div className="py-4 space-y-2">
                  {['Home', 'Products', 'Gallery', 'About', 'Certifications', 'Contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      const el = document.getElementById(item.toLowerCase());
                      if (el) {
                        setMobileMenuOpen(false); // first, close the menu
                        setTimeout(() => {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 300); // wait for animation to close
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left px-4 py-3 text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-semibold rounded-lg mx-2"
                  >
                    {item}
                  </motion.button>

                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-blue-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Premium
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Seafood Exports
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-xl md:text-2xl lg:text-3xl text-blue-700 mb-8 leading-relaxed font-light"
          >
            Your trusted gateway to the world of Indian seafood exports
            <br />
            <span className="text-base md:text-lg text-blue-600">From pond to port - Quality assured, globally delivered</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              onClick={() => scrollToSection('products')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-500 relative overflow-hidden"
              onClick={() => handleWhatsAppInquiry()}
            >
              <span className="relative z-10">Get Quote</span>
              <motion.div 
                className="absolute inset-0 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 }}
              ></motion.div>
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '19+', label: 'Fish Varieties' },
              { number: '5+', label: 'Years Experience' },
              { number: 'HACCP', label: 'Certified' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-blue-800"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base text-blue-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">Our Premium Selection</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of fresh, sustainably sourced seafood from India's finest waters
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {allFish.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {product.category}
                  </motion.div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 mb-4 leading-relaxed text-sm md:text-base">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-blue-500 font-medium">Adult Size</span>
                      <div className="text-lg md:text-xl font-bold text-blue-800">{product.adultSize}</div>
                    </div>
                    <motion.button 
                        onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppInquiry(product.name);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Inquire Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">Our Facilities & Operations</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              Take a look at our state-of-the-art facilities and quality processes
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <span className="text-white text-lg">📸</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">About Marmodity Ventures LLP</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-blue-700 leading-relaxed mb-8">
                A globally oriented export company, rooted in India and focused on delivering top-grade fish and seafood products to international markets.
              </p>
              <p className="text-base md:text-lg text-blue-600 leading-relaxed">
                With deep industry knowledge, streamlined operations, and a passion for quality, we specialize in the import and export of both freshwater and marine fish varieties, catering to the ever-growing demand for premium Indian seafood across the globe.
              </p>
            </div>
          </motion.div>

          {/* Vision, Mission, Goals */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-20"
          >
            {[
              {
                title: 'Our Vision',
                content: 'To become a globally trusted name in the seafood trade by delivering premium-quality fish products while fostering sustainability, ethical sourcing, and long-term partnerships across borders.',
                icon: '🎯'
              },
              {
                title: 'Our Mission',
                content: 'To bridge the gap between India\'s rich fisheries and global seafood demand through timely, safe, and quality-controlled delivery to international markets.',
                icon: '🚀'
              },
              {
                title: 'Our Goals',
                content: 'Expand our presence across key international seafood markets while building enduring relationships and promoting sustainable fishing practices.',
                icon: '🏆'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
              >
                <motion.div 
                  className="text-4xl md:text-5xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-blue-600 leading-relaxed text-sm md:text-base">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Values Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <motion.div 
                  className="text-3xl md:text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-blue-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">Certifications & Standards</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality is backed by international certifications and rigorous standards
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
              >
                <motion.div 
                  className="text-4xl md:text-5xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.3 
                  }}
                >
                  {cert.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{cert.name}</h3>
                <p className="text-blue-600 leading-relaxed text-sm md:text-base">{cert.description}</p>
                <motion.div 
                  className="mt-6 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-200 leading-relaxed">
              Ready to place an order or discuss your seafood requirements? Let's connect!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              {[
                { icon: '📧', label: 'Email', value: 'exports@marmodityventures.com', link: 'mailto:exports@marmodityventures.com' },
                { icon: '📱', label: 'WhatsApp', value: '+91 97433 36489', link: 'https://wa.me/919743336489' },
                { icon: '📞', label: 'Phone', value: '+91 11 4567 8900', link: 'tel:+911145678900' },
                { icon: '📍', label: 'Address', value: 'New Delhi, India', link: '#' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <motion.div 
                    className="text-2xl md:text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-blue-200 text-sm md:text-base">{contact.label}</p>
                    <a href={contact.link} className="text-white text-base md:text-lg hover:text-blue-300 transition-colors">
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}

              <div className="space-y-4 pt-8">
                <motion.a 
                  href="https://wa.me/919876543210" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                  <span className="mr-3 text-lg md:text-xl">💬</span>
                  Chat on WhatsApp
                </motion.a>
                <motion.a 
                  href="mailto:exports@marmodityventures.com" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <span className="mr-3 text-lg md:text-xl">✉️</span>
                  Send Email
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Send us a Message</h3>
              <div className="space-y-6">
                {[
                  { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Company Name', type: 'text', placeholder: 'Your company name' },
                  { label: 'Phone Number', type: 'tel', placeholder: '+1 234 567 8900' }
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <label className="block text-white font-semibold mb-2 text-sm md:text-base">{field.label}</label>
                    <motion.input 
                      type={field.type}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 md:py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">Message</label>
                  <motion.textarea 
                    rows={4}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 md:py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your seafood requirements, quantities, and delivery preferences..."
                  ></motion.textarea>
                </motion.div>
                
                <motion.button 
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className='rounded-full bg-white'><LogoImage/></div>
                
                <div>
                  <span className="text-xl md:text-2xl font-bold">Marmodity Ventures LLP</span>
                  <p className="text-blue-300 text-sm md:text-base">Premium Seafood Exports</p>
                </div>
              </motion.div>
              <p className="text-blue-200 leading-relaxed mb-6 max-w-md text-sm md:text-base">
                Your trusted gateway to the world of Indian seafood exports. From pond to port - Quality assured, globally delivered.
              </p>
              <div className="flex space-x-4">
                {['📧', '📱', '🌐', '📍'].map((icon, index) => (
                  <motion.div 
                    key={index} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg md:text-xl">{icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Products', id: 'products' },
                  { name: 'Gallery', id: 'gallery' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Certifications', id: 'certifications' },
                  { name: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-blue-200 hover:text-white transition-colors text-sm md:text-base text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {['Export Services', 'Quality Assurance', 'Cold Chain Logistics', 'Custom Packaging', 'Global Shipping'].map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">{service}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div 
            className="border-t border-blue-800 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-300 text-sm md:text-base">
              © 2024 Marmodity Ventures LLP. All rights reserved. | Designed for global seafood excellence.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <motion.button
                  onClick={() => setSelectedProduct(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  ✕
                </motion.button>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{selectedProduct.name}</h3>
                <p className="text-blue-600 mb-6 text-base md:text-lg leading-relaxed">{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <span className="text-blue-500 font-medium">Adult Size</span>
                    <div className="text-xl md:text-2xl font-bold text-blue-800">{selectedProduct.adultSize}</div>
                  </div>
                  <div>
                    <span className="text-blue-500 font-medium">Category</span>
                    <div className="text-xl md:text-2xl font-bold text-blue-800">{selectedProduct.category}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-xl font-semibold transition-colors"
                    onClick={() => handleWhatsAppInquiry(selectedProduct.name)}
                  >
                    Request Quote
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 md:py-4 rounded-xl font-semibold transition-colors"
                    onClick={() => handleWhatsAppInquiry(selectedProduct.name)}
                  >
                    More Info
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGalleryItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] md:h-[70vh]">
                <Image
                  src={selectedGalleryItem.src}
                  alt={selectedGalleryItem.title}
                  fill
                  className="object-contain rounded-2xl"
                />
                <motion.button
                  onClick={() => setSelectedGalleryItem(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-colors text-xl"
                >
                  ✕
                </motion.button>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-b-2xl p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedGalleryItem.title}</h3>
                <p className="text-white/80">{selectedGalleryItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}