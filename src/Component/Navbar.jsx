import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from '../assets/logo.png';
import { Link } from "react-router"; // or react-router-dom if you use that!
import Tooltip from "./tooltip";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showMobileDropdown, setShowMobileDropdown] = useState(false); // mobile solusi submenu

  return (
    <nav className="bg-white shadow-md py-4 px-10 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-Emerald-green font-bold text-xl flex items-center group">
          <Link to="/">
            <Tooltip message={"Ke Beranda ->"}>
              <img src={Logo} alt="Logo" className="w-52 group-hover:w-56 transition-all duration-200" />
            </Tooltip>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 items-center">
          <li className="hover:text-Emerald-green cursor-pointer transition"><Link to="AboutUs">Tentang</Link></li>

          {/* Solusi + Dropdown */}
          <li className="relative group cursor-pointer">
            {/* Trigger button */}
            <div className="flex items-center hover:text-Emerald-green px-4 py-2">
              Solusi <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {/* Dropdown menu */}
            <div className="absolute right-0 top-full mt-0 w-[800px] bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-4 gap-6 p-6">
                {/* Column 1 */}
                <div>
                  <h4 className="font-bold mb-3">Untuk Bisnis</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-Emerald-green cursor-pointer"><Link to={'WebCustom'}>Website Bisnis Kustom</Link></li>
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Aplikasi Android & iOS</li>
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Sistem Informasi</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-bold mb-3">Untuk UMKM</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-Emerald-green cursor-pointer"><Link to={"LandingPage"} >Landing Page</Link></li>
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Website Toko Online</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="font-bold mb-3">Digital Ads</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Meta Ads</li>
                    <li className="hover:text-Emerald-green cursor-pointer"><Link to="G-ads">Google Ads</Link></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <h4 className="font-bold mb-3">SEO</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Tips N Trick</li>
                    <li className="hover:text-Emerald-green cursor-pointer line-through">Jasa Writing</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="hover:text-Emerald-green cursor-pointer transition"><Link to="Portfolio">Karya</Link></li>
          <li className="hover:text-Emerald-green cursor-pointer transition"><Link to="Blog">Blog</Link></li>
        </ul>


        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center text-2xl text-gray-700 transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}><Tooltip message={"Ke Beranda ->"}>
          <img src={Logo} alt="Logo" className="mb-10 w-52 group-hover:w-56 transition-all duration-200" />
        </Tooltip></Link>

        <ul className="flex flex-col space-y-6 items-center w-full">
          <li
            className="hover:text-Emerald-green cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="AboutUs">Tentang</Link>
          </li>

          {/* Mobile Solusi with Submenu */}
          <li
            className={`hover:text-Emerald-green cursor-pointer transition duration-500 flex justify-between items-center px-10 ${showMobileDropdown ? "w-full" : "w-fit"}`}
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          >
            <span>Solusi</span>
            <ChevronDown
              className={`ml-2 transition-transform duration-300 ${showMobileDropdown ? 'rotate-180' : ''}`}
            />
          </li>

          {showMobileDropdown && (
            <ul className="flex flex-col space-y-4 text-lg text-gray-600 mt-2 w-full px-16">
              <li className="hover:text-Emerald-green cursor-pointer line-through">Website Bisnis Kustom</li>
              <li className="hover:text-Emerald-green cursor-pointer line-through">Aplikasi Android & iOS</li>
              <li className="hover:text-Emerald-green cursor-pointer"><Link to={"LandingPage"} onClick={() => {
                setIsOpen(false)
                setShowMobileDropdown(false)
              }}>Landing Page</Link></li>
              <li className="hover:text-Emerald-green cursor-pointer line-through">Website Toko Online</li>
              <li className="hover:text-Emerald-green cursor-pointer line-through">Meta Ads</li>
              <li className="hover:text-Emerald-green cursor-pointer"><Link to="G-ads" onClick={() => {
                setIsOpen(false)
                setShowMobileDropdown(false)
              }}>Google Ads</Link></li>
              <li className="hover:text-Emerald-green cursor-pointer line-through">Tips N Trick SEO</li>
              <li className="hover:text-Emerald-green cursor-pointer line-through">Jasa Writing</li>
            </ul>
          )}

          <li
            className="hover:text-Emerald-green cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="Portfolio">Karya</Link>
          </li>
          <li
            className="hover:text-Emerald-green cursor-pointer transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Link to="Blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
