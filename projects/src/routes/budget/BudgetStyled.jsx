import styled from 'styled-components';

const BudgetsRow = styled.section`
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
        background-color: #00000030;
        width: 100%;
        border-radius: 0.35rem;
        border: solid 1px #dfe4e717;

        .d-flex {
            margin: 0;
            padding: 15px 0;

            h3 {
                margin: 0;
            }
        }
    }

    @media (min-width: 600px) {
        gap: 0;
        justify-content: space-between;

        > div {
            background-color: blue;
            width: 32%;
        }
    }
`;

export { BudgetsRow };
