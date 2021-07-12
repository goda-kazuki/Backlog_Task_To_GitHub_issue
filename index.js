const {Octokit} = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

exports.handler = async (event) => {
  const eventBody = JSON.parse(event.body);

  const issues = await octokit.rest.issues.create({
    owner: 'goda-kazuki',
    repo: 'Backlog_Task_To_GitHub_issue',
    title: eventBody.content.summary,
    body: eventBody.content.description
  });

  const response = {
    statusCode: issues.status,
    body: JSON.stringify(issues.data.url),
  };
  return response;
};
