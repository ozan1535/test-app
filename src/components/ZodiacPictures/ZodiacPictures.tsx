"use client"
import Image from "next/image";
import Link from "next/link";
import { timeRanges, zodiacSigns } from "../AstrologyItems/AstrologyItems.helpers";
import { IZodiacPicture } from "./ZodiacPictures.types";

export default function ZodiacPictures({ canShowTimeRange, onClick }: IZodiacPicture) {



    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                zodiacSigns.map((zodiacSign) => (
                    <div key={zodiacSign.name} className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div onClick={canShowTimeRange ? undefined : () => onClick(zodiacSign)} className={`flex flex-col items-center ${!canShowTimeRange && "cursor-pointer"}`}>
                            <Image width={200} height={200} alt={zodiacSign.name} src={zodiacSign.mediaLink} className="rounded-full" />
                            <b className="text-slate-500">{zodiacSign.name}</b>
                            <b className="text-slate-400">{zodiacSign.date}</b>
                        </div>
                        {
                            canShowTimeRange &&
                            <div className="text-blue-500">
                                {
                                    timeRanges.map(timeRange => (
                                        <p key={timeRange}>

                                            <Link
                                                href={{
                                                    pathname: "/astrology",
                                                    query: { time: timeRange, zodiac: zodiacSign.name.toLocaleLowerCase() },
                                                }}
                                                passHref
                                                shallow
                                                replace
                                                className="capitalize"
                                                onClick={() => onClick(zodiacSign, timeRange)}
                                            >{timeRange}</Link>
                                        </p>
                                    ))
                                }
                            </div>}

                    </div>
                ))
            }
        </div>
    );
}
