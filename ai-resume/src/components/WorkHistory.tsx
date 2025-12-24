import { Card, CardContent, Slider } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchWorkHistory } from '../lib/supabaseApi';
import type { WorkHistoryItem } from '../types/WorkHistoryItem';

const philWorkHistoryDummy = [
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
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
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
                    width: "400px",
                    height: "260px",
                }}
            >
                {philWorkHistoryDummy.map((job, index) => {
                    // Each card’s x-position is based on slider value
                    const x = useTransform(
                        sliderValue,
                        [index - 1, index, index + 1],
                        ["100%", "0%", "-100%"]
                    );

                    const opacity = useTransform(
                        sliderValue,
                        [index - 0.5, index, index + 0.5],
                        [0, 1, 0]
                    );

                    return (
                        <motion.div
                            key={job.id}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                x,
                                opacity,
                            }}
                        >
                            <Card elevation={6} sx={{ height: "100%" }}>
                                <CardContent>
                                    <h2>{job.title}</h2>
                                    <p>{job.company}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            {/* Slider */}
            <Slider
                min={0}
                max={philWorkHistoryDummy.length - 1}
                step={0.01}
                defaultValue={0}
                onChange={(e, v) => sliderValue.set(v as number)}
                sx={{ width: 300 }}
            />
        </div>
    );
}