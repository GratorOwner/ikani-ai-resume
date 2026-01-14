import { Box } from "@mui/material";
import type { ChatMessage } from "./types";
import { MessageBubble } from "./MessageBubble";
import { useChatScroll } from "./useChatScroll";

interface Props {
  messages: ChatMessage[];
  isAnswering: boolean;
}

export const MessageList = ({ messages, isAnswering }: Props) => {
  const scrollRef = useChatScroll<HTMLDivElement>([messages]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        flex: 1,
        overflowY: "auto",
        p: 2,
        bgcolor: "background.default",
      }}
    >
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}

      {isAnswering && (
        <div className="typing-indicator">
          <div></div>
          <div></div>
          <div></div>
        </div>)}
    </Box>
  );
};