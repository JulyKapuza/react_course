export default function ProjectSidebar({
  onClick,
  projectList,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 h-full px-8 bg-stone-900 py-16 rounded-r-xl text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase mb:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onClick}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add project
        </button>
      </div>

      <ul className="mt-8">
        {projectList.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelect(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
