import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const TeachingCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex max-w-80 flex-col items-center justify-center gap-5 rounded-[32px] bg-[#edf2f5] p-8 text-center">
      <Image src={src} alt="" width={60} height={60} />
      <div className="space-y-2">
        <h1 className="font-semibold">{title}</h1>
        <p className="px-4 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeachingCard;
