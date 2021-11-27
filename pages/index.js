import { Button, Grid, Link, Input, useInput } from '@geist-ui/react';

export default function Home() {
  const { state, setState, reset, bindings } = useInput('');

  return (
    <div>
      <Grid.Container justify='center' gap={3} mt='100px'>
        <Grid sm={24} justify='center'>
          <Input {...bindings} label='seed' placeholder='Enter your login seed' />
        </Grid>

        <Grid xs={20} sm={4}>
          <Link href='/signup' width='100%'>
            <Button shadow width='100%'>
              Signup
            </Button>
          </Link>
        </Grid>
        <Grid xs={20} sm={4}>
          <Link href='/signup' width='100%'>
            <Button disabled={!bindings.value} shadow type='secondary-light' width='100%'>
              Login
            </Button>
          </Link>
        </Grid>
      </Grid.Container>
    </div>
  );
}
