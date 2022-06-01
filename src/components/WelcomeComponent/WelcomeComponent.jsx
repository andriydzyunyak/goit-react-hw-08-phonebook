import {
  Container,
  PageTitle,
  HomePageImage,
} from 'components/WelcomeComponent/WelcomeComponent.styled';
import phonebookimage from 'image/homepage.jpg';
import mobileimage from 'image/homepage-mobile.jpg';

export const WelcomeComponent = () => {
  return (
    <Container>
      <PageTitle>Welcome to our Phonebook service</PageTitle>
      <picture>
        <source srcSet={phonebookimage} media="(min-width:768px)" />
        <source srcSet={mobileimage} media="(min-width:320px)" />
        <HomePageImage alt="phonebookimage" src={mobileimage} />
      </picture>
    </Container>
  );
};
