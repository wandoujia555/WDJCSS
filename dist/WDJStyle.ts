import { CSSProperties } from "./CSSProperties"
import { finalCSS } from "./finalCSS"
interface MyCSSRule extends CSSProperties{
    [v: `--${string}`]: string | number | undefined;
}
export class WDJStyle{
    CSSProperties:CSSProperties
    CSSRule:CSSRule
    public get style(){
        const myCSSRule:MyCSSRule = (this.CSSRule as any).style as unknown as MyCSSRule;
        return myCSSRule;
    }
    public get CSSRuleText() : string {
        return finalCSS(this.CSSProperties)
    }
    constructor(CSSProperties:CSSProperties,CSSRule:CSSRule){
        this.CSSRule = CSSRule
        this.CSSProperties = CSSProperties
    }
}