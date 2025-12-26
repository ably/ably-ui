import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechMatrix = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#040404" d="M42.828 45.896V2.058H39.68V1.006h4.37V47h-4.37v-1.052zM15.706 16v2.213h.063a6.45 6.45 0 0 1 2.141-1.969c.834-.464 1.797-.697 2.86-.697 1.036 0 1.984.201 2.832.604.855.4 1.51 1.108 1.955 2.127.486-.719 1.144-1.352 1.984-1.897.833-.55 1.825-.825 2.96-.825q1.3 0 2.4.316 1.11.318 1.898 1.016.79.696 1.235 1.825c.294.75.442 1.653.442 2.717v10.967h-4.498v-9.285q0-.825-.064-1.553a3.3 3.3 0 0 0-.348-1.267 2.1 2.1 0 0 0-.839-.857c-.37-.21-.87-.316-1.51-.316q-.946 0-1.537.364-.587.365-.918.951a3.8 3.8 0 0 0-.443 1.332 10 10 0 0 0-.112 1.51v9.127h-4.5v-9.2c0-.485-.01-.967-.03-1.437a4 4 0 0 0-.27-1.316 2.02 2.02 0 0 0-.79-.967q-.553-.363-1.639-.364-.428.018-.839.144c-.37.107-.716.29-1.013.537q-.491.397-.84 1.141c-.231.498-.348 1.147-.348 1.955v9.515H11.44V16.026zM5.222 2.104v43.838h3.147v1.052H4V1h4.355v1.052z" /></svg>;
const ForwardRef = forwardRef(IconTechMatrix);
export default ForwardRef;