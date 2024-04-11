import Bride from '../assets/ila.jpeg'
import Bride2 from '../assets/wale2.png'

const couple = () => {
    return (
        <div id='couple' className='p-4 '>
            <div className='flex flex-col items-center h-auto text-sky-950'>
                <h4 className='font-semibold text-center font-def text-2xl text-sky-800'>Assalamualaikum Warahmatullahi Wabarakatuh</h4>
                <p className='text-center text-sm mb-4'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah yang Maha Pengasih, dengan ridho-Mu Kau mempertemukan kami dalam suatu ikatan pernikahan suci.</p>
                <div className='grid grid-cols-2 gap-10 my-4'>
                    <div className='h-32 w-28 bg-cover rounded-3xl border-[2px] shadow-lg shadow-slate-500 border-white ' style={{ backgroundImage: `url(${Bride})` }}>
                    </div>
                    <div className='h-32 w-28 bg-cover rounded-3xl border-[2px] shadow-lg shadow-slate-500 border-white ' style={{ backgroundImage: `url(${Bride2})` }}>
                    </div>
                </div>

                <div className='my-4 text-center text-lg font-lora'>
                    <h1 className='font-def font-bold text-3xl text-sky-800'>Wa Ode Kamillah, S.Si., M.Si.</h1>
                    <p>Putri dari</p>
                    <p>Drs. La Ode Abdul Muzakir &</p>
                    <p>Dra. Wa Ode Tuty</p>
                </div>

                <h1 className='font-def font-bold text-4xl text-sky-800'>&</h1>

                <div className='my-4 text-center text-lg font-lora'>
                    <h1 className='font-def font-bold text-3xl text-sky-800'>Pratu Mar Walid Djuna</h1>
                    <p>Putra dari</p>
                    <p>Djuna, S.E, M.M &</p>
                    <p>Maryani Mahmudin, S.E.</p>
                </div>
            </div>
        </div>
    )
}

export default couple