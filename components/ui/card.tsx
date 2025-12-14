// components/Card.tsx
export default function Card({ title, text }: { title?: string; text?: string }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center text-center">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      <p className="text-gray-600">{text || "This is a card component"}</p>
    </div>
  );
}
