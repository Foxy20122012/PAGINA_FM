import Link from "next/link";

function Card({ children, href }) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 border transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-600 cursor-pointer">
        {children}
      </div>
    </Link>
  );
}

Card.Title = function CardTitle({ children }) {
  return (
    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center hover:text-blue-600 transition-colors duration-300">
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({ children }) {
  return (
    <p className="text-sm text-gray-600 text-center hover:text-gray-800 transition-colors duration-300">
      {children}
    </p>
  );
};

export default Card;
