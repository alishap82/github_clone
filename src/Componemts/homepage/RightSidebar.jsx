import React from "react";
import { ListGroup } from "react-bootstrap";

const RightSidebar = () => {
  return(
    <div className="p-3 bg-light">
    <h5>Latest Changes</h5>
    <ListGroup>
      <ListGroup.Item>GitHub Secret Protection</ListGroup.Item>
      <ListGroup.Item>GitHub Advanced Security</ListGroup.Item>
    </ListGroup>
    <h5 className="mt-3">Explore Repositories</h5>
    <ListGroup>
      <ListGroup.Item>seaweedfs / seaweedfs</ListGroup.Item>
      <ListGroup.Item>spring-projects / spring-boot</ListGroup.Item>
    </ListGroup>
  </div>
  );
};

export default RightSidebar;
