import type { AgentContext } from "./AgentContext";

export interface ChatResponseContext {
    question: string,
    aiContext: AgentContext | undefined
}