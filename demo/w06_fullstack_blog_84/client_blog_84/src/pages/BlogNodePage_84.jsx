import { useState, useEffect } from 'react';
import { FaMugSaucer } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

let api_url = 'http://localhost:3000/api/blog_84';

const BlogNodePage_84 = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromNodeServer = async () => {
    try{
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs(data);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchBlogsFromNodeServer();
  },[]);

    return (
        <section className="blogs">
        <div className="section-title">
          <h2>latest blogs from Node Server</h2>
          <h2>PoWen Ku, 212410384</h2>
        </div>
        <div className="blogs-center">
          <article className="blog">
            <img
              src="/images/photo-1.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <FaMugSaucer />
                </span>
              <h3>seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="/images/photo-2.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                travel <FaGlobe />
                </span>
              <h3>travel to paris</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="/images/photo-3.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <FaMugSaucer />
                </span>
              <h3>coffee brings friendship</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
          <article className="blog">
            <img
              src="/images/photo-4.jpg"
              alt="Coffee photo"
              className="img blog-img"
            />
            <div className="blog-content">
              <span>
                lifestyle <FaMugSaucer />
                </span>
              <h3>coffee make you feel good</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href="#">read more</a>
            </div>
          </article>
        </div>
      </section>
    );
};

export default BlogNodePage_84;