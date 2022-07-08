import List from '@/components/List';
import ListItem from '@/components/ListItem';
import Loader from '@/components/Loader';
import HttpClient from '@/services/httpClient';
import Repo from '@/types/Repo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await HttpClient.get(`/${username}/repos`);
        setRepos(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Repositories</h1>
      <List>
        {repos.map(repo => {
          return <ListItem key={repo.id} name={repo.name} />;
        })}
      </List>
      <Loader isLoading={isLoading} />
    </>
  );
}

export default Repositories;
