import React from "react";
import "./blog.scss"
/* Presentational Components */
function blogurl()
{
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://dropinblog.com/js/embed.js";
document.getElementsByTagName('head')[0].appendChild(s);
}
export default function Blog() {
  blogurl();
  return(
    <div className="blog">
<div id="dib-posts"></div>
    </div>
  )
}
