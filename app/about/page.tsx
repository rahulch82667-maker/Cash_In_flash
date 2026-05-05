"use client";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Disclosures from "@/components/home/Disclosures";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield, Zap, HeartHandshake, TrendingUp, Users, Clock } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden font-poppins">
      <Navbar />
      
      <main className="w-full flex-grow pt-[80px] lg:pt-[100px]">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-black text-white py-20 lg:py-32">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15C15D]/20 to-transparent z-0"></div>
          
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-0 relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-tilt mb-6 leading-tight">
                Empowering your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15C15D] to-[#13EC6D]">financial freedom.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                At Cash in Flash, we believe that accessing your money should be as fast, secure, and transparent as possible. We&apos;re revolutionizing the way you get cash for your assets.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#15C15D] to-[#13EC6D] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#15C15D]/30 transition-all active:scale-95">
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-0">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-gray-100"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "$500M+", label: "Funded" },
                { number: "100k+", label: "Happy Customers" },
                { number: "15 Min", label: "Average Approval" },
                { number: "50+", label: "Locations Nationwide" }
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</h3>
                  <p className="text-[#606060] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-0">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/bg_1.jpg" 
                    alt="Our Story" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-xl font-medium italic">"We built Cash in Flash to put the power back in the hands of the consumer."</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-[#15C15D] font-semibold text-lg mb-2 uppercase tracking-wider">Our Story</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                  Born from the need for <span className="text-[#15C15D]">better</span> financial solutions.
                </h2>
                <div className="space-y-6 text-[#606060] text-lg leading-relaxed">
                  <p>
                    Founded in 2020, Cash in Flash started with a simple observation: traditional lending and asset-backed loans were painfully slow, overly complicated, and often unfair to the consumer.
                  </p>
                  <p>
                    We set out to change that by leveraging technology to streamline the process. By removing the unnecessary hurdles and focusing on transparency, we&apos;ve created a platform where you can unlock the value of your assets in minutes, not days.
                  </p>
                  <p>
                    Today, we are proud to be a trusted financial partner to hundreds of thousands of individuals, providing them with the agility they need to navigate life&apos;s financial moments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-20 lg:py-32 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-0">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-[#15C15D] font-semibold text-lg mb-2 uppercase tracking-wider">Our Values</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                What drives us every day
              </h2>
              <p className="text-[#606060] text-lg">
                These core principles guide our decisions, our product development, and how we treat every single customer.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Zap className="w-8 h-8 text-[#15C15D]" />,
                  title: "Speed",
                  desc: "Time is money. We've optimized every step of our process to get you funded as quickly as humanly possible."
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#15C15D]" />,
                  title: "Security",
                  desc: "Bank-level encryption and rigorous security protocols ensure your data and transactions are always safe."
                },
                {
                  icon: <HeartHandshake className="w-8 h-8 text-[#15C15D]" />,
                  title: "Transparency",
                  desc: "No hidden fees. No confusing jargon. We believe in complete honesty throughout your entire journey with us."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-[#15C15D]" />,
                  title: "Innovation",
                  desc: "We continuously push the boundaries of financial tech to bring you better, smarter ways to access capital."
                },
                {
                  icon: <Users className="w-8 h-8 text-[#15C15D]" />,
                  title: "Customer First",
                  desc: "Our support team is dedicated to your success. We don't just process transactions; we build relationships."
                },
                {
                  icon: <Clock className="w-8 h-8 text-[#15C15D]" />,
                  title: "Reliability",
                  desc: "We're there when you need us most. Rain or shine, day or night, our platform is ready to serve you."
                }
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                  <p className="text-[#606060] leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#13bd5a] to-[#13EC6D] z-0"></div>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-0 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to experience the difference?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join thousands of satisfied customers who have unlocked the value of their assets with Cash in Flash.
              </p>
              <button onClick={() => router.push("/apply")} className="px-10 py-4 bg-white text-[#15C15D] font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95">
                Get Started Now
              </button>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
      <Disclosures />
    </div>
  );
}
