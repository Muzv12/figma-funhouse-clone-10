import React, { useState } from 'react';

export const FiltersSidebar: React.FC = () => {
  const [filters, setFilters] = useState({
    description: 'I want to find solar panel installation companies...',
    keywords: ['Real estate', 'Dubai'],
    exampleCompanies: '',
    headquarters: '',
    operatingLocation: '',
    minSize: '',
    maxSize: '',
    minGrowth: '',
    maxGrowth: '',
    ownership: 'Publicly listed , Government....'
  });

  const handleInputChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const removeKeyword = (index: number) => {
    setFilters(prev => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index)
    }));
  };

  return (
    <aside className="border-[color:var(--color-border)] bg-white flex w-full flex-col items-stretch mx-auto pt-[17px] pb-px rounded-[12.503px] border-[1.042px] border-solid max-md:max-w-full max-md:mt-[9px]">
      <div className="flex flex-col items-stretch pl-[21px] pr-[42px] max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-stretch">
          <div className="flex w-full items-stretch gap-5 justify-between">
            <div className="flex items-stretch gap-1 text-[27px] text-[#222527] font-bold whitespace-nowrap my-auto">
              <h2 className="text-[#222527] grow">Filters</h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/9934885bfb70bbf74cd74d0d62f2d02bf753e9ba?placeholderIfAbsent=true"
                alt="Filter icon"
                className="aspect-[1] object-contain w-6 shrink-0"
              />
            </div>
            <div className="flex items-stretch gap-3 text-sm text-white font-medium tracking-[0.28px] leading-5">
              <button className="text-white shadow-[0px_0px_0px_1px_rgba(152,161,178,0.10),0px_15px_35px_-5px_rgba(17,24,38,0.15),0px_5px_15px_0px_rgba(0,0,0,0.08)] backdrop-blur-[2px] bg-[rgba(14,108,215,0.80)] min-h-12 gap-3 overflow-hidden px-[18px] py-[9px] rounded-[9px] hover:bg-[rgba(14,108,215,0.9)] transition-colors">
                Business Type
              </button>
              <button aria-label="More options">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/37172408229bada997e7bad69bd090dd1870d98b?placeholderIfAbsent=true"
                  alt="More options"
                  className="aspect-[1] object-contain w-9 shrink-0 mt-[9px]"
                />
              </button>
            </div>
          </div>
          
          <div className="w-[350px] max-w-full font-normal mt-6">
            <label htmlFor="description" className="text-[#222527] text-xl block mb-[13px]">
              Describe Company
            </label>
            <textarea
              id="description"
              value={filters.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="rounded bg-[rgba(244,244,244,0)] border w-full text-base text-[rgba(108,111,113,1)] p-[13px] border-[rgba(181,181,181,0.77)] border-solid resize-none"
              rows={3}
              placeholder="Describe the type of company you're looking for..."
            />
          </div>
          
          <div className="border self-center w-[266px] shrink-0 max-w-full h-px mt-[9px] border-[rgba(0,0,0,0.22)] border-solid" />
        </div>
      </div>

      <div className="flex flex-col pl-[21px] pr-[68px] max-md:max-w-full max-md:px-5 mt-6">
        <div>
          <label htmlFor="keywords" className="text-[#222527] text-xl font-normal block mb-[13px]">
            Keywords
          </label>
          <div className="rounded bg-[rgba(244,244,244,0)] border flex w-full max-w-[350px] flex-col gap-2 p-1 border-[rgba(181,181,181,0.77)] border-solid">
            {filters.keywords.map((keyword, index) => (
              <div key={index} className="text-white rounded bg-[rgba(79,108,140,0.8)] shadow-[0px_0px_0px_1px_rgba(152,161,178,0.1)] flex items-center gap-2 px-[7px] py-1">
                <span className="text-[8px] font-medium tracking-[0.17px] leading-none">
                  {keyword}
                </span>
                <button
                  onClick={() => removeKeyword(index)}
                  className="text-white hover:text-red-200 transition-colors"
                  aria-label={`Remove ${keyword} keyword`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border self-center w-[266px] shrink-0 max-w-full h-px mt-2 border-[rgba(0,0,0,0.22)] border-solid" />
      </div>

      <div className="flex flex-col pl-[21px] pr-[68px] max-md:max-w-full max-md:px-5 mt-6">
        <div className="min-h-[89px] text-xl text-[#222527] font-normal">
          <label htmlFor="examples" className="text-[#222527] block mb-[13px]">
            Example companies
          </label>
          <input
            id="examples"
            type="text"
            value={filters.exampleCompanies}
            onChange={(e) => handleInputChange('exampleCompanies', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border min-h-[38px] max-w-full w-[350px] p-[13px] border-[rgba(181,181,181,0.77)] border-solid"
            placeholder="Enter example companies..."
          />
        </div>
        
        <div className="border self-center w-[266px] shrink-0 max-w-full h-px border-[rgba(0,0,0,0.22)] border-solid" />
      </div>

      <div className="flex flex-col text-xl text-[#222527] font-normal whitespace-nowrap pl-[22px] pr-[67px] max-md:max-w-full max-md:px-5 mt-6">
        <div className="min-h-[89px]">
          <label htmlFor="headquarters" className="text-[#222527] block mb-[13px]">
            Headquarters
          </label>
          <input
            id="headquarters"
            type="text"
            value={filters.headquarters}
            onChange={(e) => handleInputChange('headquarters', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border min-h-[38px] max-w-full w-[350px] p-[13px] border-[rgba(181,181,181,0.77)] border-solid"
            placeholder="Enter headquarters location..."
          />
        </div>
        
        <div className="border self-center w-[266px] shrink-0 max-w-full h-px border-[rgba(0,0,0,0.22)] border-solid" />
      </div>

      <div className="flex flex-col text-xl text-[#222527] font-normal pl-[17px] pr-[67px] py-[3px] max-md:max-w-full max-md:pr-5 mt-6">
        <div className="min-h-[89px] max-md:ml-[5px]">
          <label htmlFor="operating" className="text-[#222527] block mb-[13px]">
            Operating location
          </label>
          <input
            id="operating"
            type="text"
            value={filters.operatingLocation}
            onChange={(e) => handleInputChange('operatingLocation', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border min-h-[38px] max-w-full w-[350px] p-[13px] border-[rgba(181,181,181,0.77)] border-solid"
            placeholder="Enter operating location..."
          />
        </div>
        
        <div className="border self-center w-[266px] shrink-0 max-w-full h-px border-[rgba(0,0,0,0.22)] border-solid" />
        
        <div className="text-[#222527] whitespace-nowrap mt-4">
          <label className="block mb-4">Size</label>
          <div className="flex items-stretch gap-1.5 text-base text-black font-normal whitespace-nowrap">
            <input
              type="number"
              value={filters.minSize}
              onChange={(e) => handleInputChange('minSize', e.target.value)}
              className="rounded bg-[rgba(244,244,244,0)] border px-1 py-2 border-[rgba(181,181,181,0.77)] border-solid"
              placeholder="Min"
              aria-label="Minimum company size"
            />
            <div className="text-[#222527] text-xl my-auto">to</div>
            <input
              type="number"
              value={filters.maxSize}
              onChange={(e) => handleInputChange('maxSize', e.target.value)}
              className="rounded bg-[rgba(244,244,244,0)] border px-1 py-2 border-[rgba(181,181,181,0.77)] border-solid"
              placeholder="Max"
              aria-label="Maximum company size"
            />
          </div>
        </div>
        
        <div className="border w-[266px] shrink-0 max-w-full h-px mt-4 border-[rgba(0,0,0,0.22)] border-solid" />
      </div>

      <div className="flex w-[315px] max-w-full flex-col items-stretch ml-[21px] mt-[7px] pb-4 max-md:ml-2.5">
        <div className="text-[#222527] text-xl font-normal whitespace-nowrap mb-4">
          Growth
        </div>
        <div className="flex items-stretch gap-1.5 text-base text-black font-normal whitespace-nowrap">
          <input
            type="number"
            value={filters.minGrowth}
            onChange={(e) => handleInputChange('minGrowth', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border px-1 py-2 border-[rgba(181,181,181,0.77)] border-solid"
            placeholder="Min"
            aria-label="Minimum growth rate"
          />
          <div className="text-[#222527] text-xl my-auto">to</div>
          <input
            type="number"
            value={filters.maxGrowth}
            onChange={(e) => handleInputChange('maxGrowth', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border px-1 py-2 border-[rgba(181,181,181,0.77)] border-solid"
            placeholder="Max"
            aria-label="Maximum growth rate"
          />
        </div>
      </div>

      <div className="flex items-stretch font-normal ml-[17px] mt-[7px] max-md:ml-2.5">
        <div className="text-[#222527] text-xl whitespace-nowrap">
          <label htmlFor="ownership">Ownership</label>
        </div>
        <div className="flex w-full flex-col items-stretch text-[10px] text-black mt-1">
          <select
            id="ownership"
            value={filters.ownership}
            onChange={(e) => handleInputChange('ownership', e.target.value)}
            className="rounded bg-[rgba(244,244,244,0)] border flex items-stretch gap-[13px] mt-[13px] pl-[5px] pr-[23px] py-[9px] border-[rgba(181,181,181,0.77)] border-solid max-md:pr-5"
          >
            <option value="Publicly listed , Government....">Publicly listed , Government....</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Non-profit">Non-profit</option>
          </select>
        </div>
      </div>
    </aside>
  );
};
