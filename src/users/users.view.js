import styled from "styled-components";



const TYPES = {
    ADD: "#6dff66",
    EDIT: "#ffa535",
    DELETE: "#ff4455"

};

export default {
    Create: styled.div`
       margin-bottom: 20px;
       font-family: "Gotham Pro";
    `,

    Wrapper: styled.div`
        width: 200px;
        
        display: flex;
        flex-direction:column;
        background-color: #baff8c;
        padding: 20px;
        font-family: "Gotham Pro";
        margin-bottom: 10px;
    `,

    NameInput: styled.input`
        width: 100px;
        height: 20px;
        padding: 5px;
        display: block;
        ${(props) => props.disabled ? `
            width: auto;
            height: auto;
            padding: 0;
            line-height: 12px;
            border: none;
            background-color: transparent;
            color: #6d6d6d;
            font-weight: 600;
            margin-botton: 5px;
           
        ` : ""}
        &:focus{
            outline: none !important;
        }
    `,

    Label: styled.div`
        font-size: 12px;
        color: #999;
        font-weight: 300;
        margin: 3px 0;
    `,

    AgeInput: styled.input`
        width: 40px;
        height: 20px;
        padding: 5px;
        display: block;
        
        ${(props) => props.disabled ? `
            width: auto;
            height: auto;
            padding: 0;
            line-height: 12px;
            border: none;
            background-color: transparent;
            color: #6d6d6d;
            font-size: 11px;
            font-weight: 300;
           
        ` : ""}
        &:focus{
            outline: none !important;
        }
    `,
    Name: styled.div`
        
    `,
    Age: styled.div`
        

    `,
    Button: styled.button`
        height: 30px;
        width: 100px;
        margin-top: 10px;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
        opacity: 0.7;
        transition: .35s;
        background-color: ${(props) =>{
            return  props.type && TYPES[props.type] ? TYPES[props.type] : TYPES.ADD
       }};
        &:hover{
            opacity: 1;
        }

    `,
}