import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
  onFocus: () => void;
  disableInput: boolean;
}

export const ChatInput = ({ onSend, onFocus, disableInput }: Props) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid",
        borderColor: "divider",
        display: "flex",
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        size="small"
        disabled={disableInput}
        placeholder="Type a question here…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleSend();
          onFocus();
        } }
        onFocus={onFocus}
      />
      <IconButton color="primary" onClick={handleSend} disabled={disableInput}>
        <SendIcon className="chat-send-icon" />
      </IconButton>
    </Box>
  );
};