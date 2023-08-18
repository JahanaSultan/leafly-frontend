import SectionHeading from "../SectionHeading/SectionHeading"
import "./Blog.css"
import BlogCard from "./BlogCard"
import ExploreMore from "../Card/ExploreMore"

const BlogSection = () => {
  return (
   <>
   <SectionHeading text="Faydalı Bloglar"/>
   <div className="cards padding-x">
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <ExploreMore width="24%"/>
   </div>
   </>
  )
}

export default BlogSection