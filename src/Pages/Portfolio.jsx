import { useEffect } from 'react';
import Sinefolis from '../assets/BrandSupport/5.png';
import VsTravel from '../assets/BrandSupport/6.png';
import FtbwCosmetic from '../assets/BrandSupport/7.png';
import UID from '../assets/BrandSupport/8.png';
import CardGrid from '../Component/cardgrid';

const Portfolio = () => {
    const className = {
        container: "w-full h-full py-28 px-0 lg:px-20"
    };

    const slides = [
        { id: 1, image: Sinefolis },
        { id: 2, image: VsTravel },
        { id: 3, image: FtbwCosmetic },
        { id: 4, image: UID },

    ];

    useEffect(() => {
        document.title = "WebsiteJokiID | Kerjaan berat kita yang buat"
    }, []);


    return (
        <div className={className.container}>
            <div className="relative bg-gradient-to-b from-purple-50 to-white py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Karya <span className="text-Emerald-green">WebsiteJokiID</span></h1>
                <p className="mt-4 max-w-4xl text-center mx-auto text-gray-500 ">
                    WebsiteJokiID, mitra terpercaya sejak 2020, siap membantu bisnis, akademisi, dan individu dalam membangun kehadiran digital yang profesional. Kami menawarkan layanan pembuatan website, pemeliharaan, dan konsultasi branding digital untuk meningkatkan daya saing Anda di dunia online.
                </p>
            </div>

            <CardGrid slides={slides}>

            </CardGrid>
        </div>
    );
}


export default Portfolio;