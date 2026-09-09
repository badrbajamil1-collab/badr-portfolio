import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faBookOpen,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectsData } from "../data/resumeData";

type FetchState = "loading" | "ready" | "error";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(
    () => projectsData.find((p) => p.slug === slug),
    [slug]
  );

  const [readme, setReadme] = useState<string | null>(null);
  const [state, setState] = useState<FetchState>("loading");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    if (!project) return;
    if (!project.repo) {
      setState("error");
      return;
    }
    let cancelled = false;
    setState("loading");
    setReadme(null);

    fetch(`https://api.github.com/repos/${project.repo}/readme`, {
      headers: { Accept: "application/vnd.github.raw" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`README unavailable (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setReadme(text);
          setState("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="project-page">
        <div className="section">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft as IconProp} /> Back to projects
          </Link>
          <div className="fallback-card">
            <h2>Project not found</h2>
            <p>This project doesn't exist. Head back to browse all projects.</p>
          </div>
        </div>
      </div>
    );
  }

  const readmeUrl = project.repo
    ? `https://github.com/${project.repo}`
    : undefined;

  const resolveImgSrc = (src?: string) => {
    if (!src || !project?.repo) return src;
    if (/^(https?:|data:|blob:)/.test(src)) return src;
    const clean = src.replace(/^\.\//, "").replace(/^\//, "");
    // handle html comment style already absolute
    return `https://raw.githubusercontent.com/${project.repo}/HEAD/${clean}`;
  };

  return (
    <div className="project-page">
      <div className="section project-header">
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft as IconProp} /> Back to projects
        </Link>

        <h1 className="project-page-title">{project.title}</h1>
        <div className="project-period">{project.period}</div>
        <p className="project-page-desc">{project.description}</p>

        <div className="project-tech">
          {project.techStack.map((tech, i) => (
            <span className="chip" key={i}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-page-actions">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FontAwesomeIcon icon={faGithub as IconProp} /> View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} /> Live website
            </a>
          )}
        </div>

        {project.highlight && (
          <p className="project-desc highlight project-key">
            Key result: {project.highlight}
          </p>
        )}
      </div>

      <div className="section readme-section">
        {state === "loading" && (
          <div className="fallback-card readme-loading">
            <FontAwesomeIcon icon={faCircleNotch as IconProp} spin /> Loading README…
          </div>
        )}

        {state === "ready" && readme && (
          <article className="readme">
            <div className="readme-toolbar">
              <span>
                <FontAwesomeIcon icon={faBookOpen as IconProp} /> README
              </span>
              {readmeUrl && (
                <a href={readmeUrl} target="_blank" rel="noreferrer">
                  View on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} />
                </a>
              )}
            </div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              urlTransform={(uri) => {
                // keep hash/anchors, handle relative images via resolveImgSrc in img component
                if (uri.startsWith("#")) return uri;
                if (/^(https?:|mailto:|tel:)/.test(uri)) return uri;
                if (project?.repo) return `https://raw.githubusercontent.com/${project.repo}/HEAD/${uri.replace(/^\.\//, "")}`;
                return uri;
              }}
              components={{
                a: ({ children, ...props }) => (
                  <a {...props} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
                img: ({ src, alt, ...props }) => (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img src={resolveImgSrc(src)} alt={alt || ""} loading="lazy" {...props} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                ),
              }}
            >
              {readme}
            </ReactMarkdown>
          </article>
        )}

        {state === "error" && (
          <div className="fallback-card">
            <h2>No README available</h2>
            <p>
              {project.repo
                ? `The repository ${project.repo} doesn't have a README yet, or it isn't public.`
                : "A public repository for this project isn't linked yet."}
            </p>
            {readmeUrl ? (
              <a href={readmeUrl} target="_blank" rel="noreferrer" className="btn">
                <FontAwesomeIcon icon={faGithub as IconProp} /> Visit repository
              </a>
            ) : project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn">
                <FontAwesomeIcon icon={faGithub as IconProp} /> View on GitHub
              </a>
            ) : null}
          </div>
        )}
      </div>

      <div className="section project-footer">
        <p>
          {readmeUrl && (
            <a href={readmeUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub as IconProp} /> View README on GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} /> Visit live website
            </a>
          )}
        </p>
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft as IconProp} /> All projects
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
