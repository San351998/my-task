import Image from 'next/image';

export default function RecentOrders() {
    const orders = [
        {
            id: '275936',
            productQty: 'x1',
            productImg: '/images/tabs/dashboard/recent-order-1.svg',
            productName: 'iPhone 15 pro max',
            channelImg: '/images/tabs/dashboard/recent-order-ebay.svg',
            channelName: 'eBay',
            customerImg: '/images/tabs/dashboard/recent-order-2.svg',
            customerName: 'Gabriella Golden',
            total: '$ 400.00',
            delivery: 'Today',
        },
        {
            id: '415368',
            productQty: 'x4',
            productImg: '/images/tabs/dashboard/recent-order-1.svg',
            productName: 'White Danim Tshit M...',
            channelImg: '/images/tabs/dashboard/recent-order-ebay.svg',
            channelName: 'Walmart',
            customerImg: '/images/tabs/dashboard/recent-order-2.svg',
            customerName: 'Harris Santana',
            total: '$ 151.00',
            delivery: 'Today',
        },
        {
            id: '275063',
            productQty: 'x2',
            productImg: '/images/tabs/dashboard/recent-order-1.svg',
            productName: 'David Beckham class...',
            channelImg: '/images/tabs/dashboard/recent-order-ebay.svg',
            channelName: 'Facebook',
            customerImg: '/images/tabs/dashboard/recent-order-2.svg',
            customerName: 'Lilia Ponce',
            total: '$ 167.00',
            delivery: 'Tomorrow',
        },
        {
            id: '274778',
            productQty: 'x3',
            productImg: '/images/tabs/dashboard/recent-order-1.svg',
            productName: 'Samsung i-20 serie...',
            channelImg: '/images/tabs/dashboard/recent-order-ebay.svg',
            channelName: 'Amazon',
            customerImg: '/images/tabs/dashboard/recent-order-2.svg',
            customerName: 'Rehan Chase',
            total: '$ 262.00',
            delivery: 'Tomorrow',
        },
        {
            id: '638032',
            productQty: 'x5',
            productImg: '/images/tabs/dashboard/recent-order-1.svg',
            productName: 'Nykaa Red lipstick',
            channelImg: '/images/tabs/dashboard/recent-order-ebay.svg',
            channelName: 'Etsy',
            customerImg: '/images/tabs/dashboard/recent-order-2.svg',
            customerName: 'Maxim Bray',
            total: '$ 319.00',
            delivery: '05/01/2023',
        },
    ];

    return (
    <div className="bg-[var(--background-section)] mx-4 mt-6 border border-[var(--border-color)] rounded-[12px] shadow-sm">
      <div className="py-3 px-4">
        <h2 className="text-lg font-semibold text-[var(--text-color)]">Recent Orders</h2>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[768px] w-full table-auto text-left text-sm">
          <thead className="bg-[var(--card-bg)] text-[var(--text-secondary)] border-y border-[var(--border-color)]">
            <tr>
              <th className="py-2 px-4 whitespace-nowrap">ORDER ID</th>
              <th className="py-2 px-4 whitespace-nowrap">PRODUCTS</th>
              <th className="py-2 px-4 whitespace-nowrap">CHANNEL</th>
              <th className="py-2 px-4 whitespace-nowrap">CUSTOMER</th>
              <th className="py-2 px-4 whitespace-nowrap">TOTAL</th>
              <th className="py-2 px-4 whitespace-nowrap">DELIVERY DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b border-[var(--border-color)] text-[var(--text-color)]">
                <td className="py-3 px-4 whitespace-nowrap">{order.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 max-w-[160px] overflow-hidden text-ellipsis">
                    <span>{order.productQty}</span>
                    <Image
                      src={order.productImg}
                      alt={order.productName}
                      width={24}
                      height={24}
                      className="rounded-sm"
                    />
                    <span className="truncate">{order.productName}</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <Image
                    src={order.channelImg}
                    alt={order.channelName}
                    width={45}
                    height={45}
                  />
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Image
                      src={order.customerImg}
                      alt={order.customerName}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{order.customerName}</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{order.total}</td>
                <td className="py-3 px-4 whitespace-nowrap">{order.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-[var(--accent-color)] text-sm mt-4 cursor-pointer hover:underline font-medium mb-4">
        View 256 more orders →
      </div>
    </div>
  );
}