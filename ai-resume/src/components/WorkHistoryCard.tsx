import { motion, useTransform } from "motion/react";
import type { WorkHistoryItem } from "../types/WorkHistoryItem";
import { Card, CardContent } from "@mui/material";

export default function WorkHistoryCard({
  job,
  index,
  sliderValue
}: {
  job: WorkHistoryItem;
  index: number;
  sliderValue: any;
}) {
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
      <Card className="historyCard" elevation={6}
        sx={{ height: "100%", overflow: "auto !important", borderRadius: "8px" }}>
        <CardContent sx={{ overflow: "auto" }}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}