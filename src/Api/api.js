export const getAllData = async ( pageNum,per_page) => {
  try {
    const getOrgRepo = await fetch(
      `https://api.github.com/repos/facebook/react`
    );
    const orgRepo = await getOrgRepo.json();
    if (orgRepo.message) return orgRepo;

    const getIssues = await fetch(
      `https://api.github.com/repos/facebook/react/issues?page=${pageNum}&per_page=${per_page}`
    );
    const issues = await getIssues.json();
   issues.forEach((ele,i,arr)=>{
    arr[i].selected = false
  })
    orgRepo.issues = issues;
    return orgRepo;
  } catch (err) {
    return {
      message: 'Something went wrong. Refresh the browser to try again.',
    };
  }
};

export const getIssueComments = async commentsUrl => {
  const getComments = await fetch(commentsUrl);
  const comments = await getComments.json();
  return comments;
};
