import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import {
  Typography,
  Box,
  Container,
  CardMedia,
  CardActionArea,
} from '../styles/imports'

import {
  StyledContainer,
  StyledCard,
  StyledCardMedia,
  StyledCardLabel,
  StyledTestCard,
  StyledBox,
  StyledTestContent,
  StyledTestLabel,
} from '../styles/styles'

function Home() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <>
      <StyledBox id="tile-subtitle">
        <Container maxWidth="lg">
          <Typography component="h1" variant="h1" align="center" gutterBottom>
            Buddy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            &quot;Connecting people from abroad with local Wellingtonians&quot;
          </Typography>
        </Container>
      </StyledBox>

      {/* THE TWO CARDS IN THE MIDDLE  */}
      <StyledContainer>
        <StyledCard id="localCard">
          <IfAuthenticated>
            <Link to="/allprofiles">
              <Box>
                <CardActionArea>
                  <StyledCardMedia
                    component="img"
                    image="local-icon.svg"
                    alt="local image"
                  />
                  <StyledCardLabel variant="h6" align="center">
                    View Locals
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <Link to="/locals" onClick={() => loginWithRedirect()}>
              <Box>
                <CardActionArea>
                  <StyledCardMedia
                    component="img"
                    image="local-icon.svg"
                    alt="local image"
                  />
                  <StyledCardLabel variant="h6" align="center">
                    View Locals
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>
        </StyledCard>

        <StyledCard id="internationalCard">
          <IfAuthenticated>
            <Link to="/allprofiles">
              <Box>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="international-icon.svg"
                    alt="international image"
                  />
                  <StyledCardLabel variant="h6" align="center">
                    View International
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <Link to="/internationals" onClick={() => loginWithRedirect()}>
              <Box>
                <CardActionArea>
                  <CardMedia image="international-icon.svg" />
                  <StyledCardLabel variant="h6" align="center">
                    View Internationals
                  </StyledCardLabel>
                </CardActionArea>
              </Box>
            </Link>
          </IfNotAuthenticated>
        </StyledCard>
      </StyledContainer>

      {/* THE TESTIMONIALS SECTION  */}
      <StyledTestCard id="testimonial" maxWidth="md">
        <StyledBox>
          <StyledTestLabel variant="h4" align="center" gutterBottom>
            Testimonials
          </StyledTestLabel>
          <StyledTestContent variant="h5" align="center" gutterBottom>
            &quot;I had the best time meeting Reuben. He really helped me feel
            comfortable learning about Wellington and finding the best place to
            eat. Yum!&quot; - Ado
          </StyledTestContent>
        </StyledBox>
      </StyledTestCard>
    </>
  )
}

export default Home
