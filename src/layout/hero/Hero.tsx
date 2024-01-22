import {
    Container,
    FlexWrapper,
    StyledTitle,
    StyledWrapperPictureWithDecor,
    StyledPictureWithDecor
} from "../../components";
import styled from "styled-components";
import myPhotoWebp from '../../assets/images/hero/hero.webp'
import myPhoto from '../../assets/images/hero/hero.jpg'
import {adaptive, adaptiveValue, theme} from "../../styles";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={`${adaptiveValue(80, 40)}`}>
                    <div>
                        <StyledSubtext as={'span'}>Hello, i'm</StyledSubtext>
                        <StyledTitle fontSize={`${adaptiveValue(68, 40)}`} marginBottom={'0'} as={'h1'} color={theme.colors.blue500}>
                            Bekreneva Anna
                            <StyledSubtext as={'span'} color={theme.colors.orange500}>
                                Frontend developer
                            </StyledSubtext>
                        </StyledTitle>
                    </div>
                    <StyledWrapperPictureWithDecor>
                        <StyledPictureWithDecor src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={460} height={460} alt={'Бекренева Анна'}  />
                    </StyledWrapperPictureWithDecor>
                </FlexWrapper>
            </Container>
        </StyledHero>
    )
}

const StyledSubtext = styled(StyledTitle)`
  line-height: 1.4;
  display: block;
  font-size: ${adaptiveValue(26, 20)};
  margin-bottom: 0;
`

const StyledHero = styled.section`
  min-height: calc(100vh - 68px);
  padding: 50px 0;
  display: flex;
  align-items: center;
  
  ${FlexWrapper} {
    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      flex-direction: column;
    }
  }
`
