import {FC, PropsWithChildren} from 'react'

interface Props {
    onCLick: () => void
    className: string
}

const commonStyles = "w-20 h-20 rounded-full flex justify-center items-center m-1 text-white text-lg cursor-pointer select-none"

const Button: FC<PropsWithChildren<Props>> = ({children, onCLick, className}) => {
    return (
        <p className={[commonStyles, className].join(" ")} onClick={onCLick}>
            {children}
        </p>
    )
}

export default Button