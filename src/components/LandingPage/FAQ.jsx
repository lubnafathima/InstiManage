import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
  id="faq"
  sx={{
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
  }}
>
  <Typography
    component="h2"
    variant="h4"
    color="text.primary"
    sx={{
      width: { sm: '100%', md: '60%' },
      textAlign: { sm: 'left', md: 'center' },
    }}
  >
    Frequently Asked Questions
  </Typography>
  <Box sx={{ width: '100%' }}>
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <Typography component="h3" variant="subtitle2">
          How do I get started with InstiManage?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%' } }}
        >
          To get started with InstiManage, you can sign up on our website or contact our sales team for a demo. Our onboarding process is designed to help your institution integrate the platform seamlessly.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === 'panel2'}
      onChange={handleChange('panel2')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2d-content"
        id="panel2d-header"
      >
        <Typography component="h3" variant="subtitle2">
          What support options are available?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%' } }}
        >
          We offer various support options, including email, phone, and live chat. Additionally, our help center provides comprehensive guides and resources to assist you with any questions or issues.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === 'panel3'}
      onChange={handleChange('panel3')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3d-content"
        id="panel3d-header"
      >
        <Typography component="h3" variant="subtitle2">
          Can I customize InstiManage to fit my institution’s needs?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%' } }}
        >
          Yes, InstiManage is designed to be highly customizable. You can tailor features, dashboards, and workflows to align with your institution’s specific requirements.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === 'panel4'}
      onChange={handleChange('panel4')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4d-content"
        id="panel4d-header"
      >
        <Typography component="h3" variant="subtitle2">
          What kind of training is provided for new users?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%' } }}
        >
          We provide comprehensive training sessions for new users, including live webinars, one-on-one training, and access to a library of video tutorials. Our goal is to ensure a smooth transition to InstiManage.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
</Container>
  );
}