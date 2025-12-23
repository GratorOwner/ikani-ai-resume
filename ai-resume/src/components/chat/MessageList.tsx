import { Box } from "@mui/material";
import type { ChatMessage } from "./types";
import { MessageBubble } from "./MessageBubble";
import { useChatScroll } from "./useChatScroll";

interface Props {
  messages: ChatMessage[];
}

export const MessageList = ({ messages }: Props) => {
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
    </Box>
  );
};