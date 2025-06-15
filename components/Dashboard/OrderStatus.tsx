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
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

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
    <div className="bg-[#f6f8f9] rounded-2xl shadow-sm h-full border border-[#e7e9ec]">
      <div className="py-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#e7e9ec]">
        <h2 className="text-lg font-semibold text-[#0E253C]">Order Status</h2>

        <div className="flex gap-4 w-full md:w-auto flex-col md:flex-row">
          <div>
            <div className="relative w-[146px]">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-white w-full appearance-none border border-gray-300 rounded-[12px] shadow-sm px-3 py-[8px] text-sm text-[#0E253C] focus:outline-none cursor-pointer font-semibold"
              >
                {contactOwners.map((owner, index) => (
                  <option key={index} value={owner}>
                    {owner}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center font-semibold">
                <ChevronDownIcon className="w-4 h-4 text-[#0E253C]" />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white flex items-center border border-gray-300 rounded-[12px] px-1 py-[8px] cursor-pointer shadow-sm text-sm text-[#0E253C] w-[93px]">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full outline-none text-center font-semibold"
                dateFormat="yyyy"
              />
              <Image
                src={`/images/sidebar/calendar.svg`}
                alt="calander"
                width={18}
                height={18}
                className="w-8 h-auto max-w-8 text-gray-500 mr-2 text-[#0E253C]" />

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="grid grid-cols-2 gap-0 rounded-xl overflow-hidden flex-1">
          <StatusBox icon="/images/tabs/dashboard/order-status/all.svg" label="All" value={total} index={0} />
          {data.map((item, index) => (
            <StatusBox key={item.name} icon={item.icon} label={item.name} value={item.value} index={index + 1} />
          ))}
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-1/2 relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={85}
                outerRadius={125}
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

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-bold">
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
  icon: string
  label: string
  value: number
  index: number
}) => {
  const isRightColumn = (index + 1) % 2 === 0
  return (
    <div
      className={`flex items-center space-x-3 px-6 py-10 border-b border-r border-gray-200
        ${isRightColumn ? 'border-r-0' : ''}
      `}
    >
      <div className="max-w-6 w-6 max-h-6 h-6 relative">
        <Image src={icon} alt={label} width={24} height={24} />
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-[22px] font-semibold">{value}</div>
      </div>
    </div>
  )
}
