
type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div>
            {children}
        </div>
    )
}
