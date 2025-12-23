import { Box, Paper, Typography } from "@mui/material";
import type { ChatMessage } from "./types";

interface Props {
  message: ChatMessage;
}

export const MessageBubble = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      mb={1.5}
    >
      <Paper
        elevation={1}
        sx={{
          p: 1.5,
          maxWidth: "75%",
          bgcolor: isUser ? "primary.main" : "grey.200",
          color: isUser ? "primary.contrastText" : "text.primary",
          borderRadius: 2,
        }}
      >
        <Typography variant="body2">{message.content}</Typography>
      </Paper>
    </Box>
  );
};