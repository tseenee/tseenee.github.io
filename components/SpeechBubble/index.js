export default function({ className, bubbleClassName, children }){
    return (
        <div className={className}>
            <div className={`bubble rounded drop-shadow-lg ${bubbleClassName}`}>
                {children}
            </div>
            <style jsx>{`
                .bubble::after {
                    @apply drop-shadow-lg;
                    --bubble-size: 30px;
                    content: "";
                    width: 0px;
                    height: 0px;
                    position: absolute;
                    right: var(--bubble-size);
                    bottom: -var(--bubble-size);
                    border-top: var(--bubble-size) solid rgb(71 85 105);
                    border-right: var(--bubble-size) solid rgb(71 85 105);
                    border-bottom: var(--bubble-size) solid transparent;
                    border-left: var(--bubble-size) solid transparent;
                }
            `}</style>
        </div>
    )
}