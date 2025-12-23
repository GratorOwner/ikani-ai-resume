import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import type { ChatMessage } from "./types";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = (content: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Placeholder for your AI pipeline
    setTimeout(() => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `You said: "${content}". I’ll eventually be powered by Philip’s AI resume engine.`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 480,
        height: 600,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
        <Typography variant="h6" fontWeight={600}>
          Chat with Philip’s AI
        </Typography>
      </Box>

      <MessageList messages={messages} />

      <ChatInput onSend={handleSend} />
    </Paper>
  );
};