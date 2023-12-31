import { Box, Card, CardContent, List, useMediaQuery } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider } from '../../utils/styledComponents';
import ExperienceItem from '../experience-item/experience-item.component';
import EducationItem from '../education-item/education-item.component';


const Experience = ({theme, checks, maxCardHeight, experienceRef}) => {

  const {isMobile, isTablet, isLaptop, isDesktop} = checks;

    return (
      
      <>
        <StyledTypography variant={ isMobile ? 'h3': 'h2'} sx={{textAlign:'center'}}>Resumé</StyledTypography>
        <Card 
        elevation={0} 
        sx={{backgroundColor: theme.palette.additional.lightPastelPink, 
        padding:'10px', 
        height: `${maxCardHeight}px`}}
        ref={experienceRef}> 
          <CardContent >
            <StyledTypography 
            variant={isDesktop ? 'h4' : isLaptop ?  'h5' : isTablet ? 'h5' : isMobile ? 'h4' :'h6'} 
            fontWeight={900} 
            sx={{color: theme.palette.error.main}} >
              Experience
            </StyledTypography>
            <List>
              <ExperienceItem
                theme={theme}
                checks={checks}
                title="Owner"
                organization="Melifluent"
                duration="August 2016 – Present"
                description={[
                  "Launched a student-centric teaching start-up focused on maximizing student ouputs for effective, real life communication.",
                  "Hire and supervise of a 5 person team, including scheduling sessions across many timezones for over 50 contiguous students.",
                  "Assess and communicate employee performance to adjust payroll and bonuses to align employee incentives to student experience and outcomes.",
                  "Carefully design and implement a multi-language learning program over the course of 7 years."
              ]}
              />
               <ExperienceItem
                theme={theme}
                checks={checks}
                title="Community Center"
                organization="IEST"
                duration="August 2014 – 2017"
                description={[
                  "Completed 4600 hours of therapy, including speech therapy and psychotherapy.",
                  "Designed and implemented workshops related to parent’s school, sexuality, and coping mechanisms for teenagers."
                  ]}
              />
              <StyledHorizontalDivider variant="inset" component="li"  sx={{width: '80%'}} />
            </List>
    
            <StyledTypography 
            variant={isDesktop ? 'h4' : isLaptop ?  'h5' : isTablet ? 'h5' : isMobile ? 'h4' :'h6'} 
            fontWeight={900} 
            sx={{color: theme.palette.error.main, paddingTop:'17px'}} >
              Education
            </StyledTypography>
            <List>
              <EducationItem
                theme={theme}
                checks={checks}
                degree="Bachelor’s Degree in Psychology"
                institution="Instituto de Estudios Superiores de Tamaulipas"
                graduationDate="May 2016"
              />
              <EducationItem
                theme={theme}
                checks={checks}
                degree="Clinical Psychology Specialty"
                institution="Instituto de Estudios Superiores de Tamaulipas"
                graduationDate="May 2017"
              />
            </List>
          </CardContent>
        </Card>
      </>
      );
    }

export default Experience;