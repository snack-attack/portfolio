import { useStaticQuery, graphql } from 'gatsby';
// import { YellowQuery } from '../../types/types.generated';

export const useBackground = () => {
    const result = useStaticQuery<any>(graphql`
        query background {
            allImageSharp {
                edges {
                    node {
                        resize(width: 150, height: 150) {
                            width
                            height
                            src
                            originalName
                        }
                    }
                }
            }
        }
    `);

    return {
        background: result.allImageSharp.edges.node.resize,
    };
};
