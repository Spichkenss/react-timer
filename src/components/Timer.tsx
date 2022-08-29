import React, {FC, PropsWithChildren, useRef, useState} from 'react'
import Button from "./Button";

interface TimerFormat {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number
}

const Timer: FC<PropsWithChildren> = ({}) => {

    const [timer, setTimer] = useState<TimerFormat>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    });

    const [isStarted, setIsStarted] = useState<boolean>(false)

    const interval = useRef<any>(null)

    const StartTimer = () => {
        if (isStarted) return;
        setIsStarted(true);
        SetInterval()
    }

    const StopTimer = () => {
        setIsStarted(false)
        clearInterval(interval.current)
    }

    const ResetTimer = () => {
        if (isStarted) return
        setTimer({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    }

    const SetInterval = () => {
        interval.current = setInterval(() => {
            setTimer(prev =>
                ({
                    days: prev.days,
                    hours: prev.minutes == 60 ? prev.hours++ : prev.hours,
                    minutes: prev.seconds == 60 ? prev.minutes++ : prev.minutes,
                    seconds: prev.milliseconds == 1000 ? prev.seconds++ : prev.seconds,
                    milliseconds: prev.milliseconds == 1000 ? 0 : prev.milliseconds + 100
                })
            );
        }, 100);
    }

    return (
        <div className={"flex flex-col justify-center items-center gap-10"}>
            <div className={"flex flex-col justify-center items-center"}>
                <p className={"text-white text-8xl"}>
                    {timer.days}:
                    {`0${timer.hours}`.slice(-2)}:
                    {`0${timer.minutes}`.slice(-2)}:
                    {`0${timer.seconds}`.slice(-2)}:
                    {`00${timer.milliseconds.toString()}`.slice(-3)}</p>
                <p className={"text-white opacity-40"}>дней : часов : минут : секунд : миллисекунд</p>
            </div>

            <div className={"flex flex-row gap-10"}>
                {isStarted
                    ?
                    <div className={"border-2 border-red-900 rounded-full"}>
                        <Button onCLick={StopTimer} className={"bg-red-900"}>Стоп</Button>
                    </div>
                    :
                    <div className={"border-2 border-green-700 rounded-full"}>
                        <Button onCLick={StartTimer} className={"bg-green-700"}>Старт</Button>
                    </div>
                }

                <div className={"border-2 border-gray-700 rounded-full"}>
                    <Button onCLick={ResetTimer} className={"bg-gray-700"}>Сброс</Button>
                </div>

            </div>

        </div>
    )
}

export default Timer