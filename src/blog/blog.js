import React, { useEffect } from "react";
import "./blog.scss"
/* Presentational Components */

export default function Blog() {

  const addBlogScript = () => {
    var s = document.createElement("script");
    s.id = 'blogScript';
    s.type = "text/javascript";
    s.src = "https://dropinblog.com/js/embed.js";
    document.getElementsByTagName('head')[0].appendChild(s);
  }

  const removeBlogScript = () => {
    const el = document.getElementById('blogScript');
    return el.parentNode.removeChild(el);
  }

  useEffect(() => {
    addBlogScript();

    return () => {
      removeBlogScript();
    }
  })
  return(
    <div className="blog">
      <div id="dib-posts"></div>
    </div>
  )
}
