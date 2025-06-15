'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import InputField from '../Common/InputField';

const contactOwners = [
    'suchithkumar@onechanneladmin.com',
    'test@onechanneladmin.com',
    'test2@onechanneladmin.com',
];
const countryOptions = [
    { name: 'United States', countryCode: 'us', dialCode: '+1' },
    { name: 'India', countryCode: 'in', dialCode: '+91' },
    { name: 'United Kingdom', countryCode: 'gb', dialCode: '+44' },
    { name: 'Australia', countryCode: 'au', dialCode: '+61' },
    { name: 'Canada', countryCode: 'ca', dialCode: '+1' },
];

interface PhoneEntry {
    id: number;
    country: string;
    dialCode: string;
    number: string;
    saved?: boolean;
}

export default function BusinessDeatils() {
    const [entries, setEntries] = useState<PhoneEntry[]>([
        {
            id: Date.now(),
            country: 'us',
            dialCode: '+1',
            number: '5566774453',
            saved: true,
        },
        {
            id: Date.now() + 1,
            country: 'in',
            dialCode: '+91',
            number: '9888776655',
            saved: true,
        },
    ]);
    const [selected, setSelected] = useState(contactOwners[0]);

    const addEntry = () => {
        const lastEntry = entries[entries.length - 1];

        if (lastEntry && (!lastEntry.saved && !lastEntry.number.trim())) {
            return;
        }

        const defaultCountry = countryOptions[0];
        setEntries(prev => [
            ...prev,
            {
                id: Date.now(),
                country: defaultCountry.countryCode,
                dialCode: defaultCountry.dialCode,
                number: '',
                saved: false,
            },
        ]);
    };


    const updateEntry = (id: number, field: keyof PhoneEntry, value: string) => {
        setEntries(prev =>
            prev.map(entry =>
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    };

    const updateCountry = (id: number, countryCode: string) => {
        const country = countryOptions.find(c => c.countryCode === countryCode);
        if (country) {
            setEntries(prev =>
                prev.map(entry =>
                    entry.id === id
                        ? { ...entry, country: countryCode, dialCode: country.dialCode }
                        : entry
                )
            );
        }
    };

    const saveEntry = (id: number) => {
        setEntries(prev =>
            prev.map(entry => {
                if (entry.id === id) {
                    if (!entry.number.trim()) return entry;
                    return { ...entry, saved: true };
                }
                return entry;
            })
        );
    };


    const removeEntry = (id: number) => {
        setEntries(prev => prev.filter(entry => entry.id !== id));
    };

    return (
        <div className="p-4 bg-white border border-[#e7e9ec] rounded-xl space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#0E253C] text-base">Business Details</h3>
                <div className="flex items-center text-[#22C55E] space-x-2 cursor-pointer hover:underline">
                    <Image src="/images/sidebar/save.svg" alt="save" width={16} height={16} />
                    <span className='text-sm font-semibold'>Save & Close</span>
                </div>
            </div>

            <div className="">
                <div className='mb-3'>
                    <InputField
                        label="Account Name"
                        name="accountName"
                        value="TRUCK GEAR"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Enter account name"
                        height="38px"
                        className='shadow-sm'
                    />
                </div>
                <hr className='text-[#e7e9ec]' />
                <div className='mt-3'>
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value="jillali@onechanneladmin.com"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Enter email"
                        height="38px"
                        required
                        className='shadow-sm'
                    />
                </div>
            </div>
            <hr className='text-[#e7e9ec]' />

            <div className="mt-3 space-y-2 bg-white">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-medium text-[#0E253C]">
                        Phone Numbers</p>
                    <Image onClick={addEntry} src="/images/sidebar/plus.svg" alt="plus" width={16} height={16} className='cursor-pointer' />

                </div>

                {entries.map((entry) => (
                    <div
                        key={entry.id}
                        className="flex gap-2 items-center rounded-lg"
                    >
                        <div className="flex items-center justify-center gap-1 border border-[#e7e9ec] shadow-sm rounded-[12px] pl-3 pr-6 h-[38px] w-[98px]">
                            <img
                                src={`https://flagcdn.com/24x18/${entry.country}.png`}
                                alt={entry.country}
                                className="w-6 h-4 rounded"
                            />
                            <div className='relative w-full'>
                                <select
                                    value={entry.country}
                                    onChange={(e) => updateCountry(entry.id, e.target.value)}
                                    className="absolute w-[54px] bottom-[-13px] left-0 right-0 z-[99] text-sm px-1 py-[2px] focus:outline-none focus-visible:outline-none appearance-none"
                                >
                                    {countryOptions.map((country) => (
                                        <option key={country.countryCode} value={country.countryCode}>
                                            {country.countryCode.toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-[-14px] top-[0px] flex items-center">
                                    <ChevronDownIcon className='w-5 h-5' />
                                </div>
                            </div>

                        </div>

                        <div className='w-[153px] '>
                            <InputField
                                label=""
                                name="phone"
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={entry.number}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                    updateEntry(entry.id, 'number', value);
                                }}
                                placeholder="Enter phone"
                                height="38px"
                                required
                                className='shadow-sm'
                            />
                        </div>
                        {!entry.saved ? (
                            <div
                                onClick={() => {
                                    if (entry.number.trim()) saveEntry(entry.id);
                                }}
                                className={`flex items-center space-x-1 cursor-pointer ${entry.number.trim() ? 'text-[#22C55E] hover:underline' : 'text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <Image src="/images/sidebar/save.svg" alt="save" width={16} height={16} />
                                <span>Save</span>
                            </div>
                        ) : (
                            <button
                                onClick={() => removeEntry(entry.id)}
                                className="border border-[#DC3545] text-[#DC3545] text-sm h-[38px] rounded-[12px] px-3 cursor-pointer"
                            >
                                Remove
                            </button>
                        )}


                    </div>
                ))}
            </div>
            <hr className='text-[#e7e9ec]' />

            <div>
                <label className="block text-xs font-medium text-[#0E253C] mb-2">Contact Owner</label>
                <div className="relative w-full">
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="w-full appearance-none border border-gray-300 rounded-[12px] shadow-sm px-3 py-[8px] text-sm text-[#0E253C] focus:outline-none cursor-pointer"
                    >
                        {contactOwners.map((owner, index) => (
                            <option key={index} value={owner}>
                                {owner}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <ChevronDownIcon className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </div>
    );
}
