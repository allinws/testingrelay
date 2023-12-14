import loadSerializableQuery from "./loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "../__generated__/MainViewQuery.graphql";
import MainViewClientComponent from "../../app/MainView";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {
    owner: "firstcontributions",
    name: "first-contributions",
  });

  return (
    <div>
      <MainViewClientComponent preloadedQuery={preloadedQuery} />
    </div>
  );
};

export default Page;

export const revalidate = 0;