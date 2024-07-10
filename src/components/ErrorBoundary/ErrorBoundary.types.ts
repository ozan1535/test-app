import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorHandlerProps {
  errorOccurred?: boolean;
}
