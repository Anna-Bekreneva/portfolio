import {
    Container,
    FlexWrapper,
    StyledTitle,
    StyledWrapperPictureWithDecor,
    StyledPictureWithDecor, SrOnly
} from "../../components";
import myPhoto from '../../assets/images/hero/hero.jpg'
import myPhotoWebp from '../../assets/images/hero/hero.webp'
import {theme} from "../../styles";
import {FC} from "react";
import {S} from './Hero_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
export const Hero: FC = () => {
    return (
        <S.Hero>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <S.Subtext as={'span'}>Hello, i'm</S.Subtext>
                        <StyledTitle marginBottom={'0'} as={'h1'} color={theme.colors.blue500}>
                            Bekreneva Anna
                            <S.Subtext as={'span'} color={theme.colors.orange500} aria-hidden>
                                <Typewriter
                                    options={{
                                        strings: ['Frontend developer', 'HTML/CSS developer', 'Web designer'],
                                        delay: 100,
                                        deleteSpeed: 500,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </S.Subtext>
                            <SrOnly>Frontend developer, HTML/CSS developer, Web designer</SrOnly>
                        </StyledTitle>
                    </div>
                    <Tilt tiltReverse={true}>
                        <StyledWrapperPictureWithDecor>
                            <StyledPictureWithDecor src={myPhoto} srcSet={myPhotoWebp} loading={'lazy'} width={460} height={460} alt={'Bekreneva Anna'}  />
                        </StyledWrapperPictureWithDecor>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Hero>
    )
}
