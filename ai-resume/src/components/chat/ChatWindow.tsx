import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import type { ChatMessage } from "./types";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { GetChatResponse } from "../../lib/aiChatProvider";

export const ChatWindow = () => {
  const initialAiMsg: ChatMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content: "Hello! I'm Oli. Philip's AI resume assistant. My job is to give concise answers " + 
              "regarding Philip's software development experience.",
    timestamp: Date.now(),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialAiMsg]);

  const handleSend = (content: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    //Api call happens here

    GetChatResponse(content).then((e: string) => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        //content: `You said: "${content}". I’ll eventually be powered by Philip’s AI resume engine.`,
        content: e,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
      
    })

    /*setTimeout(() => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `You said: "${content}". I’ll eventually be powered by Philip’s AI resume engine.`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 600);*/
  };

  return (
    <div className="chat-wrapper panel">
      <div className="chat-window">
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 600,
            height: 500,
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
      </div>
    </div>
  );
};