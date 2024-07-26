import { useState } from "react";
import TarotCards from "./TarotCards";
import TarotResult from "./TarotResult";

export default function Tarot() {

    const [canShowTarotResult, setCanShowTarotResult] = useState(false)

    return <div className="p-2">
        <b>Discover the Mystical World of Tarot</b> <br /><br />
        <p>Welcome to our Tarot Reading page! Tarot cards have been used for centuries as a tool for spiritual guidance and self-discovery. Each card in the tarot deck is rich with symbolic imagery and profound meanings, offering insights into various aspects of life such as love, career, and personal growth. Whether you're seeking answers to specific questions or looking to understand the deeper currents shaping your life, our tarot readings can provide valuable perspectives and guidance.</p>
        <br /><br />
        <p>To begin your journey, simply select 5 cards from the deck. Each card you choose will reveal a unique message that can help illuminate your path and offer clarity on your current situation. Embrace the wisdom of the tarot and explore the mysteries that lie within the cards.</p>
        <br />
        {
            canShowTarotResult ?
                <TarotResult setCanShowTarotResult={setCanShowTarotResult} />
                : <TarotCards setCanShowTarotResult={setCanShowTarotResult} />
        }
    </div>

}