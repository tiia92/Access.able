import { useRef } from "react";
import { PromptInputTextarea } from "./ui/prompt-input";
import { useTypingAnimation } from "../hooks/typing-animation";

export function PromptInputTextareaWithTypingAnimation() {
  const placeholderRef = useRef<HTMLTextAreaElement>(null);

  const exampleIdeas = [
    "an accessible e-commerce platform with screen reader support",
    "a universally designed portfolio with keyboard navigation",
    "an inclusive dashboard with voice commands and high contrast",
    "an accessible learning platform for diverse abilities",
  ];

  const { displayText } = useTypingAnimation({
    texts: exampleIdeas,
    baseText: "I want to build",
    typingSpeed: 100,
    erasingSpeed: 50,
    pauseDuration: 2000,
    initialDelay: 500,
  });

  return (
    <PromptInputTextarea
      ref={placeholderRef}
      placeholder={displayText}
      className="min-h-[100px] w-full bg-transparent dark:bg-transparent backdrop-blur-sm pr-12"
      aria-label="Describe the accessible application you want to build"
      onBlur={() => {}}
    />
  );
}
