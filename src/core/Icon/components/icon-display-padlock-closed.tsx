import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayPadlockClosed = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M18.145 6.667c-1.427 1.347-2.395 3.6-2.395 7.27v8.433h16.5v-8.433c0-3.69-.968-5.943-2.394-7.284C28.422 5.303 26.392 4.75 24 4.75c-2.389 0-4.42.563-5.855 1.917m-3.895 7.27v8.433H10a.75.75 0 0 0-.75.75v9.504c0 1.506 0 4.314 1.455 6.748 1.516 2.535 4.494 4.498 10.085 4.498h6.42c5.59 0 8.569-1.953 10.085-4.489 1.455-2.434 1.455-5.25 1.455-6.793V23.12a.75.75 0 0 0-.75-.75h-4.25v-8.433c0-3.941-1.038-6.657-2.866-8.377C29.064 3.85 26.595 3.25 24 3.25c-2.598 0-5.067.61-6.885 2.326-1.826 1.724-2.865 4.439-2.865 8.361m-3.5 18.647V23.87h26.5v8.675c0 1.571-.014 4.012-1.242 6.066-1.182 1.976-3.597 3.759-8.798 3.759h-6.42c-5.199 0-7.616-1.791-8.798-3.768-1.229-2.055-1.242-4.487-1.242-6.018m12.25.308v4.148h2v-4.148a2 2 0 1 0-2 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayPadlockClosed);
export default ForwardRef;