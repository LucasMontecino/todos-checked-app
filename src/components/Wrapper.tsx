import { ReactNode } from 'react';

export default function Wrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="max-w-[1280px] min-h-screen my-0 mx-auto p-8 text-center flex flex-col items-center">
      {children}
    </div>
  );
}
