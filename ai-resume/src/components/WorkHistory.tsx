import { Card, CardContent, Slider } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchWorkHistory } from '../lib/supabaseApi';
import type { WorkHistoryItem } from '../types/WorkHistoryItem';
import WorkHistoryCard from './WorkHistoryCard';

const workHistoryItems = [
    { id: 0, title: "Software Engineer", company: "Acme Corp" },
    { id: 1, title: "Senior Engineer", company: "Globex" },
    { id: 2, title: "Lead Developer", company: "Initech" },
    { id: 3, title: "Principal Engineer", company: "Umbrella" },
];

export default function WorkHistory() {
    const [workHistoryItems, setWorkHistoryItems] = useState<WorkHistoryItem[]>([]);
    const [workHistoryError, setWorkHistoryError] = useState(false);

    useEffect(() => {
        fetchWorkHistory()
            //.then(setWorkHistoryItems)
            //Test code. Comment out below.
            .then((data) => {
                console.log('Data returned was: ', data);
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
                onChange={(e, v) => sliderValue.set(v as number)}
                sx={{ width: 300 }}
            />
        </div>
    );
}