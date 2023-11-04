import React from 'react'
import { Grid, Typography, Card, CardContent, Container, Paper, AppBar, Toolbar, Button } from '@mui/material'

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
                  alignItems: 'left',
                  padding: '2rem',
                  height: '28rem' // Increase the height as needed
                }}
              >
                <Typography
                  sx={{
                    mb: 0,
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '4rem'
                  }}
                >
                  JobLynx
                </Typography>
                <div>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: '25px',
                      color: 'white',
                      display: 'inline'
                    }}
                  >
                    Job you need today for a successful tomorrow with{' '}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'inline',
                      fontSize: '25px',
                      color: 'Yellow',
                      fontWeight: 'bold'
                    }}
                  >
                    JobLynx
                  </Typography>
                </div>
                <Typography sx={{ color: 'black', fontSize: '15px', fontWeight: 'semi-bold', marginTop: '5px' }}>
                  Connect with Qualified Candidates and Save Time
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid>
          <Grid item xs={12} sx={{ position: 'relative', marginTop: '-1rem', zIndex: '1' }}>
            <Card sx={{ borderRadius: '0' }}>
              <CardContent
                sx={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  padding: '2rem',
                  height: '35rem', // Increase the height as needed
                  alignItems: 'center'
                }}
              >
                <Typography
                  sx={{
                    mb: 0,
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '3rem'
                  }}
                >
                  Find, Apply, Job-Ready
                </Typography>
                <Typography sx={{ mb: 6 }}>Discover jobs on different job posting companies.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* What We Do Section */}
        <Grid container spacing={15} justifyContent={'center'}>
          <Grid item xs={5} sx={{ position: 'relative', marginTop: '-46rem', zIndex: '1' }}>
            <Card>
              <CardContent
                sx={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  padding: '2rem',
                  height: '15rem' // Increase the height as needed
                }}
              >
                <Typography
                  sx={{
                    mb: 0,
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '-1rem'
                  }}
                >
                  Applicant
                </Typography>
                <Typography sx={{ mb: 6 }}>
                  Take a big step toward your new career by applying job posting programs.
                </Typography>
                <Button variant='contained' sx={{ width: '10rem' }}>
                  Apply Now
                </Button>
                <Typography
                  sx={{
                    color: 'primary.main',
                    margin: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Discover Jobs Offers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5} sx={{ position: 'relative', marginTop: '-46rem', zIndex: '1' }}>
            <Card>
              <CardContent
                sx={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  padding: '2rem',
                  height: '15rem' // Increase the height as needed
                }}
              >
                <Typography
                  sx={{
                    mb: 0,
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: '-1rem'
                  }}
                >
                  Employers
                </Typography>
                <Typography sx={{ mb: 6 }}>Recruit and acquire applicant that you desire for your teams.</Typography>
                <Button variant='contained' sx={{ width: '13rem' }}>
                  Explore Companies
                </Button>
                <Typography
                  sx={{
                    color: 'primary.main',
                    margin: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Discover Business Offers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ position: 'relative', marginTop: '4rem', zIndex: '1' }}>
            <Card sx={{ borderRadius: '0' }}>
              <CardContent
                sx={{
                  backgroundColor: 'floralwhite',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  padding: '2rem',
                  height: '20rem' // Increase the height as needed
                }}
              >
                <Typography variant='h4' sx={{ mb: 5 }}>
                  Contact Us
                </Typography>
                <Typography variant='body1'>Email: contact@yourcompany.com</Typography>
                <Typography variant='body1'>Phone: +1 (123) 456-7890</Typography>
                <Typography variant='body1'>Address: 123 Company St, City, Country</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
