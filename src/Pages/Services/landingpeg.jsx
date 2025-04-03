import landpage from "../../assets/Landingpej.png";
import feature1 from "../../assets/DesignCreative.png";
import feature2 from "../../assets/ContentWriting.png";
import feature3 from "../../assets/digitalIntergration.png";

import logo7 from '../../assets/BrandSupport/fashThrift.png';
import logo2 from '../../assets/BrandSupport/Joys.png';
import logo3 from '../../assets/BrandSupport/PI.png';
import logo4 from '../../assets/BrandSupport/Sinefolis.png';
import logo5 from '../../assets/BrandSupport/UrusIUsaha.png';
import logo6 from '../../assets/BrandSupport/VsTravel.png';
import logo1 from '../../assets/BrandSupport/google.png';
import logo8 from '../../assets/BrandSupport/ftbw.png';
import { useEffect, useState } from "react";
import { Link } from "react-router";

const LandingPage = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const LogoMap = [
        {
            logo: logo8
        },
        {
            logo: logo1
        },
        {
            logo: logo2
        },
        {
            logo: logo3
        },
        {
            logo: logo4
        },
        {
            logo: logo5
        },
        {
            logo: logo6
        },
        {
            logo: logo7
        },
    ];

    useEffect(() => {
        document.title = "WebsiteJokiID | Kerjaan berat kita yang buat"
    }, []);

    const className = {
        container: "w-full h-auto font-sans",
        section: "max-w-6xl mx-auto px-4 pb-12 pt-40",
        heading: "text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4",
        subheading: "text-lg text-center text-gray-600 mb-10",
        scrollingLogo: "overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto bg-Forest-green py-10 flex gap-10 lg:gap-16 px-10 items-center w-full h-fit",
        button: "block w-fit mt-6 px-6 py-3 bg-Emerald-green text-white font-medium rounded-lg hover:text-Emerald-green hover:bg-white transition",
        card: "bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition",
        priceCard: "space-y-6 flex-1 bg-white shadow-lg rounded-xl p-6 text-left border hover:border-Emerald-green transition",
        highlight: "text-Emerald-green"
    };

    return (
      <div className={className.container}>
        {/* Hero Section */}
        <section
          className={`${className.section} flex flex-col-reverse md:flex-row justify-center gap-10 items-center`}
        >
          <div className="md:w-full text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Jasa Pembuatan{" "}
              <span className={className.highlight}>
                Landing Page Profesional
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Optimalkan bisnis Anda dengan jasa pembuatan landing page modern,
              cepat, dan responsif dengan{" "}
              <b className={className.highlight}>WebsiteJokiID</b>. Dirancang
              secara profesional untuk meningkatkan konversi dan penjualan !
            </p>
            <Link
              to="https://wa.me/6285179808325"
              target="_blank"
              className={className.button}
            >
              Buat Landing Page ➜
            </Link>
          </div>
          <div className="w-full md:w-3/4 grid place-items-center">
            <img
              src={landpage}
              alt="Landing Page"
              className="w-fit lg:w-full"
            />
          </div>
        </section>

        <div className={className.scrollingLogo}>
          {LogoMap.map((data, index) => {
            return (
              <img
                src={data.logo}
                key={index + 1}
                className="h-10 lg:h-14 grayscale hover:grayscale-0 transform duration-500 opacity-50 hover:opacity-100 hover:h-12"
              />
            );
          })}
        </div>

        {/* Fitur Section */}
        <section className={className.section}>
          <h2 className={className.heading}>
            <span className={className.highlight}>Solusi</span> Kami
          </h2>
          <p className={className.subheading}>
            Berikut layanan utama dari jasa landing page kami:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={className.card}>
              <img src={feature1} alt="Feature 1" className="w-20 h-20" />
              <h3 className="text-xl font-semibold">Desain Kreatif</h3>
              <p className="text-gray-500 text-base">
                Tampilan profesional & responsif yang disesuaikan dengan
                branding bisnis Anda.
              </p>
            </div>

            <div className={className.card}>
              <img src={feature2} alt="Feature 2" className="w-20 h-20" />
              <h3 className="text-xl font-semibold">Copywriting Menjual</h3>
              <p className="text-gray-500 text-base">
                Teks persuasif untuk menarik pelanggan dan meningkatkan
                konversi.
              </p>
            </div>

            <div className={className.card}>
              <img src={feature3} alt="Feature 3" className="w-20 h-20" />
              <h3 className="text-xl font-semibold">Integrasi Digital</h3>
              <p className="text-gray-500 text-base">
                Terintegrasi dengan WhatsApp, Google Analytics, & Meta Pixel.
              </p>
            </div>
          </div>
        </section>

        {/* Kenapa Pilih Kami */}
        <section className={`${className.section} bg-gray-50 rounded-lg`}>
          <h2 className={className.heading}>
            Kenapa Pilih
            <span className={className.highlight}> WebsiteJokiID?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-Emerald-green text-3xl font-bold mb-2">01</h3>
              <p className="text-gray-700 font-semibold">
                Desain Unik & Kreatif
              </p>
              <p className="text-gray-500 text-base">
                Desain yang menarik dan menyesuaikan dengan identitas brand
                Anda.
              </p>
            </div>
            <div>
              <h3 className="text-Emerald-green text-3xl font-bold mb-2">02</h3>
              <p className="text-gray-700 font-semibold">Harga Terjangkau</p>
              <p className="text-gray-500 text-base">
                Cocok untuk UMKM hingga perusahaan besar.
              </p>
            </div>
            <div>
              <h3 className="text-Emerald-green text-3xl font-bold mb-2">03</h3>
              <p className="text-gray-700 font-semibold">
                Support & Konsultasi
              </p>
              <p className="text-gray-500 text-base">
                Konsultasi gratis sebelum dan sesudah pembuatan landing page.
              </p>
            </div>
          </div>
        </section>

        {/* Paket Harga */}
        <section className={className.section}>
          <h2 className={className.heading}>
            Paket <span className={className.highlight}>Landing Page</span>
          </h2>
          <p className={className.subheading}>
            Pilih paket sesuai kebutuhan bisnis Anda
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Paket UKM */}
            <div className={className.priceCard}>
              <h3 className="text-xl font-bold text-Emerald-green mb-2">
                Paket UKM
              </h3>
              <p className="text-3xl font-bold mb-4">Rp929.299</p>
              <ul className="text-gray-600 space-y-2 text-base mb-6 text-left">
                <li>✅ Domain Gratis (.com)</li>
                <li>✅ Upload capacity 500MB</li>
                <li>✅ Desain Standar</li>
                <li>✅ Infinite Bandwith</li>
                <li>✅ Gratis Sertifikasi SSL (HTTPS) </li>
                <li>✅ 1 Bulan Maintenance</li>
                <li>✅ 6+ Jam Customer Support</li>
              </ul>
              <Link
                to="https://wa.me/6285179808325"
                target="_blank"
                className={className.button}
              >
                Pesan Sekarang
              </Link>
            </div>

            {/* Paket Bisnis */}
            <div
              className={`${className.priceCard} border-2 border-Emerald-green`}
            >
              <h3 className="text-xl font-bold text-Emerald-green mb-2">
                Paket Bisnis
              </h3>
              <p className="text-3xl font-bold mb-4">Rp1.449.299</p>
              <ul className="text-gray-600 space-y-2 text-base mb-6 text-left">
                <li>✅ Gratis Domain (.com/.org/.net)</li>
                <li>✅ Upload capacity 2.000MB</li>
                <li>✅ Custom Design</li>
                <li>✅ Infinite Bandwith</li>
                <li>✅ WhatsApp Integration</li>
                <li>✅ Gratis Sertifikasi SSL (HTTPS) </li>
                <li>✅ Gratis 1 Bulan Maintenance</li>
                <li>✅ 24/7 Customer Support</li>
                <li>✅ Fungsionalitas yang bersaing dipasar</li>
                <li>✅ Gratis Email Perusahaan Up to 3+</li>
                <li>✅ Gratis Setup Google Analytics</li>
                <li>✅ Biaya perpanjang kontrak Rp.930.000</li>
              </ul>
              <Link
                to="https://wa.me/6285179808325"
                target="_blank"
                className={className.button}
              >
                Pesan Sekarang
              </Link>
            </div>

            {/* Paket Growth */}
            <div className={className.priceCard}>
              <h3 className="text-xl font-bold text-Emerald-green mb-2">
                Paket Growth
              </h3>
              <p className="text-3xl font-bold mb-4">Rp2.499.299</p>
              <ul className="text-gray-600 space-y-2 text-base mb-6 text-left">
                <li>✅ Gratis Domain (.com/.net/.id)</li>
                <li>✅ Custom Design + Copywriting</li>
                <li>✅ Infinite Bandwith</li>
                <li>✅ WhatsApp Integration</li>
                <li>✅ Gratis 1 Bulan Maintenance</li>
                <li>✅ 24/7 Customer Support</li>
                <li>✅ SEO Gratis 1 Bulan</li>
                <li>✅ Gratis Sertifikasi SSL (HTTPS) </li>
                <li>✅ Fungsionalitas yang bersaing dipasar</li>
                <li>✅ Gratis Email Perusahaan Up to 10+</li>
                <li>✅ Gratis Setup Google Analytics</li>
                <li>✅ Gratis Setup Facebook Pixel untuk Integrasi Meta</li>
                <li>✅ Biaya perpanjang kontrak Rp.1.500.000</li>
              </ul>
              <Link
                to="https://wa.me/6285179808325"
                target="_blank"
                className={className.button}
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="w-full grid place-items-center">
          <section className="bg-Emerald-green text-white py-16 px-6 md:px-7 text-center rounded-lg w-fit">
            <h2 className="text-3xl font-bold mb-4">Siap Beriklan?</h2>
            <p className="mb-6 text-lg">
              Hubungi kami sekarang untuk mendapatkan layanan dan pembuatan Landing Page Terbaik dari WebsiteJokiID untuk meningkatkan penjualan yang
              lebih baik!
            </p>
            <Link
              to="https://wa.me/6285179808325"
              className="px-6 py-3 bg-white text-Emerald-green rounded hover:bg-Emerald-green hover:text-white transition"
            >
              Konsultasi Gratis
            </Link>
          </section>
        </div>

        {/* FAQ */}
        <section className={className.section}>
          <h2 className={className.heading}>
            Pertanyaan <span className={className.highlight}>Umum</span>
          </h2>
          <div className="mt-8 space-y-6">
            <details
              className={`px-4 py-2 rounded-lg hover:bg-white hover:border-Emerald-green border ${
                isClicked == true
                  ? "bg-white border-Emerald-green"
                  : "bg-gray-100 border-white"
              }`}
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              <summary className="cursor-pointer font-semibold text-gray-700">
                Apakah harga sudah termasuk domain & hosting?
              </summary>
              <p className="text-gray-500 mt-2 text-base">
                Ya, semua paket kami sudah termasuk domain dan hosting selama 1
                tahun.
              </p>
            </details>

            <details
              className={`p-4 rounded-lg hover:bg-white hover:border-Emerald-green border ${
                isClicked2 == true
                  ? "bg-white border-Emerald-green"
                  : "bg-gray-100 border-white"
              }`}
              onClick={() => {
                setIsClicked2(!isClicked2);
              }}
            >
              <summary className="cursor-pointer font-semibold text-gray-700">
                Apakah desain bisa disesuaikan?
              </summary>
              <p className="text-gray-500 mt-2 text-base">
                Tentu! Kami menyediakan layanan desain kustom sesuai kebutuhan
                bisnis Anda.
              </p>
            </details>
          </div>
        </section>
      </div>
    );
};

export default LandingPage;
