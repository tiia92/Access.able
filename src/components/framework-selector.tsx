"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { templates } from "@/lib/templates";

type FrameworkSelectorProps = {
  value?: keyof typeof templates;
  onChange: (value: keyof typeof templates) => void;
  className?: string;
};

export function FrameworkSelector({
  value = "nextjs",
  onChange,
  className,
}: FrameworkSelectorProps) {
  return (
    <div className={cn("relative", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-2 px-3 text-sm bg-transparent border-none hover:bg-accent hover:bg-opacity-50 shadow-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            style={{ boxShadow: "none" }}
            aria-label={`Selected framework: ${templates[value].name}. Click to change framework.`}
          >
            <Image
              src={templates[value].logo}
              alt={templates[value].name}
              width={16}
              height={16}
              className="opacity-90"
            />
            {templates[value].name}
            <ChevronDownIcon className="h-3 w-3 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="min-w-[8rem] !shadow-none border border-gray-200"
          style={{ boxShadow: "none" }}
          role="menu"
          aria-label="Select framework for your accessible app"
        >
          {Object.entries(templates).map(([key, template]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => onChange(key)}
              className="gap-2 text-xs"
              role="menuitem"
              aria-label={`Select ${template.name} framework`}
            >
              <Image
                src={template.logo}
                alt={template.name}
                width={16}
                height={16}
                className="opacity-90"
              />
              {templates[key].name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
