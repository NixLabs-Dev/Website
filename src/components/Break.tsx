export default function Break({
  text = "",
  gap = 0,
}: {
  text?: string;
  gap?: number;
}) {
  return (
    <div
      className={`relative flex py-5 items-center`}
      style={{ marginTop: `${gap}rem` }}
    >
      <div className="flex-grow border-t border-zinc-800"></div>
      {text != "" ? (
        <span className="flex-shrink mx-4 text-zinc-600 text-lg">{text}</span>
      ) : (
        <></>
      )}
      <div className="flex-grow border-t border-zinc-800"></div>
    </div>
  );
}
