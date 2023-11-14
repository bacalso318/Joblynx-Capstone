import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Grid, Paper } from '@mui/material'

const CompanyContent = () => {
  // Sample company data, replace with your actual data
  const companies = [
    {
      id: 1,
      name: 'Company A',
      description: 'Description of Company A.',
      jobPostings: [
        {
          id: 101,
          title: 'Job Title 1',
          requirements: 'Requirements for Job Title 1',
          details: 'Details for Job Title 1'
        }
        // Add more job postings for Company A
      ]
    },
    {
      id: 2,
      name: 'Company B',
      description: 'Description of Company B.',
      jobPostings: [
        {
          id: 201,
          title: 'Job Title 2',
          requirements: 'Requirements for Job Title 2',
          details: 'Details for Job Title 2'
        }
        // Add more job postings for Company B
      ]
    }
    // Add more companies
  ]

  return (
    <Container>
      <Grid container spacing={3}>
        {companies.map(company => (
          <Grid item xs={12} key={company.id}>
            <Accordion>
              <AccordionSummary aria-controls={`panel-${company.id}-content`} id={`panel-${company.id}-header`}>
                <Typography variant='h6'>{company.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3} style={{ padding: '16px' }}>
                  <Typography variant='body1'>{company.description}</Typography>
                  <Typography variant='h6' style={{ marginTop: '16px' }}>
                    Job Postings
                  </Typography>
                  {company.jobPostings.map(jobPosting => (
                    <div key={jobPosting.id}>
                      <Typography variant='subtitle1'>{jobPosting.title}</Typography>
                      <Typography variant='body2'>Requirements: {jobPosting.requirements}</Typography>
                      <Typography variant='body2'>Details: {jobPosting.details}</Typography>
                      <hr style={{ margin: '16px 0' }} />
                    </div>
                  ))}
                </Paper>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CompanyContent
