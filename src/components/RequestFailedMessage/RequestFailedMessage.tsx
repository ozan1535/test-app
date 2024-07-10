import { useAppContext } from "@/app/context";
import Button from "../Button/Button";

export default function RequestFailedMessage() {
  const { setModalProps } = useAppContext();
  return (
    <div className="p-5">
      <p className="mb-2">
        <b>Error:</b> A server error happened. Please try again later.
      </p>
      <Button
        isButtonSecondary={false}
        handleFunction={() =>
          setModalProps((prev) => ({
            ...prev,
            isOpen: false,
            component: null,
          }))
        }
        type="button"
        name="Okay"
      />
    </div>
  );
}
