import styled from "styled-components"


export const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #120D31;
    padding-right: 5rem;
    padding-left: 2rem;
    padding-top: 2rem;
    color: white;
    .anime{
        display: flex;
        flex-direction: column;
        width: 150px;
        img{
            width: 100%;
            border-radius: 5px;
            border: 5px solid #e5e7eb;
        }
        a{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .4rem;
            color: #27AE60;
            h4{
                font-size: 1.1rem;
            }
        }
    }
`;
