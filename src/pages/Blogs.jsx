import React from 'react';
import Row from "../ui/Row";
import AddBlog from "../features/blogs/AddBlog";
import BlogTable from "../features/blogs/BlogTable";
import Heading from "../ui/Heading";
import BlogTableOperations from '../features/blogs/BlogTableOperations';


function Blogs() {
  return (
    <>
       <Row type="horizontal">
        <Heading as="h1">All Blogs</Heading>
        {/* <BlogTableOperations/> */}
        <AddBlog />
      </Row>
      <Row>
        <BlogTable />
      </Row>
    </>
  );
}

export default Blogs;
