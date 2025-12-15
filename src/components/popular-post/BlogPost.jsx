import "./BlogPost.css";
import TitleLogo from "../../assets/icons/titleLogo.svg?react";
import Button from "../button/Button";
import Ark from "../../assets/icons/eventark.svg?react";
import postone from "../../assets/images/postone.svg";
import PostDate from "../../assets/icons/postdate.svg?react";
import PostComment from "../../assets/icons/postcomment.svg?react";

export default function BlogPost() {
  const blogPost = [
    {
      image: postone,
      date: {
        icon: <PostDate />,
        text: "21 april 2023",
      },
      comment: {
        icon: <PostComment />,
        text: "comment (06)",
      },
      description:
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      image: postone,
      date: {
        icon: <PostDate />,
        text: "21 april 2023",
      },
      comment: {
        icon: <PostComment />,
        text: "comment (06)",
      },
      description:
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
    {
      image: postone,
      date: {
        icon: <PostDate />,
        text: "21 april 2023",
      },
      comment: {
        icon: <PostComment />,
        text: "comment (06)",
      },
      description:
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    },
  ];
  return (
    <div className="blogPostContainer">
      <div className="blogPostBody">
        <div className="blogArk">
          <Ark />
        </div>
        <div className="blogTitleSec">
          <TitleLogo />
          <p> all blog post</p>
        </div>
        <div className="blogSubtitle">
          <h4>most popular post</h4>
        <Button>all blog post</Button>
        </div>
        <div className="postCardSection">
          {blogPost.map((blog, index) => (
            <div className="blogCard" key={index}>
              <img src={blog.image} alt="blog image" />
              <div className="mainCommentSec">
                <div className="dateSec">
                  {blog.date.icon}
                  <p>{blog.date.text}</p>
                </div>
                <div className="commentSec">
                  {blog.comment.icon}
                  <p>{blog.comment.text}</p>
                </div>
              </div>
              <div className="blogTextSec">
                <h4>{blog.description}</h4>
              <Button>read more</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
