import React, { useEffect } from "react";
import "./blog.scss"
/* Presentational Components */

window.dib_id = '3IVC98TTSSRY9CULPMAU';
export default function Blog() {

  const addBlogScript = () => {
    try {
      var s = document.createElement("script");
      s.id = 'blogScript';
      s.type = "text/javascript";
      s.src = "https://dropinblog.com/js/embed.js";
      document.getElementsByTagName('body')[0].appendChild(s);
    } catch(err){
      console.error('failed to add blog properly.');
    }
  }

  const removeBlogScript = () => {
    try {

      var list = document.querySelectorAll("script[src^='https://dropinblog.com']");
      for(var item of list){
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
