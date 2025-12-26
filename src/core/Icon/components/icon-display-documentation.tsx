import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayDocumentation = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M38 42.5H10a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h20.343a2.5 2.5 0 0 1 1.768.732l5.657 5.657a2.5 2.5 0 0 1 .732 1.768V42a.5.5 0 0 1-.5.5M10 44h28a2 2 0 0 0 2-2V13.657a4 4 0 0 0-1.172-2.829l-5.656-5.656A4 4 0 0 0 30.343 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2m10.117-26.4L14.25 22l5.867 4.4-.9 1.2-6.667-5a.75.75 0 0 1 0-1.2l6.667-5zm7.604-3.394-6 21-1.442-.412 6-21zm-.238 9.394L33.35 28l-5.867 4.4.9 1.2 6.667-5a.75.75 0 0 0 0-1.2l-6.667-5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayDocumentation);
export default ForwardRef;