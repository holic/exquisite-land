import { request, gql } from 'graphql-request';
import useSWR, { SWRConfiguration } from 'swr';
import { GRAPH_URL } from './AddressBook';

let query = gql`
  {
    tiles(first: 500) {
      id
      x
      y
      status
      svg
      owner {
        id
      }
    }
  }
`;

// TODO: pagination

export const useFetchTile = (
  x: number,
  y: number,
  swrOptions?: Partial<SWRConfiguration>
) => {
  const { data, error, mutate } = useSWR(
    ['canvas-fetch'],
    () => request(GRAPH_URL, query),
    { revalidateOnMount: true, ...swrOptions }
  );
  const tile = data?.tiles.find((tile: any) => {
    return tile.x == x && tile.y == y;
  });
  //   console.log("tile", tile);
  return { tile, error, refresh: mutate };
};

// TODO: integrate IPFS fetching? at Graph level or here?
export const useFetchCanvas = (
  // variables?: Variables,
  swrOptions?: Partial<SWRConfiguration>
) => {
  const { data, error, mutate } = useSWR(
    ['canvas-fetch'],
    () => request(GRAPH_URL, query),
    { revalidateOnMount: true, ...swrOptions }
  );
  return { data, error, refresh: mutate };
};
