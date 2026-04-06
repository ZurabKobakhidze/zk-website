import { client } from "@/lib/sanity";
import { projectsQuery } from "@/sanity/queries";
import IframePreview from "@/components/ui/IframePreview";

type Project = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
};

export default async function Projects() {
  const projects: Project[] = await client.fetch(projectsQuery);

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-12">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project._id} className="flex flex-row  gap-10 w-full ">
            {/* Left: text */}
            <div className="flex flex-col justify-between p-6 ">
              <div>
                <h3 className="text-white font-semibold text-2xl">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-text-secondary text-sm">
                    {project.description}
                  </p>
                )}
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-white/10 text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                {" "}
                <div className="flex gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold py-2 w-30 text-center border border-transparent bg-accent rounded-lg text-white no-underline transition-all duration-300 ease-in-out"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold py-2 w-30 text-center border border-white/20 rounded-lg text-white no-underline transition-all duration-300 ease-in-out"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
            {/* Right: iframe */}
            <div className="flex-2">
              <IframePreview src={project.url} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
