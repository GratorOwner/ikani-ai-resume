import { useState } from "react";
import { Button, TextField, Alert, Box } from "@mui/material";
import axios from "axios";
import config from "../../config.json"
import { getNextResumeContextIdValue } from "../../lib/supabaseApi";

export function ResumeChunk() {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSave = async () => {
        setIsSubmitting(true);
        const tagsDelimited = (document.getElementById("tags") as HTMLInputElement).value;
        const arrayOfTags = tagsDelimited.split(",").map(s => s.trim());
        const payload = {
            id: getNextResumeContextIdValue(),
            authCode: (document.getElementById("authCode") as HTMLInputElement).value,
            skill: (document.getElementById("skill") as HTMLInputElement).value,
            location: (document.getElementById("location") as HTMLInputElement).value,
            summary: (document.getElementById("summary") as HTMLInputElement).value,
            example: (document.getElementById("example") as HTMLInputElement).value,
            impact: (document.getElementById("impact") as HTMLInputElement).value,
            tags: arrayOfTags,
        };

        try {
            console.log(`${config.aiResumeApiUrl}/addResumeContext`);
            console.log(payload);
            const res = await axios.post(`${config.aiResumeApiUrl}/addResumeContext`, payload);

            setAlertSeverity("success");
            setAlertMessage(res.data.message || "Chunk inserted successfully");
            setShowAlert(true);

        } catch (err: any) {
            const message =
                err.response?.data?.error ||
                err.message ||
                "Insert failed";

            setAlertSeverity("error");
            setAlertMessage(message);
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);

            // Auto-clear after 5 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    };

    return (
        <>
            {showAlert && (
                <Box mb={2}>
                    <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
                        {alertMessage}
                    </Alert>
                </Box>
            )}

            <TextField
                id="authCode"
                label="Authorization Code"
                variant="outlined"
                helperText="Auth code to add new chunk"
                required
            />
            <TextField id="skill" label="Skill" variant="outlined" />
            <TextField id="location" label="Location" variant="outlined" />
            <TextField id="summary" label="Summary" variant="outlined" />
            <TextField id="example" label="Example" variant="outlined" />
            <TextField id="impact" label="Impact" variant="outlined" />
            <TextField id="tags" label="Tags" helperText="Comma separated list" variant="outlined" />

            <br /><br />

            <Button variant="contained" onClick={handleSave} disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
            </Button>
        </>
    );
}
