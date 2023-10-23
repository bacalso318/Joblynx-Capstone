// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Customizer from 'src/@core/components/customizer'
import { useToaster } from 'react-hot-toast'
import { Button } from '@mui/material'

const Home = () => {

  const toast = useToaster()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{
            backgroundColor:'primary.main'
          }}>
            <Typography sx={{
              mb:1,
              fontSize:'48px',
              fontWeight:'bold',
              color:'black',
            }}>JobLynx</Typography>
            <Typography sx={{ mb: 2,display:'inline', fontSize:'25px', color:'white'}}>Simplify Your Hiring Process with </Typography>
            <Typography sx={{display:'inline', fontSize:'25px', color:'black', fontWeight:'bold' }}>JobLynx</Typography>
            <Button sx={{width:'140px',left:'12cm',display:'inline',backgroundColor:'blue',fontWeight:'bold'}} variant='contained' >Apply Now</Button>
            <Button sx={{width:'140px',left:'12.5cm', backgroundColor:'#d4d3d2', fontWeight:'bold'}} variant='Outlined'>Contact</Button>
            <Typography sx={{color:'graywhite', fontSize:'15px'}}>Connect with Qualifed Candidates and Save Time</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
        <Customizer />
      </Grid>
    </Grid>
  )
}

export default Home
