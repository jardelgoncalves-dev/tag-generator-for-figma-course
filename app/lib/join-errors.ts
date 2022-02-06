import type { IssueData } from "zod";

type ErrorIssues = {
  [key: string]: string
}

export function joinError(issues: IssueData[]) {
  const errors = issues?.reduce<ErrorIssues>((acc, err) => {
    const key = err?.path?.[0] as string
    if (key) {
      acc[key] = err.message as string
    }

    return acc
  }, {})

  return errors
}