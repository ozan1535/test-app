"use client";
import React, { Component, ErrorInfo, useEffect } from "react";
import { useRouter } from "next/navigation";
import OfflineHandler from "../OfflineHandler/OfflineHandler";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useAppContext } from "@/app/context";
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorHandlerProps,
} from "./ErrorBoundary.types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorHandler errorOccurred={true} />;
    }

    return (
      <>
        <OfflineHandler />
        {this.props.children}
      </>
    );
  }
}

function ErrorHandler({ errorOccurred = false }: ErrorHandlerProps) {
  const { setModalProps } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (errorOccurred) {
      setModalProps((prev: any) => ({
        ...prev,
        isOpen: true,
        component: (
          <ErrorModal message="There was a problem. Click the button to return to the Home page." />
        ),
      }));
    }
  }, [errorOccurred, setModalProps]);

  return null;
}

export default ErrorBoundary;
