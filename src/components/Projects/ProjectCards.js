import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const hasGithubLink = Boolean(props.ghLink);
  const hasDemoLink = !props.isBlog && props.demoLink && props.demoLink !== "#";
  const demoLabel = props.demoLabel || "Demo";

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.tags && (
          <div className="project-tags">
            {props.tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          {hasGithubLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${props.isBlog ? "blog" : "repositorio"} de ${props.title} (se abre en una pestaña nueva)`}
            >
              <BsGithub aria-hidden="true" focusable="false" /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {hasDemoLink && (
            <Button
              className="project-demo-button"
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${demoLabel} de ${props.title} (se abre en una pestaña nueva)`}
            >
              <CgWebsite aria-hidden="true" focusable="false" /> &nbsp;
              {demoLabel}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
