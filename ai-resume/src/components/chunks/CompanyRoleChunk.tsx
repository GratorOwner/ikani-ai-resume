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
            companyId: (document.getElementById("companyId") as HTMLInputElement).value,
            companySlug: (document.getElementById("companySlug") as HTMLInputElement).value,
            roleTitle: (document.getElementById("roleTitle") as HTMLInputElement).value,
            roleSlug: (document.getElementById("roleSlug") as HTMLInputElement).value,
            jobUrl: (document.getElementById("jobUrl") as HTMLInputElement).value,
            status: (document.getElementById("status") as HTMLInputElement).value,
            qdrantColl: (document.getElementById("qdrantColl") as HTMLInputElement).value,
            chunkTyp: (document.getElementById("chunkTyp") as HTMLInputElement).value,
            chunkText: (document.getElementById("chunkText") as HTMLInputElement).value,
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
            <TextField id="companyId" label="Company Name" variant="outlined" />
            <TextField id="companySlug" label="Company Slug" variant="outlined" />
            <TextField id="roleTitle" label="Role Title" variant="outlined" />
            <TextField id="roleSlug" label="Role Slug" variant="outlined" />
            <TextField id="jobUrl" label="Job Url" variant="outlined" />
            <TextField id="status" label="Status" variant="outlined" />
            <TextField id="qdrantColl" label="Qdrant Collection name" variant="outlined" />
            <br/><br/>

            <TextField id="chunkTyp" label="Chunk Type" variant="outlined" />
            <TextField id="chunkText" label="Chunk Text" variant="outlined" />

            <Button variant="contained" onClick={handleSave} disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
            </Button>
        </Box>
    );
}
