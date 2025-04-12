export default function Paragraph({
  text,
}: {
  text: string;
}) {
  return (
    <p className="mt-2 text-sm md:text-base font-medium w-fit hover:underline hover:text-white transition duration-300">
      {text}
    </p>
  );
}
