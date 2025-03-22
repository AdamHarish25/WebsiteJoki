import logo from "../assets/greyscale.png";
import React, { useState } from "react";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }


  const className = {
    container: "w-full h-full px-10 py-5 bg-Emerald-green text-white",
    grid: "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center",
    logo: "h-20",
    box: "space-y-10 w-full",
    boxTitle: "font-bold text-2xl",
    boxSpace: "space-y-5",
    listTitle: "hover:underline"
  }

  return (
    <div className={className.container}>
      <div className={className.grid}>
        <div className={className.box}>
          <div className={className.boxSpace}>
            <img src={logo} alt="" className={className.logo} />
            <p>
              WebsiteJokiID adalah perusahaan perorangan digital kreatif
              bertempatkan di Cibubur, Indonesia. Kami membantu perusahaan
              UMKM, brand, individu, perusahaan rintisan & perusahaan besar
              dalam mewujudkan gagasan menjadi produk dan pengalaman digital
              yang luar biasa dan menyenangkan!
            </p>
          </div>

          <div>
            <h1 className={className.boxTitle}>Lokasi Kantor</h1>
            <p>
              <a className={className.listTitle} href="https://maps.app.goo.gl/tb5MMry5f2pXKYxJ8">
                Jl. Madison Square Kota Wisata, Ciangsana, Kec. Gn. Putri,
                Kabupaten Bogor, Jawa Barat 16968
              </a>
            </p>
          </div>

          <div>
            <h1 className={className.boxTitle}>Whatsapp</h1>
            <p><a className={className.listTitle} href="https://web.whatsapp.com/6285179808325">+62-851-7980-8325</a></p>
          </div>

          <div>
            <h1 className={className.boxTitle}>Email</h1>
            <p><a className={className.listTitle} href="mailto:adamharits25@gmail.com">adamharits25@gmail.com</a></p>
          </div>

          <div>/* social medias */</div>
        </div>

        <div className={className.box}>
          <div>
            <h1 className={className.boxTitle}>Untuk Bisnis</h1>
            <ul>
              <li>
                <a className={className.listTitle} href="">Website Kustom untuk Bisnis</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Sistem Informasi</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Design Prototype</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className={className.boxTitle}>Untuk Umkm</h1>
            <ul>
              <li>
                <a className={className.listTitle} href="">Landing page</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Website Toko Online</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Website Company Profile</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className={className.boxTitle}>Digital Ads</h1>

            <ul>
              <li>
                <a className={className.listTitle} href="">Meta Ads</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Google Ads</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Management Media Sosial</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className={className.boxTitle}>Produk</h1>

            <ul>
              <li>
                <a className={className.listTitle} href="">Financial Tracker</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={className.box}>
          <div>
            <h1 className={className.boxTitle}>Tentang</h1>
            <ul>
              <li>
                <a className={className.listTitle} href="">Perusahaan kami</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Kontak</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Karir</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Magang</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className={className.boxTitle}>Lainnya</h1>
            <ul>
              <li>
                <a className={className.listTitle} href="">Karya Kami</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Blog</a>
              </li>
              <li>
                <a className={className.listTitle} href="">Promo</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className={className.boxTitle}>Daftar Newsletter Gratis</h1>
            <p>
              Gabunglah bersama dengan 5000+ orang lainnya dan dapatkan ilmu
              terbaru Bisnis Digital
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address here"
                value={email}
                onChange={handleInput}
                className="pl-5 pr-10 mt-5 py-2 w-full bg-transparent placeholder-white text-sm border-b-2 border-white"
              />
              <br />
              <button
                type="submit"
                className="px-5 py-2 border-2 border-white rounded-lg text-lg cursor-pointer mt-3 hover:bg-white hover:text-Emerald-green transform duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-Emerald-green text-white py-6 text-center text-sm">
        <p>© 2024 Jasa Landing Page | Dibuat oleh Team WebsiteJoki</p>
      </div>
    </div>
  );
}


export default Footer;