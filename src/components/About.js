import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    color: 'primary',
  },
  myImg: {
    width: 250,
    height: 250,
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));
const photoSrc =
  'https://lh3.googleusercontent.com/lN6raZOdenBpg0YPTIu79y8ucMd98ngQ9ipHntr1d8NLdw05ee-k8Oq2e_XXlonHAccg8IZRptwdl-UhhhjAPLdYKwzmdtJRFrxzBM2hMg_queTLNrTQOgXJ9HzaNYg4rwi4Ia-f44o=w2400';

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} direction="column" align="center">
      <Grid item container spacing={6} direction="row" alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={photoSrc}
            className={classes.myImg}
            alt="Andrea Farinacci"
          />
        </Grid>
        <Grid item xs={12} md={6} align="left">
          <Typography color="secondary" variant="h4">
            Andrea M. Farinacci
          </Typography>
          <br />
          <Typography variant="body1">afarinac.14@gmail.com</Typography>
          <Typography variant="body1">(614) 316-0750</Typography>
          <Typography variant="body1">Houston, TX</Typography>
        </Grid>
      </Grid>

      <Grid item container spacing={2} direction="column" align="left">
        <Grid item>
          <Typography color="primary" variant="h5">
            Education
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <span style={{ fontWeight: 'bold' }}>
                  Carnegie Mellon University
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Pittsburgh, PA</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                Master of Engineering in Chemical Engineering
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">December 2014</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                Bachelor of Science in Chemical Engineering
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">May 2014</Typography>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid item>
          <Typography color="primary" variant="h5">
            Certifications
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <Link
                  href="https://www.freecodecamp.org/certification/afarinac/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="secondary"
                >
                  Free Code Camp Full Stack Development Certification
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">April 2020</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <Link
                  href="https://lh3.googleusercontent.com/uXg6-j-bbo3WDwNZoZkGoFGixIE4GElXwo_N1AWo5hc3l9DFYOoAp32VJWT5p6AFzkakgeD4oqJN1-td7_MA2aDXWQCPE0MikjPml4eBIQUB9PCrC46EPyAg3gh2ufYr-FOg4wD1rxQ=w2400"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="secondary"
                >
                  EC-Council Certified Ethical Hacker (CEH)
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">February 2017</Typography>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid item>
          <Typography color="primary" variant="h5">
            Technical Skills
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: 'bold' }}>Languages:</span> JavaScript,
            HTML5, CSS3
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: 'bold' }}>
              Frameworks &amp; Libraries:
            </span>{' '}
            React, Express, Sass, Material UI, Bootstrap, Bulma, D3.js
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: 'bold' }}>Other:</span> Node.js, Git
            &amp; GitHub, RESTful APIs, MongoDB, SQL
          </Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography color="primary" variant="h5">
            Work Experience
          </Typography>
          <Typography variant="h6">Center for Better Learning</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <span style={{ fontWeight: 'bold' }}>
                  Freelance Web Developer
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                February 2020 – April 2020
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">
            <ul>
              <li>
                Designed and developed centerforbetterlearning.com to the
                business owner’s specifications as a React single page
                application
              </li>
              <li>
                Implemented a mobile-first, responsive user interface using
                Bootstrap CSS framework
              </li>
              <li>
                Increased SEO performance by implementing React Router, React
                Helmet, schema microdata, and static pre-rendering
              </li>
            </ul>
          </Typography>
          <br />
          <Typography variant="h6">Tranzact</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <span style={{ fontWeight: 'bold' }}>Senior Analyst</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">April 2017 – October 2017</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">
            <ul>
              <li>
                Aggregated marketing performance data from over 30 sources into
                comprehensive monthly and weekly reports for the executive team
              </li>
              <li>
                Managed Search and Display advertising for
                medicaresupplement.com, Tranzact’s largest account
              </li>
              <li>
                Completed a comprehensive business case for the introduction of
                an organic content website into Tranzact’s portfolio; Work
                included competitive analysis, financial modeling, and pitching
                the case to senior management
              </li>
            </ul>
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <span style={{ fontWeight: 'bold' }}>
                  Digital Marketing Analyst
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">October 2015 – March 2017</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">
            <ul>
              <li>
                Engaged with insurance companies such as Aetna and Mutual of
                Omaha to acquire new customers with a fully developed,
                direct-to-consumer marketing campaign
              </li>
              <li>
                Worked with a team to implement and manage digital campaigns
                with a focus on search and display advertising, such as Google
                Adwords and The Trade Desk
              </li>
              <li>Led a new marketing campaign for Aetna cancer insurance</li>
              <li>
                Doubled daily paid search lead volume for Mutual of Omaha life
                insurance with strategic campaign adjustments
              </li>
            </ul>
          </Typography>
          <br />
          <Typography variant="h6">Biosolventus Corporation</Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <span style={{ fontWeight: 'bold' }}>
                  Mathematical Modeling Intern
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">July 2015 - October 2015</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">
            <ul>
              <li>
                Developed a model to optimize dispatch of wind powered
                electricity generation from one supply point to 3500 demand
                sites, and implemented MIP in GAMS using CPLEX solver
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <br />
    </Grid>
  );
};

export default Content;
