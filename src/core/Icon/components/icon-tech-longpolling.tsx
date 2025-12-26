import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechLongpolling = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1954"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#03020D" clipPath="url(#clip0_1031_1954)"><path fillRule="evenodd" d="M44 34H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2M4 32a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4z" clipRule="evenodd" /><path d="M38 40c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2M33 40c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2" /><path fillRule="evenodd" d="M11 37a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M7 37a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clipRule="evenodd" /><path d="M32.99 13a1 1 0 0 1 1-1h.02a1 1 0 0 1 1 1v11.121l4.849-4.848a1 1 0 0 1 1.414 0l.02.02a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1-1.414 0l-6.586-6.586a1 1 0 0 1 0-1.414l.02-.02a1 1 0 0 1 1.415 0l4.848 4.848zM15.01 27a1 1 0 0 1-1 1h-.02a1 1 0 0 1-1-1V15.879L8.14 20.727a1 1 0 0 1-1.414 0l-.02-.02a1 1 0 0 1 0-1.414l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 0 1.414l-.02.02a1 1 0 0 1-1.415 0L15.01 15.88z" /><path fillRule="evenodd" d="M40 2H8a2 2 0 1 0 0 4h32a2 2 0 1 0 0-4M8 0a4 4 0 1 0 0 8h32a4 4 0 0 0 0-8z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechLongpolling);
export default ForwardRef;