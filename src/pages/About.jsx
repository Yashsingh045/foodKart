import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  StarIcon, 
  SparklesIcon,
  BuildingStorefrontIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const About = () => {
  // Placeholder testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Khush Chaudhari',
      role: 'Food Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'This food delivery app has completely changed my dining experience! The variety of restaurants and dishes available is impressive, and the delivery is always on time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Aditya Bijalwan',
      role: 'Busy Professional',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'As someone who works long hours, having access to high-quality food delivery is essential. The app is intuitive, the service is reliable, and the food arrives hot and fresh.',
      rating: 5
    },
    {
      id: 3,
      name: 'Abhay Pratap',
      role: 'Culinary Explorer',
      image: 'https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWVufGVufDB8fDB8fHww',
      quote: 'I love discovering new cuisines, and this platform makes it so easy! The cuisine filters and detailed menu descriptions help me find amazing dishes I wouldn\'t have tried otherwise.',
      rating: 4
    },
    {
      id: 4,
      name: 'Vipul',
      role: 'Family Chef',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'Ordering for my entire family used to be a hassle until I found this app. The group ordering feature is a game-changer, and the kids love the variety of options available.',
      rating: 5
    },
  ];

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Animated Elements */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
        </div>
        
        <div className="container relative z-10 px-4 flex flex-col justify-center h-full text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About <span className="text-emerald-400">Our</span> Story
            </h1>
            <div className="h-1 w-24 bg-emerald-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Connecting food lovers with extraordinary culinary experiences since 2018
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section with Creative Layout */}
      <div className="container mx-auto px-4 py-20 relative">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="bg-emerald-50 p-4 rounded-full mb-6">
              <SparklesIcon className="h-10 w-10 text-emerald-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="h-1 w-20 bg-emerald-400 mb-8 rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-1 first-letter:float-left">
              Our journey began in 2018 with a simple observation: people love great food, but don't always have the time to seek out and experience the best local restaurants. We set out to bridge this gap by creating a platform that connects food enthusiasts with extraordinary culinary experiences, right at their doorstep.
            </p>
            
            <div className="my-10 flex justify-center">
              <div className="bg-emerald-50 rounded-lg p-6 shadow-sm border-l-4 border-emerald-500 max-w-2xl">
                <p className="italic text-emerald-800 text-xl font-light">
                  "Our mission is simple: to bring exceptional dining experiences to your home while supporting the incredible culinary talent in our communities."
                </p>
              </div>
            </div>
            
            <p>
              What started as a small operation serving just a few neighborhoods has grown into a thriving marketplace featuring hundreds of carefully selected restaurants across the region. Throughout our growth, we've remained committed to our core values: supporting local businesses, delivering exceptional experiences, and making gourmet dining accessible to everyone.
            </p>
            <p>
              Today, we're proud to serve thousands of customers daily, helping them discover new flavors and enjoy convenient access to their favorite dishes. Our platform isn't just about food delivery – it's about creating connections, supporting local culinary talent, and bringing people together through the universal language of great food.
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Stats Section */}
      <div className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center text-white">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-sm uppercase tracking-wider">Restaurants</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">15K+</p>
              <p className="text-sm uppercase tracking-wider">Daily Orders</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">30+</p>
              <p className="text-sm uppercase tracking-wider">Cuisines</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">4.8<span className="text-2xl">/5</span></p>
              <p className="text-sm uppercase tracking-wider">Avg. Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Values with Enhanced Design */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-50 rounded-full opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="bg-emerald-50 p-4 rounded-full mb-6">
                <HeartIcon className="h-10 w-10 text-emerald-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
              <div className="h-1 w-20 bg-emerald-400 mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl">
                We're driven by a passion for connecting people with extraordinary food experiences while supporting local restaurants and culinary entrepreneurs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md border-b-4 border-emerald-500">
                <BuildingStorefrontIcon className="h-14 w-14 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Supporting Local Businesses</h3>
                <p className="text-gray-600">
                  We champion local restaurants and help them reach new customers, providing the technology and platform they need to thrive in the digital age.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md border-b-4 border-emerald-500">
                <SparklesIcon className="h-14 w-14 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Extraordinary Experiences</h3>
                <p className="text-gray-600">
                  From our curated restaurant selection to our seamless ordering process, we're committed to making every interaction with our platform exceptional.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md border-b-4 border-emerald-500">
                <TrophyIcon className="h-14 w-14 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Culinary Excellence</h3>
                <p className="text-gray-600">
                  We celebrate and promote outstanding food quality, diverse cuisines, and innovative dishes from talented chefs across the region.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm transform transition-transform hover:scale-105 hover:shadow-md border-b-4 border-emerald-500">
                <UserGroupIcon className="h-14 w-14 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Community Connection</h3>
                <p className="text-gray-600">
                  Food brings people together. We're proud to facilitate these connections, helping create memorable moments around the dining table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Commitment Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Sustainable food delivery" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mb-6">
                <ShieldCheckIcon className="h-10 w-10 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment to Sustainability</h2>
              <div className="h-1 w-20 bg-emerald-400 mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-6">
                We're committed to reducing our environmental footprint through eco-friendly packaging, carbon-neutral delivery options, and partnerships with restaurants that prioritize sustainable practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <GlobeAltIcon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Eco-Friendly Packaging</h4>
                    <p className="text-sm text-gray-600">Biodegradable and recyclable materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <GlobeAltIcon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Green Delivery</h4>
                    <p className="text-sm text-gray-600">Carbon-neutral delivery options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section with Enhanced UI */}
      <div className="bg-emerald-50 py-20 relative overflow-hidden">
        {/* Decorative quote marks */}
        <div className="absolute top-10 left-10 text-9xl font-serif text-emerald-200 opacity-50">"</div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif text-emerald-200 opacity-50">"</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-emerald-500" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <div className="h-1 w-20 bg-emerald-400 mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Don't just take our word for it. Here's what food lovers in your community have to say about their experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-50"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-emerald-100 rounded-full p-1">
                          <StarIcon className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CTA Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Extraordinary Dining?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join thousands of food lovers who have discovered their new favorite restaurants through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/restaurants" 
                className="inline-flex items-center px-8 py-4 rounded-md bg-white text-emerald-700 font-medium hover:bg-gray-100 transition-colors shadow-lg text-lg"
                onClick={scrollToTop}
              >
                Explore Restaurants
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                to="/" 
                className="inline-flex items-center px-8 py-4 rounded-md bg-transparent text-white font-medium border-2 border-white hover:bg-white/10 transition-colors text-lg"
                onClick={scrollToTop}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 