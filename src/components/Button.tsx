export function Button({onClick, disabled}: {onClick:() => void, disabled: boolean}) {
    return (
        <div className="button-container">
            <button disabled={disabled} onClick={onClick}>inspire Me</button>
        </div>
    )
}