type Props = {
  children: React.ReactNode;
  info: React.ReactNode;
};

export default function CityLayout({ children, info }: Props) {
  return (
    <div>
      <div className="w-50 flex">{info}</div>
      {children}
    </div>
  );
}
