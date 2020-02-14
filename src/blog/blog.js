import React, { useEffect } from "react";
import "./blog.scss"
/* Presentational Components */

export default function Blog() {

  const addBlogScript = () => {
    var s = document.createElement("script");
    s.id = 'blogScript';
    s.type = "text/javascript";
    s.src = "https://dropinblog.com/js/embed.js";
    document.getElementsByTagName('body')[0].appendChild(s);
  }

  const removeBlogScript = () => {
    try {
      const list = document.querySelectorAll("script[src^='https://dropinblog.com']");
      for(const item of list){
        document.getElementsByTagName('body')[0].removeChild(item);
      }
    } catch(err){
      console.error('failed to clean blog scripts up.');
    }
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
