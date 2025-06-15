import Image from "next/image";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[var(--arrow-bg)] hover:bg-[var(--arrow-hover-bg)] text-white p-2 rounded-full shadow z-10 transition"
  >
    <Image src="/images/arrow-right.svg" alt="Next" width={20} height={20} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[var(--arrow-bg)] hover:bg-[var(--arrow-hover-bg)] text-white p-2 rounded-full shadow z-10 transition"
  >
    <Image src="/images/arrow-left.svg" alt="Previous" width={20} height={20} />
  </button>
);
