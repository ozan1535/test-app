import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context";

export default function ErrorModal({ message }: { message: string }) {
  const { setModalProps } = useAppContext();
  const router = useRouter();

  return (
    <div>
      <h2 className="text-lg text-center font-bold text-red-500">Error</h2>
      <p className="px-4">{message}</p>
      <div className="flex justify-end">
        {/* TODO: Fix the problem about redirection */}
        <Link
          href="/"
          className="mt-4 p-2 bg-blue-500 m-4 text-white rounded"
          onClick={() => {
            setModalProps((prev) => ({ ...prev, isOpen: false }));
          }}
        >
          Okay
        </Link>
      </div>
    </div>
  );
}
