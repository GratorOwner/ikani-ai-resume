import { Box, Paper, Typography } from "@mui/material";
import { fetchAiSeedData } from "../../lib/supabaseApi";
import { useState, useEffect } from "react";
import type { ChatMessage } from "./types";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { GetChatResponse } from "../../lib/aiChatProvider";
import { useParams } from "react-router-dom";
import config from "../../config.json";
import type { AgentContext } from "../../types/AgentContext";

export const ChatWindow = () => {
  const {code} = useParams();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isAnswering, setIsAnswering] = useState(false);
  const [answeredSuccess, setAnswerSuccess] = useState(false);
  const [aiAgentContext, setAiAgentContext] = useState<AgentContext>();
  
  useEffect(() => {
    if(code != undefined){
      fetchAiSeedData(code).then((resultObj) => {
        setAiAgentContext(resultObj);

        setMessages([{
        id: crypto.randomUUID(),
        role: "assistant",
        content: config.aiMessageCustom.replace(":companyName", resultObj.company_name),
        timestamp: Date.now(),
      }]);
      })
      .catch(() => {
        //TODO: Log the error. 
        //      Fall back on generic ai agent
        setMessages([{
          id: crypto.randomUUID(),
          role: "assistant",
          content: config.aiMessageGeneric,
          timestamp: Date.now(),
        }]);
      })
    }
    else{
      setMessages([{
        id: crypto.randomUUID(),
        role: "assistant",
        content: config.aiMessageGeneric,
        timestamp: Date.now(),
      }]);
    }
    
  }, []);

  const handleChatWindowShadowColor = (state: string) => {
    const aiWindowObject = (document.getElementById("aiChatWindow")) as HTMLDivElement;
    switch (state) {
      case "typing":
        aiWindowObject.className = "chat-window";
      break;
      case "answering":
        aiWindowObject.className = "chat-window chat-window--active";
      break;
      case "answered":
        aiWindowObject.className = "chat-window chat-window--answeredSuccess";
      break;
      default:
        break;
    }
  }

  const handleChatInputFocus = () => {
    handleChatWindowShadowColor("typing");
  }

  const handleSend = (content: string) => {
    handleChatWindowShadowColor("answering");
    //setIsAnswering(true);
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    //Api call happens here

    GetChatResponse(content, aiAgentContext).then((e: string) => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: e,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
      handleChatWindowShadowColor("answered");
      
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
      <div id="aiChatWindow">
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
            <Typography variant="h6" fontWeight={600} style={{justifySelf: "center"}}>
              Chat with Philip’s AI
            </Typography>
          </Box>

          <MessageList messages={messages} />

          <ChatInput onSend={handleSend} onFocus={handleChatInputFocus} />
        </Paper>
      </div>
    </div>
  );
};