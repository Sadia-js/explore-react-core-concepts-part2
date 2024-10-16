import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
        
    }
    const removePlayer = () => {
        setTeam(team - 1);
    }
    const playersStyle = {
        border: '2px solid tomato',
        margin: '10px',
        padding: '20px',
        borderRadius : '20px'
    }
    return(
        <div style={playersStyle}>
            <h3>Players : {team}</h3>
            <button onClick={addPlayer}>Player add</button>
            <button onClick={removePlayer}>Player remove</button>
        </div>
    )
}