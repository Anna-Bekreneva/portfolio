import {FlexWrapper, StyledTitle} from "../../components";
import styled from "styled-components";
import {Picture} from "../../components/common/picture";
import myPhotoWebp from '../../assets/images/hero/hero.webp'
import myPhoto from '../../assets/images/hero/hero.jpg'

export const Hero = () => {
    return (
        <StyledHero>
            <FlexWrapper>
                <StyledContent>
                    <StyledTitle as={'span'}>Привет, я</StyledTitle>
                    <StyledTitle as={'h1'}>
                        Бекренева Анна
                        <StyledTitle as={'span'}>
								Frontend разработчик
						</StyledTitle>
                    </StyledTitle>
                </StyledContent>
                <Picture src={myPhotoWebp} srcSet={myPhoto} loading={'lazy'} width={390} height={440} alt={'Бекренева Анна'}  />
            </FlexWrapper>
        </StyledHero>
    )
}

const StyledHero = styled.section``
const StyledContent = styled.div``
