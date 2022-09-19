import { Query } from "@apollo/client/react/components";
import Error from "../components/Error";
import Loading from "../components/Loading";

/**
 * Executes a query with supplied variables and returns a Loading component while loading, Error component if an error occurs, and the supplied component when the data is loaded. Queries are executed using `Query` from `@apollo/client/react/components`. If `fetchPolicy={"no-cache"}` is not specified, some attributes will be cached and loaded improperly on ProductPage
 * @param options Parameters needed to execture query and supply to a component
 * @param options.query GraphQL query to be executed
 * @param options.variables variables (if any) required in GraphQL query
 * @param options.loadedElement callback function which takes data and maps to a component i.e. `(data) => <Component data={data} />`
 * @returns `<Loading />`, `<Error />`, or `options.loadedElement(data)`
 */
function QueryHandler({ query, variables, loadedElement }) {
  return (
    <Query query={query} variables={variables} fetchPolicy={"no-cache"}>
      {({ loading, error, data }) => {
        if (error) return <Error />;
        if (loading || !data) return <Loading />;
        return loadedElement(data);
      }}
    </Query>
  );
}

export default QueryHandler;
