import { useState } from "react";
import { ButtonEditProject } from "../ButtonEditProject";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";
import { Container, ThumbWrapper, UserInfo } from "./styles";

export const ProjectThumbnail = ({ onClick, className, thumb, tags = [], userName }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsFocused(true);
      };
    
      const handleMouseLeave = () => {
        setIsFocused(false);
      };

    return (
        <Container>
            <ThumbWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={thumb} alt="Thumbnail de preview do projeto" />

                {isFocused && <ButtonEditProject onClick={onClick} />}
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