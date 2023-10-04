export default function Title({ text, className }) {
    return (
        <span className={className}>
            <span className="bg">{text}</span>
        </span>
    );
}
