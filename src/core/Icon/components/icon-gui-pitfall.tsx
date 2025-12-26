import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiPitfall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M.55 4.284A3.426 3.426 0 0 1 3.976.858h13.38a3.426 3.426 0 0 1 3.426 3.426v6.104a.75.75 0 0 1-1.5 0V6.602H2.05v11.061c0 1.064.862 1.926 1.926 1.926h4.348a.75.75 0 0 1 0 1.5H3.976A3.426 3.426 0 0 1 .55 17.663zm1.5.818h17.232v-.818a1.926 1.926 0 0 0-1.926-1.926H3.976A1.926 1.926 0 0 0 2.05 4.284zm12.918 6.217c.774-1.34 2.71-1.34 3.483 0l4.745 8.218c.773 1.34-.194 3.016-1.742 3.016h-9.489c-1.548 0-2.515-1.676-1.741-3.016zm2.184.75a.51.51 0 0 0-.885 0l-4.744 8.218a.51.51 0 0 0 .442.766h9.49a.51.51 0 0 0 .442-.766zM16 17.65a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm1.468 1.951a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.4 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconGuiPitfall);
export default ForwardRef;