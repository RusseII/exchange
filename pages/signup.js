import Head from 'next/head'
import { Page, Text, Image, Display, Button, Grid } from '@geist-ui/react'

export default function Home() {
  const redirect = (url) => {
    window.open(url)
  }

  return (
    <div>
      <Head>
        <title>Bookland Crypto Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page dotBackdrop width="800px" padding={0}>
        <Display
          title="Geist UI"
          caption={
            <>
              Welcome to{' '}
              <Text span b>
              Bookland Crypto Exchange
              </Text>
            </>
          }>
          <Image alt="Bookland Logo" width={10} height={10} src="/bl.png" draggable={false} />
        </Display>
        <Grid.Container justify="center" gap={3} mt="100px">
          <Grid xs={20} sm={7} justify="center">
            <Button
              shadow
              type="secondary-light"
              width="100%"
              onClick={() => redirect(gh)}>
              Signup
            </Button>
          </Grid>
     
        </Grid.Container>
      </Page>
    </div>
  )
}