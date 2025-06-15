'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

type DropdownSelectProps = {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  widthClass?: string;
};

const DropdownSelect: FC<DropdownSelectProps> = ({
  options,
  selected,
  setSelected,
  widthClass = 'w-[146px]',
}) => {
  return (
    <div className={`relative ${widthClass}`}>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-white w-full appearance-none border border-gray-300 rounded-[12px] shadow-sm px-3 py-[8px] text-sm text-[#0E253C] focus:outline-none cursor-pointer font-semibold"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center font-semibold">
        <ChevronDownIcon className="w-4 h-4 text-[#0E253C]" />
      </div>
    </div>
  );
};

export default DropdownSelect;
