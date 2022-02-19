import styled from 'styled-components';

const BudgetsRow = styled.section`
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        border-radius: 0.35rem;
        border: solid 1px rgba(223, 228, 231, 0.1);

        .d-flex {
            margin: 0;
            padding: 15px 0;

            h3 {
                margin: 0;
            }
        }
        .success {
            background-color: rgba(16, 96, 47, 0.25);
        }
        .danger {
            background-color: rgba(171, 59, 59, 0.25);
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

const Heading4 = styled.h4`
    font-size: 1.35rem;
    color: var(--heading-color);
    margin: 20px 0;
`;

export { BudgetsRow, Heading4 };
