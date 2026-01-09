import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayEventsCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M42 16.75H6v-1.5h36z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M5.25 14A4.75 4.75 0 0 1 10 9.25h28A4.75 4.75 0 0 1 42.75 14v24A4.75 4.75 0 0 1 38 42.75H10A4.75 4.75 0 0 1 5.25 38zM10 10.75A3.25 3.25 0 0 0 6.75 14v24A3.25 3.25 0 0 0 10 41.25h28A3.25 3.25 0 0 0 41.25 38V14A3.25 3.25 0 0 0 38 10.75z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M16.75 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75M31.75 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /><path fill="#FF5416" d="M10 21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z" /><path fill="#FF5416" fillRule="evenodd" d="M11.5 21.5v5h5v-5zM11 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M11.5 31.5v5h5v-5zM11 30a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM21.5 21.5v5h5v-5zM21 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM21.5 31.5v5h5v-5zM21 30a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM31.5 21.5v5h5v-5zM31 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM31.5 31.5v5h5v-5zM31 30a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayEventsCol);
export default ForwardRef;