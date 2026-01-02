import { Slider } from '@mui/material'
import { useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchWorkHistory } from '../lib/supabaseApi';
import type { WorkHistoryItem } from '../types/WorkHistoryItem';
import WorkHistoryCard from './WorkHistoryCard';

export default function WorkHistory() {
    const [workHistoryItems, setWorkHistoryItems] = useState<WorkHistoryItem[]>([]);
    const [workHistoryError, setWorkHistoryError] = useState(false);

    useEffect(() => {
        fetchWorkHistory()
            .then((data) => {
                //console.log('Data returned was: ', data);
                setWorkHistoryItems(data);})
            .catch((err) => {
                console.error("Failed to load work history:", err);
                setWorkHistoryError(true)
            });
    }, []);

    if (workHistoryError) {
        return (
            <div style={{ padding: 20, color: "red" }}>
                Could not initialize database connection.
            </div>
        );
    }

    const sliderValue = useMotionValue(0);

    return (
        <div className='panel'
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                position: "relative",
            }}
        >
            {/* Card stack */}
            <div
                style={{
                    position: "relative",
                    width: "600px",
                    height: "350px",
                }}
            >
                {workHistoryItems.map((job, index) => (
                    <WorkHistoryCard
                        key={job.id}
                        job={job}
                        index={index}
                        sliderValue={sliderValue}
                    />
                ))}
            </div>

            {/* Slider */}
            <Slider
                min={0}
                max={workHistoryItems.length - 1}
                step={0.01}
                defaultValue={0}
                onChange={(_, v) => sliderValue.set(v as number)}
                sx={{ width: 300 }}
            />
        </div>
    );
}