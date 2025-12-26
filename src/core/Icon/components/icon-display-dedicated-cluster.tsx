import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDedicatedCluster = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" viewBox="0 0 40 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.25} d="M5 28.423v5M7.5 28.423v5" /><circle cx={34.165} cy={30.922} r={0.833} fill="#C6CED9" /><circle cx={29.165} cy={30.922} r={0.833} fill="#C6CED9" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.25} d="M32.499 16.756h3.333a3.333 3.333 0 0 0 3.333-3.334v-5a3.333 3.333 0 0 0-3.333-3.333H4.165A3.333 3.333 0 0 0 .832 8.422v5a3.333 3.333 0 0 0 3.333 3.334H7.5M32.499 25.09h3.333a3.333 3.333 0 0 1 3.333 3.332v5a3.333 3.333 0 0 1-3.333 3.334H4.165a3.333 3.333 0 0 1-3.333-3.334v-5a3.333 3.333 0 0 1 3.333-3.333H7.5M5 8.423v5M7.5 8.423v5" /><circle cx={34.165} cy={10.922} r={0.833} fill="#C6CED9" /><circle cx={29.165} cy={10.922} r={0.833} fill="#C6CED9" /><path fill="#FF5416" fillRule="evenodd" d="M9.375 20.923c0-5.868 4.757-10.625 10.625-10.625s10.625 4.757 10.625 10.625S25.868 31.548 20 31.548 9.375 26.79 9.375 20.923" clipRule="evenodd" /><rect width={10} height={7.5} x={15} y={18.423} stroke="#03020D" strokeLinejoin="round" strokeWidth={1.25} rx={0.83} /><path stroke="#03020D" strokeLinejoin="round" strokeWidth={1.25} d="M22.5 18.423v-1.667a2.5 2.5 0 1 0-5 0v1.666" /></svg>;
const ForwardRef = forwardRef(IconDisplayDedicatedCluster);
export default ForwardRef;