import type { ParamMatcher } from '@sveltejs/kit';
 
export const match = ((param) => {
  console.log("match", param)
  return /^\d+$/.test(param);
}) satisfies ParamMatcher;