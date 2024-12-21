export default function Title({
  children,
  size = 1,
}: {
  children: string;
  size: 1 | 2 | 3;
}) {
  if (size == 3) {
    return <h1 className="text-6xl font-semibold">{children}</h1>;
  } else if (size == 2) {
    return <h1 className="text-4xl font-semibold">{children}</h1>;
  } else if (size == 1) {
    return <h1 className="text-2xl font-semibold">{children}</h1>;
  }
}
