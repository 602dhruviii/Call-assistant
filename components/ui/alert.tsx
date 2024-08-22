import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AlertProps {
  color?: "success" | "warning" | "danger";
  dismissible?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  color = "success",
  dismissible = false,
  onClose,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "p-4 rounded-md",
        color === "success" && "bg-green-500 text-white",
        color === "warning" && "bg-yellow-500 text-black",
        color === "danger" && "bg-red-500 text-white"
      )}
    >
      <div className="flex justify-between items-center">
        <div>{children}</div>
        {dismissible && (
          <button
            className="ml-4 text-lg font-semibold"
            onClick={handleClose}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

// Usage example:
// <Alert color="success" dismissible onClose={() => alert('Closed')}>
//   Call placed successfully!
// </Alert>
