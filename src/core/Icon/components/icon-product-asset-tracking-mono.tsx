import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconProductAssetTrackingMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="none" viewBox="0 0 128 128" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" d="m72.208 116.222-1.861-1.669zm-16.416 0-1.86 1.669zM106.5 53c0 4.412-1.355 9.548-3.723 15.103-2.358 5.532-5.658 11.333-9.396 17.034-7.477 11.404-16.582 22.22-23.034 29.416l3.722 3.338c6.528-7.28 15.82-18.308 23.493-30.013 3.838-5.852 7.302-11.922 9.814-17.814 2.502-5.868 4.124-11.71 4.124-17.064zM64 10.5c23.472 0 42.5 19.028 42.5 42.5h5c0-26.233-21.266-47.5-47.5-47.5zM21.5 53c0-23.472 19.028-42.5 42.5-42.5v-5C37.767 5.5 16.5 26.767 16.5 53zm36.154 61.553c-6.453-7.196-15.558-18.012-23.035-29.416-3.738-5.701-7.038-11.502-9.396-17.034C22.855 62.548 21.5 57.413 21.5 53h-5c0 5.355 1.622 11.196 4.124 17.064 2.512 5.892 5.976 11.962 9.814 17.815 7.674 11.704 16.965 22.732 23.493 30.012zm12.693 0c-3.442 3.837-9.252 3.837-12.693 0l-3.723 3.338c5.429 6.053 14.71 6.053 20.138 0zM79.5 53c0 8.56-6.94 15.5-15.5 15.5v5c11.322 0 20.5-9.178 20.5-20.5zM64 37.5c8.56 0 15.5 6.94 15.5 15.5h5c0-11.322-9.178-20.5-20.5-20.5zM48.5 53c0-8.56 6.94-15.5 15.5-15.5v-5c-11.322 0-20.5 9.178-20.5 20.5zM64 68.5c-8.56 0-15.5-6.94-15.5-15.5h-5c0 11.322 9.178 20.5 20.5 20.5z" /></svg>;
const ForwardRef = forwardRef(IconProductAssetTrackingMono);
export default ForwardRef;