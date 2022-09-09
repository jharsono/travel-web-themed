import { ZeplinApi, Configuration } from "@zeplin/sdk";

const PERSONAL_ACCESS_TOKEN = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN;
const WORKSPACE_ID = import.meta.env.VITE_WORKSPACE_ID;

const zeplin = new ZeplinApi(
  new Configuration({ accessToken: PERSONAL_ACCESS_TOKEN })
);

export const getActiveProjects = async () => {
  // This is written for recursion to avoid await in a loop
  const _getAllProjects = async (resolve, reject, result = []) => {
      try {
          const { data } = await zeplin.organizations.getOrganizationProjects(
              WORKSPACE_ID,
              {
                  limit: 100,
                  offset: result.length
              }
          );

          const newResult = [...result, ...data];

          // If the number of projects is less than 100, 
          // it means that all projects have been fetched
          // otherwise, fetch the next 100 projects recursively
          if (data.length === 100) {
              return _getAllProjects(resolve, reject, newResult);
          }

          // Resolve the promise with the result
          resolve(newResult);
      } catch (error) {
          reject(error);
      }
  };

  // Wrap the recursive function in a promise
  const allProjects = await new Promise((resolve, reject) => _getAllProjects(resolve, reject)
  );

  // Filter the projects that are active
  return allProjects.filter(project => project.status === "active");
}

export const getActiveStyleguides = async () => {
  const _getAllStyleguides = async (resolve, reject, result = []) => {
      try {
          const { data } = await zeplin.organizations.getOrganizationStyleguides(
              WORKSPACE_ID,
              {
                  limit: 100,
                  offset: result.length
              }
          );

          const newResult = [...result, ...data];

          if (data.length === 100) {
              return _getAllStyleguides(resolve, reject, newResult);
          }

          resolve(newResult);
      } catch (error) {
          reject(error);
      }
  };

  const allStyleguides = await new Promise(
      (resolve, reject) => _getAllStyleguides(resolve, reject)
  );

  return allStyleguides.filter(styleguide => styleguide.status === "active");
}