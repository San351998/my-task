'use client';

import { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';

type YearPickerProps = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  widthClass?: string;
};

const YearPicker: FC<YearPickerProps> = ({
  selectedDate,
  onChange,
  widthClass = 'w-[93px]',
}) => {
  return (
    <div className={`bg-[var(--background-section)] flex items-center border border-[var(--border-color)] rounded-[12px] px-1 py-[8px] cursor-pointer shadow-sm text-sm text-[var(--text-color)] ${widthClass}`}>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy"
        className="w-full outline-none text-center font-semibold bg-[var(--background-section)]"
      />
      <Image
        src="/images/sidebar/calendar.svg"
        alt="calendar"
        width={18}
        height={18}
        className="w-8 h-auto max-w-8 text-gray-500 mr-2 text-[var(--text-color)]"
      />
    </div>
  );
};

export default YearPicker;
