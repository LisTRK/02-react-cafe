import { useState } from "react";
import CafeInfo from "../CafeInfo/CofeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import Notification from '../Notification/Notification';
const App = () => {

  const [totalVote, setTotalVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const handleChoiceClick = (key: VoteType) => {
    setTotalVote({ ...totalVote, [key]: totalVote[key] + 1 });
  }
  
  const totalVotes = totalVote.good + totalVote.neutral + totalVote.bad;
  const positiveRate = totalVotes
    ? Math.round((totalVote.good / totalVotes) * 100)
    : 0

  const canReset = totalVotes ? true : false;
  
  return <div className={css.app} >
    <CafeInfo />
    <VoteOptions onVote={handleChoiceClick} onReset={() => setTotalVote({
      good: 0,
      neutral: 0,
      bad: 0
    })} canReset={canReset} />
    
    {totalVotes?<VoteStats votes={totalVote} totalVotes={totalVotes} positiveRate={positiveRate} />:<Notification />}
  </div>;

}

export default App;