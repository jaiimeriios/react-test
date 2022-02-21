import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    tr td,
    tr th {
        text-align: left;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }

    tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    tbody tr td:last-child {
        text-align: center;

        path {
            color: #7e3d3d;
            cursor: pointer;

            :hover {
                color: #973333;
            }
        }
    }

    tfoot tr th {
        border: none;
    }
`;

const Forma = styled.form`
    width: 100%;
    border-radius: 0.35rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(223, 228, 231, 0.1);
`;

export { Table, Forma };
