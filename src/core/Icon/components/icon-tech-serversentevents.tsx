import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechServersentevents = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M44 34H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2M4 32a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z" clipRule="evenodd" /><path fill="#03020D" d="M38 40c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2M33 40c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2" /><path fill="#03020D" fillRule="evenodd" d="M11 37a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M7 37a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clipRule="evenodd" /><path fill="#03020D" d="M35.01 23a1 1 0 0 1-1 1h-.02a1 1 0 0 1-1-1V11.879l-4.849 4.848a1 1 0 0 1-1.414 0l-.02-.02a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-.02.02a1 1 0 0 1-1.414 0L35.01 11.88zM15.01 23a1 1 0 0 1-1 1h-.02a1 1 0 0 1-1-1V11.879l-4.848 4.848a1 1 0 0 1-1.415 0l-.02-.02a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-.02.02a1 1 0 0 1-1.414 0L15.01 11.88z" /></svg>;
const ForwardRef = forwardRef(IconTechServersentevents);
export default ForwardRef;