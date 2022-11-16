import Button from "components/Button";
import { Container, Title } from "components/sharedstyles";
import Link from "next/link";

const _404 = () => {
    return (
        <Container>
            <Title>
                <div style={{fontSize: "10rem", fontWeight: "bold"}}>404</div>
                Page Not Found
            </Title>

            <Link href="/" passHref>
                <Button>
                    Take me out of this place!
                </Button>
            </Link>
        </Container>
    );
};

export default _404;