import React from "react";
import "./Blog.css"; 

function Blog() {
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F814423752%2Fphoto%2Feye-of-model-with-colorful-art-make-up-close-up.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Dl15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcreative-images&docid=tl7m7hXO2dWdqM&tbnid=kt9a95Fkz4GXzM&vet=12ahUKEwihjryb0ceSAxXMS2cHHW6YOdMQnPAOegQIGBAB..i&w=612&h=408&hcb=2&ved=2ahUKEwihjryb0ceSAxXMS2cHHW6YOdMQnPAOegQIGBAB";

  const containerStyle = {
    padding: "10px",
    border: "1px solid #6e2c2c",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "20px auto",
  };

  const titleStyle = {
    color: "#2c3e50",
    marginBottom: "10px",
  };

  const authorStyle = {
    color: "#7f8c8d",
    fontStyle: "italic",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "#34495e",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle} className="blog-container">
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default Blog;
