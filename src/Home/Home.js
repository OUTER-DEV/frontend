import Header from "../Header/Header";
import Corps from "./Corp";
import Transactions from "./Transaction";

export default function Home() {
    return (
        <div className="animate__animated animate__slideInLeft">
        <Header/>
        <Corps/>
        <Transactions/>
        </div>
         
    )
}