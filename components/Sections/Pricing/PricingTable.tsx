const items = [
  {
    id: 1,
    title: "Введение в программирование",
    price: "Бесплатно",
    time: "0.5",
  },
  {
    id: 2,
    title: "Основы программирования на Python",
    price: "9 900",
    time: "1",
  },
  {
    id: 3,
    title: "Python, продвинутый уровень",
    price: "14 900",
    time: "2.5",
  },
  {
    id: 4,
    title: "Сети + фреймворк Flask",
    price: "14 900",
    time: "2.5",
  },
  {
    id: 5,
    title: "Базы данных",
    price: "14 900",
    time: "2",
  },
  {
    id: 6,
    title: "Фреймворк Django",
    price: "14 900",
    time: "2",
  },
  {
    id: 7,
    title: "Разработка «боевого» проекта ",
    price: "9 900",
    time: "1.5",
  },
];

const PricingTable = () => {
  return (
    <div className="min-w-[960px]">
      <div className="grid grid-cols-12 p-4 font-bold text-primary">
        <div className="col-span-7">Блок</div>
        <div className="col-span-2">Стоимость (Р)</div>
        <div className="col-span-3">Расчетное время обучения (мес.) *</div>
      </div>
      {items.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
      <div className="grid grid-cols-12 p-4 font-bold">
        <div className="col-span-7">Итого</div>
        <div className="col-span-2">79 400</div>
        <div className="col-span-3">12</div>
      </div>
    </div>
  );
};

export default PricingTable;

function ListItem({
  title,
  price,
  time,
}: {
  title: string;
  price: string;
  time: string;
}) {
  return (
    <div className="grid grid-cols-12 p-4 odd:bg-gray">
      <div className="col-span-7">{title}</div>
      <div className="col-span-2">{price}</div>
      <div className="col-span-3">{time}</div>
    </div>
  );
}
