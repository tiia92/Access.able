"use client";

import React from "react";
import { Button } from "./ui/button";

interface ExampleButtonProps {
  text: string;
  promptText: string;
  onClick: (text: string) => void;
  className?: string;
}

export function ExampleButton({
  text,
  promptText,
  onClick,
  className,
}: ExampleButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className={`hover:bg-accent hover:border-accent-foreground focus:bg-accent focus:border-accent-foreground active:scale-95 transition-all duration-200 rounded-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        className || ""
      }`}
      onClick={() => onClick(promptText)}
      type="button"
      aria-label={`Example prompt: ${promptText}`}
    >
      {text}
    </Button>
  );
}
