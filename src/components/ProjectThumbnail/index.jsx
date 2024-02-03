import { useState, useEffect } from "react";
import { useTogglePreview } from "../../hooks/useTogglePreview";
import { ButtonEditProject } from "../ButtonEditProject";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";
import { ModalPreview } from "../ModalPreview";
import { Container, ThumbWrapper, UserInfo } from "./styles";

export const ProjectThumbnail = ({ onClick, className, thumb, tags = [], userName, title, description, link }) => {
    const { preview, togglePreview } = useTogglePreview();
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsFocused(true);
    };

    const handleMouseLeave = () => {
        setIsFocused(false);
    };

    const handleClosePreview = () => {
        togglePreview();
    };

    return (
        <>
            <Container>
                <ThumbWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={thumb} alt="Thumbnail de preview do projeto" onClick={togglePreview} />

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

            <ModalPreview
                title={title}
                image={thumb}
                description={description}
                link={link}
                onClick={handleClosePreview}
                preview={preview}>
            </ModalPreview>
        </>
    );
};