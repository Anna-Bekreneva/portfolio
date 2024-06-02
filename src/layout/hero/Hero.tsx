import {
    Container,
    FlexWrapper,
    StyledTitle,
    StyledWrapperPictureWithDecor,
    StyledPictureWithDecor, SrOnly
} from "components";
import {theme} from "styles";
import {FC} from "react";
import {S} from './Hero_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
export const Hero: FC= () => {
    return (
        <S.Hero>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <S.Subtext as={'span'}>Привет, я</S.Subtext>
                        <StyledTitle marginBottom={'0'} as={'h1'} color={theme.colors.blue500}>
                            Бекренева Анна
                            <S.Subtext as={'span'} color={theme.colors.orange500} aria-hidden>
                                <Typewriter
                                    options={{
                                        strings: ['Frontend разработчик', 'верстальщик', 'веб-дизайнер'],
                                        delay: 100,
                                        deleteSpeed: 500,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </S.Subtext>
                            <SrOnly>Frontend разработчик, верстальщик, веб-дизайнер</SrOnly>
                        </StyledTitle>
                    </div>
                    <Tilt tiltReverse={true}>
                        <StyledWrapperPictureWithDecor>
                            <StyledPictureWithDecor
                                srcAvif={`${process.env.PUBLIC_URL}/assets/images/hero/hero.avif 1x, ${process.env.PUBLIC_URL}/assets/images/hero/hero@2x.avif 2x`}
                                srcWebp={`${process.env.PUBLIC_URL}/assets/images/hero/hero.webp 1x, ${process.env.PUBLIC_URL}/assets/images/hero/hero@2x.webp 2x`}
                                src={`${process.env.PUBLIC_URL}/assets/images/hero/hero.jpg`}
                                srcSet={`${process.env.PUBLIC_URL}/assets/images/hero/hero.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/hero/hero@2x.jpg, 2x`}
                                width={460}
                                height={460}
                                alt={'Бекренева Анна'}  />
                        </StyledWrapperPictureWithDecor>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Hero>
    )
}