import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayConsumerGroups = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<ellipse cx={14.988} cy={9.245} stroke="#C6CED9" strokeWidth={1.5} rx={2.679} ry={4.821} /><path stroke="#C6CED9" strokeWidth={1.5} d="M15.524 4.423H5.88c-1.775 0-3.214 2.159-3.214 4.822 0 2.662 1.439 4.821 3.214 4.821h9.643" /><ellipse cx={14.988} cy={24.244} stroke="#C6CED9" strokeWidth={1.5} rx={2.679} ry={4.821} /><path stroke="#C6CED9" strokeWidth={1.5} d="M15.524 19.423H5.88c-1.775 0-3.214 2.159-3.214 4.822 0 2.662 1.439 4.821 3.214 4.821h9.643" /><ellipse cx={14.988} cy={39.245} stroke="#C6CED9" strokeWidth={1.5} rx={2.679} ry={4.821} /><path stroke="#C6CED9" strokeWidth={1.5} d="M15.524 34.423H5.88c-1.775 0-3.214 2.159-3.214 4.822 0 2.662 1.439 4.821 3.214 4.821h9.643" /><rect width={8} height={8} x={34.667} y={10.423} fill="#FF5416" rx={2} /><rect width={8} height={8} x={34.667} y={30.423} fill="#FF5416" rx={2} /><path stroke="#FF5416" strokeDasharray="1 3" strokeLinecap="round" strokeWidth={1.5} d="M38.667 21.423v6" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.667 39.423a4.3 4.3 0 0 0 4.001-2.732l3.997-10.219a3.22 3.22 0 0 1 3.002-2.049v0" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15.667 9.423a4.3 4.3 0 0 1 4.001 2.732l3.997 10.22a3.22 3.22 0 0 0 3.002 2.048v0" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M15.667 24.423h11" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M46.667 10.423a4 4 0 0 0-4-4h-8c-2.21 0-4 1.789-4 3.998v9.002c0 3-4 5-4 5s4 1 4 5v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4z" /></svg>;
const ForwardRef = forwardRef(IconDisplayConsumerGroups);
export default ForwardRef;