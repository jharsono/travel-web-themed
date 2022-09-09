import { useState, useEffect, useCallback } from 'react'
import { countBy } from 'lodash';
import { getActiveProjects, getActiveStyleguides } from './lib/zeplin'
import ProjectTable from './components/ProjectTable';


const App = () => {
  const [projects, setProjects] = useState([]);
  const [styleguides, setStyleguides] = useState([]);
  const [projectTypes, setProjectTypes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data in parallel and set the loading state when both are done
    const fetchData = Promise.all([
      getActiveProjects().then((result) => {
        setProjects(result);
        setProjectTypes(countBy(result, p => p.platform));
      }),
      getActiveStyleguides().then(setStyleguides)
    ]);

    fetchData.finally(() => setLoading(false));
  }, []);

  const getStyleguideNameFromId = useCallback((styleguideId) => {
    const styleguide = styleguides.find(s => s.id === styleguideId);
    return styleguide?.name;
  }, [styleguides]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container flex justify-center items-center">
       <ProjectTable projects={projects} getStyleguideNameFromId={getStyleguideNameFromId} />
    </div>
  )
}

export default App
