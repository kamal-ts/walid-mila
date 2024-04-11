import Bride from '../assets/2WhatsApp_Image_2024-04-04_at_3.21.31_PM-removebg-preview.png'
import Bride2 from '../assets/2WhatsApp_Image_2024-04-04_at_3.21.30_PM_1_-removebg-preview.png'
import BrideBorder from '../assets/11645175_4985-ai.png'

const couple = () => {
  return (
    <div className='p-4 mt-40 '>
      <div className='flex flex-col items-center h-auto'>
        <h1 className='font-def text-4xl font-bold text-amber-400'>The Wedding of</h1>
        <div className='relative flex flex-col items-center h-72 w-full'>
          <div className='absolute h-52 w-52 bg-cover rounded-full  top-2/4 -translate-y-2/4' style={{ backgroundImage: `url(${Bride2})` }}>
          </div>
          <div className='absolute rounded-full h-72 w-72 bg-cover top-2/4 -translate-y-2/4 ' style={{ backgroundImage: `url(${BrideBorder})` }}>
          </div>
        </div>
        <div className='mb-20 text-center text-2xl'>
          <h1 className='font-def font-bold'>Pratu Mar Walid Djuna</h1>
          <h1>Purra dari</h1>
          <h1>Djuna, S.E, M.M & Maryani Mahmudin, S.E.</h1>
        </div>

        <div className='relative flex flex-col items-center h-72 w-full'>
          <div className='absolute h-52 w-52 bg-cover rounded-full  top-2/4 -translate-y-2/4' style={{ backgroundImage: `url(${Bride})` }}>
          </div>
          <div className='absolute rounded-full h-72 w-72 bg-cover top-2/4 -translate-y-2/4 ' style={{ backgroundImage: `url(${BrideBorder})` }}>
          </div>
        </div>
        <div className='mb-20'>
          <p>Wa Ode Kamillah</p>
        </div>
      </div>
    </div>
  )
}

export default couple