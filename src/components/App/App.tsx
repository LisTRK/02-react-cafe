import { useState } from "react";
import CafeInfo from "../CafeInfo/CofeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes } from "../../types/votes";
import Notification from '../Notification/Notification';
const App = () => {

  const [totalVote, setTotalVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const handleChoiceClick = (key: keyof Votes) => {
    setTotalVote({ ...totalVote, [key]: totalVote[key] + 1 });
  }
  
  const totalVotes = totalVote.good + totalVote.neutral + totalVote.bad;

  const canReset = totalVotes ? true : false;
  
  return <div className={css.app} >
    <CafeInfo />
    <VoteOptions onHandleChoiceClick={handleChoiceClick} onReset={() => setTotalVote({
      good: 0,
      neutral: 0,
      bad: 0
    })} canResetValue={canReset} />
    
    
    {totalVotes?<VoteStats onTotalVote={totalVote} totalValue={totalVotes} />:<Notification />}
  </div>;

}

export default App;