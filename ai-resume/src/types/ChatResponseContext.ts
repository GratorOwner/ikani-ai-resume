import type { AgentContext } from "./AgentContext";

export interface ChatResponseContext {
    question: string,
    context: AgentContext | undefined
}