const date = () => {
    return (
        <div id='date' className='p-4 text-sky-950 relative'>

            <h1 className='font-adc text-3xl text-center text-amber-500 font-bold '>Acara Pernikahan</h1>
            <p className='text-center mb-4'>Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk dapat hadir di acara pernikahan kami.</p>

            <div className="md:flex md:flex-row gap-4 ">
                <div className='w-full mb-8 px-4 pb-4 bg-sky-200 h-auto shadow-lg border-2 border-white overflow-hidden shadow-slate-300 rounded-lg'>
                    <div className='border-b-2 border-sky-800 py-4'>
                        <h3 className='text-center font-adc text-3xl font-bold'>Akad Nikah</h3>
                    </div>
                    <p className='font-bold mt-4'>Selasa, 16 April 2024</p>
                    <p>Pukul 09.00 WIT - selesai</p>
                    <p className='font-bold'>Bertempat di</p>
                    <p className='mb-6'>Kompleks Muhajirin (Kediaman Mempelai Wanita)</p>
                    <a href='#' className='px-4 py-2 bg-sky-950 text-white rounded-lg  float-right'>Lihat Lokasi</a>
                </div>

                <div className='w-full mb-8 px-4 pb-4 bg-sky-200 h-auto shadow-lg border-2 border-white overflow-hidden shadow-slate-300 rounded-lg'>
                    <div className='border-b-2 border-sky-800 py-4'>
                        <h3 className='text-center font-adc text-3xl font-bold'>Resepsi</h3>
                    </div>
                    <p className='font-bold mt-4'>Selasa, 16 April 2024</p>
                    <p>Pukul 10:00 WIT - selesai</p>
                    <p className='font-bold'>Bertempat di</p>
                    <p className='mb-6'>Gedung Aula Darussalam Tulehu </p>
                    <a href='https://maps.app.goo.gl/5eDKjkhb4JcFMqNn7' className='px-4 py-2 bg-sky-950 text-white rounded-lg  float-right'>Lihat Lokasi</a>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden mb-6 shadow-lg border-2 border-white shadow-slate-300'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9469084588304!2d128.3316147!3d-3.5996379000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6c935f537d0b95%3A0x177c458824ad0369!2sGedung%20Serbaguna%20UNIDAR%20Tulehu!5e0!3m2!1sid!2sid!4v1712808262999!5m2!1sid!2sid"

                    className='w-full h-64 '
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

            <a href='https://maps.app.goo.gl/5eDKjkhb4JcFMqNn7'
                className='px-4 py-2 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-bold transition hadow-lg shadow-lg shadow-slate-300'>Buka Maps</a>

        </div>
    )
}

export default date