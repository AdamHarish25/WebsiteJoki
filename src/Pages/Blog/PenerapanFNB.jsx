
import { useEffect } from "react";
import Blog_2 from "../../assets/Blogs/Blog2.webp";
import vlog from "../../assets/Blogs/Blog2/Vloggin.jpg";

const Blog2 = () => {
    const className = {
        container: "w-full h-full pt-28 space-y-8 px-10",
        img: "w-full h-auto rounded-2xl shadow-md",
        title: "text-xl font-medium",
        article: "w-full lg:w-3/5 space-y-8 py-10",
        subtitle: "text-gray-500 text-center"

    }

    useEffect(() => {
        document.title = "WebsiteJokiID | Tips buat anda yang terjun pada dunia F&B"
    }, []);

    return (
        <div className={className.container}>
            <div className={className.article}>
                <img src={Blog_2} className={className.img} />

                <h1 className={className.title}>
                    Contoh SEO di Bidang F&B: Biar Bisnis Makanan & Minuman Kamu Laris Manis di Google! 🍜☕️
                </h1>

                <p>
                    Kalau lo lagi jalanin bisnis F&B (Food & Beverage), entah itu cafe, resto, warung makan online, atau mungkin jualan dessert box dari rumah, pasti pernah ngerasain dong... saingannya banyak banget? Gak usah jauh-jauh, satu jalan aja bisa ada 5 coffee shop. Nah, pertanyaannya, gimana caranya biar calon pelanggan nemuin usaha lo lebih dulu dibanding yang lain? Jawabannya ada di SEO, bro!

                    Di artikel ini, gue bakal ceritain secara sederhana gimana Contoh SEO di bidang F&B yang udah gue cobain dan juga dipake banyak bisnis buat ngedongkrak penjualan mereka lewat pencarian Google. Yuk, kita kupas pelan-pelan! 😉
                </p>

                <p>
                    1.<b> SEO F&B Itu Penting, Bukan Cuma Buat Web Besar</b> <br />
                    Banyak pelaku bisnis makanan mikir, "Ah, SEO mah buat yang udah gede-gede." Padahal, SEO itu justru ngebantu banget buat usaha yang masih berkembang! Gue pernah bantu temen buka warung ayam geprek sederhana, cuma modal Google My Business & SEO lokal, pesenan ojek online-nya naik drastis tiap minggu. Jadi, SEO itu bukan soal gede atau kecil, tapi soal bisa ditemukan sama orang yang butuh produk lo.
                </p>

                <p>
                    2. <b>Mulai dari Google My Business (GMB), Ini Kunci Utamanya!</b><br />
                    Kalau bisnis F&B lo punya lokasi fisik, GMB itu senjata paling dasar. Daftar bisnis lo di Google My Business, kasih alamat, jam buka, nomor WA, sama foto-foto makanan andalan lo. Jangan lupa minta pelanggan kasih review! Semakin banyak ulasan positif, Google makin yakin buat naikin ranking lo di hasil pencarian. Temen gue yang buka kedai kopi rumahan, habis aktifin GMB & rajin update, tiap hari dapet orderan take away!
                </p>

                <p>
                    3. <b>Riset Kata Kunci: Tahu Apa yang Dicari Orang</b><br />
                    Gue kasih contoh. Misalnya lo jual nasi goreng di Jakarta Selatan. Kata kunci yang dicari orang bisa aja "nasi goreng enak Jakarta Selatan" atau "nasi goreng pedas dekat saya". Lo tinggal masukin keyword itu ke dalam judul website, deskripsi, sampai konten sosial media lo. Tools gratis kayak Google Keyword Planner atau Ubersuggest ngebantu banget buat nemuin kata kunci yang cocok.
                </p>

                <p>
                    4. <b>Optimasi Website: Bikin Orang Betah & Gampang Order</b><br />
                    Kalau lo udah punya website buat resto/cafe lo, pastiin gampang diakses lewat HP! Kenapa? Karena 90% pelanggan F&B nyari info via smartphone. Gue selalu saranin, website itu loadingnya jangan lebih dari 3 detik, menu gampang dilihat, ada tombol Order Sekarang atau Chat via WA yang jelas. UX (User Experience) yang enak = peluang closing lebih besar.
                </p>

                <p>
                    5. <b>Bikin Konten Menarik: Food Blogging + Storytelling!</b><br />
                    SEO F&B nggak selalu soal jualan keras. Lo bisa bikin blog atau artikel di website lo. Ceritain asal-usul menu lo, tips bikin kopi kekinian di rumah, atau review jenis-jenis sambal nusantara. Orang seneng baca info yang relate, sambil ngiler, terus kepikiran buat pesen makanan lo. Salah satu klien gue bikin artikel tentang “Sejarah Soto Betawi”, ternyata banyak yang mampir, trus order karena penasaran.
                </p>

                <div>
                    <img src={vlog} className={className.img} />
                    <p className={className.subtitle}>
                        Illustrasi Pexels.com
                    </p>
                </div>

                <p>
                    6. <b>Foto & Video Berkualitas Itu Wajib!</b><br />
                    Gue serius nih. Orang makan pake mata dulu. Foto makanan lo harus cakep, terang, dan bikin ngiler! Jangan lupa optimasi file-nya juga buat SEO. Nama file gambar dikasih keyword, misalnya "nasi-goreng-pedas-jakarta.jpg" daripada "IMG1234.jpg". Alt text di gambar juga diisi, biar Google ngerti itu gambar apa.
                </p>

                <p>
                    7. <b>Bangun Backlink dari Portal Kuliner & Influencer</b><br />
                    Kalau budget ada, ajak food blogger atau micro influencer nyobain menu lo, trus mereka review di blog/website mereka. Backlink dari situs mereka bikin domain authority website lo naik. Gue pernah kerja sama sama blogger kuliner, dan traffic ke website naik 2x lipat cuma dari satu artikel review!
                </p>

                <p>
                    8. <b>SEO di Marketplace & Aplikasi Pesanan Online</b><br />
                    Jangan lupa, SEO nggak cuma buat Google. Kalau lo jualan di GrabFood, GoFood, ShopeeFood, optimasi juga deskripsi menu & keywordnya! Contoh: Jangan tulis “Ayam Geprek Aja”, tambahin jadi "Ayam Geprek Super Pedas Sambal Matah". Biar orang yang nyari “sambal matah” juga bisa nemuin menu lo.
                </p>

                <p>
                    9. <b>
                        Konsisten Update & Review
                    </b>
                    <br />
                    Bangun bisnis F&amp;B itu gak gampang. Fokus di produk, urus karyawan, jaga kualitas pelayanan, semua butuh waktu dan energi.
                    Tapi di sisi lain, eksistensi online juga gak kalah penting.<br /><br />

                    Nah, di sinilah gue bantuin lo.<br /><br />

                    Gue udah biasa nulis artikel SEO yang konsisten, relevan, dan terarah buat bisnis F&amp;B.
                    Mulai dari riset keyword yang sesuai, pembuatan konten yang engaging, sampai optimasi buat ningkatin ranking di Google,
                    semua bisa lo serahin ke gue.<br /><br />

                    ✅ Lo tinggal fokus ngejalanin bisnis, gue bantu jangkau lebih banyak customer lewat mesin pencari.<br />
                    ✅ Konsultasi? Bisa langsung ngobrol santai bareng gue buat nyusun strategi SEO yang cocok buat brand F&amp;B lo.<br /><br />

                    👉{' '}
                    <a
                        href="https://wa.me/6285179808325"
                        style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        Klik di sini
                    </a>{' '}
                    buat ngobrol santai sama gue, atau langsung mulai bareng di project SEO pertama lo.<br /><br />

                    Biar bisnis lo gak cuma rame di outlet, tapi juga ramai di pencarian Google!
                </p>

                <p>
                    10. <b>Penutup: SEO = Pintu Masuk Pelanggan Baru Buat Bisnis F&B Kamu</b> <br />
                    Gue selalu bilang, SEO itu kaya bikin etalase digital yang selalu buka 24 jam. Orang yang kelaperan jam 12 malam, bisa aja nemuin resto lo di Google dan langsung order. Jadi, jangan nunggu bisnis lo besar baru mikirin SEO. Mulai dari sekarang, biar makin banyak orang kenal dan jatuh cinta sama menu-menu yang lo tawarin!
                </p>

            </div>
        </div>
    )
}

export default Blog2;