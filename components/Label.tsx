export default function Label({ children, color }) {
  const colors = {
    green: "text-emerald-700",
    orange: "text-orange-700",
    blue: "text-blue-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };

  return (
    <span
      className={`inline-block mt-5 text-xs font-light tracking-wider uppercase ${colors[color]}`}
    >
      {children}
    </span>
  );
}
