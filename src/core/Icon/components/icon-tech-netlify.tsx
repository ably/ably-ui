import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechNetlify = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<mask id="mask0_1031_1919" width={48} height={43} x={0} y={3} maskUnits="userSpaceOnUse" style={{
    maskType: "luminance"
  }}><path fill="#fff" d="M48 3H0v42.238h48z" /></mask><g mask="url(#mask0_1031_1919)"><path fill="#05BDBA" d="M12.972 38.27h-.453l-2.262-2.263v-.453l3.458-3.459h2.396l.32.32v2.395zM10.257 12.68v-.452l2.262-2.263h.453l3.459 3.459v2.396l-.32.32h-2.396zM13.44 26.043H.276L0 25.77v-3.3l.275-.274H13.44l.274.275v3.299zM47.729 26.043H34.563l-.275-.274v-3.3l.275-.274H47.73l.275.275v3.299zM22.104 13.15V3.274L22.378 3h3.3l.274.275v9.874l-.275.275h-3.299zM22.104 44.963V35.09l.274-.275h3.3l.274.275v9.874l-.275.275h-3.299z" /><path fill="#014847" d="M30.172 30.977h-3.291l-.275-.275v-7.705c0-1.37-.539-2.433-2.192-2.47-.85-.022-1.824 0-2.864.04l-.156.16v9.971l-.275.275h-3.291l-.275-.275V17.536l.275-.274h7.407a5.21 5.21 0 0 1 5.212 5.212v8.228z" /></g></svg>;
const ForwardRef = forwardRef(IconTechNetlify);
export default ForwardRef;