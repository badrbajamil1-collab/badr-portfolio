"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Textarea } from "./textarea";
import { cn } from "../../lib/utils";
import {
  ImageIcon,
  FileUp,
  LayoutGrid,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
  Sparkles,
  Code,
  PenTool,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`;

      const newHeight = Math.max(
        minHeight,
        Math.min(
          textarea.scrollHeight,
          maxHeight ?? Number.POSITIVE_INFINITY
        )
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "primary";
}

function ActionButton({ icon, label, variant = "default" }: ActionButtonProps) {
  const baseStyles = "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200";
  
  const variants = {
    default: "bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white",
    primary: "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10",
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, variants[variant])}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function VercelV0Chat() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 180,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
        adjustHeight(true);
      }
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>v0 by Vercel</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          What can I help you{' '}
          <span className="relative">
            <span className="relative z-10">ship?</span>
            <span className="absolute bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-violet-500/30 to-pink-500/30 rounded-full -z-10" />
          </span>
        </h1>
        <p className="text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          Describe any UI, component, or page — I'll generate the code instantly.
        </p>
      </div>

      {/* Main Input Area */}
      <div className="w-full">
        <div 
          className={cn(
            "relative rounded-2xl transition-all duration-300",
            isFocused
              ? "bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.4)]"
              : "bg-white/5 border border-white/10 hover:border-white/20"
          )}
        >
          {/* Subtle glow when focused */}
          {isFocused && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 via-transparent to-pink-500/20 opacity-50 blur-2xl -z-10" />
          )}

          <div className="p-1">
            <div className="relative bg-black/30 backdrop-blur-sm rounded-xl border border-white/5">
              <Textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  adjustHeight();
                }}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={'Try: "A modern pricing table with 3 tiers" or "A dark mode toggle component"'}
                className={cn(
                  "w-full px-5 py-4",
                  "resize-none",
                  "bg-transparent",
                  "border-none",
                  "text-white text-base leading-relaxed",
                  "focus:outline-none",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "placeholder:text-white/30 placeholder:text-base",
                  "min-h-[56px]",
                  "font-sans"
                )}
                style={{
                  overflow: "hidden",
                  lineHeight: 1.6,
                  fontSize: "16px",
                }}
              />
            </div>
          </div>

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-between px-1 py-3">
            {/* Left side - Attach/Project */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="group flex items-center gap-2 px-3 py-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                title="Attach files"
              >
                <Paperclip className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Attach</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                title="Add to project"
              >
                <PlusIcon className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Project</span>
              </button>
            </div>

            {/* Right side - Send */}
            <button
              type="button"
              disabled={!value.trim()}
              className={cn(
                "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                value.trim()
                  ? "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/20 hover:shadow-white/30 scale-[1.02]"
                  : "bg-white/5 text-white/40 border border-white/10 cursor-not-allowed"
              )}
              aria-label="Send message"
            >
              <ArrowUpIcon className={cn("w-5 h-5 transition-transform", value.trim() && "animate-pulse")} />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <ActionButton
            icon={<ImageIcon className="w-4.5 h-4.5" />}
            label="Clone Screenshot"
          />
          <ActionButton
            icon={<LayoutGrid className="w-4.5 h-4.5" />}
            label="Import from Figma"
          />
          <ActionButton
            icon={<FileUp className="w-4.5 h-4.5" />}
            label="Upload Project"
          />
          <ActionButton
            icon={<MonitorIcon className="w-4.5 h-4.5" />}
            label="Landing Page"
          />
          <ActionButton
            icon={<CircleUserRound className="w-4.5 h-4.5" />}
            label="Sign Up Form"
          />
          <ActionButton
            icon={<Code className="w-4.5 h-4.5" />}
            label="Dashboard"
          />
          <ActionButton
            icon={<PenTool className="w-4.5 h-4.5" />}
            label="Design System"
          />
          <ActionButton
            icon={<Sparkles className="w-4.5 h-4.5 text-violet-400" />}
            label="AI Components"
            variant="primary"
          />
          <ActionButton
            icon={<FileUp className="w-4.5 h-4.5" />}
            label="Blog Post"
          />
          <ActionButton
            icon={<MonitorIcon className="w-4.5 h-4.5" />}
            label="Mobile App"
          />
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-center text-white/30 text-sm">
          Press <kbd className="px-2 py-0.5 bg-white/10 border border-white/10 rounded text-white/60 font-mono text-xs">Enter</kbd> to send · <kbd className="px-2 py-0.5 bg-white/10 border border-white/10 rounded text-white/60 font-mono text-xs">Shift+Enter</kbd> for new line
        </p>
      </div>
    </div>
  );
}