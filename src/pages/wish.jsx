import { useState } from 'react';

function Wish() {
  const [formData, setFormData] = useState({
    nama: '',
    ucapan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang telah di-submit, misalnya kirim ke server
    console.log(formData);
  };

  return (
    <div id='wish' className='p-4 relative'>

    
    <div className="w-full mx-auto bg-sky-200 rounded-lg shadow-lg shadow-slate-500 border-2 border-white">
      <form onSubmit={handleSubmit} className="mt-8 p-4 text-sky-900">
        <div>
          <label htmlFor="nama" className="text-base font-medium ">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder='nama lengkap'
            className="w-full bg-white  p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400"
            required
          />
        </div>
        
        <div className="mt-4">
          <label htmlFor="ucapan" className="block text-sm font-medium ">Ucapan</label>
          <textarea
            id="ucapan"
            name="ucapan"
            value={formData.ucapan}
            onChange={handleChange}
            rows="4"
            placeholder='ex: selamat untuk pernikahannya'
            className="w-full bg-white  p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="shadow-md py-2 px-4 w-full bg-sky-900 hover:bg-sky-950 font-bold text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Wish;
