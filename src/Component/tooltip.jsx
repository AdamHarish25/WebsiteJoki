export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex w-fit">
        {children}
        <span class="absolute z-10 top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 w-full text-center">{message}</span>
    </div>
    )
}