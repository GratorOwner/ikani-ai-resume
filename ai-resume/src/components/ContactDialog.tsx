// ContactDialog.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";

interface ContactDialogProps { open: boolean; onClose: () => void; }

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Philip contact details:</DialogTitle>
      <DialogContent>
        <p>LinkedIn: https://www.linkedin.com/in/philip-ikani-0b341867</p>
        <p>Email: philikani@yahoo.com</p>
      </DialogContent>
    </Dialog>
  );
}