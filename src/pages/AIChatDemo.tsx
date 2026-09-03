import { VercelV0Chat } from "../components/ui/v0-ai-chat";
import "./AIChatDemo.css";

export function AIChatDemo() {
  return (
    <div className="ai-chat-demo">
      <div className="content-wrapper">
        <VercelV0Chat />
      </div>
    </div>
  );
}