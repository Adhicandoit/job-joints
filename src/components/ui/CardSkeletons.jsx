export default function CardSkeletons({ count = 3, height = 'h-56', cols = 'md:grid-cols-3' }) {
  return (
    <div className={`grid gap-6 ${cols}`} aria-busy="true">
      {Array.from({ length: count }, (_, i) => <div key={i} className={`skeleton ${height}`} />)}
    </div>
  );
}
