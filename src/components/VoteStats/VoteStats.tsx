import type { Votes } from "../../types/votes";
import styles from "./VoteStats.module.css";

interface VoteStatsProps  {
    onTotalVote: Votes;
    totalValue: number;
}

const VoteStats = ({ onTotalVote, totalValue }: VoteStatsProps) => {
    const positiveRate = totalValue
    ? Math.round((onTotalVote.good / totalValue) * 100)
    : 0

    return <div className={styles.container}>
        <p className={styles.stat}>Good: <strong>{ onTotalVote.good}</strong></p>
        <p className={styles.stat}>Neutral: <strong>{ onTotalVote.neutral}</strong></p>
        <p className={styles.stat}>Bad: <strong>{ onTotalVote.bad}</strong></p>
        <p className={styles.stat}>Total: <strong>{totalValue}</strong></p>
        <p className={styles.stat}>Positive: <strong>{ positiveRate}%</strong></p>
    </div>;
}

export default VoteStats;