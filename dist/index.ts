import { WDJStyle } from "./WDJStyle";
import { CSSProperties } from "./CSSProperties"
import { ruleText } from "./finalCSS";

interface WDJObj{
    addWDJStyle(className:string,CSSProperties:CSSProperties,Christen?:boolean,ignore?:boolean):string|null
    alterWDJStyle(classname:string,CSSProperties:CSSProperties):string|null
}
interface WDJStyles{
    [index:string]:WDJStyle
}
class WDJObj implements WDJObj{
    styleElement:HTMLStyleElement;
    isappendStyle:boolean=false;
    // :Array<WDJStyle>
    WDJStyles:WDJStyles={};
    public get CSSStyleSheet():CSSStyleSheet{
        return this.styleElement.sheet as CSSStyleSheet;
    }
    constructor(style:HTMLStyleElement){
        this.styleElement = style
    }
// ,Christen?:boolean,ignore?:boolean
    addWDJStyle(className:string,CSSProperties:CSSProperties):string|null{
        const mystyle = new WDJStyle(CSSProperties,this.CSSStyleSheet.cssRules[this.insertRule(className,CSSProperties)])
        this.WDJStyles[className] = mystyle
        return className
    }
    // 添加Style
    alterWDJStyle(className:string,CSSProperties:CSSProperties):string|null{
        const mystyle = new WDJStyle(CSSProperties,this.CSSStyleSheet.cssRules[this.insertRule(className,CSSProperties)])
        this.WDJStyles[className] = mystyle
        return className
    }
    // 添加Rule到Rules
    insertRule(className:string,CSSProperties:CSSProperties){
        return this.CSSStyleSheet.insertRule(ruleText(className,CSSProperties))
    }
}
export const createStyle=(style?:HTMLStyleElement)=>{
    console.log(style)
    if(document){
        let wdjStyle = new WDJObj(style||document.createElement('style'))

        if(style) wdjStyle.isappendStyle = true;

        return wdjStyle
    }
    else{
        throw new Error("无法访问document")
    }
}
export const appendStyle=(WDJstyle:WDJObj)=>{
    if(WDJstyle.isappendStyle==true) {
        console.log("已经添加过了")
        return WDJstyle
    }else{
        document.body.appendChild(WDJstyle.styleElement)
        WDJstyle.isappendStyle=true
        return WDJstyle;
    }
}
export const removeStyle=(WDJstyle:WDJObj)=>{
    document.body.removeChild(WDJstyle.styleElement)
    WDJstyle.isappendStyle=false
    return WDJstyle;
}