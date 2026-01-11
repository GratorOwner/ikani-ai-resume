import axios from 'axios';
import config from '../config.json';

export async function GetNextResumeSkillId() {
    return axios.get(`${config.aiResumeApiUrl}/getNextResumeSkillId`).then((e) => {
        return e.data.nextId;
    });
}