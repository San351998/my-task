'use client'

import { ArrowUturnLeftIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'

export default function RecentActivities() {
    const [activeTab, setActiveTab] = useState('message')

    const ActivityItem = ({
        iconSrc,
        iconBg,
        content,
        replies,
    }: {
        iconSrc: string
        iconBg: string
        content: React.ReactNode
        replies?: React.ReactNode[]
    }) => (
        <div className="flex gap-3 mt-3">
            <div
                className={`min-w-6 min-h-6 w-6 h-6 flex items-center justify-center rounded-full ${iconBg}`}
            >
                <Image src={iconSrc} alt="icon" width={16} height={16} className="min-w-3 min-h-3 w-3 h-3 object-contain" />
            </div>
            <div>
                <div className="text-sm text-gray-800">{content}</div>
                {replies && (
                    <div className="ml-2 sm:ml-6 mt-1 space-y-1">
                        {replies.map((reply, idx) => (
                            <div key={idx} className="sm:flex gap-2 text-sm text-gray-500">
                                <div
                                    className={`min-w-6 min-h-6 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200`}
                                >
                                    <ArrowUturnLeftIcon className="w-3 h-3" />
                                </div>
                                {reply}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )


    const MessageContent = () => (
        <div className="space-y-6">
            <div>
                <p className="text-xs text-gray-500 font-semibold">TODAY</p>
                <ActivityItem
                    iconSrc="/images/tabs/dashboard/msg-white.svg"
                    iconBg="bg-[#E48D21]"
                    content={
                        <>
                            <b className="text-[#513CCE]">Christian Wood</b> Sent Message to{' '}
                            <b className="text-[#513CCE]">Nikita Houston</b> • 1 min ago
                        </>
                    }
                    replies={[
                        <>
                            <b className="text-gray-600">Nikita Houston</b> Replied to your message{' '}
                            <span className="text-[#513CCE]">“Hello”</span> • 1 min ago
                        </>,
                    ]}
                />

                <ActivityItem
                    iconSrc="/images/tabs/dashboard/msg-white.svg"

                    iconBg="bg-[#D56574]"
                    content={
                        <>
                            <b className="text-[#513CCE]">Christian Wood</b> Accepted Order from{' '}
                            <b className="text-[#513CCE]">Ebay</b> • 1 min ago
                        </>
                    }
                />

            </div>

            <div>
                <p className="text-xs text-gray-500 font-semibold">YESTERDAY</p>
                <ActivityItem
                    iconSrc="/images/tabs/dashboard/msg-white.svg"
                    iconBg="bg-[#E48D21]"
                    content={
                        <>
                            <b className="text-[#513CCE]">Christian Wood</b> Sent Message to{' '}
                            <b className="text-[#513CCE]">Nikita Houston</b> • 1 min ago
                        </>
                    }
                    replies={[
                        <>
                            <b className="text-gray-600">Nikita Houston</b> Replied to your message{' '}
                            <span className="text-[#513CCE]">“Hello”</span> • 1 min ago
                        </>,
                    ]}
                />
            </div>

            <div>
                <p className="text-xs text-gray-500 font-semibold">25 MAY 2024</p>
                <ActivityItem
                    iconSrc="/images/tabs/dashboard/msg-white.svg"
                    iconBg="bg-[#D56574]"
                    content={
                        <>
                            <b className="text-[#513CCE]">Christian Wood</b> Accepted Order from{' '}
                            <b className="text-[#513CCE]">Ebay</b> • 1 min ago
                        </>
                    }
                />
                <ActivityItem
                    iconSrc="/images/tabs/dashboard/msg-white.svg"
                    iconBg="bg-[#D56574]"
                    content={
                        <>
                            <b className="text-[#513CCE]">Christian Wood</b> Accepted Order from{' '}
                            <b className="text-[#513CCE]">Ebay</b> • 1 min ago
                        </>
                    }
                />
            </div>

            <div className="flex gap-2 text-sm text-[#513CCE] mt-3 cursor-pointer hover:underline font-semibold">
                <ChevronDownIcon className='w-5 h-5' />

                Show Older
            </div>
        </div>
    )

    return (
        <div className="full bg-[#f6f8f9] rounded-[12px] shadow-sm h-full border border-[#e7e9ec] pb-4 sm:pb-2">
            <div className="py-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4 border-b border-[#e7e9ec]">
                <h2 className="text-lg font-semibold text-[#0E253C]">Recent Activities</h2>
                <div className="bg-gray-100 rounded-[12px] w-fit border border-[#e7e9ec]">
                    <button
                        className={`px-4 py-2 rounded-[12px] font-medium cursor-pointer ${activeTab === 'message' ? 'bg-white shadow text-[#0E253C]' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('message')}
                    >
                        Message
                    </button>
                    <button
                        className={`px-4 py-2 rounded-[12px] font-medium cursor-pointer ${activeTab === 'email' ? 'bg-white shadow text-[#0E253C]' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('email')}
                    >
                        Email
                    </button>
                </div>
            </div>
            <div className="mt-4 mx-5">
                {activeTab === 'message' ? (
                    <MessageContent />
                ) : (
                    <div className="text-gray-500 p-4">No content found.</div>
                )}
            </div>
        </div>
    )
}
