import React from "react";

const tableHeaders = [
  'Name', 
  'Platform',
  'Workflow Status',
  'Number of Members',
  'Number of Screens',
  'Linked Styleguide',
]

const ProjectTable = ({ 
  projects, 
  getStyleguideNameFromId 
}) => (
  <table className="border-collapse border border-slate-400">
    <thead>
      <tr>
        {
          tableHeaders.map(header => (
            <th className="border border-slate-300 p-4">{header}</th>
          ))
        }
      </tr>
    </thead>

    <tbody>
      {
        projects.map(project => {
          return (
            <tr key={project.id}>
              <td className="border border-slate-300">{project.name}</td>
              <td className="border border-slate-300">{project.platform}</td>
              <td className="border border-slate-300">{project.workflowStatus?.name ?? "-"}</td>
              <td className="border border-slate-300">{project.numberOfMembers}</td>
              <td className="border border-slate-300">{project.numberOfScreens}</td>
              <td className="border border-slate-300">
                {
                  project.linkedStyleguide ? (
                    <a href={`http://app.zeplin.io/styleguide/${project.linkedStyleguide.id}`} target="blank">
                      {getStyleguideNameFromId(project.linkedStyleguide.id)}
                    </a>
                  ) : (
                    "-"
                  )
                }
              </td>
            </tr>
          )
        })
    }
    </tbody>
  </table> 
);

export default ProjectTable;
