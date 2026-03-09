/* Here I wanted to redirect the user to the home page when they visit the root URL. This
 pattern allows me to have a default landing page. */

import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");
}
