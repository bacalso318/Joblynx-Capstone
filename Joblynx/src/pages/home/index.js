// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Customizer from 'src/@core/components/customizer'
import { useToaster } from 'react-hot-toast'
import { Box, Button, CardMedia } from '@mui/material'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { left } from '@popperjs/core'

const Home = () => {

  const toast = useToaster()

  return (
    <ApexChartWrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card>
              <CardContent sx={{
                backgroundColor:'primary.main',
                height: '8cm'
              }}>
                <Typography sx={{
                  mb:1,
                  fontSize:'48px',
                  fontWeight:'bold',
                  color:'black',
                  cursor:'pointer'
                }}>JobLynx</Typography>
                <Typography sx={{ mb: 2,display:'inline', fontSize:'25px', color:'white'}}>Simplify Your Hiring Process with </Typography>
                <Typography sx={{display:'inline', fontSize:'25px', color:'black', fontWeight:'bold' }}>JobLynx</Typography>
                <Typography sx={{mb:10,color:'graywhite', fontSize:'15px'}}>Connect with Qualifed Candidates and Save Time</Typography>
                <Button sx={{height:'50px',width:'160px',backgroundColor:'blue',fontWeight:'bold', ":hover":{backgroundColor:'error.main'}}} variant='contained' >Find A Job</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card>
              <CardHeader title='Card Left'></CardHeader>
              <CardContent>
                <Typography sx={{color:'info.main'}}>
                  Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
                </Typography>
                <Typography sx={{color:'error.main'}}>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3} md={5} sx={{marginLeft:'6.1cm'}}>
              <Card>
                <CardHeader title='Card Right'></CardHeader>
                <CardContent sx={{
                  height: '140px',
                }}>
                  <Typography sx={{color:'primary.main'}}>Et aliquip Lorem quis sit occaecat cillum consequat sint nulla non. Non elit sint cillum aliquip. Veniam tempor magna dolor elit nulla excepteur. Adipisicing voluptate magna ea anim mollit officia labore fugiat tempor enim aute in dolore. Aute ullamco ex dolore proident voluptate proident velit aliquip tempor qui culpa Lorem. Nisi aliqua velit pariatur consequat esse nisi ut pariatur adipisicing eiusmod in dolor nulla do. Dolor irure pariatur nostrud consectetur non minim culpa nostrud qui consectetur anim nulla officia adipisicing.</Typography>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
    </ApexChartWrapper>
    
    
  )
}

export default Home
