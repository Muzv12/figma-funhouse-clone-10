
import React, { useState } from 'react';

export const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buying');
  const [activeSubTab, setActiveSubTab] = useState('listings');

  return (
    <div className="border-[color:var(--color-border)] bg-[#F5F8FF] w-full ml-2.5 pb-4 rounded-[12.388px] border-[1.032px] border-solid max-md:max-w-full">
      {/* Primary Navigation */}
      <div className="bg-[rgba(234,242,255,0)] flex w-full max-w-[395px] flex-col text-[18px] font-normal whitespace-nowrap text-center leading-none max-md:pr-5">
        <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex gap-2 p-4 rounded-[18.499px]">
          <button 
            onClick={() => setActiveTab('buying')} 
            className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.499px] hover:bg-[#A5C7FF] transition-colors"
          >
            <span className="text-[18px] text-black font-normal text-center leading-none">Buying</span>
          </button>
          <button 
            onClick={() => setActiveTab('selling')} 
            className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.499px] hover:bg-[#A5C7FF] transition-colors"
          >
            <span className="text-[18px] text-black font-normal text-center leading-none">Selling</span>
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="flex w-full items-stretch gap-4 flex-wrap px-4 max-md:max-w-full">
        <div className="flex items-stretch gap-2 text-[18px] text-black font-normal text-center leading-none flex-wrap grow shrink basis-auto">
          <div className="flex items-stretch flex-wrap grow shrink basis-auto">
            <div className="bg-[rgba(234,242,255,0)] flex gap-2 overflow-hidden grow shrink basis-auto">
              <div className="flex min-w-60 w-full flex-col items-stretch">
                <div className="items-center content-center flex-wrap bg-[rgba(255,255,255,0.00)] flex w-full gap-2 p-4 rounded-[18.356px] justify-center">
                  <button 
                    onClick={() => setActiveSubTab('listings')} 
                    className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors"
                  >
                    <span className="text-[18px] text-black font-normal text-center leading-none">Listings</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSubTab('favorites')} 
                    className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors"
                  >
                    <span className="text-[18px] text-black font-normal text-center leading-none">Favorite Matches</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSubTab('deals')} 
                    className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors"
                  >
                    <span className="text-[18px] text-black font-normal text-center leading-none">Deals</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSubTab('chats')} 
                    className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors"
                  >
                    <span className="text-[18px] text-black font-normal text-center leading-none">Chats</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSubTab('ai-builder')} 
                    className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors"
                  >
                    <span className="text-[18px] text-black font-normal text-center leading-none">Ai Builder (p)</span>
                  </button>
                </div>
                
                <div className="flex justify-center -mt-2">
                  <button className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors">
                    <span className="text-[18px] text-black font-normal text-center leading-none">Ai DD ( Due Diligence ) (p)</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors">
                <span className="text-[18px] text-black font-normal text-center leading-none">Meetings</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-stretch gap-2 flex-wrap grow-0 shrink basis-auto">
            <button className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none">Data room (p)</span>
            </button>
            
            <button className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none">Meet our advisors</span>
            </button>
            
            <button className="items-center bg-[#B7D2FF] flex gap-2 px-6 py-4 rounded-[18.356px] hover:bg-[#A5C7FF] transition-colors">
              <span className="text-[18px] text-black font-normal text-center leading-none">Escow</span>
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
