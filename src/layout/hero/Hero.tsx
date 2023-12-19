import {Container, FlexWrapper, StyledTitle, Picture} from "../../components";
import styled from "styled-components";
import myPhotoWebp from '../../assets/images/hero/hero.webp'
import myPhoto from '../../assets/images/hero/hero.jpg'
import {theme} from "../../styles";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'80px'}>
                    <div>
                        <StyledTitle lineHeight={1} as={'span'} display={'block'}>Hello, i'm</StyledTitle>
                        <StyledTitle fontSize={'68px'} lineHeight={1.2} as={'h1'} color={theme.colors.blue500}>
                            Bekreneva Anna
                            <StyledTitle as={'span'} lineHeight={2} display={'block'} color={theme.colors.orange500}>
                                Frontend developer
                            </StyledTitle>
                        </StyledTitle>
                    </div>
                    <StyledPictureWrapper>
                        <StyledTestPicture src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={410} height={460} alt={'Бекренева Анна'}  />
                    </StyledPictureWrapper>
                </FlexWrapper>
            </Container>
        </StyledHero>
    )
}

const StyledHero = styled.section`
  min-height: calc(100vh - 68px);
  background-color: ${theme.colors.orange50};
  padding: 50px 0;
  display: flex;
  align-items: center;
`

const StyledPictureWrapper = styled.div`
  max-width: 410px;
  width: 100%;
  height: 460px;
  position: relative;
  z-index: 1;
  border-radius: 20px;

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-color: ${theme.colors.orange200};
    opacity: 0.8;
    top: -6%;
    left: -6%;
    z-index: -1;
    border-radius: inherit;
  }
`

const StyledTestPicture = styled(Picture)`
  width: 100%;
  border-radius: 20px;

`
