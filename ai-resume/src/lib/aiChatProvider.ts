//This file contains the api calls that can be made to the backend for 
//chat responses.

import axios from 'axios';
import config from '../config.json';
import type { AgentContext } from '../types/AgentContext';


export async function GetChatResponse(question: string, context: AgentContext | undefined){
    const payload: any = { question }; 

    if (context !== undefined) { payload.context = context; }

    console.log("Chat context was: ", payload)

    return axios
        .post(`${config.aiResumeApiUrl}/ask`, payload)
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