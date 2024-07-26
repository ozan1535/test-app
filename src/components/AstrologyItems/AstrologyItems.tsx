"use client"
import { useState } from "react";
import Tab from "@/components/Tab/Tab"
import { updateTabIndex } from "@/helpers/helpers";
import { astrologyTabItems } from "./AstrologyItems.helpers";
import ZodiacPictures from "../ZodiacPictures/ZodiacPictures";
import { useAppContext } from "@/app/context";
import AstrologyModal from "../AstrologyModal/AstrologyModal";
import ZodiacCharacteristicModal from "../ZodiacCharacteristicModal/ZodiacCharacteristicModal";
import Tarot from "../Tarot/Tarot";
import { IZodiacSign } from "./AstrologyItems.types";
import { ITabIndexStore } from "@/app/types";

export default function AstrologyItems() {

    const [tabItemsTabIndex, setTabItemsTabIndex] =
        useState<ITabIndexStore>({
            tabItemsIndex: 0,
        });

    const { setModalProps } = useAppContext()

    const openAstrologyModal = (zodiacSign: IZodiacSign, timeRange: string) => {
        setModalProps(prev => ({
            ...prev,
            isOpen: true,
            component: <AstrologyModal zodiacSign={zodiacSign} timeRange={timeRange} />
        }))
    }

    const openZodiacCharactericticModal = (zodiacSign: IZodiacSign) => {
        setModalProps(prev => ({
            ...prev,
            isOpen: true,
            component: <ZodiacCharacteristicModal zodiacSign={zodiacSign} />
        }))
    }


    return (<>
        <Tab
            items={astrologyTabItems}
            handleFunction={updateTabIndex}
            currentIndex={tabItemsTabIndex.tabItemsIndex || 0}
            itemName="tabItemsIndex"
            setTabIndexStore={setTabItemsTabIndex}
        />
        <br />
        {

            tabItemsTabIndex.tabItemsIndex === 0 ?
                <ZodiacPictures canShowTimeRange={false} onClick={openZodiacCharactericticModal} /> :
                tabItemsTabIndex.tabItemsIndex === 1 ? <Tarot /> : null

        }
    </>
    )


}

/* 

 {

            tabItemsTabIndex.tabItemsIndex === 0 ?
                <ZodiacPictures canShowTimeRange={true} onClick={openAstrologyModal} /> :
                tabItemsTabIndex.tabItemsIndex === 1 ? <ZodiacPictures canShowTimeRange={false} onClick={openZodiacCharactericticModal} /> :
                    tabItemsTabIndex.tabItemsIndex === 2 ? <Tarot /> : null

        }

*/