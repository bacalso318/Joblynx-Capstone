import React from 'react'
import { Grid, Typography, Card, CardContent, Container, Paper, AppBar, Toolbar, IconButton } from '@mui/material'

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}

      {/* Main Content */}
      <Container>
        {/* JobLynx Section */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent
                sx={{
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  height: '20rem' // Increase the height as needed
                }}
              >
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'black'
                  }}
                >
                  JobLynx
                </Typography>
                <div>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: '25px',
                      color: 'white'
                    }}
                  >
                    Simplify Your Hiring Process with{' '}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'inline',
                      fontSize: '25px',
                      color: 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    JobLynx
                  </Typography>
                </div>
                <Typography sx={{ color: 'graywhite', fontSize: '15px' }}>
                  Connect with Qualified Candidates and Save Time
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* What We Do Section */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '16px' }}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                What We Do
              </Typography>
              <Typography variant='body1'>The service we offer is specifically designed to meet your needs.</Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Security - Context on security.
              </Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Daily Updates - Context on daily updates.
              </Typography>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Job Research - Context about job research.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '16px' }}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Contact Us
              </Typography>
              <Typography variant='body1'>Email: contact@yourcompany.com</Typography>
              <Typography variant='body1'>Phone: +1 (123) 456-7890</Typography>
              <Typography variant='body1'>Address: 123 Company St, City, Country</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
