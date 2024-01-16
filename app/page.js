import Link from 'next/link';

const page = () => {
  return (
    <>
    <div className='fixed flex items-center justify-center w-[100%] bg-[#008d38] h-[65px] text-white gap-[630px] z-[99]'>
        <div>
            <h1 className='font-bold text-xl'>Green Protocol</h1>
        </div>
        <div className='flex gap-5'>
            <Link href='#Problem'>Problem</Link>
            <Link href='#Solution'>Solution</Link>
            <Link href='#Business'>Business Model</Link>
            <Link href='#Profit'>Profit Distribution</Link>
        </div>
    </div>
    <div className='h-[90vh] w-[100%] bg-[#00ae47] text-center'>
        <h1 className='text-white pt-44 text-[50px] font-bold mb-[70px] tracking-wide'>Green Protocol</h1>
        <div className='items-center flex justify-center gap-1'>
            <img src='./4.a3945fe8a5d2e0f9a9c2.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
            <img src='./download.png' className='mt-[0px] mr-[15px] object-contain w-[100px]'></img>
            <img src='./3.f68aef71096dfba35833.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
            <img src='./download.png' className='mt-[0px] mr-[15px] object-contain w-[100px]'></img>
            <img src='./1.18666672bd1b15ad77d4.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
        </div>
    </div>
    <div className='mt-40 ml-44 mb-20 w-[75%]'>
        <h1 className='text-[50px] text-[#00ae47] font-bold border-b-[5px] border-[#84d1a6]' id='Problem'>Problem</h1>
        <div className='flex items-center justify-center mt-16 w-[95%] gap-20'>
            <div>
                <p className='text-[25px]'>Major current environmental issues may include climate<br /> change, pollution, environmental degradation, and resource<br /> depletion. The conservation movement lobbies for <br /> protection of endangered species and protection of any<br /> ecologically valuable natural areas, genetically modified<br /> foods and global warming.</p>
            </div>
            <div>
                <img src='./5.5609c04fba05a424bb7e.png' className='w-[15em]'></img>
            </div>
        </div>
    </div>
    <div className='ml-44 mt-32 mb-20 w-[75%]'>
        <h1 className='text-[50px] text-[#00ae47] font-bold border-b-[5px] border-[#84d1a6]' id='Solution'>Solution</h1>
        <div className='flex items-center justify-center w-[96%] mt-14 ml-5'>
          <div className='h-[350px] w-[25%] bg-[#009F32] items-center justify-center text-center'>
            <img src='./6.d63b0f1a643f8565e1f8.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Green<br /> Energy</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#00bf54] items-center justify-center text-center'>
            <img src='./7.3d2864d76afebdac372e.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Automated<br /> Agriculture</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#009F32] items-center justify-center text-center'>
            <img src='./8.cfba64bcfa3e8e318795.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Depuration<br /> rain water</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#00bf54] items-center justify-center text-center'>
            <img src='./9.e48f0c2504d1ceb791bb.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Mosquito<br /> Prevention</h1>
          </div>
        </div>
        <div className='flex items-center justify-center w-[96%] ml-5'>
          <div className='h-[350px] w-[25%] bg-[#00bf54] items-center justify-center text-center'>
            <img src='./10.2cb91b7bf063e74508fc.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Electrical<br /> Mobility</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#009F32] items-center justify-center text-center'>
            <img src='./11.594a24caa9d9ebccd42a.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Solar charging<br /> Station</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#00bf54] items-center justify-center text-center'>
            <img src='./12.df14fe8339f536600da6.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Recycling<br /> Plastic</h1>
          </div>
          <div className='h-[350px] w-[25%] bg-[#009F32] items-center justify-center text-center'>
            <img src='./13.70a9519f5c6e830aeeed.png' className='w-[140px] ml-16 mt-14'></img>
            <h1 className='text-white font-bold text-2xl pt-5'>Cleaning<br /> Ocean</h1>
          </div>
        </div>
        <div className='w-[95%] relative flex items-center justify-between border-[5px] border-[#009f32] mt-[65px] ml-[26px]'>
          <h1 className='absolute z-[5] bg-[#00ae47] text-white p-[10px] font-bold left-[-2em] top-[3em]'>Ocean Wave Renewable Energy</h1>
          <h1 className='absolute z-[5] bottom-[3em] right-[-2em] bg-[#00ae47] text-white p-[10px] font-bold'>Greenhouse with Solar Panel</h1>
          <img src='./15.4417e6cdc5650ff75447.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
          <img src='./14.e49332e78c2a094d6e47.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
        </div>
        <div className='w-[95%] relative flex items-center justify-between border-[5px] border-[#009f32] mt-[20px] ml-[26px]'>
          <h1 className='absolute z-[5] bg-[#00ae47] text-white p-[10px] font-bold left-[-2em] top-[3em]'>Wind Renewable Energy</h1>
          <h1 className='absolute z-[5] bottom-[3em] right-[-2em] bg-[#00ae47] text-white p-[10px] font-bold'>Smart Greenhouse</h1>
          <img src='./16.ddc4bc5e43bd313296fa.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
          <img src='./17.795312e95eaf8821490c.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
        </div>
        <div className='w-[95%] relative flex items-center justify-between border-[5px] border-[#009f32] mt-[20px] ml-[26px]'>
          <h1 className='absolute z-[5] bg-[#00ae47] text-white p-[10px] font-bold left-[-2em] top-[3em]'>Electrical Mobility</h1>
          <h1 className='absolute z-[5] bottom-[3em] right-[-2em] bg-[#00ae47] text-white p-[10px] font-bold'>Solar Charging Station</h1>
          <img src='./18.e1a87917cdc891f79176.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
          <img src='./19.b26aacbf0f4dc89cd7d7.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
        </div>
        <div className='w-[95%] relative flex items-center justify-between border-[5px] border-[#009f32] mt-[20px] ml-[26px]'>
          <h1 className='absolute z-[5] bg-[#00ae47] text-white p-[10px] font-bold left-[-2em] top-[3em]'>Depuration Raining Water</h1>
          <h1 className='absolute z-[5] bottom-[3em] right-[-2em] bg-[#00ae47] text-white p-[10px] font-bold'>Plastic Recycling Machine</h1>
          <img src='./20.9b86d71f1de438c29ea8.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
          <img src='./21.77d5fc49b376b2efc1e0.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
        </div>
        <div className='w-[95%] relative flex items-center justify-between border-[5px] border-[#009f32] mt-[20px] ml-[26px]'>
          <h1 className='absolute z-[5] bg-[#00ae47] text-white p-[10px] font-bold left-[-2em] top-[3em]'>Plastic Ocean Clean Up Machine</h1>
          <h1 className='absolute z-[5] bottom-[3em] right-[-2em] bg-[#00ae47] text-white p-[10px] font-bold'>Mosquito Misting System</h1>
          <img src='./22.c022276840c2d47b6aaa.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
          <img src='./23.9c106ff25bd520901221.png' className='relative z-[2] h-[49.5%] w-[49.5%] bg-gray-500 m-[.25%] object-cover'></img>
        </div>
    </div>
    <div className='mt-40 ml-44 mb-20 w-[75%]'>
        <h1 className='text-[50px] text-[#00ae47] font-bold border-b-[5px] border-[#84d1a6]' id='Business'>Business Model</h1>
        <p className='text-xl text-green-600 text-center pt-14'>Crowd-funding ownership of</p>
        <div className='flex w-[70%] text-center justify-center gap-24 ml-[170px] mt-6'>
          <div>
            <img src='./download (1).png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Fruits and Vegetable<br />Sale Out</p>
          </div>
          <div>
            <img src='./4.a3945fe8a5d2e0f9a9c2.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Electrical Distribution<br />Profit</p>
          </div>
          <div>
            <img src='./12.df14fe8339f536600da6.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Plastic Recycling</p>
          </div>
        </div>
        <div className='flex justify-center text-center mt-6 w-[50%] gap-24 ml-72'>
          <div>
            <img src='./10.2cb91b7bf063e74508fc.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Electrical Mobility<br />Rental</p>
          </div>
          <div>
            <img src='./9.e48f0c2504d1ceb791bb.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Mosquito System</p>
          </div>
        </div>
        <p className='text-xl text-green-600 text-center pt-40'>Buy (as <span className='font-bold'> NFT</span>) and get the profit</p>
        <div className='flex w-[80%] text-center justify-center gap-32 ml-[115px] mt-10'>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Trash</h1>
            <img src='./26.db2e1f682d23ebd199a8.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>when recycled</p>
          </div>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Green House</h1>
            <img src='./download (2).png' className='w-[200px]'></img>
            <p className='text-xl text-green-600'><br />Fruits, vegetable and<br />energy sale</p>
          </div>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Solar Station</h1>
            <img src='./11.594a24caa9d9ebccd42a.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>When used for<br />charging</p>
          </div>
        </div>
        <div className='flex w-[80%] text-center justify-center gap-32 ml-[115px] mt-16'>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Electrical Mobility</h1>
            <img src='./10.2cb91b7bf063e74508fc.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>on the rental</p>
          </div>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Green Energy</h1>
            <img src='./6.d63b0f1a643f8565e1f8.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>energy sale</p>
          </div>
          <div>
            <h1 className='font-bold text-green-600 text-xl pb-4'>Mosquito System</h1>
            <img src='./9.e48f0c2504d1ceb791bb.png' className='w-[200px]'></img>
            <p className='text-xl text-green-600 pt-5'>Refill products sale</p>
          </div>
        </div>
    </div>
    <div className='mt-28 ml-44 mb-20 w-[75%]'>
        <h1 className='text-[50px] text-[#00ae47] font-bold border-b-[5px] border-[#84d1a6]' id='Problem'>Example</h1>
        <p className='text-center text-xl text-green-600 pt-14'>1 Greenhouse = <span className='font-bold'> 100 NFT  100 USD</span> Price</p>
        <div className='flex justify-center items-center mt-5'>
          <div>
          <img src='./download (3).png' className='h-[10em]'></img>
          </div>
          <div className='w-[10%] text-center'>
            <p className='text-green-600'>Buy</p>
            <img src='./download (4).png' className='w-[90%]'></img>
          </div>
          <div>
            <img src='./40.8e14e9fdd23184e49124.png' className='h-[10em]'></img>
          </div>
          <div className='w-[10%] text-center'>
            <p className='text-green-600'>Generate</p>
            <img src='./download (4).png' className='w-[90%]'></img>
          </div>
          <div>
            <img src='./download (5).png' className='h-[10em]'></img>
          </div>
        </div>
      
        <div className='flex items-start justify-center mb-[10em]'>
          <img src='./download (6).png' className='w-[20%]'></img>
          <img src='./download (7).png' className='h-[10em] mt-[4em]'></img>
          <img src='./download (8).png' className='w-[20%]'></img>
        </div>
    </div>
    <div className='flex justify-center items-center ml-40 mb-20 w-[80%]'>
      <div className='w-[50%] h-[60vh] bg-[#dcdcdc]'>
        <img src='./download (9).png' className='w-[15vh] ml-64 mt-16'></img>
        <p className='text-green-600 text-3xl text-center pt-10'>Buy NFT to help<br /> the environment<br /> and get passive<br /> income</p>
      </div>
      <div className='w-[50%] h-[60vh] bg-[#00ae47]'>
        <img src='./download (10).png' className='w-[15vh] ml-64 mt-16'></img>
        <p className='text-white text-3xl text-center pt-10'>Advantage:<br />Resale the ownership<br /> Borrow<br /> Generate profit</p>
      </div>
    </div>
    <div className='mt-40 ml-44 mb-40 w-[75%]'>
        <h1 className='text-[50px] text-[#00ae47] font-bold border-b-[5px] border-[#84d1a6]' id='Profit'>Profit Distribution</h1>
        <div className='flex items-center justify-center mt-14'>
          <div className='w-[33%] h-[350px] bg-green-600 text-white text-center'>
            <img src='./download (11).png' className='h-[50%] w-[50%] ml-24 mt-10'></img>
            <p className='text-2xl pt-2'>Owner</p>
            <h1 className='text-3xl font-bold pt-2'>70%</h1>
          </div>
          <div className='w-[33%] h-[350px] bg-green-500 text-white text-center'>
            <img src='./download (12).png' className='h-[50%] w-[50%] ml-24 mt-10'></img>
            <p className='text-2xl pt-2'>Company</p>
            <h1 className='text-3xl font-bold pt-2'>25%</h1>
          </div>
          <div className='w-[33%] h-[350px] bg-green-600 text-white text-center'>
            <img src='./download (13).png' className='h-[50%] w-[50%] ml-24 mt-10'></img>
            <p className='text-2xl pt-2'>Charity</p>
            <h1 className='text-3xl font-bold pt-2'>5%</h1>
          </div>
        </div>
    </div>
    <div className='w-[100%] h-[87vh] bg-[#00ae47]'>
      <div className='items-center flex justify-center gap-1 pt-44'>
        <img src='./4.a3945fe8a5d2e0f9a9c2.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
        <img src='./download.png' className='mt-[0px] mr-[15px] object-contain w-[100px]'></img>
        <img src='./3.f68aef71096dfba35833.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
        <img src='./download.png' className='mt-[0px] mr-[15px] object-contain w-[100px]'></img>
        <img src='./1.18666672bd1b15ad77d4.png' className='w-[160px] h-[160px] rounded-[100px] bg-[#007000] shadow-2xl'></img>
      </div>
      <h1 className='text-white text-[50px] font-bold tracking-wide text-center pt-10'>Thank You</h1>
    </div>
    </>
  )
}

export default page;