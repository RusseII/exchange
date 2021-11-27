import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Grid, Card, Link, Loading, Description, Text } from '@geist-ui/react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.id && `/api/people/${query.id}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Loading>Loading</Loading>

  const { accounts } = data;
  return (
    <div>
      <Grid.Container justify='center'>
        {accounts.map((account) => (
          <Grid   xs={13} key={account.id}>
              <Link href={`/account/${account.id}`} width='100%'>
            <Card hoverable width='100%'>
            <Text h3>{account.currency}</Text>
              <Description title="Balance" content={account.availableBalance || '0'} />
            </Card>
            </Link>

          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
