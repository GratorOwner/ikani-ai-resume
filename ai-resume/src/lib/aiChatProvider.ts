//This file contains the api calls that can be made to the backend for 
//chat responses.

import axios from 'axios';
import config from '../config.json';
import type { AgentContext } from '../types/AgentContext';
import type { ChatResponseContext } from '../types/ChatResponseContext';


export async function GetChatResponse(question: string, context: AgentContext | undefined){

    const chatResponseContext: ChatResponseContext = {
        question: question,
        aiContext: context
    }
    
    return axios
        .post(`${config.chatResponseUrl}/ask`, {chatResponseContext})
        .then((e) => {
            //console.log(e);
            return e.data.answer;
        })
        .catch((error) => {
            
            //I should log these errors, maybe in a log file.
            //Don't show them to the user.
            //console.error("Error fetching data:", error);
            //return `Could not get assistant response. Error was: ${error}`;
            console.error(error);
            return "Oops. I apologize but it looks like I couldn't answer your question at the moment. " + 
            "I've reached out to Philip to get this fixed as soon as possible. Thank you for your patience."
        });
}