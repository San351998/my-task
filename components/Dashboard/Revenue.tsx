'use client';

import { useState, useEffect } from 'react';
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

    const [barSize, setBarSize] = useState(40);

    useEffect(() => {
        const updateBarSize = () => {
            const width = window.innerWidth;
            setBarSize(width < 640 ? 30 : 60);
        };

        updateBarSize();
        window.addEventListener('resize', updateBarSize);
        return () => window.removeEventListener('resize', updateBarSize);
    }, []);

    return (
        <div className="bg-[var(--background-section)] mx-4 mt-6 border border-[var(--border-color)] rounded-[12px] shadow-sm text-[var(--text-color)] mb-4">
            <div className="p-4 flex flex-col md:flex-row gap-3 justify-between items-center border-b border-[var(--border-color)]">
                <div className="bg-[var(--input-bg)] rounded-[12px] w-full md:w-fit border border-[var(--border-color)] flex justify-center overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 whitespace-nowrap rounded-[12px] font-medium cursor-pointer ${
                                activeTab === tab
                                    ? 'bg-[var(--card-bg)] shadow text-[var(--text-color)]'
                                    : 'text-[var(--text-muted)]'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
                    <DropdownSelect
                        options={contactOwners}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <YearPicker selectedDate={startDate} onChange={setStartDate} />
                </div>
            </div>

            {activeTab === 'Revenue' ? (
                <div className="px-4 sm:px-6 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-2">
                        <h2 className="text-base sm:text-lg font-semibold text-[var(--text-color)]">
                            Revenue
                        </h2>
                        <p className="text-sm sm:text-lg text-[var(--text-color)]">
                            Total Revenue:{' '}
                            <span className="font-semibold">{totalRevenue}</span>
                        </p>
                    </div>

                    <div className="w-full h-[300px] sm:h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
                            >
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: 'var(--text-color)' }}
                                />
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
                                    tick={{ fontSize: 12, fill: 'var(--text-color)' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'var(--tooltip-bg)',
                                        borderColor: 'var(--border-color)',
                                        color: 'var(--text-color)',
                                        fontSize: 12,
                                    }}
                                    formatter={(value: number) =>
                                        new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(value)
                                    }
                                />
                                <Bar dataKey="revenue" fill="var(--accent-color)" barSize={barSize}>
                                    <LabelList
                                        dataKey="revenue"
                                        position="top"
                                        formatter={(value: number) => `$${value.toFixed(2)}`}
                                        style={{ fontSize: 10, fill: 'var(--text-color)' }}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-4 text-xs sm:text-sm text-center opacity-80 text-[var(--text-color)]">
                        • 2023
                    </div>
                </div>
            ) : (
                <p className="flex items-center justify-center text-[var(--text-muted)] h-[300px] text-sm">
                    No data found
                </p>
            )}
        </div>
    );
}
