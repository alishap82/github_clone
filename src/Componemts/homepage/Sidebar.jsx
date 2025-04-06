import React, { useState } from "react";
import { Button, FormControl, ListGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const repositories = [
    "HTML/html",
    "li/javascript_20",
    "82/netflix",
    "fg/pre-repository",
    "dj/Hello",
    "hgj-pb/elegant-events-new",
  ];

  // Filter repos based on search term
  const filteredRepos = repositories.filter((repo) =>
    repo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3 bg-light">
      <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
        <h5>Top Repositories</h5>
        <Button variant="success" size="sm" className="rounded-3">
          <FaPlus className="me-1" /> New
        </Button>
      </div>

      <FormControl
        type="search"
        placeholder="Find a repository..."
        className="mb-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ListGroup>
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, index) => (
            <ListGroup.Item key={index}>{repo}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No data found</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
