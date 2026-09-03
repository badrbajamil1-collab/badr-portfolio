"use client";

import { HandWrittenTitle } from "./hand-writing-text";

export function HandWrittenTitleDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HandWrittenTitle title="Kokonut UI" subtitle="Optional subtitle" />
    </div>
  );
}