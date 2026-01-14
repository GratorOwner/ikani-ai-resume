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
      <DialogTitle>Philip Ikani's contact details:</DialogTitle>
      <DialogContent>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/philip-ikani-0b341867" target="_blank">https://www.linkedin.com/in/philip-ikani-0b341867</a></p>
        <p>Email: philikani@yahoo.com</p>
      </DialogContent>
    </Dialog>
  );
}