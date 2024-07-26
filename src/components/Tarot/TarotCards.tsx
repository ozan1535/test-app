import { useState } from "react";
import Image from "next/image";
import { tarotCards } from "../AstrologyItems/AstrologyItems.helpers";
import Button from "../Button/Button";
import { selectAndUnselectedCard } from "./Tarot.helpers";
import { ISetCanShowTarotResult } from "./Tarot.types";

export default function TarotCards({ setCanShowTarotResult }: ISetCanShowTarotResult) {

    const [selectedCards, setSelectedCards] = useState<number[]>([])

    return <>
        <p className="text-center text-green-500"><b>{selectedCards.length} / 5 Cards Selected</b></p>
        <br />
        <Button type="button" isButtonSecondary={false} name="Get Your Tarot Results" handleFunction={() => setCanShowTarotResult(prev => !prev)} isButtonDisabled={selectedCards.length !== 5} />
        <br /><br />

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 grid-cols- gap-5">
            {
                tarotCards.map((tarotCard, index) => (
                    <div key={tarotCard.name} className="cursor-pointer relative flex justify-center" onClick={() => selectAndUnselectedCard(index, selectedCards, setSelectedCards)}>
                        <Image src="/tarot-back.jpg" width={150} height={50} alt="Tarot card" className="rounded" />
                        <div className="absolute w-full h-full text-white  flex items-center justify-center text-lg md:text-xs xl:text-lg top-0">TESTAROT</div>
                        {
                            selectedCards.some(selectedCard => selectedCard === index) &&
                            < div className="w-full h-full absolute top-0 bg-green-400 opacity-55"></div>
                        }
                    </div>
                ))
            }
        </div >
        <br />
        <Button type="button" isButtonSecondary={false} name="Get Your Tarot Results" handleFunction={() => setCanShowTarotResult(prev => !prev)} isButtonDisabled={selectedCards.length !== 5} />

    </>
}