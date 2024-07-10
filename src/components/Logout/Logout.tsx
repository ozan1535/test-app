import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ILogout } from "./Logout.types";

export default function Logout({ setModalProps }: ILogout) {
  const { data: session } = useSession();
  return (
    <div className="h-44 flex flex-col justify-center items-center">
      <Link
        href="/profile"
        className="text-blue-500 flex flex-col items-center "
        onClick={() => {
          setModalProps((prev) => ({
            ...prev,
            isOpen: false,
            component: null,
          }));
        }}
      >
        <Image
          src={session?.user?.image || ""}
          width={50}
          height={50}
          alt="asdf"
          className="rounded-full"
        />
        Your Profile
      </Link>

      <button
        className="bg-slate-300 p-3 mt-4 rounded hover:bg-blue-100"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
