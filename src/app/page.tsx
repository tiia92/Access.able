"use client";

import { useRouter } from "next/navigation";
import { PromptInput, PromptInputActions } from "@/components/ui/prompt-input";
import { FrameworkSelector } from "@/components/framework-selector";
import Image from "next/image";
import LogoSvg from "@/logo.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExampleButton } from "@/components/ExampleButton";
import { UserButton } from "@stackframe/stack";
import { UserApps } from "@/components/user-apps";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PromptInputTextareaWithTypingAnimation } from "@/components/prompt-input";

const queryClient = new QueryClient();

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [framework, setFramework] = useState("nextjs");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);

    router.push(
      `/app/new?message=${encodeURIComponent(prompt)}&template=${framework}`
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen p-4 relative">
        <div className="flex w-full justify-between items-center">
          <div className="text-lg font-bold flex-1 sm:w-80">
            <a href="https://www.freestyle.sh">freestyle.sh</a>
          </div>
          <Image
            className="dark:invert mx-2"
            src={LogoSvg}
            alt="Access.Able Logo - Universal Design AI Builder"
            width={36}
            height={36}
          />
          <div className="flex items-center gap-2 flex-1 sm:w-80 justify-end">
            <UserButton />
          </div>
        </div>

        <div>
          <div className="w-full max-w-lg px-4 sm:px-0 mx-auto flex flex-col items-center mt-16 sm:mt-24 md:mt-32 col-start-1 col-end-1 row-start-1 row-end-1 z-10">
            <div className="text-center mb-8">
              <h1 className="text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Access.Able
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                AI-powered app builder with Universal Design principles baked in. 
                Create accessible, inclusive experiences for everyone.
              </p>
            </div>

            <div className="w-full relative my-5">
              <div className="relative w-full max-w-full overflow-hidden">
                <div className="w-full bg-accent rounded-md relative z-10 border transition-colors">
                  <PromptInput
                    leftSlot={
                      <FrameworkSelector
                        value={framework}
                        onChange={setFramework}
                      />
                    }
                    isLoading={isLoading}
                    value={prompt}
                    onValueChange={setPrompt}
                    onSubmit={handleSubmit}
                    className="relative z-10 border-none bg-transparent shadow-none focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-200 transition-all duration-200 ease-in-out "
                  >
                    <PromptInputTextareaWithTypingAnimation />
                    <PromptInputActions>
                      <Button
                        variant={"default"}
                        size="sm"
                        onClick={handleSubmit}
                        disabled={isLoading || !prompt.trim()}
                        className="h-8 text-sm font-medium"
                        aria-label={isLoading ? "Creating accessible app..." : "Start creating accessible app"}
                      >
                        <span className="hidden sm:inline">
                          Build Accessible App ⏎
                        </span>
                        <span className="sm:hidden">Build ⏎</span>
                      </Button>
                    </PromptInputActions>
                  </PromptInput>
                </div>
              </div>
            </div>
            <Examples setPrompt={setPrompt} />
            <div className="mt-8 mb-16">
              <a
                href="https://freestyle.sh"
                className="border rounded-md px-4 py-2 mt-4 text-sm font-semibold transition-colors duration-200 ease-in-out cursor-pointer w-full max-w-72 text-center block hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Learn more about Freestyle.sh - JavaScript infrastructure for AI"
              >
                <span className="block font-bold">
                  By <span className="underline">freestyle.sh</span>
                </span>
                <span className="text-xs">
                  JavaScript infrastructure for AI.
                </span>
              </a>
            </div>
          </div>
        </div>
        <section className="border-t py-8 mx-0 sm:-mx-4" aria-labelledby="user-apps-heading">
          <h2 id="user-apps-heading" className="sr-only">Your Applications</h2>
          <UserApps />
        </section>
      </main>
    </QueryClientProvider>
  );
}

function Examples({ setPrompt }: { setPrompt: (text: string) => void }) {
  return (
    <div className="mt-2" role="region" aria-labelledby="examples-heading">
      <h3 id="examples-heading" className="sr-only">Example prompts to get started</h3>
      <div className="flex flex-wrap justify-center gap-2 px-2">
        <ExampleButton
          text="Accessible E-commerce"
          promptText="Build an accessible e-commerce site with screen reader support, keyboard navigation, and high contrast options for selling artisan goods."
          onClick={(text) => {
            console.log("Example clicked:", text);
            setPrompt(text);
          }}
        />
        <ExampleButton
          text="Inclusive Portfolio"
          promptText="Create an accessible personal portfolio with proper heading structure, alt text for images, and keyboard navigation for showcasing creative work."
          onClick={(text) => {
            console.log("Example clicked:", text);
            setPrompt(text);
          }}
        />
        <ExampleButton
          text="Universal Dashboard"
          promptText="Build a universally designed admin dashboard with voice commands, screen reader support, and customizable layouts for managing business operations."
          onClick={(text) => {
            console.log("Example clicked:", text);
            setPrompt(text);
          }}
        />
      </div>
    </div>
  );
}
