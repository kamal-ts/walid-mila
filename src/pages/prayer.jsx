import BorderPrayerTop from "../assets/7007393_2424-aiw.png";

export const prayer = () => {
    return (
        <div className="px-4 mt-40 relative">
            <img src={BorderPrayerTop} className="w-80 absolute -top-24 left-2/4 -translate-x-1/2" alt="" />
            {/* <div className="bg-auto w-96 h-40" style={{ backgroundImage: `url(${BorderPrayerTop})` }}></div> */}
            <div className="border-x-2 bg-sky-900 border-2 border-white text-white rounded-xl p-4 py-11 shadow-lg shadow-slate-500">
                <p className="text-xl text-center font-medium italic">
                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
                </p>
                <p className="text-center mt-4 text-lg">Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)</p>
            </div>
        </div>
    )
}

export default prayer