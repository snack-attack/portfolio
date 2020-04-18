import { useStaticQuery, graphql } from 'gatsby';
// import { YellowQuery } from '../../types/types.generated';

export const useYellow = () => {
    const result = useStaticQuery<any>(graphql`
        query yellow {
            file(relativePath: { eq: "yellow.jpg" }) {
                childImageSharp {
                    fixed(width: 600) {
                        originalName
                    }
                }
            }
        }
    `);

    return {
        yellow: result.file.childImageSharp.fixed,
    };
};
