import { CSSProperties } from "./CSSProperties"
const regex = new RegExp(/[A-Z]/g)
const kebabCase = (str:string) => str.replace(regex, v => `-${v.toLowerCase()}`)
export function finalCSS(style:CSSProperties){
    return Object.keys(style).reduce((accumulator, key:any) => {
        // transform the key from camelCase to kebab-case
        const cssKey = kebabCase(key)
        // remove ' in value
        const cssValue = (style[key] as string).replace("'", "")
        // build the result
        // you can break the line, add indent for it if you need
        return `${accumulator}${cssKey}:${cssValue};`
    }, '')
}
export function ruleText( className:string,style:CSSProperties):string{
    return className+'{'+finalCSS(style)+'}'
}