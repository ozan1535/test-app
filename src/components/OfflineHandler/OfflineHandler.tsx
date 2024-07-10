"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context";
import ErrorModal from "../ErrorModal/ErrorModal";

export default function OfflineHandler() {
  const { setModalProps } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    const handleOffline = () => {
      setModalProps((prev) => ({
        ...prev,
        isOpen: true,
        component: (
          <ErrorModal message="It looks like you're offline. Please check your internet connection." />
        ),
      }));
    };

    const handleOnline = () => {
      setModalProps((prev) => ({
        ...prev,
        isOpen: false,
        component: null,
      }));
      router.refresh();
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [setModalProps]);

  return null;
}
