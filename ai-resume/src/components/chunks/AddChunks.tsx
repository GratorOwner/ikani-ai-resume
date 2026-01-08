import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ResumeChunk } from './ResumeChunk';
import { CompanyRoleChunk } from './CompanyRoleChunk';

export function AddChunks() {
    const [value, setValue] = useState('1');

    const handleChange = (_: any, newValue: string) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Add resume chunks" value="1" />
                        <Tab label="Add company/role chunks" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ResumeChunk />
                </TabPanel>
                <TabPanel value="2">
                    <CompanyRoleChunk />
                </TabPanel>
            </TabContext>
        </Box>
    )
}