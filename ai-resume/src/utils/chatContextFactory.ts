import type { AgentContext } from "../types/AgentContext";

export const createEmptyAgentContext = (): AgentContext => ({
    id: "",
    created_at: "",
    code: "",
    company_name: "",
    company_slug: "",
    role_title: "",
    role_slug: "",
    job_posting_url: "",
    status: "",
    qdrant_collection: "",
    company_context: "",
    job_description: "",
    mapping: "",
    sessionId: ""
});
