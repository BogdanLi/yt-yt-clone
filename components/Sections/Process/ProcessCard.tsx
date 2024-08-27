interface Props {
  step: string;
  title: string;
  description: string;
}

const ProcessCard = ({ step, title, description }: Props) => {
  return (
    <div className={step !== "01" ? `lg:border-s lg:ps-12` : ""}>
      <h1 className="text-[50px] font-bold text-primary lg:text-[64px]">
        {step}
      </h1>
      <p className="text-xl font-semibold lg:text-2xl">{title}</p>
      <p className="mt-3 text-xs lg:text-base">{description}</p>
    </div>
  );
};

export default ProcessCard;
