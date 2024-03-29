'use client'

import {useState} from "react";

const distanceMarathon = 42.195;

function Marathon() {


    const [time, setTime] = useState<string>('00:00:00');
    const [pace, setPace] = useState<string>();

    const calculatePace = () => {
        setPace(preparePace(time));
    }

    return (
        <>
            <h1>Marathon</h1>
            <div>
                <div>
                    <label>Time:</label>
                    <input type='text' onChange={(e) => setTime(e.target.value)} placeholder="HH:MM:SS"/>
                </div>
                <div>
                    <button onClick={calculatePace}>Calculate</button>
                </div>
            </div>
            {pace &&
                (<div>
                    Your pace is {pace}
                </div>)
            }
        </>
    )
}

function preparePace(time: string): string {
    const valueExpressedInMinutes = convertTimeToMinutes(time) / distanceMarathon;
    return convertPaceToReadableFormat(valueExpressedInMinutes);
}

function convertTimeToMinutes(time: string): number {
    let timeArray = time.split(":");
    let date = new Date(0, 0, 0, parseInt(timeArray[0]), parseInt(timeArray[1]), parseInt(timeArray[2]));
    return date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60;
}

function convertPaceToReadableFormat(time: number): string {
    const restInMinutes = parseFloat((time - Math.floor(time)).toFixed(2));
    const restInSeconds = 60 * restInMinutes;
    return `${Math.floor(time)} minutes ${Math.floor(restInSeconds)} seconds`;
}

export default Marathon