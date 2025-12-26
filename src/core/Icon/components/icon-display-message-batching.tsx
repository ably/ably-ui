import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayMessageBatching = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<rect width={6} height={6} x={5} y={5.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><rect width={6} height={6} x={15} y={17.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><rect width={6} height={6} x={5} y={15.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><rect width={6} height={6} x={15} y={27.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><rect width={6} height={6} x={5} y={25.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><rect width={6} height={6} x={15} y={37.423} stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} rx={1} /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 5.423a4 4 0 0 1 4-4h16a4 4 0 0 1 4 3.999v13.001c0 3 5 6 5 6s-5 2-5 6v13.004c0 2.209-1.79 3.996-4 3.996H5a4 4 0 0 1-4-4z" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M36 24.423h-6" /><rect width={8} height={8} x={39} y={20.423} fill="#FF5416" rx={4} /></svg>;
const ForwardRef = forwardRef(IconDisplayMessageBatching);
export default ForwardRef;