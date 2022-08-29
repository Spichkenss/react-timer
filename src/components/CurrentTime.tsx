import React, {FC, PropsWithChildren, useEffect, useState} from 'react'

interface CurrentTimeFormat {
    hours: number,
    minutes: number,
    seconds: number
}

const CurrentTime: FC<PropsWithChildren> = ({}) => {

    const [currentTime, setCurrentTime] = useState<CurrentTimeFormat>();

    const GetCurrentTime = () => {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
    }

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(GetCurrentTime());
        }, 1000)
    }, [])

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <p className={"text-white text-3xl"}>
                {`0${currentTime?.hours}`.slice(-2)}:
                {`0${currentTime?.minutes}`.slice(-2)}:
                {`0${currentTime?.seconds}`.slice(-2)}
            </p>
            <p className={"text-white opacity-40"}>Текущее время</p>
        </div>
    )
}

export default CurrentTime