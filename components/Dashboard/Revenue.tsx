'use client';

import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from 'recharts';
import DropdownSelect from '../Common/DropdownSelect';
import YearPicker from '../Common/DatePicker';

export default function Revenue() {
    const data = [
        { month: 'Jan', revenue: 589.12 },
        { month: 'Feb', revenue: 840.2 },
        { month: 'Mar', revenue: 898.0 },
        { month: 'Apr', revenue: 203.0 },
        { month: 'May', revenue: 400.01 },
        { month: 'Jun', revenue: 920.12 },
        { month: 'Jul', revenue: 398.0 },
        { month: 'Aug', revenue: 882.0 },
        { month: 'Sep', revenue: 390.0 },
        { month: 'Oct', revenue: 910.0 },
        { month: 'Nov', revenue: 410.12 },
        { month: 'Dec', revenue: 840.2 },
    ];

    const totalRevenue = data
        .reduce((sum, d) => sum + d.revenue, 0)
        .toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });

    const tabs = ['Revenue', 'Orders', 'Customers'];
    const [activeTab, setActiveTab] = useState('Revenue');

    const contactOwners = ['All Categories', 'Category 1', 'Category 2'];
    const [selected, setSelected] = useState(contactOwners[0]);

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className="bg-[#f6f8f9] mx-4 mt-6 border border-[#e7e9ec] rounded-[12px] shadow-sm text-[#0E253C] mb-4">
            <div className="p-4 flex justify-between items-center border-b border-[#e7e9ec]">
                <div className="bg-gray-100 rounded-[12px] w-fit border border-[#e7e9ec] flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-[12px] font-medium cursor-pointer ${activeTab === tab
                                ? 'bg-white shadow text-[#0E253C]'
                                : 'text-gray-500'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <DropdownSelect
                        options={contactOwners}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <YearPicker selectedDate={startDate} onChange={setStartDate} />
                </div>
            </div>

            {activeTab === 'Revenue' && (
                <div className="px-6 pb-6">
                    <div className="flex justify-between items-center py-4">
                        <h2 className="text-lg font-semibold text-[#0E253C]">Revenue</h2>

                        <p className="text-lg text-[#0E253C]">
                            Total Revenue:{' '}
                            <span className="text-lg font-semibold text-[#0E253C]">{totalRevenue}</span>
                        </p>
                    </div>

                    <div className="w-full h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tickFormatter={(v) =>
                                        new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            maximumFractionDigits: 0,
                                        }).format(v)
                                    }
                                />
                                <Tooltip
                                    formatter={(value: number) =>
                                        new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(value)
                                    }
                                />
                                <Bar dataKey="revenue" fill="#5b3df1">
                                    <LabelList
                                        dataKey="revenue"
                                        position="top"
                                        formatter={(value: number) => `$${value.toFixed(2)}`}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-4 text-sm opacity-80 text-[#0E253C] pl-1 text-center">• 2023</div>
                </div>
            )}

            {activeTab !== 'Revenue' && (
                <p className='flex items-center justify-center text-gray-600 h-[300px]'>
                    No Content Found
                </p>
            )}
        </div>


    );
}
