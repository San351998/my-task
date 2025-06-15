'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import Image from 'next/image'
import { useState } from 'react'
import DropdownSelect from '../Common/DropdownSelect'
import YearPicker from '../Common/DatePicker'

const COLORS = ['#F87171', '#FBBF24', '#60A5FA', '#34D399', '#A78BFA']

const data = [
  { name: 'New', value: 50, icon: '/images/tabs/dashboard/order-status/new.svg' },
  { name: 'Pending', value: 50, icon: '/images/tabs/dashboard/order-status/pending.svg' },
  { name: 'Dispatched', value: 50, icon: '/images/tabs/dashboard/order-status/dispatched.svg' },
  { name: 'Cancelled', value: 50, icon: '/images/tabs/dashboard/order-status/cancelled.svg' },
  { name: 'Delivered', value: 123, icon: '/images/tabs/dashboard/order-status/delivered.svg' },
]

const contactOwners = [
  'All Categories',
  'Category 1',
  'Category 2',
]

const total = data.reduce((sum, item) => sum + item.value, 0)

export default function OrderStatus() {
  const [selected, setSelected] = useState(contactOwners[0])
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return (
    <div className="bg-[var(--background-section)] rounded-2xl shadow-sm h-full border border-[var(--border-color)] mt-1 sm:mt-0">
      <div className="py-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-semibold text-[var(--text-color)]">Order Status</h2>

        <div className="flex gap-4 w-full md:w-auto flex-row">
          <DropdownSelect
            options={contactOwners}
            selected={selected}
            setSelected={setSelected}
          />
          <div>
            <YearPicker selectedDate={startDate} onChange={setStartDate} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row sm:gap-6">
        <div className="w-full md:w-[55%] grid grid-cols-2 gap-0 rounded-xl overflow-hidden flex-1">
          <StatusBox icon="/images/tabs/dashboard/order-status/all.svg" label="All" value={total} index={0} />
          {data.map((item, index) => (
            <StatusBox key={item.name} icon={item.icon} label={item.name} value={item.value} index={index + 1} />
          ))}
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-[45%] relative h-[255px] sm:h-auto">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={105}
                fill="#8884d8"
                dataKey="value"
                stroke="none"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                  const RADIAN = Math.PI / 180
                  const radius = innerRadius + (outerRadius - innerRadius) / 2
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={16}
                      fontWeight={500}
                    >
                      {value}%
                    </text>
                  )
                }}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-bold text-[var(--text-color)]">
            {total}
          </div>
        </div>
      </div>
    </div>
  )
}

const StatusBox = ({
  icon,
  label,
  value,
  index,
}: {
  icon: string;
  label: string;
  value: number;
  index: number;
}) => {
  const isRightColumn = (index + 1) % 2 === 0;
  const noBorder = index === 4 || index === 5;

  return (
    <div
      className={`flex px-4 sm:px-6 xl:px-4 2xl:px-6 py-4 sm:py-10 
        border-[var(--border-color)] 
        ${!noBorder ? 'border-b' : ''} 
        ${!isRightColumn ? 'border-r' : ''}
      `}
    >
      <div className="w-2/5 flex items-start justify-start">
        <div className="w-6 h-6 relative">
          <Image src={icon} alt={label} width={24} height={24} />
        </div>
      </div>

      <div className="w-3/5">
        <div className="text-sm text-[var(--text-color)] opacity-70">{label}</div>
        <div className="text-[22px] font-semibold text-[var(--text-color)]">{value}</div>
      </div>
    </div>
  );
};
