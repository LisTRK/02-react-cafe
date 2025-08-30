import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
    onReset: () => void;
    onHandleChoiceClick: ([key]: 'good' | 'neutral' | 'bad') => void;
    
    canResetValue: boolean;
}

const VoteOptions = ({onHandleChoiceClick, onReset, canResetValue}: VoteOptionsProps ) => {
    return <div className={css.container}>
        <button onClick={()=>{onHandleChoiceClick(`good`)}} className={css.button}>Good</button>
        <button onClick={()=>{onHandleChoiceClick(`neutral`)}} className={css.button}>Neutral</button>
        <button onClick={()=>{onHandleChoiceClick(`bad`)}} className={css.button}>Bad</button>
        
        {canResetValue&&<button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>}
    </div>;
}

export default VoteOptions;