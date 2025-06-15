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
      <div className={`min-w-6 min-h-6 w-6 h-6 flex items-center justify-center rounded-full ${iconBg}`}>
        <Image
          src={iconSrc}
          alt="icon"
          width={16}
          height={16}
          className="min-w-3 min-h-3 w-3 h-3 object-contain"
        />
      </div>
      <div>
        <div className="text-sm text-[var(--text-color)]">{content}</div>
        {replies && (
          <div className="ml-2 sm:ml-6 mt-1 space-y-1">
            {replies.map((reply, idx) => (
              <div key={idx} className="sm:flex gap-2 text-sm text-[var(--text-secondary)]">
                <div className="min-w-6 min-h-6 w-6 h-6 flex items-center justify-center rounded-full bg-[var(--border-color)]">
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
        <p className="text-xs text-[var(--text-secondary)] font-semibold">TODAY</p>
        <ActivityItem
          iconSrc="/images/tabs/dashboard/msg-white.svg"
          iconBg="bg-[#E48D21]"
          content={
            <>
              <b className="text-[var(--accent-color)]">Christian Wood</b> Sent Message to{' '}
              <b className="text-[var(--accent-color)]">Nikita Houston</b> • 1 min ago
            </>
          }
          replies={[
            <>
              <b className="text-[var(--text-secondary)]">Nikita Houston</b> Replied to your message{' '}
              <span className="text-[var(--accent-color)]">“Hello”</span> • 1 min ago
            </>,
          ]}
        />

        <ActivityItem
          iconSrc="/images/tabs/dashboard/msg-white.svg"
          iconBg="bg-[#D56574]"
          content={
            <>
              <b className="text-[var(--accent-color)]">Christian Wood</b> Accepted Order from{' '}
              <b className="text-[var(--accent-color)]">Ebay</b> • 1 min ago
            </>
          }
        />
      </div>

      <div>
        <p className="text-xs text-[var(--text-secondary)] font-semibold">YESTERDAY</p>
        <ActivityItem
          iconSrc="/images/tabs/dashboard/msg-white.svg"
          iconBg="bg-[#E48D21]"
          content={
            <>
              <b className="text-[var(--accent-color)]">Christian Wood</b> Sent Message to{' '}
              <b className="text-[var(--accent-color)]">Nikita Houston</b> • 1 min ago
            </>
          }
          replies={[
            <>
              <b className="text-[var(--text-secondary)]">Nikita Houston</b> Replied to your message{' '}
              <span className="text-[var(--accent-color)]">“Hello”</span> • 1 min ago
            </>,
          ]}
        />
      </div>

      <div>
        <p className="text-xs text-[var(--text-secondary)] font-semibold">25 MAY 2024</p>
        <ActivityItem
          iconSrc="/images/tabs/dashboard/msg-white.svg"
          iconBg="bg-[#D56574]"
          content={
            <>
              <b className="text-[var(--accent-color)]">Christian Wood</b> Accepted Order from{' '}
              <b className="text-[var(--accent-color)]">Ebay</b> • 1 min ago
            </>
          }
        />
        <ActivityItem
          iconSrc="/images/tabs/dashboard/msg-white.svg"
          iconBg="bg-[#D56574]"
          content={
            <>
              <b className="text-[var(--accent-color)]">Christian Wood</b> Accepted Order from{' '}
              <b className="text-[var(--accent-color)]">Ebay</b> • 1 min ago
            </>
          }
        />
      </div>

      <div className="flex gap-2 text-sm text-[var(--accent-color)] mt-3 cursor-pointer hover:underline font-semibold">
        <ChevronDownIcon className="w-5 h-5" />
        Show Older
      </div>
    </div>
  )

  return (
    <div className="bg-[var(--background-section)] rounded-[12px] shadow-sm h-full border border-[var(--border-color)] pb-4 sm:pb-2">
      <div className="py-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-semibold text-[var(--text-color)]">Recent Activities</h2>
<div className="rounded-[12px] w-fit border border-[var(--border-color)] shadow-sm">
  <button
    className={`px-4 py-2 rounded-[12px] font-medium cursor-pointer transition-colors duration-200 ${
      activeTab === 'message'
        ? ' text-[var(--text-color)] bg-[var(--purple-btn)] shadow-sm border border-[var(--border-color)]'
        : 'text-[var(--text-secondary)]'
    }`}
    onClick={() => setActiveTab('message')}
  >
    Message
  </button>
  <button
    className={`px-4 py-2 rounded-[12px] font-medium cursor-pointer transition-colors duration-200  ${
      activeTab === 'email'
        ? ' text-[var(--text-color)] bg-[var(--purple-btn)] shadow-sm border border-[var(--border-color)]'
        : 'text-[var(--text-secondary)]'
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
          <div className="text-[var(--text-secondary)] p-4">No content found.</div>
        )}
      </div>
    </div>
  )
}
