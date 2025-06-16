import React, { useState } from 'react';
export const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buying');
  const [activeSubTab, setActiveSubTab] = useState('listings');
  return <div className="border-[color:var(--color-border)] bg-[#F5F8FF] w-full ml-2.5 pb-[34px] rounded-[12.388px] border-[1.032px] border-solid max-md:max-w-full">
      {/* Primary Navigation */}
      <div className="bg-[rgba(234,242,255,0)] z-10 flex w-[395px] max-w-full flex-col text-[18px] font-normal whitespace-nowrap text-center leading-none -mt-2 max-md:pr-5">
        <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex gap-[8.409px_var(--8,8.409px)] p-[16.817px] rounded-[18.499px]">
          <button onClick={() => setActiveTab('buying')} className="items-center bg-[#B7D2FF] flex gap-[8.409px] pr-[var(--24,] pl-[var(--24,] py-[16.817px)] rounded-[18.499px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
            <span className="text-[18px] text-black font-normal text-center leading-none w-[61px] rounded-[9.25px] my-[6px] mx-[13px]">Buying</span>
          </button>
          <button onClick={() => setActiveTab('selling')} className="items-center bg-[#B7D2FF] flex gap-[8.409px] pr-[var(--24,] pl-[var(--24,] rounded-[18.499px] hover:bg-[#A5C7FF] transition-colors py-[2px] mx-0 px-[16px]">
            <span className="text-[18px] text-black font-normal text-center leading-none w-[60px] rounded-[9.25px] my-[6px]">Selling</span>
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="flex w-full items-stretch gap-[40px_57px] flex-wrap max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-stretch gap-2.5 text-[18px] text-black font-normal text-center leading-none flex-wrap grow shrink basis-auto max-md:max-w-full">
          <div className="flex items-stretch flex-wrap grow shrink basis-auto max-md:max-w-full">
            <div className="bg-[rgba(234,242,255,0)] flex gap-2.5 overflow-hidden grow shrink basis-auto">
              <div className="flex min-w-60 w-[1054px] flex-col items-stretch pb-[17px] max-md:max-w-full">
                <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex w-full gap-[8.344px_var(--8,8.344px)] p-[16.687px] rounded-[18.356px] max-md:max-w-full px-[138px] py-0 mx-0">
                  <button onClick={() => setActiveSubTab('listings')} className="items-center bg-[#B7D2FF] flex gap-[8.344px] whitespace-nowrap pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none w-[69px] rounded-[9.178px] my-[5px]">Listings</span>
                  </button>
                  
                  <button onClick={() => setActiveSubTab('favorites')} className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none w-[155px] rounded-[9.178px]">Favorite Matches</span>
                  </button>
                  
                  <button onClick={() => setActiveSubTab('deals')} className="items-center bg-[#B7D2FF] flex gap-[8.344px] whitespace-nowrap pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none w-[51px] rounded-[9.178px]">Deals</span>
                  </button>
                  
                  <button onClick={() => setActiveSubTab('chats')} className="items-center bg-[#B7D2FF] flex gap-[8.344px] whitespace-nowrap pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none w-[53px] rounded-[9.178px]">Chats</span>
                  </button>
                  
                  <button onClick={() => setActiveSubTab('ai-builder')} className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none w-[115px] rounded-[9.178px]">Ai Builder (p)</span>
                  </button>
                </div>
                
                <button className="items-center bg-[#B7D2FF] z-10 flex mt-[-76px] gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:mr-2.5 max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
                  <span className="text-[18px] text-black font-normal text-center leading-none w-[232px] rounded-[9.178px]">Ai DD ( Due Diligence ) (p)</span>
                </button>
              </div>
            </div>
            
            <button className="items-center bg-[#B7D2FF] flex gap-[8.344px] whitespace-nowrap pr-[var(--24,] pl-[var(--24,] mt-4 py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none w-[83px] rounded-[9.178px]">Meetings</span>
            </button>
          </div>
          
          <div className="flex items-stretch gap-2.5 flex-wrap grow-0 shrink basis-auto my-auto max-md:max-w-full">
            <button className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none w-[125px] rounded-[9.178px]">Data room (p)</span>
            </button>
            
            <button className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none w-[162px] rounded-[9.178px]">Meet our advisors</span>
            </button>
            
            <button className="items-center bg-[#B7D2FF] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none w-[63px] rounded-[9.178px]">Escow</span>
            </button>
          </div>
        </div>
        
        <div className="text-[#464F60] flex-1 shrink basis-[0%] rounded bg-[rgba(255,255,255,0.8)] shadow-[0px_0px_0px_1px_rgba(152,161,178,0.1)] gap-2 text-sm font-medium tracking-[0.28px] leading-none my-auto px-2.5 py-1">
          Layout &gt;
        </div>
      </div>
    </div>;
};