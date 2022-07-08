import ErrorMessage from '@/components/ErrorMessage';
import List from '@/components/List';
import ListItem from '@/components/ListItem';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';

import HttpClient from '@/services/httpClient';
import { Commit } from '@/types/Commit';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Commits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { owner, repo, branch } = useParams();

  const shouldDisplayLoader = !error && isLoading;
  const shouldDisplayNoResults = !error && !isLoading && !commits.length;
  const shouldDisplayList = !error && !isLoading && commits.length > 0;

  function notify() {
    toast.error('OOPS!, Error... Please try again');
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await HttpClient.get(
          `/repos/${owner}/${repo}/commits?sha=${branch}`
        );

        setCommits(data);
      } catch (error) {
        setError(true);
        notify();
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {error && <ErrorMessage />}
      {shouldDisplayNoResults && <NoResults />}
      {shouldDisplayList && (
        <>
          <h1>commits</h1>
          <List>
            {commits.map(commit => {
              return (
                <Link to={'#'}>
                  <ListItem
                    key={`${commit.sha}`}
                    name={commit.commit.message}
                  />
                </Link>
              );
            })}
          </List>
        </>
      )}
      <Loader isLoading={shouldDisplayLoader} />
    </>
  );
}

export default Commits;
