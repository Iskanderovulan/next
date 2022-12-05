import Link from "next/link"
import s from '../styles/main.module.css'
import LinkComp from "../components/LinkComp";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer>
            <h1 className={s.textHead}>Main Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, minima.</p>
        </MainContainer>
    );
};

export default Index;