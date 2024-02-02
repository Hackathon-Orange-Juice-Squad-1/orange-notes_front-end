import { ButtonEditProject } from "../ButtonEditProject";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";
import { Container, ThumbWrapper, UserInfo } from "./styles";

export const ProjectThumbnail = ({ className, thumb, tags = [], userName }) => {
    return (
        <Container>
            <ThumbWrapper>
                <img src={thumb} alt="Thumbnail de preview do projeto" />

                <ButtonEditProject />
            </ThumbWrapper>

            <UserInfo className={className}>
                <ProfileSmall userName={userName} index="12/12" className="on-thumb" />

                <ul>
                    {tags.map((tag, index) => (
                        <Tag key={index + tag} tag={tag} />
                    ))}
                </ul>
            </UserInfo>
        </Container>
    );
};