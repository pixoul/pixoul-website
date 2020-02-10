import React, { useEffect } from "react";
import "./blog.scss"
/* Presentational Components */

export default function Blog() {

  const blogurl = () => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://dropinblog.com/js/embed.js";
    document.getElementsByTagName('head')[0].appendChild(s);
  }

  useEffect(() => {
    blogurl();
  })
  return(
    <div className="blog">
      <div id="dib-posts"></div>
    </div>
  )
}
