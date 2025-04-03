
import { useEffect } from "react";
import Blog_4 from "../../assets/Blogs/Blog4.png";
import BlogSidebar from "../../Component/BlogSideBar";
// import photProd from "../../assets/Blogs/Blog4/PhotoProduct.jpg";

const Blog4 = () => {
    const className = {
      container:
        "w-full h-full pt-28 space-y-8 px-5 lg:px-20 gap-10 flex flex-col lg:flex-row",
      img: "w-full h-auto rounded-2xl shadow-md",
      title: "text-xl font-medium",
      article: "w-full lg:w-3/5 space-y-8 py-10",
      subtitle: "text-gray-500 text-center",
    };

    useEffect(() => {
        document.title = "WebsiteJokiID | Pentingnya menggunakan Website untuk Portfolio Bisnis Anda!"
    }, []);

    return (
      <div className={className.container}>
        <div className={className.article}>
          <img src={Blog_4} className={className.img} />

          <h1 className={className.title}>
            Kenapa Bisnis Lu Wajib Punya Website Profesional di 2025?
          </h1>

          <p>
            Bro, zaman sekarang kalau bisnis lu masih nggak punya website,
            siap-siap aja kalah saing. 2025 bakal jadi era dimana digitalisasi
            makin menggila, dan kalau lu masih andelin media sosial doang,
            bisa-bisa bisnis lu tenggelam. Website itu bukan cuma buat
            gaya-gayaan, tapi bikin bisnis lu makin kredibel, gampang ditemukan,
            dan pastinya lebih cuan! Yuk, kita bahas kenapa lu wajib punya
            website profesional buat nge-boost bisnis lu.
          </p>

          <p>
            1.<b> Bikin Bisnis Lu Terlihat Lebih Profesional</b> <br />
            Jujur aja, kalau lu mau beli sesuatu, lu bakal lebih percaya sama
            bisnis yang punya website kece atau yang cuma ada di Instagram?
            Website profesional bikin bisnis lu keliatan lebih serius dan nggak
            abal-abal. Dengan desain yang rapi dan domain resmi, pelanggan bakal
            lebih yakin buat ngeklik dan akhirnya belanja di tempat lu.
          </p>

          <p>
            2. <b>Bisa Diakses 24/7 Tanpa Ribet</b>
            <br />
            Toko fisik punya jam operasional, tapi website? Nggak ada tutupnya,
            bro! Lu bisa tetap jualan dan dapet pelanggan bahkan pas lagi tidur.
            Orang bisa cek produk, baca info, bahkan order kapan aja tanpa
            nunggu admin balesin chat. Gampang banget, kan?
          </p>

          <p>
            3. <b>SEO = Makin Banyak yang Nemuin Bisnis Lu di Google</b>
            <br />
            Lu tau nggak kalau mayoritas orang nyari sesuatu lewat Google? Nah,
            kalau website lu dioptimasi pake SEO (Search Engine Optimization),
            bisnis lu bisa muncul di halaman pertama pencarian. Itu artinya
            lebih banyak orang bakal nemuin produk atau jasa yang lu tawarin,
            dan kemungkinan closing makin gede!
          </p>

          <p>
            4. <b>Bisa Jangkau Pasar Lebih Luas</b>
            <br />
            Nggak cuma buat bisnis lokal, punya website bikin lu bisa jualan ke
            mana aja. Mau targetin orang di luar kota atau bahkan luar negeri?
            Bisa banget! Tambahin fitur bahasa ganda, sistem pembayaran online,
            dan pengiriman ke berbagai daerah, bisnis lu bisa mendunia tanpa
            perlu buka cabang fisik.
          </p>

          <p>
            5. <b>Komunikasi dengan Pelanggan Jadi Makin Gampang</b>
            <br />
            Website bukan cuma buat pamer produk, tapi juga bisa jadi tempat
            buat interaksi sama pelanggan. Bisa pasang live chat, chatbot, atau
            formulir kontak biar mereka bisa langsung tanya-tanya tanpa harus DM
            di media sosial. Pelayanan jadi lebih responsif, pelanggan pun makin
            happy!
          </p>

          <p>
            6. <b>Semua Strategi Digital Marketing Bisa Terpusat di Website</b>
            <br />
            Mau main iklan Google Ads? Atau lagi ngejalanin email marketing?
            Semua itu bisa diarahkan ke website lu sebagai landing page utama.
            Biar makin optimal, lu juga bisa bikin blog buat nambah traffic
            organik lewat artikel-artikel informatif yang relevan sama bisnis
            lu.
          </p>

          {/* <div>
                    <img src={photProd} className={className.img} />
                    <p className={className.subtitle}>
                        Illustrasi Pexels.com
                    </p>
                </div> */}

          <p>
            7. <b>Bisa Analisa Perilaku Pelanggan Lebih Akurat</b>
            <br />
            Website zaman sekarang udah canggih, bro! Lu bisa pasang Google
            Analytics buat ngelacak siapa aja yang datang ke website, halaman
            mana yang paling sering dikunjungi, sampai produk apa yang paling
            diminati. Data ini bikin lu bisa ambil keputusan bisnis yang lebih
            cerdas dan ngerancang strategi yang tepat buat ningkatin penjualan.
          </p>

          <p>
            8. <b> Bikin Bisnis Lu Lebih Standout dari Kompetitor</b>
            <br />
            Di 2025 ini, persaingan bisnis bakal makin sengit. Kalau lu cuma
            andelin media sosial, kemungkinan tenggelam di antara kompetitor
            makin besar. Website dengan desain yang keren, navigasi
            user-friendly, dan konten yang menarik bisa bikin bisnis lu lebih
            stand out dan dipercaya pelanggan.
          </p>

          <p>
            9. <b>Investasi Jangka Panjang yang Lebih Hemat</b>
            <br />
            Emang sih, bikin website profesional butuh modal di awal. Tapi kalau
            dibandingin sama iklan terus-menerus di media sosial atau cetak
            brosur, website jauh lebih hemat dalam jangka panjang. Sekali
            setting dengan strategi yang benar, website lu bakal kerja 24/7
            tanpa harus keluar duit tambahan setiap kali mau promosi.
          </p>

          <p>
            10. <b>Persiapan Buat Era Digital yang Makin Ganas</b> <br />
            Mau nggak mau, dunia bisnis makin digital. Kalau lu nggak siap-siap
            dari sekarang, bisa jadi lu bakal ketinggalan. Website profesional
            itu bukan cuma tren, tapi investasi buat masa depan bisnis lu. So,
            kalau lu pengen tetap eksis dan terus berkembang di 2025,
            sekaranglah waktunya buat mulai! Jangan sampai nyesel belakangan,
            bro!
          </p>
        </div>

        <BlogSidebar/>
      </div>
    );
}

export default Blog4;