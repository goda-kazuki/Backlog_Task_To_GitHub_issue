const {Octokit} = require("@octokit/rest");

const octokit = new Octokit({
  auth: "aa",
});

createIssue()

// async function issueList() {
//   const issues = await octokit.rest.issues.listForRepo({
//     owner: 'goda-kazuki',
//     repo: 'Backlog_Task_To_GitHub_issue',
//   });
//   console.log(issues)
// }

async function createIssue() {
  const issues = await octokit.rest.issues.create({
    owner: 'goda-kazuki',
    repo: 'Backlog_Task_To_GitHub_issue',
    title: 'Nodejsから追加しましたー',
    body: '中身'
  });
  console.log(issues)
}

