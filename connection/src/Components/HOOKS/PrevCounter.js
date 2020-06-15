import React from 'react';
function PrevCounter() {
    const intialcount=0;
    const [count,setcount]=React.useState(0);
    const incrementcounterfive=()=> {
        for(let i=0;i<=4;i++) {
            setcount(previousState=>previousState+1)
        }
    }
    const incrementcounterten=()=> {
        for(let i=0;i<=9;i++) {
            setcount(previousState=>previousState+1)
        }
    }
        const incrementcounterfifty=()=> {
            for(let i=0;i<=49;i++) {
                setcount(previousState=>previousState+1)
            }
        }
    return (
        <div>
            <h2> this is a previoius state component</h2>
            <div>
                count:{count}
                <button onClick={()=>setcount(intialcount)}>RESET</button>
                <button onClick={()=>setcount(previousState=>previousState+1)}>INCREMENT</button>
                <button onClick={()=>setcount(previousState=>previousState-1)}>DECREMENT</button>
                <button onClick={incrementcounterfive}>INCREMENT 5</button>
                <button onClick={incrementcounterten}>INCREMENT 10</button>
                <button onClick={incrementcounterfifty}>INCREMENT 50</button>
            </div>
        </div>
    )
}

export default PrevCounter