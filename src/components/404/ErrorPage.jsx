import Link from "next/link";
import Image from "next/image";

export function ErrorPage({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-gray-800 px-6">
      <div className="max-w-5xl w-full animate-fadeIn">{children}</div>
    </div>
  );
}

export function ErrorImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="rounded-lg shadow-lg animate-slideIn"
    />
  );
}

export function ErrorTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-pulse">
      {children}
    </h1>
  );
}

export function ErrorMessage({ children }) {
  return (
    <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
      {children}
    </p>
  );
}

export function ErrorButton({ children, href, variant = "filled" }) {
  const baseClasses =
    "px-6 py-3 text-lg rounded-full shadow transition-all duration-300";
  const filledClasses = "bg-gray-800 text-white hover:bg-gray-700";
  const outlineClasses =
    "border-2 border-gray-800 text-gray-800 hover:bg-gray-100";
  const variantClasses =
    variant === "filled" ? filledClasses : outlineClasses;

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
