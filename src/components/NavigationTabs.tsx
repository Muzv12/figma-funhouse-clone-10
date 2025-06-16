import React, { useState } from 'react';

export const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buying');
  const [activeSubTab, setActiveSubTab] = useState('listings');

  return (
    <div className="border-[color:var(--color-border)] bg-[#F5F8FF] w-full ml-2.5 pb-[34px] rounded-[12.388px] border-[1.032px] border-solid max-md:max-w-full">
      {/* Primary Navigation */}
      <div className="bg-[rgba(234,242,255,0)] z-10 flex w-[395px] max-w-full flex-col text-[19px] font-normal whitespace-nowrap text-center leading-none -mt-2 max-md:pr-5">
        <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex gap-[8.409px_var(--8,8.409px)] p-[16.817px] rounded-[18.499px]">
          <button
            onClick={() => setActiveTab('buying')}
            className={`items-center flex gap-[8.409px] w-[111px] pr-[var(--24,] pl-[var(--24,] py-[16.817px)] rounded-[18.499px] max-md:px-5 transition-colors ${
              activeTab === 'buying' 
                ? 'bg-[#B7D2FF] text-[rgba(12,12,12,1)]' 
                : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
            }`}
          >
            <span className="w-[61px] rounded-[9.25px]">Buying</span>
          </button>
          <button
            onClick={() => setActiveTab('selling')}
            className={`items-center flex gap-[8.409px] w-[110px] pr-[var(--24,] pl-[var(--24,] py-[16.817px)] rounded-[18.499px] max-md:px-5 transition-colors ${
              activeTab === 'selling' 
                ? 'bg-[#B7D2FF] text-[rgba(12,12,12,1)]' 
                : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
            }`}
          >
            <span className="w-[60px] rounded-[9.25px]">Selling</span>
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="flex w-full items-stretch gap-[40px_57px] flex-wrap max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-stretch gap-2.5 text-[19px] text-[rgba(28,28,28,1)] font-normal text-center leading-none flex-wrap grow shrink basis-auto max-md:max-w-full">
          <div className="flex items-stretch flex-wrap grow shrink basis-auto max-md:max-w-full">
            <div className="bg-[rgba(234,242,255,0)] flex gap-2.5 overflow-hidden grow shrink basis-auto">
              <div className="flex min-w-60 w-[1054px] flex-col items-stretch pb-[17px] max-md:max-w-full">
                <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex w-full gap-[8.344px_var(--8,8.344px)] p-[16.687px] rounded-[18.356px] max-md:max-w-full">
                  <button
                    onClick={() => setActiveSubTab('listings')}
                    className={`items-center flex gap-[8.344px] whitespace-nowrap w-[119px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 transition-colors ${
                      activeSubTab === 'listings' 
                        ? 'bg-[#B7D2FF] text-black' 
                        : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
                    }`}
                  >
                    <span className="w-[69px] rounded-[9.178px]">Listings</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSubTab('favorites')}
                    className={`items-center flex gap-[8.344px] w-[205px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 transition-colors ${
                      activeSubTab === 'favorites' 
                        ? 'bg-[#B7D2FF] text-black' 
                        : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
                    }`}
                  >
                    <span className="w-[155px] rounded-[9.178px]">Favorite Matches</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSubTab('deals')}
                    className={`items-center flex gap-[8.344px] whitespace-nowrap w-[101px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 transition-colors ${
                      activeSubTab === 'deals' 
                        ? 'bg-[#B7D2FF] text-black' 
                        : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
                    }`}
                  >
                    <span className="w-[51px] rounded-[9.178px]">Deals</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSubTab('chats')}
                    className={`items-center flex gap-[8.344px] whitespace-nowrap w-[103px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 transition-colors ${
                      activeSubTab === 'chats' 
                        ? 'bg-[#B7D2FF] text-black' 
                        : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
                    }`}
                  >
                    <span className="w-[53px] rounded-[9.178px]">Chats</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveSubTab('ai-builder')}
                    className={`items-center flex gap-[8.344px] w-[165px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 transition-colors ${
                      activeSubTab === 'ai-builder' 
                        ? 'bg-[#B7D2FF] text-black' 
                        : 'bg-[rgba(215,215,215,0.25)] text-[rgba(28,28,28,1)]'
                    }`}
                  >
                    <span className="w-[115px] rounded-[9.178px]">Ai Builder (p)</span>
                  </button>
                </div>
                
                <button className="items-center bg-[rgba(215,215,215,0.25)] z-10 flex mt-[-76px] gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:mr-2.5 max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
                  <span className="w-[232px] rounded-[9.178px]">Ai DD ( Due Diligence ) (p)</span>
                </button>
              </div>
            </div>
            
            <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] whitespace-nowrap pr-[var(--24,] pl-[var(--24,] mt-4 py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
              <span className="w-[83px] rounded-[9.178px]">Meetings</span>
            </button>
          </div>
          
          <div className="flex items-stretch gap-2.5 flex-wrap grow-0 shrink basis-auto my-auto max-md:max-w-full">
            <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
              <span className="w-[125px] rounded-[9.178px]">Data room (p)</span>
            </button>
            
            <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
              <span className="w-[162px] rounded-[9.178px]">Meet our advisors</span>
            </button>
            
            <button className="items-center bg-[rgba(215,215,215,0.25)] flex gap-[8.344px] pr-[var(--24,] pl-[var(--24,] py-[16.687px)] rounded-[18.356px] max-md:px-5 hover:bg-[rgba(215,215,215,0.4)] transition-colors">
              <span className="w-[63px] rounded-[9.178px]">Escow</span>
            </button>
          </div>
        </div>
        
        <div className="text-[#464F60] flex-1 shrink basis-[0%] rounded bg-[rgba(255,255,255,0.8)] shadow-[0px_0px_0px_1px_rgba(152,161,178,0.1)] gap-2 text-sm font-medium tracking-[0.28px] leading-none my-auto px-2.5 py-1">
          Layout &gt;
        </div>
      </div>
    </div>
  );
};
