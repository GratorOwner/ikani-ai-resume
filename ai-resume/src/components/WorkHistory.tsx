import { Card, CardContent, Slider } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function createSafeSupabaseClient(): SupabaseClient | null {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

    // Basic validation
    if (!url || !key) {
        console.error("Supabase env vars missing");
        return null;
    }

    try {
        return createClient(url, key);
    } catch (err) {
        console.error("Failed to create Supabase client:", err);
        return null;
    }
}

const philWorkHistoryDummy = [
    { id: 0, title: "Software Engineer", company: "Acme Corp" },
    { id: 1, title: "Senior Engineer", company: "Globex" },
    { id: 2, title: "Lead Developer", company: "Initech" },
    { id: 3, title: "Principal Engineer", company: "Umbrella" },
]; 

export default function WorkHistory() {
    const supabase = createSafeSupabaseClient();

    if (!supabase) {
        return (
            <div style={{ padding: 20, color: "red" }}>
                Could not initialize database connection.
            </div>
        );
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ["workHistory"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("work_history")
                .select("*")
                .order("start_date", { ascending: false });

            if (error) throw error;
            return data;
        },
    });

    const sliderValue = useMotionValue(0);

    if (isLoading) return <div>Loading your timeline…</div>;
    if (error) return <div>Could not load work history.</div>;

    const workHistory = data;

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