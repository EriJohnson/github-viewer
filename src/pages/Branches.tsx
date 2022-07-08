import ErrorMessage from '@/components/ErrorMessage';
import List from '@/components/List';
import ListItem from '@/components/ListItem';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';

import HttpClient from '@/services/httpClient';
import Branch from '@/types/Branch';
import Repo from '@/types/Repo';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Branches() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { owner, repo } = useParams();

  const shouldDisplayLoader = !error && isLoading;
  const shouldDisplayNoResults = !error && !isLoading && !branches.length;
  const shouldDisplayList = !error && !isLoading && branches.length > 0;

  function notify() {
    toast.error('OOPS!, Error... Please try again');
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await HttpClient.get(
          `/repos/${owner}/${repo}/branches`
        );

        setBranches(data);
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
          <h1>Branches</h1>
          <List>
            {branches.map((branch, index) => {
              return (
                <Link
                  to={`/repositories/${owner}/${repo}/branches/${branch.name}`}
                >
                  <ListItem key={index} name={branch.name} />
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

export default Branches;
