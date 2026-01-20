import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplaySupportChatMono = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" viewBox="0 0 32 32" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<circle cx={15} cy={15} r={14.5} stroke="currentColor" transform="matrix(1 0 .00002 1 1 1)" /><path fill="currentColor" d="m19.423 20.728.347-.36a.5.5 0 0 0-.347-.14zM9.5 18.931v-7.134h-1v7.134zm0-7.134c0-.283.15-.61.422-.879.273-.267.61-.418.909-.418v-1c-.617 0-1.195.298-1.61.705-.413.406-.721.977-.721 1.592zm1.33-1.297H21.17v-1H10.831zm10.34 0c.298 0 .635.151.908.418.272.268.422.596.422.88h1c0-.616-.308-1.187-.722-1.593-.414-.407-.992-.705-1.609-.705zm-1.747 10.228v-.5H10.83v1h8.592zm-8.592-.5c-.299 0-.636-.151-.909-.418-.272-.268-.422-.596-.422-.879h-1c0 .615.308 1.186.722 1.592s.992.705 1.609.705zm11.669-8.43v10.33h1V11.797zm-3.077 8.93-.347.36.003.003.01.01.038.036.625.607c.389.38.877.859 1.277 1.263l.71-.704a114 114 0 0 0-1.917-1.885l-.039-.037-.01-.01-.002-.002zm1.607 2.28c.504.508 1.123.685 1.668.443.515-.23.802-.767.802-1.323h-1c0 .234-.117.368-.208.409-.06.027-.25.072-.552-.234z" /><circle cx={16} cy={15.5} r={1} fill="currentColor" /><circle cx={13} cy={15.5} r={1} fill="currentColor" /><circle cx={19} cy={15.5} r={1} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(IconDisplaySupportChatMono);
export default ForwardRef;