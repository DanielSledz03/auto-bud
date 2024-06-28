import Image from 'next/image';

import RedArrowTopRight from '@/../public/assets/icons/redArrowTopRight.svg';

interface WhiteButtonProps {
  title: string;
}

const WhiteButton = ({ title }: WhiteButtonProps) => {
  return (
    <button
      className={
        ' bg-white text-black py-3 px-4 hover:bg-gray-300 transition duration-300 min-w-[180px] font-semibold flex justify-around items-center'
      }
    >
      <Image src={RedArrowTopRight} alt="red arrow" />
      {title}
    </button>
  );
};

export default WhiteButton;
