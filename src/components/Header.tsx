import React from 'react';
export const Header: React.FC = () => {
  return <header className="z-10 flex w-full max-w-[1859px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
      <nav className="bg-[rgba(234,242,255,1)] flex items-stretch gap-[40px_51px] overflow-hidden flex-wrap pl-2.5 max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/49c8c816fa123dae93dbd27194677e88432399ff?placeholderIfAbsent=true" alt="Company Logo" className="aspect-[8.47] object-contain w-[187px] shrink-0 max-w-full mt-[15px]" />
        <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex gap-[8.344px_var(--8,8.344px)] grow shrink basis-auto p-[16.687px] rounded-[18.356px] max-md:max-w-full">
          <button className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors text-lg font-medium mx-0 py-[7px] px-[25px]">
            <div className="justify-center items-center flex gap-[4.172px] w-[25px] rounded-[9.178px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/1c632b4a9dfaf3def77ed2d946b260176eb43056?placeholderIfAbsent=true" alt="Market place icon" className="aspect-[1] object-contain w-[25px]" />
            </div>
            <span className="text-[18px] text-black font-normal text-center leading-none w-[118px] rounded-[9.178px]">
              Market place
            </span>
          </button>
          
          <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
            <div className="justify-center items-center flex gap-[4.172px] w-[25px] rounded-[9.178px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/727af3f199fcddc9149b0c678f626e87450a82bc?placeholderIfAbsent=true" alt="Funding icon" className="aspect-[1.04] object-contain w-[26px]" />
            </div>
            <span className="text-[18px] text-[rgba(28,28,28,1)] font-normal whitespace-nowrap text-center leading-none w-[71px] rounded-[9.178px]">
              Funding
            </span>
          </button>
          
          <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
            <div className="justify-center items-center flex gap-[4.172px] w-[25px] rounded-[9.178px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/171243d06ec6bed921cde378a34d81f061632e75?placeholderIfAbsent=true" alt="Bookkeeping icon" className="aspect-[1] object-contain w-[25px]" />
            </div>
            <span className="text-[18px] text-[rgba(28,28,28,1)] font-normal whitespace-nowrap text-center leading-none w-[115px] rounded-[9.178px]">
              Bookkeeping
            </span>
          </button>
          
          <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
            <div className="justify-center items-center flex gap-[4.172px] w-[25px] rounded-[9.178px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/cf1eb877ead14682469634b446cdd3f5ad94cefb?placeholderIfAbsent=true" alt="Formations icon" className="aspect-[1] object-contain w-[25px]" />
            </div>
            <span className="text-[18px] text-[rgba(28,28,28,1)] font-normal whitespace-nowrap text-center leading-none w-[100px] rounded-[9.178px]">
              Formations
            </span>
          </button>
          
          <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
            <div className="justify-center items-center flex gap-[4.172px] w-[25px] rounded-[9.178px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/efd2678548868f326cefef67f97ba64af084dc56?placeholderIfAbsent=true" alt="Academy icon" className="aspect-[1] object-contain w-[25px]" />
            </div>
            <span className="text-[18px] text-[rgba(28,28,28,1)] font-normal whitespace-nowrap text-center leading-none w-[84px] rounded-[9.178px]">
              Academy
            </span>
          </button>
        </div>
      </nav>
      
      <div className="flex items-stretch gap-1.5 mt-1">
        <div className="flex items-stretch gap-0.5 text-base text-[#201F23] font-normal tracking-[0.48px] leading-loose grow shrink basis-auto">
          <div className="justify-between items-center flex gap-[40px_95px] grow shrink basis-auto bg-white pl-[17px] pr-[5px] py-[5px] rounded-[135.875px]">
            <input type="search" placeholder="Search Anything..." className="text-[#201F23] w-[159px] bg-transparent border-none outline-none" aria-label="Search businesses" />
            <button aria-label="Search">
              <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/d42043c1faabef2e58495d4a5c68e42886918947?placeholderIfAbsent=true" alt="Search" className="aspect-[1] object-contain w-[43px]" />
            </button>
          </div>
          <button aria-label="User profile">
            <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/68a44f3e8cbef428e59761c7960e116e0340a552?placeholderIfAbsent=true" alt="User profile" className="aspect-[1] object-contain w-[53px] rounded-[75px]" />
          </button>
        </div>
        <div className="flex items-stretch gap-[25px] my-auto">
          <button aria-label="Notifications">
            <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/519724bfe5810b747ca6a8ab1a6e907b793fd507?placeholderIfAbsent=true" alt="Notifications" className="aspect-[0.96] object-contain w-[25px]" />
          </button>
          <button aria-label="Settings">
            <img src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/7572614c1490e0417b8ae9ea47bc0122defbdd06?placeholderIfAbsent=true" alt="Settings" className="aspect-[1] object-contain w-[42px] rounded-[83px]" />
          </button>
        </div>
      </div>
    </header>;
};