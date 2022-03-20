import type { Attributes } from '..'
import './style.css'

export const TheBlock = ({ text }: Attributes) => {
    return <div className="p-2">{text}</div>
}
