import ErrorMessage from '@/components/ErrorMessage';
import List from '@/components/List';
import ListItem from '@/components/ListItem';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';

import HttpClient from '@/services/httpClient';
import Repo from '@/types/Repo';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { owner } = useParams();

  const shouldDisplayLoader = !error && isLoading;
  const shouldDisplayNoResults = !error && !isLoading && !repos.length;
  const shouldDisplayList = !error && !isLoading && repos.length > 0;

  function notify() {
    toast.error('OOPS!, Error... Please try again');
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await HttpClient.get(`/users/${owner}/repos`);
        setRepos(data);
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
          <h1>Repositories</h1>
          <List>
            {repos.map(repo => {
              return (
                <Link to={`/repositories/${owner}/${repo.name}/branches`}>
                  <ListItem key={`${repo.id}`} name={repo.name} />
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

export default Repositories;
