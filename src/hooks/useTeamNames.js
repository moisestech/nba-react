import useFetch from "./useFetch";

export default function useTeamNames(team) {
  return useFetch("/teams", "GET");
}
