import Button from 'components/Button';
import {
  Container,
  Main,
  Title
} from '../components/sharedstyles'
import styled from "styled-components";
import Link from "next/link";

const Section = styled(Container)`
  justify-content: center;
  gap: 1rem;
  padding: 2wh;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-flow: row;
  }
`
const TitleStyle = styled.h1`
margin-top: 1rem;
  font-size: 7rem;
  font-weight: 700;
  min-width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  --push: 4rem;

  color: ${({ theme }) => theme.colors.red};
  span:nth-child(odd) {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  
  @media screen and (min-width: 768px) {
    span {
      margin-left: calc(var(--push) + 1rem);
    }

    span:nth-child(2) {
      margin-left: calc(var(--push) + 4rem);
    }
    
    span:nth-child(3) {
      margin-left: calc(var(--push) + 7rem);
    }

    span:not(:first-child) {
      margin-top: -2.5rem;
    }
  }
`;

const Hero = () => {
  return <Section>
    {/* Title */}
    <TitleStyle >
      <span>The</span>
      <span>Clubs</span>
      <span>Of</span>
      <span>CHS</span>
    </TitleStyle>
    {/* Description */}
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "10px"}}>
      <h2 style={{marginTop: "auto"}}>
        Why clubs?
      </h2>
      <p style={{maxWidth: "85%"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut semper leo. Fusce euismod, quam eu vehicula blandit, sapien risus ultricies metus, sed rhoncus augue arcu vel felis. Etiam id massa id libero tempus aliquet. Proin ornare lectus eu nisl faucibus, eget aliquet massa varius. Nulla facilisi. Sed ut erat eget lorem vulputate dictum. Sed ut ornare nunc. Quisque sit amet auctor tortor. Sed eget interdum sem. Nulla facilisi. Pellentesque habitant morbi tristique sen
      </p>
      <Link href="#stats">
        <Button style={{justifySelf: "end"}}>
          Learn More
        </Button>
      </Link>
    </div>
  </Section>;
}

const StatGrid = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  justify-items: center;
  max-width: 1000px;

  @media screen and (min-width: 768px) {
    div:nth-of-type(even) {
      margin-left: 15rem;
    }

    div:nth-of-type(odd) {
      margin-right: 5rem;
    }
  }
`;

// A big number with small text underneath
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 2rem;
    font-weight: 600;
  }
`;


const Stats = () => {
  return <StatGrid id="stats">
    <Title style={{marginLeft: "25%"}}>
      Stats
    </Title>
    <Stat>
      100+
      <span>Clubs</span>
    </Stat>
    <Stat>
      XX
      <span>People in a club</span>
    </Stat>
    <Stat>
      XX
      <span>clubs across x genres</span>
    </Stat>
    <Stat>
      XX
      <span>is another stat here</span>
    </Stat>
  </StatGrid>;
}

const Video = () => {
  return <Container style={{minHeight: "100vh"}}>
    <Title>
      Springer about clubs
    </Title>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  </Container>;
}

const Featured = () => {
  return <Container>
    <Title>
      Club of the Month
    </Title>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      <div style={{ width: "500px", height: "500px", backgroundColor: "lightGrey" }}></div>
    </div>

    <Title style={{fontSize: "1.5rem", marginTop: "2rem"}}>
      A snippet about this club
    </Title>
    <p style={{ maxWidth: "65%" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut semper leo. Fusce euismod, quam eu vehicula blandit, sapien risus ultricies metus, sed rhoncus augue arcu vel felis. Etiam id massa id libero tempus aliquet. Proin ornare lectus eu nisl faucibus, eget aliquet massa varius. Nulla facilisi. Sed ut erat eget lorem vulputate dictum. Sed ut ornare nunc. Quisque sit amet auctor tortor. Sed eget interdum sem. Nulla facilisi. Pellentesque habitant morbi tristique sen
    </p>
  </Container>;
}

export default function Home() {
  return (
    <Container>
      <Main>
        <Hero />
        {/* broken ;() */}
        <Stats />
        
        <Video />
        
        <Featured />
      </Main>
    </Container>
  )
}
