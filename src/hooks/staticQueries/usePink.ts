import { useStaticQuery, graphql } from 'gatsby';
// import { PinkQuery } from '../../types/types.generated';

export const usePink = () => {
    const result = useStaticQuery<any>(graphql`
        query pink {
            file(relativePath: { eq: "pink.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER) {
                        originalName
                    }
                }
            }
        }
    `);

    return {
        pink: result.file.childImageSharp.fluid,
    };
};
