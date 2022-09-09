import React from "react";

const StyleguideLinkProgress = ({projects}) => {
  const projectsWithLinkedStyleguides = projects.filter(project => project.linkedStyleguide);
  const percentage = (projectsWithLinkedStyleguides.length / projects.length) * 100;

  return (
    <div class="shadow-lg rounded-lg overflow-hidden">
      <div class="py-3 px-5 bg-gray-50">Styleguide Link Progress</div>
        <div className="w-full bg-gray-200 rounded-full">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: percentage}}>{percentage}%</div>
      </div>
    </div>
  )
}

export default StyleguideLinkProgress;