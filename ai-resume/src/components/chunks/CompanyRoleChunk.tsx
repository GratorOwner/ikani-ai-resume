import { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import axios from "axios";
import config from "../../config.json"

export function CompanyRoleChunk() {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");
    const [showAlert, setShowAlert] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSave = async () => {
        setIsSubmitting(true);

        const payload = {
            authCode: (document.getElementById("authCode") as HTMLInputElement).value,
            code: (document.getElementById("code") as HTMLInputElement).value,
            chunkTyp: (document.getElementById("chunkTyp") as HTMLInputElement).value,
            chunkText: (document.getElementById("chunkText") as HTMLInputElement).value,
            id: -1
        };

        try {
            const res = await axios.post(`${config.aiResumeApiUrl}/addCompanyRoleChunk`, payload);

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
        <Box>
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
            <br/><br/>

            <TextField id="code" label="Code" variant="outlined" />

            {/**This should be read only. The chunk id is an auto-generated uuid */}
            {/*<TextField id="chunkId" label="Chunk Id" variant="outlined" /> */}
            <br/><br/>

            <TextField id="chunkTyp" label="Chunk Type" variant="outlined" />
            <TextField id="chunkText" label="Chunk Text" variant="outlined" />

            <Button variant="contained" onClick={handleSave} disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
            </Button>
        </Box>
    );
}
