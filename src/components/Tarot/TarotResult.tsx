import { useCallback, useEffect, useState } from "react";
import { tarotCards } from "../AstrologyItems/AstrologyItems.helpers"
import Image from "next/image";
import Button from "../Button/Button";
import { ITarotCard } from "../AstrologyItems/AstrologyItems.types";
import { ISetCanShowTarotResult } from "./Tarot.types";
import { descriptions, handleNext, handlePrevious } from "./Tarot.helpers";

export default function TarotResult({ setCanShowTarotResult }: ISetCanShowTarotResult) {

    const [counter, setCounter] = useState(0)
    const [tarotResults, setTarotResults] = useState<ITarotCard[]>([]);

    const getTarotResults = useCallback(() => {
        const items = [];
        for (let index = 0; index < 5; index++) {
            const randomNumber = Math.floor(Math.random() * 78);

            items.push(tarotCards[randomNumber])
        }
        return items;
    }, [])

    useEffect(() => {
        const items = getTarotResults()
        setTarotResults(items);
    }, [getTarotResults]);


    if (!tarotResults.length) {
        return null
    }
    return (
        <div>
            <b>Tarot Results</b>
            <br /><br />
            <b>{descriptions[counter]}</b>
            <br /><br />
            <div className="flex flex-col">
                <div>
                    <Image src={`https://sacred-texts.com/tarot/pkt/img/${tarotResults[counter].name_short}.jpg`}
                        width={200}
                        height={100}
                        alt={tarotResults[counter].name}
                        className="float-left mr-5 mb-5"
                    />
                    <div>
                        <p><b>Name:</b> {tarotResults[counter].name}</p>
                        <p><b>Upright Meaning:</b> {tarotResults[counter].meaning_up}</p>
                        <p><b>Reversed Meaning:</b> {tarotResults[counter].meaning_rev}</p>
                        <p><b>Description:</b> {tarotResults[counter].desc}</p>
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <Button type="button" isButtonSecondary={false} name="Previous" handleFunction={() => handlePrevious(counter, setCounter)} isButtonDisabled={counter === 0} />
                    <Button type="button" isButtonSecondary={false} name="Next" handleFunction={() => handleNext(counter, setCounter)} isButtonDisabled={counter === 4} />
                </div>
            </div>
            <div className="mt-5">
                <Button type="button" isButtonSecondary={true} name="Select Cards Again" handleFunction={() => setCanShowTarotResult(prev => !prev)} isButtonDisabled={false} />
            </div>
        </div>
    )
}