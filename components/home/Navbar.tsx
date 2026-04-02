"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, X, ChevronDown, ChevronUp, User, LogOut, Mail, Phone, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser, getCurrentUser } from '@/store/slices/authSlice';

const poppinsMenuHeader = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '24px',
};
const poppinsMenuLinkText = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19.2px',
};
const poppinsMoneyText = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '19.2px',
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<"loans" | "save" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, loading, initialCheckComplete } = useAppSelector((state) => state.auth);
  const hasCheckedAuth = useRef(false);

  // Only fetch user once on mount
  useEffect(() => {
    if (!hasCheckedAuth.current && !user && !initialCheckComplete) {
      hasCheckedAuth.current = true;
      dispatch(getCurrentUser());
    }
  }, [dispatch, user, initialCheckComplete]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    setIsProfileDropdownOpen(false);
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };



  const DesktopDropdownContent = ({ type }: { type: "loans" | "save" }) => {
    const isLoans = type === "loans";
    return (
      <div 
        className={`absolute top-[83px] z-50 shadow-2xl flex p-[50px]
          ${isLoans ? "w-[891px] left-1/2 -translate-x-[45%] xl:left-[299px] xl:translate-x-0" : "w-[719px] left-1/2 -translate-x-[45%] xl:left-[385px] xl:translate-x-0"} 
          h-[339px] bg-gradient-to-br from-[#1B3229] to-[#0C1D17]`}
      >
        <div className="flex gap-[41px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-[33px]">
              <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase tracking-wider leading-none">
                {isLoans ? "Loans" : "Save"}
              </h3>
              <div className="flex flex-col gap-[17px]">
                {(isLoans 
                  ? ["Cash Advance", "Contact Us", "Make a Payment", "Locations"] 
                  : ["Tools", "FAQ", "Glossary of financial terms", "Contact"]
                ).map((item) => (
                  <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                    <span className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D] transition-colors">
                      {item}
                    </span>
                    <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                  </div>
                ))}
              </div>
            </div>
            {!isLoans && <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">Money, Figured Out</h3>}
          </div>

          {isLoans && (
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[33px]">
                <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">Tools</h3>
                <div className="flex flex-col gap-[17px]">
                  {["FAQs", "Glossary of financial terms"].map((item) => (
                    <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                      <span className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D]">
                        {item}
                      </span>
                      <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">Money, Figured Out</h3>
            </div>
          )}
        </div>

        <div className={`flex flex-col absolute ${isLoans ? "left-[581px]" : "left-[409px]"} top-[50px]`}>
            <div className="w-[201px] flex flex-col gap-[18px]">
              <div className="w-[170px] h-[22px] relative">
                 <Image src="/logo_2.png" alt="Cash in Flash Logo" fill className="object-contain" />
              </div>
              <p className="text-[#FAFAFA] font-medium text-[14px] leading-[19.2px] font-['Poppins']">
                Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
              </p>
            </div>
            <div className="flex gap-[12px] mt-[72px]">
              <Image src="/apple_store.png" alt="App Store" width={123} height={41} className="cursor-pointer hover:opacity-80 transition-opacity" />
              <Image src="/google_play.png" alt="Play Store" width={123} height={41} className="cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
        </div>
      </div>
    );
  };

  // Profile Dropdown Component
  const ProfileDropdown = () => {
    if (!isProfileDropdownOpen) return null;
    
    return (
      <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
        {/* User Header */}
        <div className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-[#15C15D]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm truncate">{user?.fullName}</p>
            </div>
          </div>
        </div>
        
        {/* User Info */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-800 truncate">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-800">{user?.phoneNumber}</p>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="py-2">
          <button 
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center bg-white shadow-sm md:shadow-none">
      
      {/* 1. TOP BANNER (Visible on Desktop/Tablet) */}
      <div className="hidden md:flex w-full h-auto min-h-[23px] mt-[18px] items-center justify-center px-4">
        <p className="font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[27px] text-[#353535] text-center">
          Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
        </p>
      </div>

      <div className="hidden md:block w-full h-0 border-t border-[#E8E8E8] mt-[18px]" />

      {/* 2. DESKTOP/TABLET NAVBAR */}
      <div className="hidden md:flex w-full max-w-[1440px] h-[83px] items-center justify-center relative px-6">
        <div className="w-full max-w-[1200px] flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 lg:gap-[71px]">
            <div className="shrink-0">
               <Image src="/logo.png" alt="Logo" width={220} height={30} className="lg:w-[250px] lg:h-[32px]" priority />
            </div>
            
            <div className="flex items-center gap-2 lg:gap-[30px] h-[83px]">
              <div 
                className="relative h-full flex items-center px-[10px] lg:px-[14px] cursor-pointer group"
                onMouseEnter={() => setActiveDropdown("loans")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "loans" && <div className="absolute inset-0 bg-[#F9F9F9] border-b-[3px] border-[#08A226] z-0" />}
                <span className="font-['Poppins'] font-medium text-[15px] lg:text-[16px] text-[#353535] z-10">Loans</span>
              </div>

              <span className="font-['Poppins'] font-medium text-[15px] lg:text-[16px] text-[#353535] cursor-pointer">Location</span>

              <div 
                className="relative h-full flex items-center px-[10px] lg:px-[14px] cursor-pointer group"
                onMouseEnter={() => setActiveDropdown("save")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "save" && <div className="absolute inset-0 bg-[#F9F9F9] border-b-[3px] border-[#08A226] z-0" />}
                <span className="font-['Poppins'] font-medium text-[15px] lg:text-[16px] text-[#353535] z-10">Save</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-[35px]">
            <div className="hidden lg:flex items-center gap-[8px] cursor-pointer group">
              <MapPin className="w-[24px] h-[24px] text-[#353535] group-hover:text-[#15C15D]" />
              <span className="font-['Poppins'] font-medium text-[16px] group-hover:text-[#15C15D]">Find a Store</span>
            </div>
            
            <div className="flex gap-[10px]">
              <button 
                className="w-[100px] lg:w-[125px] h-[47px] cursor-pointer rounded-[40px] bg-gradient-to-r from-[#15C15D] to-[#13EC6D] font-['Poppins'] font-medium text-white shadow-md hover:shadow-lg transition-all"
              >
                Apply now
              </button>
              
              {/* Show login or profile button based on auth state */}
              {initialCheckComplete && !loading && (
                <>
                  {user ? (
                    <div className="relative" ref={profileDropdownRef}>
                      <button 
                        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        className="w-[100px] lg:w-[125px] h-[47px] cursor-pointer rounded-[40px] border-2 border-[#15C15D] bg-white font-['Poppins'] font-medium text-[#15C15D] hover:bg-[#15C15D] hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <ProfileDropdown />
                    </div>
                  ) : (
                    <button 
                      onClick={handleLoginClick}
                      className="w-[100px] lg:w-[125px] h-[47px] cursor-pointer rounded-[40px] border-2 border-[#15C15D4D] bg-white font-['Poppins'] font-medium text-[#353535] hover:border-[#15C15D] transition-all"
                    >
                      Log in
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {activeDropdown && (
          <div onMouseEnter={() => setActiveDropdown(activeDropdown)} onMouseLeave={() => setActiveDropdown(null)} className="w-full absolute top-0 left-0">
            <DesktopDropdownContent type={activeDropdown} />
          </div>
        )}
      </div>

      {/*  MOBILE HEADER */}
      <div className="md:hidden flex flex-col w-full h-full bg-white">
        <div className="flex items-center justify-center w-full h-[32px] px-6 bg-white border-b border-gray-100">
          <p className="text-[14.5px] font-medium leading-[20.8px] text-[#353535] font-['Inter']">
            Fast Cash with Instant Payday Approval
          </p>
        </div>

        <div className="flex items-center justify-between w-full h-[80px] px-6 bg-[#ffffff]">
          <div className="relative w-[180px] h-[24px]">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 transition-transform active:scale-90">
            {isMobileMenuOpen ? <X className="w-8 h-8 text-black" /> : <Image src="/nav_menu_icon.png" alt="Menu" width={32} height={32} className="object-contain" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[112px] left-0 w-full h-[calc(100vh-112px)] bg-[#0C1D17] z-50 flex flex-col p-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="flex flex-col gap-6 text-white pb-10">
            
            {/* User Info for Mobile */}
            {user && (
              <div className="bg-white/10 rounded-lg p-4 mb-2">
                <div className="flex items-center gap-3 mb-3">
                  <UserCircle className="w-10 h-10 text-white" />
                  <div>
                    <p className="text-white font-semibold">{user.fullName}</p>
                    <p className="text-white/70 text-sm">{user.email}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col">
              <button onClick={() => setMobileLoansOpen(!mobileLoansOpen)} className="flex items-center justify-between py-3 border-b border-gray-700 w-full h-full">
                <span className="font-semibold text-[18px] text-white font-['Poppins']">Loans</span>
                <div className="z-10 flex items-center justify-center w-[24px] h-[24px]">
                   {mobileLoansOpen ? <ChevronUp className="w-[18px] h-[18px] text-white" /> : <ChevronDown className="w-[18px] h-[18px] text-white" />}
                </div>
              </button>
              
              {mobileLoansOpen && (
                <div className="flex flex-col gap-[17px] mt-[17px] pl-[14px]">
                    <h3 style={poppinsMenuHeader} className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none tracking-wider">LOANS</h3>
                    {["Cash Advance", "Contact Us", "Make a Payment", "Locations"].map((item) => (
                      <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                        <span style={poppinsMenuLinkText} className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D]">{item}</span>
                        <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[17px] mt-[17px] pl-[14px]">
                <h3 style={poppinsMenuHeader} className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">TOOLS</h3>
                {["FAQs", "Glossary of financial terms"].map((item) => (
                    <div key={item} className="flex items-center gap-[7px] group cursor-pointer w-max">
                      <span style={poppinsMenuLinkText} className="text-white font-medium text-[16px] leading-[19.2px] font-['Poppins'] group-hover:text-[#13EC6D]">{item}</span>
                      <ArrowRight className="w-[14px] h-[16px] text-white group-hover:text-[#13EC6D]" strokeWidth={3} />
                    </div>
                  ))}
            </div>

            <div className="flex flex-col gap-[17px] mt-[17px] pl-[14px]">
                <h3 style={poppinsMenuHeader} className="text-[#13EC6D] font-bold text-[16px] uppercase leading-none">MONEY, FIGURED OUT</h3>
                <div className="w-[201px] flex flex-col gap-[18px]">
                  <div className="w-[170px] h-[22px] relative">
                     <Image src="/logo_2.png" alt="Cash in Flash Logo" fill className="object-contain" />
                  </div>
                  <p style={poppinsMoneyText} className="text-[#FAFAFA] font-medium text-[14px] leading-[19.2px] font-['Poppins']">
                    Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <Image src="/apple_store.png" alt="App Store" width={123} height={41} />
                  <Image src="/google_play.png" alt="Play Store" width={123} height={41} />
                </div>
            </div>

            <div className="flex flex-col mt-4">
              <button className="flex items-center justify-between py-3 border-b border-gray-700 w-full h-full">
                <span className="font-semibold text-[18px] text-white font-['Poppins']">Location</span>
                <ChevronDown className="w-[18px] h-[18px] text-[#ffffff]" />
              </button>
            </div>
            <div className="flex flex-col">
              <button className="flex items-center justify-between py-3 border-b border-gray-700 w-full h-full">
                <span className="font-semibold text-[18px] text-white font-['Poppins']">Save</span>
                <ChevronDown className="w-[18px] h-[18px] text-[#ffffff]" />
              </button>
            </div>

            <div className="flex items-center gap-2 py-3 mt-4">
              <MapPin className="text-[#ffffff]" size={24}/>
              <span className="font-['Poppins'] font-medium text-[16px] text-white">Find a Store</span>
            </div>
          </div>

          <div className="mt-auto flex flex-row gap-4 pb-10">
            <button 
              className="w-full h-[55px] cursor-pointer rounded-[40px] bg-gradient-to-r from-[#15C15D] to-[#13EC6D] font-['Poppins'] font-semibold text-white text-[18px]"
            >
              Apply now
            </button>
            {user ? (
              <button 
                onClick={handleLogout}
                className="w-full h-[55px] cursor-pointer rounded-[40px] border-2 border-red-500 bg-white font-['Poppins'] font-semibold text-red-500 text-[18px] hover:bg-red-500 hover:text-white transition-all"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={handleLoginClick}
                className="w-full h-[55px] cursor-pointer rounded-[40px] border-2 border-[#15C15D4D] bg-white font-['Poppins'] font-semibold text-[#353535] text-[18px]"
              >
                Log in
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;