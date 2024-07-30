import React, { useState, useEffect } from "react";
import SchoolEvent from "../../assets/images/schoolevent.png";
import WelcomeHome from "../../assets/images/welcomeschool.png";
import SchoolSports from "../../assets/images/schoolsports.png";
import StudentAchieve from "../../assets/images/StudentAchieve.jpg";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      title: "Welcome to Our School Blog",
      date: "July 16, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      author: "Admin",
      image: WelcomeHome,
      id:1
    },
    {
      title: "School Event Highlights",
      date: "July 10, 2024",
      content:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.",
      author: "Teacher",
      image: SchoolEvent,
      id:2
    },
    {
      title: "School Sports Highlights",
      date: "July 10, 2024",
      content:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.",
      author: "Supervisor",
      image: SchoolSports,
      id:3
    },
    {
      title: "Student Achievements",
      date: "July 05, 2024",
      content:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.",
      author: "Principal",
      image: StudentAchieve,
      id:4
    },
  ];

  const navigate = useNavigate();
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    if (selectedBlogId !== null) {
      navigate(`/BlogDetails/${selectedBlogId}`);
    }
  }, [selectedBlogId, navigate]);

  const handleCardClick = (blogId) => {
    setSelectedBlogId(blogId);
  };

  return (
    <div className="container mt-2">
      <h1 className="mb-4 text-center">School Blog</h1>
      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div
              className="card rounded"
              onClick={() => handleCardClick(blog.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={blog.image}
                className="card-img-top img-fluid p-5 rounded"
                alt={blog.title}
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {blog.date} by {blog.author}
                </h6>
                <p className="card-text">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
